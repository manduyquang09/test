import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SuccessScreen, OtpScreen, SignupScreen} from '../screen/index';
const Stack = createStackNavigator();
export const route = {
  SUCCESS: 'success',
  SIGNUP: 'signup',
  OTP: 'otp',
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={route.SIGNUP}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={route.SIGNUP}
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={route.OTP}
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={route.SUCCESS}
          component={SuccessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
