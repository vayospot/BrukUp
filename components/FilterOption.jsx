import { TouchableOpacity, Text } from "react-native";

export default function FilterOption({ value, onPress, isActive }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='px-2 py-1 rounded-full bg-red-500'
    >
      <Text className='text-light text-xs font-poppinsRegular'>{value}</Text>
    </TouchableOpacity>
  );
}
