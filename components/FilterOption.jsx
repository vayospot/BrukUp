import { TouchableOpacity, Text } from "react-native";
import Colors from "../constants/Colors";

export default function FilterOption({ value, onPress, isActive }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: Colors.tertiary,
      }}
    >
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}
