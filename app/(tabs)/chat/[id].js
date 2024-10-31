import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { DUMMY_MESSAGES } from "../../../services/messageService";
import MessageList from "../../../components/MessageList";
import ChatInput from "../../../components/ChatInput";
import BackButton from "../../../components/BackButton";
import UserProfileImage from "../../../components/UserProfileImage";
import useGlobalDataStore from "../../../context/globalDataStore";

export default function ChatInterface() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const usersData = useGlobalDataStore((state) => state.usersData);
  const [messages, setMessages] = useState([]);

  const currentUser = usersData.find((user) => user.uid === id);

  // Set header option dynamically for this screen
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View className="flex-row items-center gap-3.5">
          <View>
            <BackButton />
          </View>
          <TouchableOpacity
            className="flex-row items-center"
            style={{ gap: 10 }}
            onPress={() =>
              router.push({
                pathname: "/chat/chatUserProfile",
                params: {
                  fullName: currentUser?.fullName,
                  image: currentUser?.image,
                },
              })
            }
          >
            <UserProfileImage size={35} imgUrl={currentUser?.image} />
            <Text className="font-boldFont text-xl text-white">
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
    <SafeAreaView className="flex-1 bg-primary px-5">
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </SafeAreaView>
  );
}
