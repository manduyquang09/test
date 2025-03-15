import React, { memo } from 'react';
import { StyleSheet, Text, TouchableHighlight ,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../utils/dimensions';
import { Colors } from '../theme';

const CustomButton = ({
  label,
  paddHorizontal,
  paddVertical,
  onPress,
  disabled,
  isY,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={
          disabled === true
            ? [Colors.LIGHT_GREY, Colors.LIGHT_BLACK]
            : [Colors.LIGHT_PINK, Colors.PINK]
        }
        style={[
          styles.gradient,
          {
            paddingHorizontal: paddHorizontal
              ? scaleWidth(paddHorizontal)
              : scaleWidth(138),
            paddingVertical: paddVertical
              ? scaleHeight(paddVertical)
              : scaleHeight(14),
          },
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: isY ? 0 : 1, y: isY ? 1 : 0 }}
      >
        <Text style={styles.text}>{label != null ? label : 'Tiếp Tục'}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: moderateScale(25),
  },
  gradient: {
    borderRadius: moderateScale(25),
  },
  text: {
    fontWeight: '700',
    fontSize: scaledSize(16),
    textAlign: 'center',
    color: '#FFFAED',
  },
});

export default memo(CustomButton);
