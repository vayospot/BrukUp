import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import UserProfileImage from "../../components/UserProfileImage";
import Colors from "../../constants/Colors";
import useTabBarVisibility from "../../utils/useTabBarVisibility";

function TabBarIcon({ name }) {
  return <Ionicons name={name} size={24} color='#ffffff' />;
}

export default function Layout() {
  const shouldHideTabBar = useTabBarVisibility();

  return (
    <Tabs
      backBehavior='none'
      sceneContainerStyle={{
        backgroundColor: Colors.primary,
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          borderTopColor: "transparnt",
          display: shouldHideTabBar() ? "none" : "flex",
        },
      }}
    >
      <Tabs.Screen
        name='discover'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "compass" : "compass-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "chatbox" : "chatbox-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name='connect'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "people" : "people-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name='journal'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "book" : "book-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: () => <UserProfileImage size={25} />,
        }}
      />
    </Tabs>
  );
}
