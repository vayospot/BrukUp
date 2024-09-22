import { Stack } from "expo-router";
import UserProfileImage from "../../../components/UserProfileImage";
import { TouchableOpacity, View } from "react-native";
import BackButton from "../../../components/BackButton";
import FilterCategories from "../../../components/FilterCategories";
import Colors from "../../../constants/Colors";

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
          headerLeft: () => {
            return (
              <View className='flex-row items-center' style={{ gap: 10 }}>
                <TouchableOpacity>
                  <UserProfileImage size={30} />
                </TouchableOpacity>
                <FilterCategories
                  filterValues={["For You", "Nearby", "Country", "Worldwide"]}
                />
              </View>
            );
          },
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
