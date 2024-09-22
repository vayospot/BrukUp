import { View, Text, Alert } from "react-native";
import UserProfileImage from "../../../components/UserProfileImage";
import { useLocalSearchParams } from "expo-router";
import useUserDataStore from "../../../context/UserDataStore";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function chatUserProfile() {
  const userData = useUserDataStore((state) => state.userData);
  const { userId } = useLocalSearchParams();
  const [toggleNotification, setToggleNotification] = useState(false);

  const currentChatUser = userData.find((item) => item.id === userId);

  const MenuItem = ({ iconName, iconColor, text, textColor, onPress }) => (
    <TouchableOpacity
      className='flex-row items-center flex-1 py-4'
      style={{ gap: 8 }}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={20} color={iconColor} />
      <Text className={`${textColor} text-lg font-mediumFont`}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View className='bg-primary flex-1 px-3'>
      <View className='items-center py-9' style={{ gap: 20 }}>
        <UserProfileImage size={120} imgUrl={currentChatUser.image} />
        <Text className='text-white font-semibold text-2xl'>
          {currentChatUser.fullName}
        </Text>
      </View>

      <View className='mt-8 divide-y divide-white/10'>
        <View className='flex-row items-center justify-between px-2'>
          <MenuItem
            iconName='notifications-outline'
            iconColor='#fff'
            text='Notification'
            textColor='text-white'
            onPress={() => setToggleNotification(!toggleNotification)}
          />
          <Text className='text-white text-lg font-mediumFont ml-auto'>
            {toggleNotification ? "On" : "Off"}
          </Text>
        </View>

        <View className='flex-row items-center justify-between px-2'>
          <MenuItem
            iconName='remove-circle-outline'
            iconColor='#b91c1c'
            text='Block'
            textColor='text-red-700'
            onPress={() => Alert.alert("User Blocked!")}
          />
        </View>

        <View className='flex-row items-center justify-between px-2'>
          <MenuItem
            iconName='alert-circle-outline'
            iconColor='#b91c1c'
            text='Report'
            textColor='text-red-700'
            onPress={() => Alert.alert("User reported!")}
          />
        </View>
      </View>
    </View>
  );
}
