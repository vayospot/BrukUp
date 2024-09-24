import { View, Text } from "react-native";

export default function EmptyChatLayout({ heading, subHeading }) {
  return (
    <View className="flex-1 items-center justify-center" style={{ gap: 10 }}>
      <Text className="font-boldFont text-2xl text-white">{heading}</Text>
      {subHeading && (
        <Text className="font-regularFont text-white">{subHeading}</Text>
      )}
    </View>
  );
}
