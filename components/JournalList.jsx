import { View, Text, FlatList } from "react-native";
import JournalPreview from "./JournalPreview";
import EmptyChatLayout from "./EmptyLayout";

export default function JournalList({ journals }) {
  return (
    <View className="flex-1" style={{ gap: 20 }}>
      <Text className="font-boldFont text-xl text-white">Your Journals</Text>

      <FlatList
        data={journals}
        renderItem={({ item }) => <JournalPreview journal={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <EmptyChatLayout
            heading="No Journals"
            subHeading="Whats on your mind? Offload your thoughts to your journal."
          />
        )}
        ItemSeparatorComponent={() => (
          <View className="h-[0.5] bg-neutral-600" />
        )}
      />
    </View>
  );
}
