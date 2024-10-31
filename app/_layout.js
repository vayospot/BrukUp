import { useEffect, useState } from "react";
import { SplashScreen, Stack, router } from "expo-router";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Toast, { ErrorToast } from "react-native-toast-message";
import { auth } from "../services/firebase";
import useGlobalDataStore from "../context/globalDataStore";
import Colors from "../constants/Colors";

SplashScreen.preventAutoHideAsync();

function useLoadFonts() {
  const [fontLoaded, fontError] = useFonts({
    BarlowSCLight: require("../assets/fonts/BarlowSemiCondensed-Light.ttf"),
    BarlowSCRegular: require("../assets/fonts/BarlowSemiCondensed-Regular.ttf"),
    BarlowSCMedium: require("../assets/fonts/BarlowSemiCondensed-Medium.ttf"),
    BarlowSCBold: require("../assets/fonts/BarlowSemiCondensed-Bold.ttf"),
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontError) {
      SplashScreen.hideAsync();
      throw fontError;
    }
  }, [fontError]);

  return fontLoaded;
}

function useAuthState(auth) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, isAuthLoading };
}

function useInitializeApp(hasStoreHydrated, fontLoaded, isAuthLoading, user) {
  const fetchUserData = useGlobalDataStore((state) => state.fetchUserData);
  const getUsersData = useGlobalDataStore((state) => state.getUsersData);
  const getTownsData = useGlobalDataStore((state) => state.getTownsData);
  const getJournalData = useGlobalDataStore((state) => state.getJournalData);
  const journalData = useGlobalDataStore((state) => state.journalData);

  const initializeJournalData = async () => {
    if (journalData.length === 0) {
      await getJournalData.initialFetch();
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      if (!hasStoreHydrated || !fontLoaded || isAuthLoading) return;

      if (user) {
        await Promise.allSettled([
          fetchUserData(),
          getUsersData.initialFetch(),
          initializeJournalData(),
        ]);

        getTownsData.initialFetch(); // Background fetch for Town data
        router.replace("/(tabs)/discover");
      } else {
        router.replace("/(auth)/");
      }

      SplashScreen.hideAsync();
    };

    initializeApp();
  }, [hasStoreHydrated, fontLoaded, isAuthLoading, user]);
}

export default function RootLayout() {
  const hasStoreHydrated = useGlobalDataStore.persist.hasHydrated();
  const fontLoaded = useLoadFonts();
  const { user, isAuthLoading } = useAuthState(auth);

  useInitializeApp(hasStoreHydrated, fontLoaded, isAuthLoading, user);

  if (isAuthLoading || !fontLoaded) return null;

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
      <Toast config={ToastConfig} />
    </>
  );
}

const ToastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 13,
      }}
    />
  ),
};
