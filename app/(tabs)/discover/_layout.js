import { Stack, router } from "expo-router";
import UserProfile from "../../../components/UserProfile";
import FilterOption from "../../../components/FilterOption";
import { TouchableOpacity, View } from "react-native";
import Colors from "../../../constants/Colors";
import { useState } from "react";
import BackButton from "../../../components/BackButton";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerTitle: "",
          headerLeft: () => <UserProfileWithFilters />,
        }}
      />
      <Stack.Screen
        name='match'
        options={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: "#fff", fontFamily: "BarlowSCBold" },
          headerTitleAlign: "center",
          headerTitle: "Match Making",
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
}

function UserProfileWithFilters() {
  const FILTER_VALUES = ["For You", "Nearby", "Country", "Worldwide"];
  const [selectedFilter, setSelectedFilter] = useState(FILTER_VALUES[0]);

  const handleSelectedFilter = (value) => setSelectedFilter(value);

  return (
    <View className='flex-row items-center' style={{ gap: 20 }}>
      <TouchableOpacity>
        <UserProfile size={30} />
      </TouchableOpacity>
      <View className='flex-row' style={{ gap: 10 }}>
        {FILTER_VALUES.map((value) => (
          <FilterOption
            key={value}
            value={value}
            onPress={handleSelectedFilter}
            isActive={selectedFilter === value}
          />
        ))}
      </View>
    </View>
  );
}
