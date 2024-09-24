import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";

export default function SearchBar({ onSearch }) {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = () => onSearch(searchQuery);
  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => {
    setSearchQuery("");
    setIsInputFocused(false);
    inputRef.current?.blur();
  };

  return (
    <View
      className="flex-row items-center rounded-full bg-white/10 px-4 py-2"
      style={{ gap: 10 }}
    >
      <Ionicons name="search-outline" size={20} color="#fff" />
      <TextInput
        ref={inputRef}
        value={searchQuery}
        className="flex-1 font-mediumFont text-white"
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSubmit}
        placeholder="Search towns..."
        placeholderTextColor="#fff"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isInputFocused && (
        <TouchableOpacity className="px-2" onPress={handleBlur}>
          <Ionicons name="close-outline" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}
