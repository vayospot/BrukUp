import { Redirect } from "expo-router";
import { useEffect } from "react";
import useUserDataStore from "../context/UserDataStore";

const App = () => {
  const getUserData = useUserDataStore((state) => state.getUserData);

  useEffect(() => {
    getUserData();
  }, []);

  return <Redirect href='/(tabs)/discover/' />;
};

export default App;
