import { useEffect, useMemo, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import useUserDataStore from "../../../context/UserDataStore";
import { DUMMY_MESSAGES } from "../../../services/messageService";
import MessageList from "../../../components/MessageList";
import ChatInput from "../../../components/ChatInput";
import BackButton from "../../../components/BackButton";
import UserProfileImage from "../../../components/UserProfileImage";

export default function ChatInterface() {
  const navigation = useNavigation();
  const { id: userId } = useLocalSearchParams();
  const userData = useUserDataStore((state) => state.userData);
  const [messages, setMessages] = useState([]);

  const currentUser = useMemo(
    () => userData.find((item) => item.id === userId),
    [userData, userId]
  );

  // Set header option dynamically for this screen
  useEffect(() => {
    navigation.setOptions({
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
                params: { userId: userId },
              })
            }
          >
            <UserProfileImage size={35} imgUrl={currentUser?.image} />
            <Text className='text-white text-xl font-boldFont'>
              {currentUser?.fullName}
            </Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    setMessages(DUMMY_MESSAGES);
  }, []);

  const handleSendMessage = (newMessage) =>
    setMessages((prevMessages) => [...prevMessages, newMessage]);

  return (
    <SafeAreaView className='flex-1 px-5 bg-primary'>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </SafeAreaView>
  );
}
