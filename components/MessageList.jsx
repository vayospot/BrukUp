import { FlatList } from "react-native";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {
  return (
    <FlatList
      data={messages.toReversed()}
      renderItem={({ item: message }) => <MessageBubble message={message} />}
      keyExtractor={(message) => message.textId}
      contentContainerStyle={{ gap: 20, paddingVertical: 8 }}
      inverted
    />
  );
}
