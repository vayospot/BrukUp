import { useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useUserDataStore from "../context/UserDataStore";
import shuffle from "../utils/shuffle";
import { Link } from "expo-router";
import Button from "./Button";
import StackedImages from "./StackedImages";

export default function TownPreviewCard({
  town: { id, name, bio, activeFolks, totalFolks },
}) {
  const [hasJoinedTown, setHasJoinedTown] = useState(false);
  const userData = useUserDataStore((state) => state.userData);
  const images = useMemo(
    () => shuffle(userData.map((item) => item.image)),
    [userData],
  );

  return (
    <Link href={`townsquare/${id}`} asChild>
      <TouchableOpacity className="relative w-full space-y-2 rounded-xl border border-neutral-400/30 bg-transparent p-3">
        <View className="flex-row items-center justify-between">
          <View className="space-y-1">
            <Text className="font-mediumFont text-xl text-white">{name}</Text>
            <Text className="font-regularFont text-sm text-secondary">
              {activeFolks} folks active
            </Text>
          </View>
          <Button
            title={hasJoinedTown ? "Joined" : "Join"}
            buttonStyles={`rounded-full border-[0.5px] px-5 py-1.5 ${
              hasJoinedTown ? "border-white" : "bg-neutral-800"
            }`}
            textStyles={"text-center font-boldFont text-white"}
            onPress={() => setHasJoinedTown(!hasJoinedTown)}
          />
        </View>

        <View>
          <Text className="font-regularFont text-neutral-400" numberOfLines={1}>
            {bio}
          </Text>
        </View>

        <View className="flex-row" style={{ gap: 10 }}>
          <StackedImages
            imageURLList={images}
            numOfImages={5}
            imageSize={20}
            overlap={15}
          />
          <Text className="font-regularFont text-neutral-400">
            ‣ {totalFolks}+ town folks
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
