import { View, TouchableOpacity } from "react-native";

export default function GlassmorphismWrapper({ children }) {
  return (
    <TouchableOpacity className='relative overflow-hidden rounded-full w-14 h-14 items-center justify-center'>
      {children}
      <View className='absolute w-full h-full bg-gray-300 opacity-20 -z-10'></View>
    </TouchableOpacity>
  );
}
