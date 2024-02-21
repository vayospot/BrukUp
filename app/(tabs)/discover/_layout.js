import { Stack } from "expo-router";
import UserProfile from "../../../components/UserProfile";
import FilterOption from "../../../components/FilterOption";
import { TouchableOpacity, View } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: "",
          headerLeft: () => <UserProfileWithFilters />,
        }}
      />
    </Stack>
  );
}

function UserProfileWithFilters() {
  return (
    <View className='flex-row items-center' style={{ gap: 20 }}>
      <TouchableOpacity>
        <UserProfile size={30} />
      </TouchableOpacity>
      <View className='flex-row' style={{ gap: 5 }}>
        <FilterOption value='For You' />
        <FilterOption value='Nearby' />
        <FilterOption value='Country' />
        <FilterOption value='Worldwide' />
      </View>
    </View>
  );
}
