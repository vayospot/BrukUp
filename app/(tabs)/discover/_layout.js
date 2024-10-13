import { Stack } from "expo-router";
import BackButton from "../../../components/BackButton";
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
      <Stack.Screen name="index" options={{ headerTitle: "" }} />
      <Stack.Screen name="match" options={{ headerTitle: "Match Making" }} />
    </Stack>
  );
}
