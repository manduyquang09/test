import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../../utils/dimensions';
export const styles = StyleSheet.create({
  background_Img: {
    flex: 1,
  },
  container_box: {
    position: 'absolute',
    top: scaleHeight(192),
    alignSelf: 'center',
    gap: moderateScale(16),
  },
  containar_btn: {
    position: 'absolute',
    top: scaleHeight(631),
    alignSelf: 'center',
  },
  text: {
    position: 'absolute',
    top: scaleHeight(121),
    left: scaleWidth(34),
    color: '#363D4E',
    fontSize: scaledSize(18),
    fontWeight: '400',
    lineHeight: scaleHeight(21.09),
    width: scaleWidth(335),
    height: scaleHeight(42),
  },
  row: {flexDirection: 'row', gap: moderateScale(15)},
});
