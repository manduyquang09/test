import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scaledSize, scaleHeight, scaleWidth, scaled} from '../utils';
import {DELETE} from '../../Assets';
import { Colors } from '../theme';
const PickPictureBox = () => {
  return (
    <View
      style={{
        width: scaleWidth(160),
        height: scaleHeight(196),
        borderWidth: 1,
        backgroundColor: '#FF41411A',
        borderColor: Colors.PRIMARY,
        borderStyle: 'dashed',
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          ...scaled(33),
          backgroundColor: Colors.WHITE,
          borderRadius: moderateScale(16.5),
          position: 'absolute',
          top: scaleHeight(16),
          left: scaleWidth(11),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DELETE />
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <LinearGradient
          style={{
            ...scaled(52),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 26,
          }}
          colors={[Colors.LIGHT_PINK, Colors.PINK]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text
            style={{
              color: Colors.WHITE,

              fontSize: scaledSize(25),
              fontWeight: '400',
            }}>
            +
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PickPictureBox;
