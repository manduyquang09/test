import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const InputField = ({
  isPassword,
  label,
  control,
  name,
  rules,
  leftIcon,
  rightIcon,
  isMultiple,
  hasError,
}) => {
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#e9e8e8',
          alignItems: 'center',
          borderRadius: 25,
          paddingHorizontal: 20,
          paddingVertical: 3,
          elevation: 4,
        }}
      >
        {leftIcon}
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={label}
              style={{
                flex: 1,
                fontSize: 16,
                marginLeft: 10,
              }}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={isPassword}
              multiline={isMultiple}
            />
          )}
        />
        {rightIcon}
      </View>
      {hasError && (
        <Text style={{ color: 'red', marginTop: 5, marginLeft: 10 }}>{hasError}</Text>
      )}
    </View>
  );
};

export default InputField;
