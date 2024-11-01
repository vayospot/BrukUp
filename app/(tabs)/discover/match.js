import { useLocalSearchParams } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { View, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Button from "../../../components/Button";
import UserCard from "../../../components/UserCard";
import useGlobalDataStore from "../../../context/globalDataStore";
import Toast from "react-native-toast-message";

export default function MatchLayout() {
  const usersData = useGlobalDataStore((state) => state.usersData);
  const { uid } = useLocalSearchParams();
  const selectedUserIndex = usersData.findIndex((user) => user.uid === uid);

  const progressValue = useSharedValue(0);

  return (
    <View className="flex-1 bg-primary px-3 py-2" style={{ gap: 20 }}>
      <View className="flex-1 items-center">
        <Carousel
          data={usersData}
          renderItem={({ item }) => <UserCard user={item} />}
          defaultIndex={selectedUserIndex}
          width={Dimensions.get("window").width}
          scrollAnimationDuration={400}
          progress={progressValue}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 65,
            parallaxAdjacentItemScale: 0.7,
          }}
        />
      </View>
      <View>
        <Button
          title="View Profile"
          buttonStyles="self-center bg-white w-5/6 rounded-lg py-2.5"
          textStyles="text-center font-mediumFont text-black text-xl"
          onPress={() => Toast.show({ type: "info", text1: "Coming soon!" })}
        />
      </View>
    </View>
  );
}
