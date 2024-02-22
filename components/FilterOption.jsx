import { TouchableOpacity, Text } from "react-native";

export default function FilterOption({ value, onPress, isActive }) {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      className={`px-2.5 py-1.5 rounded-full ${
        isActive ? "bg-accent" : "bg-black/10"
      }`}
    >
      <Text className='text-white text-xs font-questrial'>{value}</Text>
    </TouchableOpacity>
  );
}
