import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import Colors from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
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
    <Stack screenOptions={{ navigationBarColor: Colors.primary }}>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}
