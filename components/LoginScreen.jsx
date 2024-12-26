import { View, Text,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:60,
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
        <TouchableOpacity style={styles.btn}>
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
