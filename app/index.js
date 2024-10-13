import { useEffect } from "react";
import useUserDataStore from "../context/UserDataStore";

export default App = () => {
  const getUserData = useUserDataStore((state) => state.getUserData);

  useEffect(() => {
    getUserData();
  }, []);

  return null;
};
