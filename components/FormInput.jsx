import { View, Text, TextInput } from "react-native";

export default function FormInput({
  label,
  value,
  onChangeText,
  inputMode = "text",
  isMultiLine = false,
}) {
  return (
    <View>
      <Text className="font-regularFont text-neutral-300">{label}</Text>
      <TextInput
        className="border border-x-0 border-t-0 border-white font-regularFont text-lg text-white"
        value={value}
        onChangeText={onChangeText}
        multiline={isMultiLine}
        inputMode={inputMode}
      />
    </View>
  );
}
