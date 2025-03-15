import React, {memo} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  moderateScale,
  scale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../Assets';
import {scaled} from '../utils/helpers';
const CustomHeader = ({title}) => {
  //const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          Alert.alert(JSON.stringify(scaled(40)));
        }}
        //   onPress={()=>{ navigation.goBack()}}
      >
        <Image
          source={IMAGES.arrowBack}
          width={scaleWidth(15)}
          height={scaleHeight(12)}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(20),
  },
  iconContainer: {
    position: 'absolute',
    left: scaleWidth(20),
    ...scaled(40),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: scaledSize(22),
    lineHeight: scaleHeight(25.78),
    textAlign: 'center',
  },
});

export default CustomHeader;
