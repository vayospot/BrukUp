import { auth, db } from "../services/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";

const initialUserStoreState = {
  userData: {
    uid: "",
    fullName: "",
    email: "",
    dateOfBirth: "",
    age: null,
    location: "",
    bio: "",
    image: "",
    imageHigh: "",
  },
};

export default useUserStore = (set) => ({
  ...initialUserStoreState,

  setUserData: (newData) =>
    set((state) => ({
      userData: { ...state.userData, ...newData },
    })),

  fetchUserData: async () => {
    try {
      const user = auth.currentUser;

      if (!user) throw new Error("There is no user logged in.");

      const userDocSnap = await getDoc(doc(db, "users", user.uid));
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        set((state) => ({
          userData: { ...state.userData, ...userData },
        }));
      }
    } catch (error) {
      throw new Error(
        "There was an error getting user data. Sorry about that.",
      );
    }
  },

  updateUserData: async (newData) => {
    try {
      set((state) => ({
        userData: { ...state.userData, ...newData },
      }));

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        ...newData,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      throw new Error(
        "There was an error updating user data. Sorry about that.",
      );
    }
  },

  resetUserData: () => set(initialUserStoreState),
});
