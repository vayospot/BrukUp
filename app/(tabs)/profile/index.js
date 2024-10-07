import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import { router } from "expo-router";

export default function index() {
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

  return (
    <View className="flex-1 bg-primary px-3">
      <View className="items-center py-9">
        <View className="overflow-hidden rounded-xl">
          <Image
            source={require("../../../assets/images/profile-image.jpg")}
            style={{ width: 120, height: 120 }}
          />
        </View>
        <Text className="mb-5 mt-1 font-mediumFont text-3xl text-white">
          Bello Abiodun
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
            text="Logout"
            textColor="text-white"
          />
          <View className="ml-auto font-mediumFont text-lg text-white">
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}
