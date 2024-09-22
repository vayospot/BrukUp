import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import Colors from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    BarlowSCLight: require("../assets/fonts/BarlowSemiCondensed-Light.ttf"),
    BarlowSCRegular: require("../assets/fonts/BarlowSemiCondensed-Regular.ttf"),
    BarlowSCMedium: require("../assets/fonts/BarlowSemiCondensed-Medium.ttf"),
    BarlowSCBold: require("../assets/fonts/BarlowSemiCondensed-Bold.ttf"),
    Questrial: require("../assets/fonts/Questrial-Regular.ttf"),
  });

  useEffect(() => {
    if (fontError) {
      throw fontError;
    } else if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontError, fontLoaded]);

  if (!fontLoaded) return null;

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Stack.Screen name='index' options={{ headerShown: false }} />
      {/* <Stack.Screen name='(auth)' options={{ headerShown: false }} /> */}
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}
