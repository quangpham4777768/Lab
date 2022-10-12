import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from './Logo.png'
import CustomButton from '../components/CustomButton';

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
  });