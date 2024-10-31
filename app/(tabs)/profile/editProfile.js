import { View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import FormFields from "../../../components/FormFields";
import useGlobalDataStore from "../../../context/globalDataStore";
import UserProfileImage from "../../../components/UserProfileImage";
import Toast from "react-native-toast-message";

export default function EditProfile() {
  const userData = useGlobalDataStore((state) => state.userData);
  const setUserData = useGlobalDataStore((state) => state.setUserData);

  const handleEditPhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setUserData({ image: result.assets[0].uri });
        Toast.show({ type: "success", text1: "Image updated successfully" });
      }
    } catch (error) {
      console.log(`Error in image picker: ${error}`);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-primary px-3"
      contentContainerStyle={{ paddingBottom: 50, gap: 30 }}
    >
      <View className="items-center py-9">
        <View className="relative">
          <UserProfileImage size={120} imgUrl={userData?.image} />
          <TouchableOpacity
            className="absolute inset-x-0 inset-y-0 items-end justify-end p-1"
            onPress={handleEditPhoto}
            activeOpacity={0.5}
          >
            <Ionicons name="camera" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <FormFields submitButtonLabel="Update Profile" />
    </ScrollView>
  );
}
