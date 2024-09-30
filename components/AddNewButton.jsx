import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function AddNewButton({ href, btnStyle, iconSize, iconColor }) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity
        className={`rounded-full bg-neutral-900 p-3 ${btnStyle}`}
      >
        <Ionicons name="add-outline" size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </Link>
  );
}
