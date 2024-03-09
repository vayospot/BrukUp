import { Image, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import GlassmorphismWrapper from "./GlassmorphismWrapper";

export default function UserCard({ user }) {
  return (
    <View className='relative flex-1 rounded-lg overflow-hidden'>
      <Image source={{ uri: user.imageHigh }} className='w-full h-full' />
      <UserInfo user={user} />
    </View>
  );
}

function UserInfo({ user }) {
  return (
    <LinearGradient
      colors={["#00000000", "#00000060", "#00000095"]}
      locations={[0.2, 0.6, 1]}
      className='absolute bottom-0 w-full justify-between px-5 py-5'
      style={{ gap: 5 }}
    >
      <View className='bg-neutral-900 rounded-lg px-2 items-center justify-center self-start'>
        <Text className='text-white font-questrial' style={{ fontSize: 10 }}>
          {user.matchValue}%
        </Text>
      </View>

      <View className='flex-row' style={{ gap: 10 }}>
        <Text className='text-white font-questrial text-5xl'>{user.name}</Text>
        <Text className='text-white font-questrial text-4xl opacity-60'>
          {user.age}
        </Text>
      </View>

      <View className='flex-row items-center' style={{ gap: 5 }}>
        <Ionicons name='location-outline' size={10} color='#fff' />
        <Text className='text-white font-questrial'>{user.location}</Text>
      </View>

      {/* Like and Chat buttons */}
      <View
        className='absolute right-4 bottom-8 justify-center items-center'
        style={{ gap: 15 }}
      >
        <GlassmorphismWrapper>
          <Ionicons name='heart' size={28} color='#fff' />
        </GlassmorphismWrapper>
        <GlassmorphismWrapper>
          <Ionicons name='chatbubble' size={28} color='#fff' />
        </GlassmorphismWrapper>
      </View>
    </LinearGradient>
  );
}
