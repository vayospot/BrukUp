import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import UserProfileImage from "../../../components/UserProfileImage";

export default function chatUserProfile() {
  const [toggleNotification, setToggleNotification] = useState(false);
  const { fullName, image } = useLocalSearchParams();

  const MenuItem = ({ iconName, iconColor, text, textColor, onPress }) => (
    <TouchableOpacity
      className="flex-1 flex-row items-center py-4"
      style={{ gap: 8 }}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={20} color={iconColor} />
      <Text className={`${textColor} font-mediumFont text-lg`}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-primary px-4">
      <View className="items-center py-9" style={{ gap: 20 }}>
        <UserProfileImage size={120} imgUrl={image} />
        <Text className="font-mediumFont text-2xl text-white">{fullName}</Text>
      </View>

      <View className="mt-8 divide-y divide-white/10">
        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="notifications-outline"
            iconColor="#fff"
            text="Notification"
            textColor="text-white"
            onPress={() => setToggleNotification(!toggleNotification)}
          />
          <Text className="ml-auto font-mediumFont text-lg text-white">
            {toggleNotification ? "On" : "Off"}
          </Text>
        </View>

        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="remove-circle-outline"
            iconColor="#b91c1c"
            text="Block"
            textColor="text-red-700"
            onPress={() =>
              Toast.show({ type: "error", text1: "User blocked!" })
            }
          />
        </View>

        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="alert-circle-outline"
            iconColor="#b91c1c"
            text="Report"
            textColor="text-red-700"
            onPress={() =>
              Toast.show({ type: "error", text1: "User reported!" })
            }
          />
        </View>
      </View>
    </View>
  );
}
