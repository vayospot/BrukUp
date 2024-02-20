import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import UserProfile from "../../components/UserProfile";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name='discover'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={24}
              color='black'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbox" : "chatbox-outline"}
              size={24}
              color='black'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='connect'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color='black'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='journal'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={24}
              color='black'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: () => <UserProfile size={25} />,
        }}
      />

      {/* Tabs issue fix; check app/(tabs)/index.js */}
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  );
}
