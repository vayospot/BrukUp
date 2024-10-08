import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import TextHeader from "../../components/TextHeader";

export default function signUp() {
  const [authData, setAuthData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName, value) => {
    setAuthData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => router.push("/(tabs)/discover");

  return (
    <View className="flex-1 bg-primary p-4" style={{ gap: 100 }}>
      <TextHeader
        className="items-center"
        title="Let's Start"
        subtitle="Create an account"
      />

      <View className="flex-1">
        <View style={{ gap: 30 }}>
          <FormInput
            label="Your Full Name"
            value={authData.fullName}
            onChangeText={(value) => handleInputChange("fullName", value)}
          />

          <FormInput
            label="Your Email"
            value={authData.email}
            onChangeText={(value) => handleInputChange("email", value)}
            inputMode="email"
          />

          <FormInput
            label="Your Password"
            value={authData.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry
          />
        </View>

        <View className="mt-16 w-4/5 self-center" style={{ gap: 15 }}>
          <Button
            title="Sign Up"
            buttonStyles="bg-white rounded-lg py-1.5"
            textStyles="text-center font-mediumFont text-black text-lg"
            onPress={handleSubmit}
          />

          <Link href="/(auth)/signIn" asChild>
            <TouchableOpacity className="self-center">
              <Text className="font-regularFont text-neutral-300">
                Already have an account?{" "}
                <Text className="font-boldFont">Sign in</Text>
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
