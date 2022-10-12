import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={HomeScreen} />
        <Stack.Screen name="main" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
