import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";

export default function LoadingButton({
  className,
  isLoading,
  onPress,
  text,
  textClass,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className={`relative items-center justify-center ${className} ${isLoading && "opacity-50"}`}
      {...props}
    >
      <Text className={`${textClass} ${isLoading && "opacity-0"}`}>{text}</Text>
      {isLoading && (
        <ActivityIndicator className="absolute" color={Colors.primary} />
      )}
    </TouchableOpacity>
  );
}
