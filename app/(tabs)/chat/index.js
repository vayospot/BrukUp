import { FlatList, View, SafeAreaView } from "react-native";
import EmptyLayout from "../../../components/EmptyLayout";
import ChatPreview from "../../../components/ChatPreview";
import useUserDataStore from "../../../context/UserDataStore";
import { PREVIEW_MESSAGES } from "../../../services/messageService";

export default function index() {
  const userData = useUserDataStore((state) => state.userData);

  return (
    <SafeAreaView className='bg-primary flex-1 justify-center items-center px-2'>
      <FlatList
        data={userData}
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
            heading='No Chats'
            subHeading='Start a conversation with someone to get started.'
          />
        )}
      />
    </SafeAreaView>
  );
}
