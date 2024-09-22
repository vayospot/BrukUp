import { Image } from "react-native";

export default function UserProfileImage({ size, imgUrl }) {
  const url = imgUrl
    ? { uri: imgUrl }
    : require("../assets/images/profile-image.jpg");
  return (
    <Image
      source={url}
      style={{ width: size, height: size }}
      className='rounded-full'
    />
  );
}
