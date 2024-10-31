import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default function FilterCategories({ filterOptions }) {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  const handleSelectedFilter = (option) => setSelectedFilter(option);

  return (
    <View className="flex-row" style={{ gap: 10 }}>
      {filterOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSelectedFilter(option)}
          className={`rounded-full px-2.5 py-1.5 ${
            selectedFilter === option ? "bg-accent" : "bg-black/10"
          }`}
        >
          <Text className="font-mediumFont text-sm text-white">{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
