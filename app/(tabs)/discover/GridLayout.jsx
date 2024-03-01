import { View, Text } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import DATA from "../../../services/data";

export default function GridLayout() {
  return (
    <MasonryList
      data={DATA}
      renderItem={GridItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

function GridItem({ item }) {
  return (
    <View
      className={`justify-center items-center rounded-xl border-white border m-1`}
      style={{
        height: item.height,
      }}
    >
      <Text className='text-white font-questrial'>{item.title}</Text>
    </View>
  );
}
