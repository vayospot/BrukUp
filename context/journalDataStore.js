import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import timestampToDate from "../utils/timestampToDate";

const initialJournalDataStoreState = {
  journalData: [],
  lastFetchedJournalDoc: null,
  journalPerBatch: 10,
  isEndOfJournalData: false,
};

export default useJournalDataStore = persist(
  (set, get) => ({
    ...initialJournalDataStoreState,

    setJournalData: (data) => set(() => ({ journalData: data })),

    updateJournalData: (journalEntry) =>
      set((state) => {
        const journalMap = new Map(
          state.journalData.map((journal) => [journal.id, journal]),
        );

        const updatedJournal = {
          ...(journalMap.get(journalEntry.id) || {}),
          ...journalEntry,
        };

        journalMap.delete(journalEntry.id);

        return {
          journalData: [updatedJournal, ...Array.from(journalMap.values())],
        };
      }),

    getJournalData: {
      initialFetch: async () => {
        try {
          const fetchQuery = query(
            collection(db, "users", auth.currentUser?.uid, "journal"),
            orderBy("updatedAt", "desc"),
            limit(get().journalPerBatch),
          );

          const querySnapshot = await getDocs(fetchQuery);
          if (querySnapshot.empty) {
            // No journal entries exists
            set(() => ({ isEndOfJournalData: true }));
            return;
          }

          const data = querySnapshot.docs.map((doc) => doc.data());
          const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

          set(() => ({
            journalData: data,
            lastFetchedJournalDoc: {
              snapshot: lastDoc,
              id: lastDoc.id,
            },
            isEndOfJournalData: querySnapshot.empty,
          }));
        } catch (error) {
          console.log("Error fetching initial journal:", error);
        }
      },

      nextFetch: async () => {
        try {
          let lastFetchedJournalDoc = get().lastFetchedJournalDoc;

          if (get().isEndOfJournalData || !lastFetchedJournalDoc) {
            throw new Error("No more data to fetch");
          }

          // Fetch fresh copy of last document if stale (potentially altered) to prevent pagination issues with outdated cursors
          if (!lastFetchedJournalDoc.snapshot.ref) {
            try {
              const docRef = await getDoc(
                doc(
                  db,
                  "users",
                  auth.currentUser?.uid,
                  "journal",
                  lastFetchedJournalDoc.id,
                ),
              );
              lastFetchedJournalDoc = {
                snapshot: docRef,
                id: docRef.id,
              };
            } catch (error) {
              console.log("Failed to fetch last entry:", error);
              throw error;
            }
          }

          const fetchQuery = query(
            collection(db, "users", auth.currentUser?.uid, "journal"),
            orderBy("updatedAt", "desc"),
            startAfter(lastFetchedJournalDoc.snapshot),
            limit(get().journalPerBatch),
          );
          const querySnapshot = await getDocs(fetchQuery);

          if (querySnapshot.empty) {
            set(() => ({ isEndOfJournalData: true }));
            return;
          }

          const data = querySnapshot.docs.map((doc) => doc.data());
          const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

          set((state) => ({
            journalData: [...state.journalData, ...data],
            lastFetchedJournalDoc: {
              snapshot: lastDoc,
              id: lastDoc.id,
            },
          }));
        } catch (error) {
          console.log(error);
        }
      },
    },

    syncJournalData: async () => {
      const unsyncedEntries = get().journalData.filter(
        (entry) => !entry.isSynced,
      );

      if (unsyncedEntries.length === 0) return;

      try {
        const batch = writeBatch(db);
        const updatedEntries = get().journalData.map((entry) => {
          if (!entry.isSynced) {
            const journalEntryRef = doc(
              db,
              "users",
              auth.currentUser?.uid,
              "journal",
              entry.id,
            );

            batch.set(
              journalEntryRef,
              {
                ...entry,
                createdAt: timestampToDate(entry.createdAt),
                updatedAt: timestampToDate(entry.updatedAt),
                isSynced: true,
              },
              { merge: true },
            );

            return { ...entry, isSynced: true };
          }

          return entry;
        });

        await batch.commit();

        set(() => ({ journalData: updatedEntries }));
      } catch (error) {
        console.log(`Failed to sync journal entries: ${error}`);
      }
    },

    resetJournalData: async () => {
      await AsyncStorage.removeItem("journal-storage");
      set(initialJournalDataStoreState);
    },
  }),
  {
    name: "journal-storage",
    storage: createJSONStorage(() => AsyncStorage),
    partialize: (state) => ({
      journalData: state.journalData,
      lastFetchedJournalDoc: state.lastFetchedJournalDoc,
    }),
  },
);
