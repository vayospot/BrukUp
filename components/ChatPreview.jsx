import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import UserProfileImage from "./UserProfileImage";

export default function ChatPreview({ user, previewMessage }) {
  const randomDate = new Date(
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24),
  ).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <Link href={`chat/${user.uid}`} asChild>
      <TouchableOpacity
        className="w-full flex-row items-center justify-between py-2"
        activeOpacity={0.7}
      >
        <View className="flex-1 flex-row items-start" style={{ gap: 12 }}>
          <UserProfileImage size={53} imgUrl={user.image} />
          <View>
            <Text className="font-mediumFont text-lg text-white">
              {user.fullName}
            </Text>
            <Text
              className="font-regularFont text-neutral-200 opacity-80"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {previewMessage}
            </Text>
          </View>
        </View>
        <View className="self-baseline">
          <Text className="font-regularFont text-sm text-neutral-200 opacity-80">
            {randomDate}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
