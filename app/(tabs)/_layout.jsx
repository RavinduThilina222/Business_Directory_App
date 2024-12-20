import { View,Text } from "react-native-web";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../constrains/colors"; // Update the import path

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.Primary,
            tabBarInactiveTintColor: Colors.Gray, // Set the color for inactive tabs
        }}>
            <Tabs.Screen name='home'
            options={{
                tabBarLabel: 'Home',
                tabBarIcon:({color}) => <FontAwesome name="home" size={24} color={color} />
            }}/>
            <Tabs.Screen name='explore'
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon:({color}) => <FontAwesome name="search" size={24} color={color} />
            }}/>
            <Tabs.Screen name='profile'
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon:({color}) => <Ionicons name="people-circle" size={24} color={color} />
            }}/>
        </Tabs>
    );
}
