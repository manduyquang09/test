import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../component/InputFiled';
import CustomButton from '../component/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigation.replace("app")
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
          borderBottomRightRadius: 300,
        }}
      >
        <View
          style={{
            height: '20%',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Login
          </Text>
        </View>

        <View style={{ height: '20%' }} />

        <InputField
          leftIcon={<Icon name="user" size={20} color="white" />}
          label="Email"
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          }}
          hasError={errors.email?.message}
        />

        <InputField
          leftIcon={<Icon name="lock" size={20} color="white" />}
          label="Password"
          control={control}
          name="password"
          isPassword
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
              message: 'Password must include an uppercase letter and a special character',
            },
          }}
          hasError={errors.password?.message}
        />

        <View style={{ height: 65 }} />

        <CustomButton
          label="Login"
          marginhorizontal={60}
          Padding={15}
          backgroundColor="blue"
          onPress={handleSubmit(onSubmit)}
        />

        <Text style={{ textAlign: 'center' }}>Forgot your Password?</Text>
      </View>
      <View style={{ paddingBottom:40, alignItems: 'center' }}>
        <View
          style={{
            marginHorizontal: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <View style={{ height: 1, backgroundColor: 'grey', flex: 1 }} />
          <Text style={{ paddingHorizontal: 10 }}>or connect with</Text>
          <View style={{ height: 1, backgroundColor: 'grey', flex: 1 }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: 15,
          }}
        >
          <CustomButton
            Icon={<Icon name="facebook" size={15} />}
            isFlex
            label="Facebook"
            backgroundColor="blue"
            Padding={10}
            marginhorizontal={20}
          />

          <CustomButton
            Icon={<Icon name="google" size={15} />}
            isFlex
            label="Google"
            backgroundColor="green"
            Padding={10}
            marginhorizontal={10}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Don't have an account?</Text>
          <Text style={{ marginLeft: 10, color: 'blue' }}>Sign up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
