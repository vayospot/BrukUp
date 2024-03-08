import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { UserDataContext } from "../../../context/UserDataProvider";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function MatchLayout() {
  const { userData, setUserData } = useContext(UserDataContext);
  const { userId } = useLocalSearchParams();
  const currentUser = userData.find((user) => user.id === userId);

  return (
    <View className='flex-1 bg-primary px-3 py-2' style={{ gap: 20 }}>
      <View className='relative flex-1 rounded-lg overflow-hidden'>
        <Image
          source={{ uri: currentUser.imageHigh }}
          className='w-full h-full'
        />
        <MatchInfo item={currentUser} />
      </View>
      <View>
        <TouchableOpacity className='self-center bg-white w-5/6 rounded-lg py-2.5'>
          <Text className='text-center font-questrial text-black text-xl'>
            View Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MatchInfo({ item }) {
  return (
    <LinearGradient
      colors={["#00000000", "#00000060", "#00000095"]}
      locations={[0.2, 0.6, 1]}
      className='absolute bottom-0 w-full justify-between px-5 py-5'
      style={{ gap: 5 }}
    >
      <View className='bg-neutral-900 rounded-lg px-2 items-center justify-center self-start'>
        <Text className='text-white font-questrial' style={{ fontSize: 10 }}>
          {item.matchValue}%
        </Text>
      </View>

      <View className='flex-row' style={{ gap: 10 }}>
        <Text className='text-white font-questrial text-5xl'>{item.name}</Text>
        <Text className='text-white font-questrial text-4xl opacity-60'>
          {item.age}
        </Text>
      </View>

      <View className='flex-row items-center' style={{ gap: 5 }}>
        <Ionicons name='location-outline' size={10} color='#fff' />
        <Text className='text-white font-questrial'>{item.location}</Text>
      </View>
    </LinearGradient>
  );
}
