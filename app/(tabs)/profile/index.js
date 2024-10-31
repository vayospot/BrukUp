import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";
import useGlobalDataStore from "../../../context/globalDataStore";
import UserProfileImage from "../../../components/UserProfileImage";
import Toast from "react-native-toast-message";
import Button from "../../../components/Button";
import { useEffect, useRef } from "react";

export default function index() {
  const userData = useGlobalDataStore((state) => state.userData);
  const resetAllStores = useGlobalDataStore((state) => state.resetAllStores);
  const isSignedOut = useRef(false);

  useEffect(() => {
    return () => {
      if (isSignedOut.current) resetAllStores();
    };
  }, []);

  const MenuItem = ({ iconName, iconColor, text, textColor, onPress }) => (
    <TouchableOpacity
      className="flex-1 flex-row items-center py-4"
      style={{ gap: 8 }}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={20} color={iconColor} />
      <Text className={`${textColor} font-mediumFont text-lg`}>{text}</Text>
    </TouchableOpacity>
  );

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      isSignedOut.current = true;
      Toast.show({ type: "success", text1: "Signed out successfully" });

      router.replace("/(auth)/");
    } catch (error) {
      Toast.show({ type: "error", text1: "An error occured" });
    }
  };

  return (
    <View className="flex-1 bg-primary px-3">
      <View className="items-center py-9">
        <UserProfileImage size={120} imgUrl={userData?.image} />
        <Text className="mb-5 mt-1 font-mediumFont text-3xl text-white">
          {userData?.fullName || auth?.currentUser?.email.split("@")[0]}
        </Text>

        <Button
          title="Edit Profile"
          buttonStyles={
            "self-center rounded-lg px-8 py-1 border-[0.5px] border-white"
          }
          textStyles={"text-center font-mediumFont text-white text-lg"}
          onPress={() => router.push("/profile/editProfile")}
        />
      </View>

      <View className="mt-8 divide-y divide-white/10">
        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="shield-checkmark-outline"
            iconColor="#fff"
            text="Verification"
            textColor="text-white"
          />
          <View className="ml-auto font-mediumFont text-lg text-white">
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </View>
        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="settings-outline"
            iconColor="#fff"
            text="Settings"
            textColor="text-white"
          />
          <View className="ml-auto font-mediumFont text-lg text-white">
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </View>
        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="gift-outline"
            iconColor="#fff"
            text="Premium"
            textColor="text-white"
          />
          <View className="ml-auto font-mediumFont text-lg text-white">
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </View>
        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="help-circle-outline"
            iconColor="#fff"
            text="Help & Support"
            textColor="text-white"
          />
          <View className="ml-auto font-mediumFont text-lg text-white">
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </View>
        <View className="flex-row items-center justify-between px-2">
          <MenuItem
            iconName="log-out-outline"
            iconColor="#fff"
            text="Log out"
            textColor="text-white"
            onPress={handleSignOut}
          />
          <View className="ml-auto font-mediumFont text-lg text-white">
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}
