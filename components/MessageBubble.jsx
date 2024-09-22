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
          <Text className='font-regularFont text-base text-white p-2.5'>
            {content}
          </Text>
          <Text
            className={`absolute bottom-0 ${timePositionClass} font-regularFont text-xs text-gray-500 w-10`}
          >
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
}
