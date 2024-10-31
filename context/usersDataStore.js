import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { auth, db } from "../services/firebase";
import randomValue from "../utils/randomValue";

const initialUsersDataStoreState = {
  usersData: [],
  lastFetchedUserDoc: null,
  usersPerBatch: 10,
  isEndOfUsersData: false,
};

export default useUsersDataStore = (set, get) => ({
  ...initialUsersDataStoreState,

  setUsersData: (data) => set(() => ({ usersData: data })),

  getUsersData: {
    initialFetch: async () => {
      try {
        const fetchQuery = query(
          collection(db, "users"),
          where("isDummy", "==", true),
          limit(get().usersPerBatch),
        );
        const querySnapshot = await getDocs(fetchQuery);
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            matchValue: randomValue({ min: 78, max: 98 }),
            imageHeight: randomValue([200, 230, 250]),
          };
        });
        set(() => ({
          usersData: data,
          lastFetchedUserDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
          isEndOfUsersData: querySnapshot.empty,
        }));
      } catch (error) {
        console.log("Error fetching initial users:", error);
      }
    },

    nextFetch: async () => {
      try {
        const lastFetchedUserDoc = get().lastFetchedUserDoc;
        if (get().isEndOfUsersData || !lastFetchedUserDoc) {
          throw new Error("No more data to fetch");
        }

        const fetchQuery = query(
          collection(db, "users"),
          where("isDummy", "==", true),
          startAfter(lastFetchedUserDoc),
          limit(get().usersPerBatch),
        );
        const querySnapshot = await getDocs(fetchQuery);
        if (querySnapshot.empty) {
          set(() => ({ isEndOfUsersData: true }));
          return;
        }

        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            matchValue: randomValue({ min: 78, max: 98 }),
            imageHeight: randomValue([200, 230, 250]),
          };
        });
        set((state) => ({
          usersData: [...state.usersData, ...data],
          lastFetchedUserDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },

  resetUsersData: () => set(initialUsersDataStoreState),
});
