import { createContext, useEffect, useState } from "react";
import fetchUserData from "../services/data";

export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        alert("There was an error getting the data. Sorry about that.");
      }
    }

    getUserData();
  }, []);
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
