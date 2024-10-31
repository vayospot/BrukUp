import { Image } from "react-native";

export default function UserProfileImage({ size, imgUrl, rounded = true }) {
  return (
    <Image
      source={imgUrl ? { uri: imgUrl } : require("../assets/images/avatar.jpg")}
      style={{ width: size, height: size }}
      className={`${rounded ? "rounded-full" : ""}`}
    />
  );
}

