import { View, Text,Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { useOAuth } from '@clerk/clerk-expo';
import { StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from './../hooks/useWarmUpBrower.jsx';
import * as Linking from 'expo-linking';



WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  if (Platform.OS !== 'web') {
    useWarmUpBrowser();
  }

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (error) {
      console.error(error);
    }
  }, [startOAuthFlow]);

  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:50,
        }}>
      <Image source={require('./../assets/images/login.png')} 
        style={{
            width:250,
            height:400,
            borderRadius:20,
            borderWidth:6,
            borderColor:'#000',
        }}
      />
      </View>

      <View
      style={styles.subContainer}>
        <Text style={{fontSize:30,fontFamily:'outfit-bold',textAlign:'center'}}>
            Your Ultimate <Text
                style={{color:'#7F57F1'}}
            >Community Business Directory</Text> App
        </Text>
        <Text style={{
            fontSize:15,
            fontFamily:'outfit',
            textAlign:'center',
            marginVertical:15,
            color:'#8f8f8f'
        }}>Find your favorite business near your and post you own business to your commmunity</Text>
        <TouchableOpacity style={styles.btn}
        onPress={onPress}>
            <Text style={{
                textAlign:'center',
                color:'#fff',
                fontFamily:'outfit',
            }}>Let's get started </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20,

  },
  btn:{
    backgroundColor:'#7F57F1',
    padding:16,
    borderRadius:99,
  }
})
