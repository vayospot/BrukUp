import { useEffect } from "react";
import { Image, View } from "react-native";
import { router } from "expo-router";
import Button from "../components/Button";
import useUserDataStore from "../context/UserDataStore";
import SocialButton from "../components/SocialButton";
import TextHeader from "../components/TextHeader";

export default App = () => {
  const getUserData = useUserDataStore((state) => state.getUserData);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary px-3">
      <View>
        <Image
          source={require("../assets/images/onboard_img.png")}
          style={{ width: 280, height: 280 }}
          resizeMode="contain"
        />
      </View>

      <TextHeader
        title={"Breakups sucks,\nbut you're tougher."}
        subtitle={
          "Connect with others who get it, share stories, get pep talks, and more."
        }
        style={{ gap: 10 }}
      />

      <View className="mt-16 w-4/5" style={{ gap: 15 }}>
        <Button
          title="Sign In"
          buttonStyles="bg-white rounded-lg py-1.5"
          textStyles="text-center font-mediumFont text-black text-lg"
          onPress={() => router.push("/(auth)/signIn")}
        />
        <Button
          title="Register"
          buttonStyles="border-white border rounded-lg py-1.5"
          textStyles="text-center font-mediumFont text-white text-lg"
          onPress={() => router.push("/(auth)/signUp")}
        />

        <View
          className="mt-8 flex-row items-center justify-center"
          style={{ gap: 30 }}
        >
          <SocialButton iconName="logo-google" />
          <SocialButton iconName="logo-apple" />
          <SocialButton iconName="logo-facebook" />
        </View>
      </View>
    </View>
  );
};
