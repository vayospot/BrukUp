import { Stack, router } from "expo-router";
import BackButton from "../../../components/BackButton";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import UserProfileImage from "../../../components/UserProfileImage";
import useUserDataStore from "../../../context/UserDataStore";

export default function Layout() {
  const userData = useUserDataStore((state) => state.userData);

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
        name='index'
        options={{
          headerTitle: "Chats",
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => router.push("/discover")}
            >
              <Ionicons name='add-circle-outline' size={24} color='white' />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name='[id]'
        options={({ route }) => {
          const currentChatUser = userData.find(
            (item) => item.id === route.params.id
          );

          return {
            headerTitle: "",
            headerLeft: () => (
              <View className='flex-row items-center gap-3.5'>
                <View>
                  <BackButton />
                </View>
                <TouchableOpacity
                  className='flex-row items-center'
                  style={{ gap: 10 }}
                  onPress={() =>
                    router.push({
                      pathname: "/chat/chatUserProfile",
                      params: { userId: route.params.id },
                    })
                  }
                >
                  <UserProfileImage size={35} imgUrl={currentChatUser.image} />
                  <Text className='text-white text-xl font-boldFont'>
                    {currentChatUser.fullName}
                  </Text>
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.3}>
                <Ionicons
                  name='ellipsis-vertical-sharp'
                  size={24}
                  color='white'
                />
              </TouchableOpacity>
            ),
          };
        }}
      />

      <Stack.Screen name='chatUserProfile' options={{ headerTitle: "" }} />
    </Stack>
  );
}
