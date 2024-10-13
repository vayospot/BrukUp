import Toast from "react-native-toast-message";

export default function handleAuthError(error) {
  switch (error.code) {
    case "auth/invalid-email":
      Toast.show({ type: "error", text1: "Invalid email address" });
      break;

    case "auth/wrong-password":
      Toast.show({ type: "error", text1: "Incorrect password" });
      break;

    case "auth/invalid-credential":
      Toast.show({ type: "error", text1: "Invalid login credentials" });
      break;

    case "auth/code-expired":
      Toast.show({ type: "error", text1: "Code has expired, try again" });
      break;

    case "auth/user-not-found":
      Toast.show({ type: "error", text1: "No account found" });
      break;

    case "auth/email-already-in-use":
      Toast.show({ type: "error", text1: "Email is already in use" });
      break;

    case "auth/weak-password":
      Toast.show({ type: "error", text1: "Password is too weak" });
      break;

    case "auth/network-request-failed":
      Toast.show({
        type: "error",
        text1: "Network error. Check your connection",
      });
      break;

    case "auth/too-many-requests":
      Toast.show({
        type: "error",
        text1: "Too many attempts. Please try again later",
      });
      break;

    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      Toast.show({
        type: "error",
        text1: "Sign-in popup closed before completion",
      });
      break;

    case "auth/user-disabled":
      Toast.show({ type: "error", text1: "User account is disabled" });
      break;

    case "auth/requires-recent-login":
      Toast.show({ type: "error", text1: "Please log in again" });
      break;

    case "auth/operation-not-allowed":
      Toast.show({ type: "error", text1: "Operation not allowed" });
      break;

    default:
      Toast.show({ type: "error", text1: "Something went wrong" });
      break;
  }
}
