import { View } from "react-native";
import EmptyLayout from "../../../components/EmptyLayout";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary px-2">
      <EmptyLayout heading="Profile Not Found" />
    </View>
  );
}
