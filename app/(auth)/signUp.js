import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import FormInput from "../../components/FormInput";
import TextHeader from "../../components/TextHeader";
import { auth, db } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import handleAuthError from "../../utils/handleAuthError";
import LoadingButton from "../../components/LoadingButton";
import { addDoc, collection } from "firebase/firestore";

export default function signUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    fullName: "",
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
    if (
      (credentials.email === "" || credentials.password === "",
      credentials.fullName === "")
    ) {
      Toast.show({ type: "error", text1: "Please enter all fields" });
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );

      const docRef = await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        email: credentials.email,
        fullName: credentials.fullName,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);

      router.replace("/(tabs)/discover");
    } catch (error) {
      handleAuthError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
            value={credentials.fullName}
            onChangeText={(value) => handleInputChange("fullName", value)}
            handleSubmit={handleSubmit}
            autoFocus
          />

          <FormInput
            label="Your Email"
            value={credentials.email}
            onChangeText={(value) => handleInputChange("email", value)}
            inputMode="email"
            handleSubmit={handleSubmit}
          />

          <FormInput
            label="Your Password"
            value={credentials.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry
            handleSubmit={handleSubmit}
          />
        </View>

        <View className="mt-16 w-4/5 self-center" style={{ gap: 15 }}>
          <LoadingButton
            text="Sign Up"
            onPress={handleSubmit}
            className="rounded-lg bg-white py-1.5"
            textClass="font-mediumFont text-black text-lg"
            isLoading={isLoading}
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
