

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginScreen } from '../screen';
import AppStack from './AppStack';
const Stack = createStackNavigator()
const RootNavigator = () => {
    return (
       <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen 
        name='login'
        component={LoginScreen}
        options={{headerShown:false}}
        />
    <Stack.Screen
    
    name='app'
    component={AppStack}
    />
      </Stack.Navigator>
       </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default RootNavigator;
