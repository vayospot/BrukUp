import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SocialButton({
  iconName,
  iconColor = "#fff",
  iconSize = 22,
  onPress,
}) {
  return (
    <TouchableOpacity
      className="rounded-lg border border-white/25 p-2"
      onPress={onPress}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
