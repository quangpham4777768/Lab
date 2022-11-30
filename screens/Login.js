import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from './Logo.png'

const CustomButton = (onPress, text) => {
  return (
  <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
  </Pressable>
)
}


const Login = () => {
    // const {height} = useWindowDimensions();
    const onSignInPressec =() => {
        console.warn("Sign in");
    }
    return (
    <View>
        <Image source={Logo} style={{styles}} resizeMode="contain"/>
        <CustomButton text="Sign In" onPress={onSignInPressec} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
    },
    logo: {
      width: '70%',
      maxWidth: 300,
      height: 100,
    },
      container:{
          backgroundColor: "#3B71F3",
          width : '100%',
          padding : 15,
          marginVertical : 5,
  
          alignItems :'center',
          borderRadius : 5,
      },
      text : {
          fontWeight :'bold',
          color:"white",
      }
      
  });