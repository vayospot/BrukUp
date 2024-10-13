import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function MatchCard({
  match: { id, height, name, image, matchValue },
}) {
  return (
    <Link
      href={{ pathname: "/discover/match", params: { userId: id } }}
      asChild
    >
      <TouchableOpacity
        activeOpacity={0.6}
        className={`m-1 overflow-hidden rounded-xl`}
        style={{
          height: height,
        }}
      >
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="h-full w-full"
        />
        <LinearGradient
          colors={["#00000000", "#00000095"]}
          locations={[0.2, 1]}
          className="absolute bottom-0 w-full flex-row justify-between px-3 py-2"
        >
          <Text className="font-regularFont text-white">{name}</Text>
          <View className="items-center justify-center rounded-full bg-neutral-900 px-2">
            <Text
              className="font-regularFont text-white"
              style={{ fontSize: 10 }}
            >
              {matchValue}%
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}
