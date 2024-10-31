import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../services/firebase";

const initialTownsDataStoreState = {
  townsData: [],
  lastFetchedTownDoc: null,
  townsPerBatch: 10,
  isEndOfTownsData: false,
};

export default useTownsDataStore = (set, get) => ({
  ...initialTownsDataStoreState,

  setTownsData: (data) => set(() => ({ townsData: data })),

  getTownsData: {
    initialFetch: async () => {
      try {
        const fetchQuery = query(
          collection(db, "townsquare"),
          limit(get().townsPerBatch),
        );
        const querySnapshot = await getDocs(fetchQuery);
        const data = querySnapshot.docs.map((doc) => doc.data());
        set(() => ({
          townsData: data,
          lastFetchedTownDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
          isEndOfTownsData: querySnapshot.empty,
        }));
      } catch (error) {
        console.log("Error fetching initial towns:", error);
      }
    },

    nextFetch: async () => {
      try {
        const lastFetchedTownDoc = get().lastFetchedTownDoc;
        if (get().isEndOfTownsData || !lastFetchedTownDoc) {
          throw new Error("No more data to fetch");
        }

        const fetchQuery = query(
          collection(db, "townsquare"),
          startAfter(lastFetchedTownDoc),
          limit(get().townsPerBatch),
        );
        const querySnapshot = await getDocs(fetchQuery);
        if (querySnapshot.empty) {
          set(() => ({ isEndOfTownsData: true }));
          return;
        }

        const data = querySnapshot.docs.map((doc) => doc.data());
        set((state) => ({
          townsData: [...state.townsData, ...data],
          lastFetchedTownDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },

  resetTownsData: () => set(initialTownsDataStoreState),
});
