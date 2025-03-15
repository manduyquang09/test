import { StyleSheet } from 'react-native';
import {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '../../utils/dimensions';
import { Colors, FontSize, Margin } from '../../theme';

export const styles = StyleSheet.create({
  text: {
    width: scaleWidth(190),
    height: scaleHeight(21),
    fontWeight: "700",
    fontSize: scaledSize(FontSize.font16),
    // lineHeight:scaleHeight(18.75),
    color: "#363D4E",
    marginVertical: scaleHeight(Margin.margin34),
    marginLeft: scaleWidth(Margin.margin34),
  },
  dateTxt: {
    fontWeight: "500",
    fontSize: scaledSize(FontSize.font16),
    minWidth: scaleWidth(37),
    minHeight: scaleHeight(19),
    color: "#000000",

  },
  container_Card: {
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
   // alignSelf: 'center',
    // width: scaleWidth(335),
    marginHorizontal:scaleWidth(Margin.margin20),

}
,
row: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: scaleHeight(20),
  paddingBottom: scaleHeight(10),
  paddingHorizontal: scaleWidth(29.5),
  borderBottomWidth: 1,
  borderBottomColor: Colors.GREY, 
}

});
