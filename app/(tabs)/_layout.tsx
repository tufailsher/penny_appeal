import Bolt from "@/assets/images/Bolt";
import Wallet from "@/assets/images/Wallet";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Feather, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "orange",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",

          elevation: 0,
          borderTopWidth: 0,
          paddingVertical: 5,
          paddingBottom: 10,
          height: 70,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Fontisto name="home" size={24} color={color} />
            ) : (
              <Feather name="home" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Feather name="refresh-ccw" size={24} color={color} />
            ) : (
              <Feather name="refresh-ccw" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="auto-donate"
        options={{
          title: "Auto-donate",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="wallet-plus"
                size={30}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="wallet-plus-outline"
                size={30}
                color={color}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="round-up"
        options={{
          title: "Round-up",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <View>
                <Fontisto name="pie-chart-1" size={24} color={color} />
              </View>
            ) : (
              <View>
                <Fontisto name="pie-chart-1" size={24} color={color} />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "person" : "person"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
