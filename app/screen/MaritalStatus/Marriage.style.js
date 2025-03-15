import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../../utils/dimensions';
import {Margin} from '../../theme';
import fontSize from '../../theme/fontSize';
export const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: fontSize.font18,
    color: '#363D4E',
    marginTop: scaleHeight(Margin.margin36),
    marginLeft: scaleWidth(Margin.margin34),
    lineHeight: scaleHeight(21.09),
  },
  container_Box: {
    marginTop: Margin.margin22,
    alignSelf: 'center',
    gap: moderateScale(Margin.margin15),
  },
  row: {
    flexDirection: 'row',
    gap: moderateScale(Margin.margin15),
  },
  container_Btn: {
    position: 'absolute',
    bottom: scaleHeight(131),
    alignSelf: 'center',
  },
});
