import {StyleSheet} from 'react-native';
import {moderateScale, scaledSize, scaleHeight, scaleWidth} from '../../utils';
import { Colors } from '../../theme';
export const styles = StyleSheet.create({
  text: {
    width: scaleWidth(289),
    height: scaleHeight(19),
    position: 'absolute',
    bottom: scaleHeight(673),
    left: scaleWidth(24),
    fontWeight: '400',
    fontSize: scaledSize(16),
    color: Colors.LIGHT_BLACK,
  },
  container_box: {
    position: 'absolute',
    top: scaleHeight(169),
    gap: moderateScale(15),
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: moderateScale(15),
  },
});
