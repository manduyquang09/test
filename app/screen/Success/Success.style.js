import { StyleSheet } from "react-native";
import { moderateScale, scaledSize, scaleHeight, scaleWidth } from '../../utils/dimensions';
import { Colors } from "../../theme";
export const styles = StyleSheet.create({
    background_Img: {
        flex: 1,
    },
    container_Img: {
        position: "absolute",
        bottom: scaleHeight(499),
        alignSelf: "center"
    },
    container_Form: {
        width: scaleWidth(335),
        height: scaleHeight(291),
        position: "absolute",
        bottom: scaleHeight(98),
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        alignSelf: "center",
        elevation: 1,
        alignItems: "center"

    },
    successTxt: {
        fontWeight: "700",
        fontSize: scaledSize(22),
        lineHeight: scaleHeight(25.78),
        textAlign: "center",
        color: Colors.PRIMARY,
        marginTop: scaleHeight(44),


    }
});
