import React, {memo} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {FontSize, Margin, Padding} from '../theme';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../utils/dimensions';
const CustomInput = ({label, control, rules, name, issPassword, hassError}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginBottom: hassError == null ? scaleHeight(Margin.margin15 ): 0 ,
      }}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              {
                width: scaleWidth(295),
                height: scaleHeight(50),
                //  width:"100%",
                backgroundColor: 'rgba(249, 249, 255, 1)',

                borderRadius: moderateScale(25),
                color: '#8A8D9F',
                fontSize: scaledSize(FontSize.font16),
                lineHeight: scaleHeight(18.75),
                paddingLeft: scaleWidth(Padding.padding17),
                paddingTop: scaleHeight(Padding.padding17),
                paddingBottom: scaleHeight(Padding.padding14),
              },
            ]}
            placeholder={label}
            value={value}
            secureTextEntry={issPassword}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {hassError && (
        <Text style={{color: 'red', marginTop: 1, marginLeft: 10}}>
          {hassError}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomInput;
