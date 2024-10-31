import { useEffect, useState } from "react";
import { View, TextInput, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useGlobalDataStore from "../../../context/globalDataStore";
import { generateUniqueId } from "../../../utils/generateUniqueId";
import useDebounce from "../../../utils/useDebounce";

export default function JournalInterface() {
  const { journalId } = useLocalSearchParams();
  const journalEntries = useGlobalDataStore((state) => state.journalData);
  const syncJournalData = useGlobalDataStore((state) => state.syncJournalData);
  const updateJournalEntry = useGlobalDataStore(
    (state) => state.updateJournalData,
  );
  const debounceUpdate = useDebounce(updateJournalEntry, 500);

  const [selectionPosition, setSelectionPosition] = useState({});
  const [journalEntry, setJournalEntry] = useState(null);

  useEffect(() => {
    if (journalId === "new") {
      setJournalEntry({
        title: "",
        content: "",
        id: generateUniqueId(),
        isSynced: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    } else if (journalId) {
      const existingEntry = journalEntries.find(
        (entry) => entry.id === journalId,
      );
      setJournalEntry({ ...existingEntry });
    }
  }, []);

  useEffect(() => {
    return () => {
      syncJournalData();
    };
  }, []);

  const handleChangeText = (field, value) => {
    setJournalEntry((prevEntry) => {
      const updatedEntry = {
        ...prevEntry,
        [field]: value,
        isSynced: false,
        updatedAt: Date.now(),
      };

      debounceUpdate(updatedEntry);

      return updatedEntry;
    });
  };

  return (
    // Known issue with the keyboard. To fix, need a dev build (not Expo Go), and honestly—I'm lazy. 
    // For a fix, see react-native-keyboard-controller.
    <View className="flex-1 bg-primary px-4" style={{ gap: 20 }}>
      <View className="max-w-[75%]">
        <TextInput
          className="font-boldFont text-3xl text-white"
          value={journalEntry?.title}
          onChangeText={(value) => handleChangeText("title", value)}
          multiline
          blurOnSubmit
          maxLength={70}
          placeholder="Title..."
          placeholderTextColor="#a3a3a3"
        />
      </View>

      <ScrollView className="flex-1">
        <TextInput
          className="flex-1 pb-40 font-regularFont text-lg leading-6 text-white"
          value={journalEntry?.content}
          onChangeText={(value) => handleChangeText("content", value)}
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
