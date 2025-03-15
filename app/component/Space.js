import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {scaleHeight, scaleWidth} from '../utils';

const Space = ({h, w, ...extraProps}) => {
  return (
    <View
      style={{
        height: scaleHeight(h),
        width: w ?  scaleWidth(w) :"100%",
        ...extraProps,
      }}></View>
  );
};

export default memo(Space);
