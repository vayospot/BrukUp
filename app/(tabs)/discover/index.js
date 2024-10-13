import { View, TouchableOpacity } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import shuffle from "../../../utils/shuffle";
import useUserDataStore from "../../../context/UserDataStore";
import { useEffect, useState } from "react";
import MatchCard from "../../../components/MatchCard";
import { useNavigation } from "expo-router";
import UserProfileImage from "../../../components/UserProfileImage";
import FilterCategories from "../../../components/FilterCategories";

export default function Home() {
  const navigation = useNavigation();
  const userData = useUserDataStore((state) => state.userData);
  const setUserData = useUserDataStore((state) => state.setUserData);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View className="flex-row items-center" style={{ gap: 10 }}>
          <TouchableOpacity>
            <UserProfileImage size={30} />
          </TouchableOpacity>
          <FilterCategories
            filterValues={["For You", "Nearby", "Country", "Worldwide"]}
          />
        </View>
      ),
    });
  }, []);

  const handleRefreshing = () => {
    setRefreshing(true);
    setUserData(shuffle([...userData]));
    setRefreshing(false);
  };

  return (
    <View className="flex-1 bg-primary px-2">
      <MasonryFlashList
        data={userData}
        numColumns={2}
        renderItem={({ item }) => <MatchCard match={item} />}
        estimatedItemSize={20}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefreshing}
      />
    </View>
  );
}
