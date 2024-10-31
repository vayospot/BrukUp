import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../constants/Colors";
import JournalList from "../../../components/JournalList";
import AddNewButton from "../../../components/AddNewButton";

export default function index() {
  return (
    <SafeAreaView
      className="relative flex-1 bg-primary px-4 pt-8"
      style={{ gap: 50 }}
    >
      <View
        className="flex-col items-center justify-between"
        style={{ gap: 2 }}
      >
        <Text className="font-boldFont text-3xl text-white">Hello</Text>
        <Text className="font-regularFont text-sm text-neutral-400">
          {new Date().toDateString()}
        </Text>
      </View>

      <JournalList />

      <AddNewButton
        href="/journal/new"
        btnStyle="absolute bottom-5 right-8"
        iconSize={35}
        iconColor={Colors.accent}
      />
    </SafeAreaView>
  );
}
