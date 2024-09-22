import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import useUserDataStore from "../../../context/UserDataStore";
import { DUMMY_MESSAGES } from "../../../services/messageService";
import MessageList from "../../../components/MessageList";
import ChatInput from "../../../components/ChatInput";

export default function ChatInterface() {
  const userData = useUserDataStore((state) => state.userData);
  const [messages, setMessages] = useState([]);

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
