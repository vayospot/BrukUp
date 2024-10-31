import { View, TouchableOpacity } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import shuffle from "../../../utils/shuffle";
import { useEffect, useState } from "react";
import MatchCard from "../../../components/MatchCard";
import { useNavigation } from "expo-router";
import UserProfileImage from "../../../components/UserProfileImage";
import FilterCategories from "../../../components/FilterCategories";
import useGlobalDataStore from "../../../context/globalDataStore";

export default function Home() {
  const navigation = useNavigation();
  const userData = useGlobalDataStore((state) => state.userData);
  const usersData = useGlobalDataStore((state) => state.usersData);
  const setUsersData = useGlobalDataStore((state) => state.setUsersData);
  const getUsersData = useGlobalDataStore((state) => state.getUsersData);
  const [refreshing, setRefreshing] = useState(false);
  const [startOnEndCheck, setStartOnEndCheck] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View className="flex-row items-center" style={{ gap: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <UserProfileImage size={30} imgUrl={userData?.image} />
          </TouchableOpacity>
          <FilterCategories
            filterOptions={["For You", "Nearby", "Country", "Worldwide"]}
          />
        </View>
      ),
    });
  }, [userData]);

  const handleRefreshing = () => {
    setRefreshing(true);
    setUsersData(shuffle(usersData));
    setRefreshing(false);
  };

  return (
    <View className="flex-1 bg-primary px-2">
      <MasonryFlashList
        data={usersData}
        numColumns={2}
        renderItem={({ item }) => <MatchCard match={item} />}
        estimatedItemSize={10}
        keyExtractor={(item) => item.uid}
        refreshing={refreshing}
        onRefresh={handleRefreshing}
        onLoad={() => setStartOnEndCheck(true)} // Fixes onEndReached invoking immediately on mount
        onEndReachedThreshold={0.4}
        onEndReached={async () => {
          if (startOnEndCheck) await getUsersData.nextFetch();
        }}
      />
    </View>
  );
}
