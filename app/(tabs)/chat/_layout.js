import { Stack, router } from "expo-router";
import BackButton from "../../../components/BackButton";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: "#fff", fontFamily: "BarlowSCBold" },
          headerTitleAlign: "center",
          headerTitle: "Chats",
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => router.navigate("/discover")}
            >
              <Ionicons name='add-circle-outline' size={24} color='white' />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
