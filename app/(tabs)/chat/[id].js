// For Hiding tab bar in specific screens - https://reactnavigation.org/docs/hiding-tabbar-in-screens

import { View, Text } from "react-native";
import { UserDataContext } from "../../../context/UserDataProvider";
import { useEffect, useContext } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function ChatBox() {
  const { userData } = useContext(UserDataContext);
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  return <View></View>;
}
