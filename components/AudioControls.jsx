import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AudioControls({ muted, toggleMute }) {
  return (
    <LinearGradient
      colors={[Colors.primary, "transparent"]}
      locations={[0.45, 1]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      className="absolute inset-x-0 bottom-0 flex-row items-center justify-center pb-14 pt-5"
    >
      <TouchableOpacity
        className="rounded-full bg-accent p-3"
        onPress={toggleMute}
        activeOpacity={0.7}
      >
        <Ionicons
          name={muted ? "mic-off-outline" : "mic-outline"}
          size={40}
          color={"white"}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}
