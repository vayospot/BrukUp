import { create } from "zustand";
import fetchUserData from "../services/data";

const useUserDataStore = create((set) => ({
  userData: [],
  setUserData: (data) => set(() => ({ userData: data })),
  getUserData: async () => {
    try {
      const data = await fetchUserData();
      set(() => ({ userData: data }));
    } catch (error) {
      throw new Error("There was an error getting the data. Sorry about that.");
    }
  },
}));

export default useUserDataStore;
