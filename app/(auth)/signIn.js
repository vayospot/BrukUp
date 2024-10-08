import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import TextHeader from "../../components/TextHeader";

export default function signIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName, value) => {
    setCredentials((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => router.push("/(tabs)/discover");

  return (
    <View className="flex-1 bg-primary p-4" style={{ gap: 100 }}>
      <TextHeader
        className="items-center"
        title="Welcome Back"
        subtitle="Sign in to your account"
      />

      <View className="flex-1">
        <View style={{ gap: 30 }}>
          <FormInput
            label="Your Email"
            value={credentials.email}
            onChangeText={(value) => handleInputChange("email", value)}
            inputMode="email"
          />

          <View style={{ gap: 20 }}>
            <FormInput
              label="Your Password"
              value={credentials.password}
              onChangeText={(value) => handleInputChange("password", value)}
              secureTextEntry
            />

            <TouchableOpacity className="self-end" onPress={() => {}}>
              <Text className="font-regularFont text-neutral-300">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-16 w-4/5 self-center" style={{ gap: 15 }}>
          <Button
            title="Sign In"
            buttonStyles="bg-white rounded-lg py-1.5"
            textStyles="text-center font-mediumFont text-black text-lg"
            onPress={handleSubmit}
          />

          <Link href="/(auth)/signUp" asChild>
            <TouchableOpacity className="self-center">
              <Text className="font-regularFont text-neutral-300">
                Don't have an account?{" "}
                <Text className="font-boldFont">Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
