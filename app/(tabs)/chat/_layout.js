import { Stack, router } from "expo-router";
import BackButton from "../../../components/BackButton";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleStyle: { color: "#fff", fontFamily: "BarlowSCBold" },
        headerTitleAlign: "center",
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Chats",
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => router.push("/discover")}
            >
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.3}>
              <Ionicons
                name="ellipsis-vertical-sharp"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
          // headerLeft is set dynamically in the screen component
        }}
      />

      <Stack.Screen name="chatUserProfile" options={{ headerTitle: "" }} />
    </Stack>
  );
}
