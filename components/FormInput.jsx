import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export default function FormInput({
  label,
  value,
  placeholder,
  onChangeText,
  inputMode = "text",
  isMultiLine = false,
  secureTextEntry = false,
  autoFocus = false,
  labelStyle,
  inputStyle,
  handleSubmit,
}) {
  const [hideSecureText, setHideSecureText] = useState(true);

  const onSubmitEditing = () => {
    Keyboard.dismiss();
    handleSubmit();
  };

  return (
    <View style={{ gap: 5 }}>
      <Text className={`font-regularFont text-neutral-300 ${labelStyle}`}>
        {label}
      </Text>
      <View className="flex-row border border-x-0 border-t-0 border-white">
        <TextInput
          className={`flex-1 py-1 font-regularFont text-lg text-white ${inputStyle}`}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          multiline={isMultiLine}
          inputMode={inputMode}
          secureTextEntry={secureTextEntry && hideSecureText}
          autoFocus={autoFocus}
          placeholder={placeholder}
        />
        {secureTextEntry && (
          <TouchableOpacity
            className="items-center justify-center"
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
