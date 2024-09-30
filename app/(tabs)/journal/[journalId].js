import { useEffect, useState } from "react";
import { View, TextInput, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import JOURNAL_DATA from "../../../services/journalData";

export default function JournalInterface() {
  const { journalId } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectionPosition, setSelectionPosition] = useState({});

  useEffect(() => {
    if (journalId === "new") {
      setTitle("");
      setContent("");
    } else if (journalId) {
      const journal = JOURNAL_DATA.find((item) => item.id === journalId);
      setTitle(journal.title);
      setContent(journal.content);
    }
  }, []);

  return (
    <View className="flex-1 bg-primary px-4" style={{ gap: 20 }}>
      <View className="max-w-[75%]">
        <TextInput
          className="font-boldFont text-3xl text-white"
          value={title}
          onChangeText={setTitle}
          multiline
          blurOnSubmit
          maxLength={70}
          placeholder="Title..."
          placeholderTextColor="#a3a3a3"
        />
      </View>

      <ScrollView className="flex-1">
        <TextInput
          className="flex-1 pb-40 font-regularFont leading-6 text-white"
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
          placeholder="What's on your mind..."
          placeholderTextColor="#a3a3a3"
          selection={selectionPosition}
          onSelectionChange={(event) =>
            setSelectionPosition(event.nativeEvent.selection)
          }
        />
      </ScrollView>
    </View>
  );
}
