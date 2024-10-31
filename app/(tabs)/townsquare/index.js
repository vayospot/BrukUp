import { ActivityIndicator, FlatList, View } from "react-native";
import { router } from "expo-router";
import SearchBar from "../../../components/SearchBar";
import TownPreviewCard from "../../../components/TownPreviewCard";
import useGlobalDataStore from "../../../context/globalDataStore";

export default function index() {
  const townsData = useGlobalDataStore((state) => state.townsData);

  const handleSearchQuery = (value) => {
    if (value) router.push(`/townsquare/search/${value}`);
  };

  return (
    <View className="flex-1 bg-primary px-5 pt-5" style={{ gap: 20 }}>
      {townsData.length === 0 ? (
        <ActivityIndicator
          className="flex-1 self-center"
          color="white"
          size="large"
        />
      ) : (
        <>
          <SearchBar onSearch={handleSearchQuery} />
          <FlatList
            data={townsData}
            renderItem={({ item }) => <TownPreviewCard town={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingVertical: 10, gap: 20 }}
            refreshing={false}
          />
        </>
      )}
    </View>
  );
}
