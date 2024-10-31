import { useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Button from "../../../components/Button";
import UsersGrid from "../../../components/UsersGrid";
import shuffle from "../../../utils/shuffle";
import AudioControls from "../../../components/AudioControls";
import useGlobalDataStore from "../../../context/globalDataStore";
import abbreviateNumber from "../../../utils/abbreviateNumber";

export default function Town() {
  const navigation = useNavigation();
  const usersData = useGlobalDataStore((state) => state.usersData);
  const townsData = useGlobalDataStore((state) => state.townsData);
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
    () => townsData.find((town) => town.id === townId),
    [townId],
  );

  const { topActiveUsers, remainingActiveUsers } = useMemo(() => {
    const shuffledUsers = shuffle(usersData);
    const topActiveUsers = shuffledUsers.slice(0, 6);
    const remainingActiveUsers = shuffledUsers.slice(6, 18);

    return { topActiveUsers, remainingActiveUsers };
  }, [usersData]);

  return (
    <View className="relative flex-1 bg-primary px-5 py-4" style={{ gap: 30 }}>
      <View>
        <Text className="font-regularFont text-sm text-secondary">
          {abbreviateNumber(currentTown?.activeFolks)} folks are active
        </Text>
        <Text className="font-mediumFont text-3xl text-white">
          {currentTown?.name}
        </Text>
        <Text className="font-regularFont text-sm text-neutral-400">
          {currentTown?.bio}
        </Text>
      </View>

      <View>
        <UsersGrid
          usersData={topActiveUsers}
          imageCardSize={70}
          numOfColumns={3}
        />
      </View>

      <View className="flex-1" style={{ gap: 20 }}>
        <Text className="font-mediumFont text-lg text-neutral-200">
          Others listening ({abbreviateNumber(currentTown?.activeFolks - 6)})
        </Text>

        <UsersGrid
          usersData={remainingActiveUsers}
          imageCardSize={50}
          numOfColumns={4}
          containerStyle={{ gap: 20, paddingBottom: 150 }}
        />
      </View>

      <AudioControls muted={muted} toggleMute={() => setMuted(!muted)} />
    </View>
  );
}
