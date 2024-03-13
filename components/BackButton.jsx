import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function BackButton() {
  const handleBackPress = () => {
    router.canGoBack() ? router.back() : router.navigate("/(tabs)/discover");
  };

  return (
    <TouchableOpacity activeOpacity={0.3} onPress={handleBackPress}>
      <Ionicons name='chevron-back' size={24} color='white' />
    </TouchableOpacity>
  );
}
