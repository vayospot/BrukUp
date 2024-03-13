import { View } from "react-native";
import EmptyLayout from "../../../components/EmptyLayout";

export default function index() {
  return (
    <View className='bg-primary flex-1 justify-center items-center px-2'>
      <EmptyLayout
        heading='No Townsquare Connections'
        subHeading='Connect with people to get started.'
      />
    </View>
  );
}
