import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale, scaledSize, scaleHeight, scaleWidth } from "../utils";

const GradientButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <LinearGradient
        colors={["#FF9FC7", "#F32878"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonBackground}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: scaleWidth(335),
    height:scaleHeight(50),
    position: "relative",
    top: 420,
    borderRadius:moderateScale(25),
    overflow: "hidden",
  },
  buttonBackground: {
    flex: 1,
    borderRadius:  moderateScale(25),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: scaledSize(16),
    fontWeight: "700",
    lineHeight: scaleHeight(18.75),
    textAlign: "center",
    color: "#FFFAED",
    textDecorationLine: "underline",
  },
});

export default GradientButton;
