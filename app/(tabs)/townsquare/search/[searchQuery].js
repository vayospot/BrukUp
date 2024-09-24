import { useMemo, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import SearchBar from "../../../../components/SearchBar";
import EmptyLayout from "../../../../components/EmptyLayout";
import ALL_TOWNS from "../../../../services/townsquareData";
import TownPreviewCard from "../../../../components/TownPreviewCard";

export default function Search() {
  const { searchQuery } = useLocalSearchParams();
  const [searchValue, setSearchValue] = useState(searchQuery);

  const filteredTowns = useMemo(
    () =>
      searchValue.trim() !== ""
        ? ALL_TOWNS.filter((town) =>
            town.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [],
    [searchValue]
  );

  return (
    <View className='bg-primary flex-1 p-5' style={{ gap: 20 }}>
      <SearchBar onSearch={setSearchValue} />
      <FlatList
        data={filteredTowns}
        renderItem={({ item }) => <TownPreviewCard town={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flex: 1, paddingVertical: 10, gap: 20 }}
        ListHeaderComponent={
          searchValue.trim() !== "" && (
            <Text className='text-2xl font-mediumFont text-white'>
              Search results for "{searchValue}"
            </Text>
          )
        }
        ListEmptyComponent={
          <EmptyLayout
            heading={`No results found for "${searchValue}"`}
            subHeading='Try searching for something else.'
          />
        }
      />
    </View>
  );
}