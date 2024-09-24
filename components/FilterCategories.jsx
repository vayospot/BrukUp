import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default function FilterCategories({ filterValues }) {
  const FILTER_VALUES = filterValues;
  const [selectedFilter, setSelectedFilter] = useState(FILTER_VALUES[0]);

  const handleSelectedFilter = (value) => setSelectedFilter(value);

  return (
    <View className="flex-row" style={{ gap: 10 }}>
      {FILTER_VALUES.map((value, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSelectedFilter(value)}
          className={`rounded-full px-2.5 py-1.5 ${
            selectedFilter === value ? "bg-accent" : "bg-black/10"
          }`}
        >
          <Text className="text-s font-mediumFont text-white">{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
