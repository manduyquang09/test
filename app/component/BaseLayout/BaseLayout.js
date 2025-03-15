import React, { memo } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import { IMAGES } from '../../../Assets';
import Space from '../Space';
import { Colors } from '../../theme';
import { scaleHeight, scaleWidth } from '../../utils';

const BaseLayout = ({ children, style ,bottomLine }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        style={{ flex: 1 }}
        source={IMAGES.backdgroungImg}
        resizeMode="cover">
        {children}
 {bottomLine === true &&   <View
    style={{
      position:'absolute', 
      alignSelf:'center',
      bottom:scaleHeight(14), 
      width:scaleWidth(134),
      height:scaleHeight(5),
      backgroundColor:Colors.PRIMARY, 
    }}
    ></View>}
      </ImageBackground>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default memo(BaseLayout);
