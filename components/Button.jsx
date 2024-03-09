import { TouchableOpacity, Text } from "react-native";

export default function Button({ title, onPress, buttonStyles, textStyles }) {
  return (
    <TouchableOpacity className={buttonStyles} onPress={onPress}>
      <Text className={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}
