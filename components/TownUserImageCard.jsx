import { View, Text } from "react-native";
import UserProfileImage from "./UserProfileImage";
import { Ionicons } from "@expo/vector-icons";

export default function TownUserImageCard({
  size,
  imageUrl,
  name,
  isSpeaking = false,
}) {
  return (
    <View className="flex-1 items-center">
      <View className="relative rounded-full">
        <UserProfileImage size={size} imgUrl={imageUrl} />
        {isSpeaking && (
          <View className="absolute right-0 top-0 rounded-full bg-accent p-0.5">
            <Ionicons name="mic-outline" size={15} color="white" />
          </View>
        )}
      </View>
      <Text className="font-regularFont text-sm text-white">{name}</Text>
    </View>
  );
}
