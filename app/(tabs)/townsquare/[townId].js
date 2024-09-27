import { useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import useUserDataStore from "../../../context/UserDataStore";
import ALL_TOWNS from "../../../services/townsquareData";
import Button from "../../../components/Button";
import UserGrid from "../../../components/UserGrid";
import shuffle from "../../../utils/shuffle";
import AudioControls from "../../../components/AudioControls";

export default function Town() {
  const navigation = useNavigation();
  const userData = useUserDataStore((state) => state.userData);
  const { townId } = useLocalSearchParams();
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Leave"
          textStyles={"text-red-700 font-mediumFont text-xl"}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  const currentTown = useMemo(
    () => ALL_TOWNS.find((town) => town.id === townId),
    [townId],
  );

  const { topActiveUsers, remainingActiveUsers } = useMemo(() => {
    const shuffledUsers = shuffle([...userData]);
    const topActiveUsers = shuffledUsers.slice(0, 6);
    const remainingActiveUsers = shuffledUsers.slice(6, 18);

    return { topActiveUsers, remainingActiveUsers };
  }, [userData]);

  return (
    <View className="relative flex-1 bg-primary px-5 py-4" style={{ gap: 30 }}>
      <View>
        <Text className="font-regularFont text-sm text-secondary">
          {currentTown?.activeFolks} folks are active
        </Text>
        <Text className="font-mediumFont text-3xl text-white">
          {currentTown?.name}
        </Text>
        <Text className="font-regularFont text-sm text-neutral-400">
          {currentTown?.bio}
        </Text>
      </View>

      <View>
        <UserGrid
          userData={topActiveUsers}
          imageCardSize={70}
          numOfColumns={3}
        />
      </View>

      <View className="flex-1" style={{ gap: 20 }}>
        <Text className="font-mediumFont text-lg text-neutral-200">
          Others listening ({currentTown?.activeFolks - 6})
        </Text>

        <UserGrid
          userData={remainingActiveUsers}
          imageCardSize={50}
          numOfColumns={4}
          containerStyle={{ gap: 20, paddingBottom: 150 }}
        />
      </View>

      <AudioControls muted={muted} toggleMute={() => setMuted(!muted)} />
    </View>
  );
}
