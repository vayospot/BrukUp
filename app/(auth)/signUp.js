import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { auth, db } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";
import handleAuthError from "../../utils/handleAuthError";
import validateDateString from "../../utils/validateDateString";
import FormInput from "../../components/FormInput";
import TextHeader from "../../components/TextHeader";
import LoadingButton from "../../components/LoadingButton";

export default function signUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const handleInputChange = (fieldName, value) => {
    setCredentials((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const validateForm = () => {
    const { fullName, dateOfBirth, email, password } = credentials;

    if (
      fullName === "" ||
      dateOfBirth === "" ||
      email === "" ||
      password === ""
    ) {
      Toast.show({ type: "error", text1: "Please fill all fields" });
      return false;
    }

    try {
      validateDateString(dateOfBirth, {
        isDateOfBirth: true,
        minimumAge: 18,
      });

      return true;
    } catch (error) {
      Toast.show({ type: "error", text1: error.message });
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const { email, password, fullName, dateOfBirth } = credentials;
      const { age } = validateDateString(dateOfBirth, {
        isDateOfBirth: true,
        minimumAge: 18,
      });

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email,
        fullName,
        dateOfBirth,
        age,
        location: "",
        bio: "",
        image: "",
        imageHigh: "",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      
      // onAuthStateChanged in RootLayout handles app initialization and redirection.
      // isLoading resets to false on component unmount.
    } catch (error) {
      setIsLoading(false);
      handleAuthError(error);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-primary p-4"
      contentContainerStyle={{ gap: 100 }}
    >
      <TextHeader
        className="items-center"
        title="Create Account"
        subtitle="Join the community"
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
            label="Date of Birth (YYYY-MM-DD)"
            value={credentials.dateOfBirth}
            onChangeText={(value) => handleInputChange("dateOfBirth", value)}
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
    </ScrollView>
  );
}
