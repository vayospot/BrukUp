import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, View } from "react-native";
import Colors from "../constants/Colors";

export default function ChatInput({ onSendMessage }) {
  const [textInput, setTextInput] = useState("");

  const handleSend = () => {
    if (textInput.trim()) {
      onSendMessage({
        textId: Date.now().toString(),
        senderId: "00",
        content: textInput,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      setTextInput("");
    }
  };

  return (
    <View className='flex flex-row items-center gap-2 py-1'>
      <TextInput
        className='flex-1 py-1 px-4 rounded-full bg-zinc-800 text-white'
        value={textInput}
        onChangeText={(value) => setTextInput(value)}
        placeholder='Enter message...'
        placeholderTextColor='#fff'
      />

      <TouchableOpacity onPress={handleSend}>
        <Ionicons name='send' size={28} color={Colors.accent} />
      </TouchableOpacity>
    </View>
  );
}
