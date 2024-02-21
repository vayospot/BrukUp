import { Image } from "react-native";

export default function UserProfile({ size }) {
  return (
    <Image
      source={require("../assets/images/profile-image.jpg")}
      style={{ width: size, height: size }}
      className='rounded-full'
    />
  );
}
