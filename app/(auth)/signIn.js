import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import FormInput from "../../components/FormInput";
import TextHeader from "../../components/TextHeader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import LoadingButton from "../../components/LoadingButton";
import Toast from "react-native-toast-message";
import handleAuthError from "../../utils/handleAuthError";

export default function signIn() {
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async () => {
    if (credentials.email === "" || credentials.password === "") {
      Toast.show({ type: "error", text1: "Please enter all fields" });
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      router.replace("/(tabs)/discover");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

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
            handleSubmit={handleSubmit}
            autoFocus
          />

          <View style={{ gap: 20 }}>
            <FormInput
              label="Your Password"
              value={credentials.password}
              onChangeText={(value) => handleInputChange("password", value)}
              secureTextEntry
              handleSubmit={handleSubmit}
            />

            <TouchableOpacity className="self-end" onPress={() => {}}>
              <Text className="font-regularFont text-neutral-300">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-16 w-4/5 self-center" style={{ gap: 15 }}>
          <LoadingButton
            text="Sign In"
            onPress={handleSubmit}
            className="rounded-lg bg-white py-1.5"
            textClass="font-mediumFont text-black text-lg"
            isLoading={isLoading}
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
