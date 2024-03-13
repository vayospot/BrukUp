import { View, Text } from "react-native";

export default function EmptyChatLayout({ heading, subHeading }) {
  return (
    <View className='flex-1 justify-center items-center' style={{ gap: 10 }}>
      <Text className='text-white text-2xl font-boldFont'>{heading}</Text>
      {subHeading && (
        <Text className='text-white font-regularFont'>{subHeading}</Text>
      )}
    </View>
  );
}
