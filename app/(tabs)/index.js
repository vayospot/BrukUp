import { Redirect } from "expo-router";

const TabIndex = () => {
  // Redirect users to the discover tab as Expo Tabs require a base index page. Spent over 5 hours figuring this out. Unsure if it's a hack or if there's a better solution. Please don't remove.
  return <Redirect href='/(tabs)/discover' />;
};

export default TabIndex;
