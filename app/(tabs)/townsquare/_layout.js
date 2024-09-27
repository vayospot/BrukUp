import { Stack } from "expo-router";
import BackButton from "../../../components/BackButton";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: { color: "#fff", fontFamily: "BarlowSCBold" },
        headerTitleAlign: "center",
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Townsquare",
        }}
      />
      <Stack.Screen
        name="[townId]"
        options={{
          presentation: "card",
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
          headerTitle: "",
          headerLeft: () => <BackButton isVertical={true} />,
        }}
      />
      <Stack.Screen
        name="search/[searchQuery]"
        options={{
          headerTitle: "Search",
        }}
      />
    </Stack>
  );
}
