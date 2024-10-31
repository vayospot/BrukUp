import { create } from "zustand";
import useUserStore from "./userStore";
import useUsersDataStore from "./usersDataStore";
import useTownsDataStore from "./townsDataStore";
import useJournalDataStore from "./journalDataStore";

const useResetAllStores = (storesResetFunctions) => {
  return async () => {
    for (const resetFunction of storesResetFunctions) {
      await resetFunction();
    }
  };
};

const useGlobalDataStore = create((...args) => {
  const userStore = useUserStore(...args);
  const usersDataStore = useUsersDataStore(...args);
  const townsDataStore = useTownsDataStore(...args);
  const journalDataStore = useJournalDataStore(...args);

  const resetAllStores = useResetAllStores([
    userStore.resetUserData,
    usersDataStore.resetUsersData,
    townsDataStore.resetTownsData,
    journalDataStore.resetJournalData,
  ]);

  return {
    ...userStore,
    ...usersDataStore,
    ...townsDataStore,
    ...journalDataStore,
    resetAllStores,
  };
});

export default useGlobalDataStore;
