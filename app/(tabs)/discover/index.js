import { View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import shuffle from "../../../utils/shuffle";
import MatchCard from "./MatchCard";
import useUserDataStore from "../../../context/UserDataStore";

export default function Home() {
  const userData = useUserDataStore((state) => state.userData);
  const setUserData = useUserDataStore((state) => state.setUserData);

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
