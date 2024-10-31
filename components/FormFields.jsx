import { useState } from "react";
import { View } from "react-native";
import FormInput from "./FormInput";
import validateDateString from "../utils/validateDateString";
import Toast from "react-native-toast-message";
import LoadingButton from "./LoadingButton";
import useGlobalDataStore from "../context/globalDataStore";

export default function FormFields({ submitButtonLabel }) {
  const userData = useGlobalDataStore((state) => state.userData);
  const updateUserData = useGlobalDataStore((state) => state.updateUserData);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: userData?.fullName || "",
    email: userData?.email,
    dateOfBirth: userData?.dateOfBirth || "",
    location: userData?.location || "",
    bio: userData?.bio || "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    let age;
    try {
      const result = validateDateString(formData.dateOfBirth, {
        isDateOfBirth: true,
        minimumAge: 18,
      });

      age = result.age;
    } catch (error) {
      Toast.show({ type: "error", text1: error.message });
      return;
    }

    setIsLoading(true);
    try {
      await updateUserData({ ...formData, age });
      Toast.show({ type: "success", text1: "Profile updated successfully." });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ gap: 40 }}>
      <View className="px-3" style={{ gap: 20 }}>
        <FormInput
          label="Full name"
          value={formData.fullName}
          onChangeText={(value) => handleInputChange("fullName", value)}
          handleSubmit={handleSubmit}
        />
        <FormInput
          label="Email address"
          value={formData.email}
          onChangeText={(value) => handleInputChange("email", value)}
          inputMode="email"
          handleSubmit={handleSubmit}
        />
        <FormInput
          label="Date of birth (YYYY-MM-DD)"
          value={formData.dateOfBirth}
          onChangeText={(value) => handleInputChange("dateOfBirth", value)}
          handleSubmit={handleSubmit}
        />
        <FormInput
          label="Location"
          value={formData.location}
          onChangeText={(value) => handleInputChange("location", value)}
          handleSubmit={handleSubmit}
        />
        <FormInput
          label="Bio"
          value={formData.bio}
          onChangeText={(value) => handleInputChange("bio", value)}
          isMultiLine
          handleSubmit={handleSubmit}
        />
      </View>

      <LoadingButton
        text={submitButtonLabel}
        onPress={handleSubmit}
        className="self-center rounded-lg bg-white px-16 py-2.5"
        textClass="text-center font-mediumFont text-black text-xl"
        isLoading={isLoading}
      />
    </View>
  );
}
