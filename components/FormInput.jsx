import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function FormInput({
  label,
  value,
  onChangeText,
  inputMode = "text",
  isMultiLine = false,
  secureTextEntry = false,
  labelStyle,
  inputStyle,
}) {
  const [hideSecureText, setHideSecureText] = useState(true);

  return (
    <View style={{ gap: 5 }}>
      <Text className={`font-regularFont text-neutral-300 ${labelStyle}`}>
        {label}
      </Text>
      <View className="flex-row border border-x-0 border-t-0 border-white">
        <TextInput
          className={`flex-1 border font-regularFont text-lg text-white ${inputStyle}`}
          value={value}
          onChangeText={onChangeText}
          multiline={isMultiLine}
          inputMode={inputMode}
          secureTextEntry={secureTextEntry && hideSecureText}
        />
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setHideSecureText(!hideSecureText)}
          >
            {hideSecureText ? (
              <Ionicons name="eye-off-outline" size={24} color="#d4d4d4" />
            ) : (
              <Ionicons name="eye-outline" size={24} color="#d4d4d4" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
