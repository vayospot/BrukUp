import { View } from "react-native";
import UserProfileImage from "./UserProfileImage";

export default function StackedImages({
  imageURLList,
  numOfImages,
  imageSize,
  overlap,
}) {
  const visibleImages = imageURLList.slice(0, numOfImages);
  const totalWidth = (visibleImages.length - 1) * overlap + imageSize;

  return (
    <View
      className="relative flex-row"
      style={{ width: totalWidth, height: imageSize }}
    >
      {visibleImages.map((imageURL, index) => (
        <View
          key={index}
          className="absolute"
          style={{
            left: index * overlap,
            zIndex: visibleImages.length - index,
          }}
        >
          <UserProfileImage imgUrl={imageURL} size={imageSize} />
        </View>
      ))}
    </View>
  );
}
