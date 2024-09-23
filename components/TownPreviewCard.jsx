import { useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useUserDataStore from "../context/UserDataStore";
import shuffle from "../utils/shuffle";
import { Link } from "expo-router";
import Button from "./Button";
import StackedImages from "./StackedImages";

export default function TownPreviewCard({
  town: { name, bio, activeFolks, totalFolks },
}) {
  const [hasJoinedTown, setHasJoinedTown] = useState(false);
  const userData = useUserDataStore((state) => state.userData);
  const images = useMemo(
    () => shuffle(userData.map((item) => item.image)),
    [userData]
  );

  return (
    <Link href={"/townsquare/town"} asChild>
      <TouchableOpacity className='relative w-full bg-transparent border border-neutral-400/30 p-3 rounded-xl space-y-2'>
        <View className='flex-row justify-between items-center'>
          <View className='space-y-1'>
            <Text className='text-white font-mediumFont text-xl'>{name}</Text>
            <Text className='font-regularFont text-secondary text-sm'>
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
          <Text className='font-regularFont text-neutral-400' numberOfLines={1}>
            {bio}
          </Text>
        </View>

        <View className='flex-row' style={{ gap: 10 }}>
          <StackedImages
            imageURLList={images}
            numOfImages={5}
            imageSize={20}
            overlap={15}
          />
          <Text className='text-neutral-400 font-regularFont'>
            ‣ {totalFolks}+ town folks
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
