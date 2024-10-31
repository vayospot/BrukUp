import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import timestampToDate from "../utils/timestampToDate";

export default function JournalPreview({
  journal: { id, title, content, updatedAt },
}) {
  return (
    <Link href={`/journal/${id}`} asChild>
      <TouchableOpacity
        className="flex-row justify-between py-3.5"
        style={{ gap: 20 }}
      >
        <View>
          <Text className="font-lightFont text-sm text-neutral-400">
            {timestampToDate(updatedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
            })}
          </Text>
        </View>

        <View className="flex-1" style={{ gap: 3 }}>
          <Text className="font-boldFont text-lg text-white" numberOfLines={1}>
            {title}
          </Text>
          <Text
            className="font-regularFont text-sm text-neutral-400"
            numberOfLines={2}
          >
            {content}
          </Text>
        </View>

        <View>
          <Ionicons name="chevron-forward-outline" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </Link>
  );
}
