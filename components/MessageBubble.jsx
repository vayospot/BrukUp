import { View, Text } from "react-native";

export default function MessageBubble({
  message: { senderId, content, time },
}) {
  const alignmentClass = senderId === "00" ? "items-end" : "items-start";
  const bubbleColorClass = senderId === "00" ? "bg-accent" : "bg-zinc-800";
  const timePositionClass =
    senderId === "00" ? "right-full mr-1" : "left-full ml-1";

  return (
    <View className={alignmentClass}>
      <View className={`${bubbleColorClass} relative max-w-[200] rounded-xl`}>
        <View>
          <Text className="p-2.5 font-regularFont text-base text-white">
            {content}
          </Text>
          <Text
            className={`absolute bottom-0 ${timePositionClass} w-10 font-regularFont text-xs text-gray-500`}
          >
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
}
