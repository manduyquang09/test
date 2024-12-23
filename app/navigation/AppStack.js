import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DetailScreen, HomeScreen } from '../screen';
import { Text } from '@react-navigation/elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
const AppStack = () => {
    return (
      <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
    statusBarColor:"orange",
 headerStyle:{
    backgroundColor:"orange"
 }, 
 headerTintColor:"#fff", 
 headerTitleAlign:"center",

      }}
      
      >
        <Stack.Screen
        options={{headerShown:false}}
        name='home'
        component={HomeScreen}

        />
        <Stack.Screen
        name='detail'
        component={DetailScreen}

   

        />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AppStack;
