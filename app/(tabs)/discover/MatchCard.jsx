import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function MatchCard({ item }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className={`rounded-xl m-1 overflow-hidden`}
      style={{
        height: item.height,
      }}
      onPress={() =>
        router.navigate({
          pathname: "/discover/match",
          params: { userId: item.id },
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        resizeMode='cover'
        className='w-full h-full'
      />
      <LinearGradient
        colors={["#00000000", "#00000095"]}
        locations={[0.2, 1]}
        className='absolute bottom-0 w-full flex-row justify-between px-3 py-2'
      >
        <Text className='text-white font-questrial'>{item.name}</Text>
        <View className='bg-neutral-900 rounded-full px-2 items-center justify-center'>
          <Text className='text-white font-questrial' style={{ fontSize: 10 }}>
            {item.matchValue}%
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
