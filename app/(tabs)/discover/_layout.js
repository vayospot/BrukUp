import { Stack } from "expo-router";
import UserProfile from "../../../components/UserProfile";
import FilterOption from "../../../components/FilterOption";
import { TouchableOpacity, View } from "react-native";
import Colors from "../../../constants/Colors";
import { useState } from "react";
import UserDataProvider from "../../../context/UserDataProvider";

export default function Layout() {
  return (
    <UserDataProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      >
        <Stack.Screen
          name='home'
          options={{
            headerTitle: "",
            headerLeft: () => <UserProfileWithFilters />,
          }}
        />
        <Stack.Screen name='match' options={{ headerShown: false }} />
      </Stack>
    </UserDataProvider>
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
