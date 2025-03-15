import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import { Margin } from '../../theme';

const CustomButton = ({label, Icon, onPress, backgroundColor, isFlex, marginhorizontal
, Padding

}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
   
        flex : isFlex? 1 :0 ,
        backgroundColor: backgroundColor,
        borderRadius: 25,
        padding: Number(Padding),
        marginHorizontal: Number(marginhorizontal),
        marginBottom: Margin.margin25,
        flexDirection: 'row',
        alignItems: 'center',
        elevation:15
      }}>
      {Icon !== undefined ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 4,
            position: 'absolute',
            left: 20,
            borderRadius: 10,
            alignItems:'flex-end',
    
          }}>
          {Icon}
        </View>
      ) : null}

      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
          flex: 1,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
