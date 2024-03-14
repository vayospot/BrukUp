import { useContext } from "react";
import { FlatList, View } from "react-native";
import { UserDataContext } from "../../../context/UserDataProvider";
import EmptyLayout from "../../../components/EmptyLayout";
import ChatPreview from "../../../components/ChatPreview";

export default function index() {
  const { userData } = useContext(UserDataContext);
  const messages = [
    "I can't believe we broke up. I miss you.",
    "Why did you end it? I thought we had something real.",
    "I'm really struggling with this breakup. Can you offer some support?",
    "I miss the way we used to talk on the phone.",
    "I'm feeling so lonely and desperate for someone to talk to.",
    "I can't believe I made such a mistake with you. Can we try again?",
    "I'm really down about this breakup. Can we talk about it?",
    "I'm finding it hard to move on from you.",
    "I'm really feeling the need for someone to talk to about my feelings.",
  ];

  return (
    <View className='bg-primary flex-1 justify-center items-center px-2'>
      {userData ? (
        <FlatList
          data={userData}
          renderItem={({ item }) => (
            <ChatPreview
              user={item}
              message={messages[Math.floor(Math.random() * messages.length)]}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 0.5,
                marginLeft: 45,
                backgroundColor: "white",
                opacity: 0.2,
              }}
            />
          )}
        />
      ) : (
        <EmptyLayout
          heading='No Chats'
          subHeading='Start a conversation with someone to get started.'
        />
      )}
    </View>
  );
}
