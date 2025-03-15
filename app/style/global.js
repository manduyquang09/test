import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../utils/dimensions';
export const globalStyle = StyleSheet.create({
  background_Img: {
    flex: 1,
  },

  button: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 25,
  },
  containerBtn: {
    elevation: 8,
    borderRadius: 25,
    paddingVertical: scaleHeight(14),
    width: scaleWidth(295),
    borderRadius: 25,
  },
  container_Clause: {
    flexDirection: 'row',
  },
  text: {
    fontSize: scaledSize(16),
    lineHeight: scaleHeight(18.75),
    fontWeight: '400',
    color: '#A6A3B8',
  },
  bottom_Line: {
    width: scaleWidth(134),
    height: scaleHeight(5),
    borderRadius: 2.5,
    backgroundColor: '#FF4E98',
    position: 'absolute',
    bottom: scaleHeight(15),
    alignSelf: 'center',
  },
});
