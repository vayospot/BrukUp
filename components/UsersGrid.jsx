import { FlatList } from "react-native";
import TownUserImageCard from "./TownUserImageCard";

export default function UserGrid({
  usersData,
  imageCardSize,
  numOfColumns,
  containerStyle,
}) {
  return (
    <FlatList
      data={usersData}
      renderItem={({ item }) => (
        <TownUserImageCard
          size={imageCardSize}
          imageUrl={item.image}
          name={item.fullName.split(" ")[0]}
        />
      )}
      keyExtractor={(item) => item.uid}
      numColumns={numOfColumns}
      contentContainerStyle={{ gap: 20, ...containerStyle }}
    />
  );
}
