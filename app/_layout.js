import { Stack } from "expo-router";
import CustomHeader from "../components/CustomHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            header: () => <CustomHeader />,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
