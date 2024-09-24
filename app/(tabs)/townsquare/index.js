import { FlatList, View } from "react-native";
import { router } from "expo-router";
import ALL_TOWNS from "../../../services/townsquareData";
import SearchBar from "../../../components/SearchBar";
import TownPreviewCard from "../../../components/TownPreviewCard";

export default function index() {
  const handleSearchQuery = (value) => {
    if (value) router.push(`/townsquare/search/${value}`);
  };

  return (
    <View className="flex-1 bg-primary p-5" style={{ gap: 20 }}>
      <SearchBar onSearch={handleSearchQuery} />
      <FlatList
        data={ALL_TOWNS}
        renderItem={({ item }) => <TownPreviewCard town={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10, gap: 20 }}
        refreshing={false}
      />
    </View>
  );
}
