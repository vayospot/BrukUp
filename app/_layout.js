import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import Colors from "../constants/Colors";
import { auth } from "../services/firebase";
import Toast, { ErrorToast } from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [fontLoaded, fontError] = useFonts({
    BarlowSCLight: require("../assets/fonts/BarlowSemiCondensed-Light.ttf"),
    BarlowSCRegular: require("../assets/fonts/BarlowSemiCondensed-Regular.ttf"),
    BarlowSCMedium: require("../assets/fonts/BarlowSemiCondensed-Medium.ttf"),
    BarlowSCBold: require("../assets/fonts/BarlowSemiCondensed-Bold.ttf"),
    Questrial: require("../assets/fonts/Questrial-Regular.ttf"),
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontError) {
      SplashScreen.hideAsync();
      throw fontError;
    }
  }, [fontError]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    if (!isLoading && fontLoaded) {
      if (user) {
        router.replace("/(tabs)/discover");
      } else {
        router.replace("/(auth)/");
      }
      SplashScreen.hideAsync();
    }
  }, [isLoading, user, fontLoaded]);

  if (isLoading || !fontLoaded) return null;

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: Colors.primary },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <Toast
        config={{
          error: (props) => (
            <ErrorToast
              {...props}
              text1Style={{
                fontSize: 13,
              }}
            />
          ),
        }}
      />
    </>
  );
}
