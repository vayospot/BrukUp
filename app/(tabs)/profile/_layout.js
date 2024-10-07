import { Stack } from "expo-router";
import BackButton from "../../../components/BackButton";

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
      <Stack.Screen name="index" options={{ headerTitle: "Profile" }} />
      <Stack.Screen
        name="editProfile"
        options={{ headerTitle: "Edit Profile" }}
      />
    </Stack>
  );
}
