import { StyleSheet } from "react-native";
import { scaled, moderateScale, scaledSize, scaleHeight,scaleWidth } from "../../utils";
import { Margin } from "../../theme";
export const styles = StyleSheet.create({
    container_Form: {
         width: scaleWidth(336),
         maxHeight: scaleHeight(660),
        marginTop: scaleHeight(24),
        paddingVertical: scaleHeight(16),
        alignSelf: "center",
        borderRadius: moderateScale(25),
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        alignItems: "center",
    },
    container_Camera: {
        ...scaled(99),
        backgroundColor: "rgba(249, 249, 255, 1)",
        borderRadius: 60,
        marginTop: scaleHeight(25),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: scaleHeight(20)
    },

    button: {
        alignSelf: "center",
        backgroundColor: "transparent",
        alignItems: "center",
        borderRadius: 25,
    },
    containerBtn: {
        alignSelf: 'center',

    },
    container_Clause: {

        flexDirection: "row",

    },
    text: {
        fontSize: scaledSize(16),
        lineHeight: scaleHeight(18.75),
        fontWeight: "400",
        color: "#363D4E"
    },
    container_signintxt: {
        flexDirection: "row",
        gap: moderateScale(6),
        marginTop: scaleHeight(12),
    }
});
