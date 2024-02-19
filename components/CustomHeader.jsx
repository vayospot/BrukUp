import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomHeader() {
  return (
    <SafeAreaView style={{ backgroundColor: "red" }}>
      <View style={{ backgroundColor: "orange" }}>
        <Text>This is a CustomHeader</Text>
        <Text>This is a CustomHeader</Text>
        <Text>This is a CustomHeader</Text>
      </View>
    </SafeAreaView>
  );
}
