import { View, Text, ImageBackground } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import fetchUserData from "../../../services/data";

import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

export default function GridLayout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await fetchUserData();
        setData(userData);
      } catch (error) {
        alert("There was an error getting the data. Sorry about that.");
      }
    }

    getUserData();
  }, []);

  return (
    <MasonryList
      data={data}
      renderItem={MatchCard}
      numColumns={2}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

function MatchCard({ item }) {
  return (
    <View
      className={`rounded-xl border-white border m-1 overflow-hidden`}
      style={{
        height: item.height,
      }}
    >
      <ImageBackground
        source={{ uri: item.image }}
        resizeMode='cover'
        className='w-full h-full relative justify-center items-center'
      >
        <LinearGradient
          colors={["#00000040", "#00000040"]}
          className='absolute bottom-0 w-full flex-row justify-between px-3 py-2'
        >
          <Text className='text-white font-questrial'>{item.title}</Text>
          <View className='bg-neutral-900 rounded-full px-2 items-center justify-center'>
            <Text
              className='text-white font-questrial'
              style={{ fontSize: 10 }}
            >
              79%
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
