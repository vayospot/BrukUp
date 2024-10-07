import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormFields from "../../../components/FormFields";

export default function EditProfile() {
  const handleEditPhoto = () => {};

  return (
    <View className="flex-1 bg-primary px-3" style={{ gap: 30 }}>
      <View className="items-center py-9">
        <View className="relative overflow-hidden rounded-xl">
          <Image
            source={require("../../../assets/images/profile-image.jpg")}
            style={{ width: 120, height: 120 }}
          />
          <TouchableOpacity
            className="absolute inset-x-0 inset-y-0 items-end justify-end p-1"
            onPress={handleEditPhoto}
          >
            <Ionicons name="camera" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <FormFields submitButtonLabel="Update Profile" />
    </View>
  );
}
