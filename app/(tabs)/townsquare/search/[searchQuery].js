import { useMemo, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import SearchBar from "../../../../components/SearchBar";
import EmptyLayout from "../../../../components/EmptyLayout";
import TownPreviewCard from "../../../../components/TownPreviewCard";
import useGlobalDataStore from "../../../../context/globalDataStore";

export default function Search() {
  const townsData = useGlobalDataStore((state) => state.townsData);
  const { searchQuery } = useLocalSearchParams();
  const [searchValue, setSearchValue] = useState(searchQuery);

  const filteredTowns = useMemo(
    () =>
      searchValue.trim() !== ""
        ? townsData.filter((town) =>
            town.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : [],
    [searchValue],
  );

  return (
    <View className="flex-1 bg-primary p-5" style={{ gap: 20 }}>
      <SearchBar onSearch={setSearchValue} />
      <FlatList
        data={filteredTowns}
        renderItem={({ item }) => <TownPreviewCard town={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10, gap: 20 }}
        ListHeaderComponent={() => {
          if (filteredTowns.length > 0 && searchValue.trim() !== "") {
            return (
              <Text className="font-mediumFont text-2xl text-white">
                Search results for "{searchValue}"
              </Text>
            );
          }
        }}
        ListEmptyComponent={
          <EmptyLayout
            heading={`No results found for "${searchValue}"`}
            subHeading="Try searching for something else."
          />
        }
      />
    </View>
  );
}
