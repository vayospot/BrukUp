import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image } from "react-native";
import { UserDataContext } from "../../../context/UserDataProvider";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchLayout() {
  const { userData, setUserData } = useContext(UserDataContext);
  const { userId } = useLocalSearchParams();
  const currentUser = userData.find((user) => user.id === userId);

  return (
    <SafeAreaView>
      <Image
        source={{ uri: currentUser.image }}
        className={"w-1/2 h-1/2"}
      />
    </SafeAreaView>
  );
}
