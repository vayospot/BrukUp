import { useState } from "react";
import { View, ScrollView } from "react-native";
import FormInput from "./FormInput";
import Button from "./Button";

export default function FormFields({ submitButtonLabel }) {
  const [formData, setFormData] = useState({
    fullName: "Bello Abiodun",
    email: "b2B2H@example.com",
    location: "Lagos, Nigeria",
    bio: "I don't know what to write here",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => console.log(formData);

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ gap: 40 }}>
      <View className="px-3" style={{ gap: 20 }}>
        <FormInput
          label="Full name"
          value={formData.fullName}
          onChangeText={(value) => handleInputChange("fullName", value)}
        />
        <FormInput
          label="Email address"
          value={formData.email}
          onChangeText={(value) => handleInputChange("email", value)}
          inputMode="email"
        />
        <FormInput
          label="Location"
          value={formData.location}
          onChangeText={(value) => handleInputChange("location", value)}
        />
        <FormInput
          label="Bio"
          value={formData.bio}
          onChangeText={(value) => handleInputChange("bio", value)}
          isMultiLine
        />
      </View>

      <Button
        title={submitButtonLabel}
        buttonStyles="self-center bg-white rounded-lg py-2.5 px-16"
        textStyles="text-center font-mediumFont text-black text-xl"
        onPress={handleSubmit}
      />
    </ScrollView>
  );
}
