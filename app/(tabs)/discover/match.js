import { useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { View, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { UserDataContext } from "../../../context/UserDataProvider";
import Button from "../../../components/Button";
import UserCard from "../../../components/UserCard";

export default function MatchLayout() {
  const { userData, setUserData } = useContext(UserDataContext);
  const { userId } = useLocalSearchParams();
  const currentUserIndex = userData.findIndex((user) => user.id === userId);

  const progressValue = useSharedValue(0);

  return (
    <View className='flex-1 bg-primary px-3 py-2' style={{ gap: 20 }}>
      <View className='flex-1 items-center'>
        <Carousel
          data={userData}
          renderItem={({ item }) => <UserCard user={item} />}
          defaultIndex={currentUserIndex}
          width={Dimensions.get("window").width}
          scrollAnimationDuration={400}
          progress={progressValue}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          mode='parallax'
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 65,
            parallaxAdjacentItemScale: 0.7,
          }}

          // mode='horizontal-stack' modeConfig={{ moveSize: 500, stackInterval: 200, rotateZDeg: 10,snapDirection: "left"}}
        />
      </View>
      <View>
        <Button
          title='View Profile'
          buttonStyles={"self-center bg-white w-5/6 rounded-lg py-2.5"}
          textStyles={"text-center font-questrial text-black text-xl"}
        />
      </View>
    </View>
  );
}
