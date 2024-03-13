import { Stack } from "expo-router";
import BackButton from "../../../components/BackButton";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
          name='index'
          options={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTitleStyle: { color: "#fff", fontFamily: "BarlowSCBold" },
            headerTitleAlign: "center",
            headerTitle: "Connect",
            headerLeft: () => <BackButton />,
          }}
        />
    </Stack>
  );
}
