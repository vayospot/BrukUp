import { View, TouchableOpacity } from "react-native";

export default function GlassmorphismWrapper({ children, ...props }) {
  return (
    <TouchableOpacity
      className="relative h-14 w-14 items-center justify-center overflow-hidden rounded-full"
      {...props}
    >
      {children}
      <View className="absolute -z-10 h-full w-full bg-gray-300 opacity-20"></View>
    </TouchableOpacity>
  );
}
