import Toast from "react-native-toast-message";

export function SignInWithGoogle() {
  Toast.show({
    type: "error",
    text1: "Google sign-in is temporarily unavailable.",
  });
  return;
}

export function SignInWithApple() {
  Toast.show({
    type: "error",
    text1: "Apple sign-in is temporarily unavailable.",
  });
  return;
}

export function SignInWithFacebook() {
  Toast.show({
    type: "error",
    text1: "Facebook sign-in is temporarily unavailable.",
  });
  return;
}
