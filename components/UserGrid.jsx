import { FlatList } from "react-native";
import TownUserImageCard from "./TownUserImageCard";

export default function UserGrid({
  userData,
  imageCardSize,
  numOfColumns,
  containerStyle,
}) {
  return (
    <FlatList
      data={userData}
      renderItem={({ item }) => (
        <TownUserImageCard
          size={imageCardSize}
          imageUrl={item.image}
          name={item.name}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={numOfColumns}
      contentContainerStyle={{ gap: 20, ...containerStyle }}
    />
  );
}
