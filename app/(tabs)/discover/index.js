import { View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import shuffle from "../../../utils/shuffle";
import MatchCard from "./MatchCard";
import useUserDataStore from "../../../context/UserDataStore";
import { useState } from "react";

export default function Home() {
  const userData = useUserDataStore((state) => state.userData);
  const setUserData = useUserDataStore((state) => state.setUserData);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshing = () => {
    setRefreshing(true);
    setUserData(shuffle([...userData]));
    setRefreshing(false);
  };

  return (
    <View className='flex-1 bg-primary px-2'>
      <MasonryFlashList
        data={userData}
        numColumns={2}
        renderItem={MatchCard}
        estimatedItemSize={20}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefreshing}
      />
    </View>
  );
}
