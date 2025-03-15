import React, {memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scaleHeight, scaleWidth, scaledSize, moderateScale, scaled} from '../utils';
import {CHECK} from '../../Assets';
import {globalStyle} from '../style/global';
const CustomTab = ({isCompleted}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container_Check,
          {backgroundColor: isCompleted ? '#CDCDCD' : '#01BCAD'},
        ]}>
        <CHECK />
      </View>
      <View style={{marginLeft: scaleWidth(16)}}>
        <Text
          style={[
            globalStyle.text,
            {
              fontWeight: '700',
              color: '#363D4E',
              lineHeight: scaleHeight(21.68),
            },
          ]}>
          Tên
        </Text>

        <Text style={styles.desc}>Tải lên những bức ảnh đẹp nhất của bạn.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingVertical: scaleHeight(26),
    paddingLeft: scaleWidth(21),
    marginHorizontal: scaleWidth(20),
    borderRadius: moderateScale(16),
    marginBottom: scaleHeight(15),
  },
  container_Check: {
    ...scaled(46),
    borderRadius: moderateScale(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontWeight: '400',
    fontSize: scaledSize(16),
    color: '#A6A3B8',
    lineHeight: scaleHeight(18.75),
    maxWidth: scaleWidth(224),
    maxHeight: scaleHeight(38),
    marginTop: scaleHeight(4),
  },
});

export default CustomTab;
