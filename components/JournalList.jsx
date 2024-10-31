import { View, Text, FlatList } from "react-native";
import JournalPreview from "./JournalPreview";
import EmptyChatLayout from "./EmptyLayout";
import useGlobalDataStore from "../context/globalDataStore";

export default function JournalList() {
  const journalData = useGlobalDataStore((state) => state.journalData);
  const getJournalData = useGlobalDataStore((state) => state.getJournalData);

  return (
    <View className="flex-1" style={{ gap: 20 }}>
      {journalData.length > 0 && (
        <Text className="font-boldFont text-xl text-white">Your Journals</Text>
      )}

      <FlatList
        data={journalData}
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
        onEndReachedThreshold={0.3}
        onEndReached={async () => await getJournalData.nextFetch()}
      />
    </View>
  );
}
