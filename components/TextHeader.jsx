import { View, Text } from "react-native";

export default function TextHeader({ title, subtitle, ...props }) {
  return (
    <View {...props}>
      <Text className="font-boldFont text-3xl text-white">{title}</Text>
      <Text className="font-regularFont text-lg text-neutral-300">
        {subtitle}
      </Text>
    </View>
  );
}
