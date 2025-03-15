import React, {memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Margin} from '../theme';
import { scaled, moderateScale, scaledSize, scaleHeight,scaleWidth } from '../utils';

const SquareBox = ({title, icon, bgIconColor}) => {
  return (
    <View style={styles.square_box}>
      <View style={[{backgroundColor: bgIconColor}, styles.container_icon]}>
        {icon}
      </View>
      <Text style={styles.text_box}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square_box: {
    borderRadius: moderateScale(20),
    backgroundColor: Colors.WHITE,
    width: scaleWidth(160),
    height: scaleHeight(180),
    alignItems: 'center',
    elevation:0.3
  },
  container_icon: {
    ...scaled(75),
    marginTop: Margin.margin30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: moderateScale(90),
  },
  text_box: {
    minWidth: scaleWidth(83),
    maxWidth: scaleWidth(91),
    height: scaleHeight(42),
    minHeight:scaleHeight(21),
    fontWeight: '500',
    fontSize: scaledSize(18),
    lineHeight: scaleHeight(21.09),
    textAlign: 'center',
    marginTop: scaleHeight(Margin.margin20+3),

    
  },
});

export default SquareBox;
