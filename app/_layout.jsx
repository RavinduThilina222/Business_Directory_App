import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Login from './../components/LoginScreen'; // Import the LoginScreen component
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import Home from './(tabs)/home.jsx';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }



  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <SignedIn>
          <View>
            <Home/>
            <Slot />
          </View>
        </SignedIn>
        <SignedOut>
          <View>
            <Login />
          </View>
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}