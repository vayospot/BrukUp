import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function MatchCard({ item }) {
  return (
    <Link
      href={{ pathname: "/discover/match", params: { userId: item.id } }}
      asChild
    >
      <TouchableOpacity
        activeOpacity={0.6}
        className={`m-1 overflow-hidden rounded-xl`}
        style={{
          height: item.height,
        }}
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          className="h-full w-full"
        />
        <LinearGradient
          colors={["#00000000", "#00000095"]}
          locations={[0.2, 1]}
          className="absolute bottom-0 w-full flex-row justify-between px-3 py-2"
        >
          <Text className="font-regularFont text-white">{item.name}</Text>
          <View className="items-center justify-center rounded-full bg-neutral-900 px-2">
            <Text
              className="font-regularFont text-white"
              style={{ fontSize: 10 }}
            >
              {item.matchValue}%
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}
