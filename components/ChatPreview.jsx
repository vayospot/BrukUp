import { View, Text, TouchableOpacity } from "react-native";
import UserProfileImage from "./UserProfileImage";
import { Link } from "expo-router";

export default function ChatPreview({ user, previewMessage, onPress }) {
  return (
    <Link href={`chat/${user.id}`} asChild>
      <TouchableOpacity
        className='flex-row w-full items-center justify-between py-2'
        onPress={onPress}
      >
        <View className='flex-row items-start flex-1' style={{ gap: 12 }}>
          <UserProfileImage size={53} imgUrl={user.image} />
          <View>
            <Text className='text-white text-lg font-mediumFont'>
              {user.fullName}
            </Text>
            <Text
              className='text-neutral-200 opacity-80 font-regularFont'
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {previewMessage}
            </Text>
          </View>
        </View>
        <View className='self-baseline'>
          <Text className='text-neutral-200 opacity-80 text-sm font-regularFont'>
            {new Date(
              Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24)
            ).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}