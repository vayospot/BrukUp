import { Image, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import GlassmorphismWrapper from "./GlassmorphismWrapper";
import { useNavigation } from "expo-router";
import { useState } from "react";

export default function UserCard({ user }) {
  const navigation = useNavigation();
  const handleChat = () => {
    // Fix for navigation issue when routing between stacks in tabs
    // Refrence: https://github.com/expo/expo/issues/26211#issuecomment-1887857547
    navigation.navigate("chat", {
      screen: "[id]",
      params: { id: user.uid },
      initial: false,
    });
  };

  return (
    <View className="relative flex-1 overflow-hidden rounded-lg">
      <Image source={{ uri: user.image }} className="h-full w-full" />
      <UserInfo user={user} handleChat={handleChat} />
    </View>
  );
}

function UserInfo({ user, handleChat }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <LinearGradient
      colors={["#00000000", "#00000060", "#00000095"]}
      locations={[0.2, 0.6, 1]}
      className="absolute bottom-0 w-full justify-between px-5 py-5"
      style={{ gap: 5 }}
    >
      <View className="items-center justify-center self-start rounded-lg bg-neutral-900 px-2">
        <Text className="font-regularFont text-white" style={{ fontSize: 10 }}>
          {user.matchValue}%
        </Text>
      </View>

      <View className="flex-row" style={{ gap: 10 }}>
        <Text className="font-regularFont text-5xl text-white">
          {user.fullName.split(" ")[0]}
        </Text>
        <Text className="font-regularFont text-4xl text-white opacity-60">
          {user.age}
        </Text>
      </View>

      <View className="flex-row items-center" style={{ gap: 5 }}>
        <Ionicons name="location-outline" size={10} color="#fff" />
        <Text className="font-regularFont text-white">{user.location}</Text>
      </View>

      {/* Like and Chat buttons */}
      <View
        className="absolute bottom-8 right-4 items-center justify-center"
        style={{ gap: 15 }}
      >
        <GlassmorphismWrapper onPress={() => setIsLiked(!isLiked)}>
          <Ionicons
            name="heart"
            size={28}
            color={isLiked ? "#dc2626" : "#fff"}
          />
        </GlassmorphismWrapper>
        <GlassmorphismWrapper onPress={handleChat}>
          <Ionicons name="chatbubble" size={28} color="#fff" />
        </GlassmorphismWrapper>
      </View>
    </LinearGradient>
  );
}
