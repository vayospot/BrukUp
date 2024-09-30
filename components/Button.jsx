import { TouchableOpacity, Text } from "react-native";

export default function Button({
  title,
  onPress,
  buttonStyles,
  textStyles,
  ...props
}) {
  return (
    <TouchableOpacity className={buttonStyles} onPress={onPress} {...props}>
      <Text className={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}
