import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../../utils/dimensions';
import {Margin} from '../../theme';
export const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: scaleHeight(121),
    left: scaleWidth(34),
    color: '#363D4E',
    fontSize: scaledSize(18),
    fontWeight: '400',
    lineHeight: scaleHeight(21.09),
  },
  container_Box: {
    position: 'absolute',
    top: scaleHeight(175),
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 15,
  },
  container_Btn: {
    position: 'absolute',
    top: scaleHeight(391),
    alignSelf: 'center',
  },
});
