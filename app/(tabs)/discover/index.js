import { View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import shuffle from "../../../utils/shuffle";
import { UserDataContext } from "../../../context/UserDataProvider";
import { useContext } from "react";
import MatchCard from "./MatchCard";

export default function Home() {
  const { userData, setUserData } = useContext(UserDataContext);

  return (
    <View className='flex-1 bg-primary px-2'>
      <MasonryFlashList
        data={shuffle(userData)}
        numColumns={2}
        renderItem={MatchCard}
        estimatedItemSize={20}
        keyExtractor={(item) => item.id}
        refreshing={false}
        onRefresh={() => setUserData([...shuffle(userData)])}
      />
    </View>
  );
}
