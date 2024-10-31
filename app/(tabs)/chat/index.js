import { FlatList, View, SafeAreaView } from "react-native";
import useGlobalDataStore from "../../../context/globalDataStore";
import EmptyLayout from "../../../components/EmptyLayout";
import ChatPreview from "../../../components/ChatPreview";
import { PREVIEW_MESSAGES } from "../../../services/messageService";

export default function index() {
  const usersData = useGlobalDataStore((state) => state.usersData);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary px-2">
      <FlatList
        data={usersData}
        renderItem={({ item }) => (
          <ChatPreview
            user={item}
            previewMessage={
              PREVIEW_MESSAGES[
                Math.floor(Math.random() * PREVIEW_MESSAGES.length)
              ]
            }
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              marginLeft: 65,
              backgroundColor: "white",
              opacity: 0.15,
            }}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyLayout
            heading="No Chats"
            subHeading="Start a conversation with someone to get started."
          />
        )}
      />
    </SafeAreaView>
  );
}
