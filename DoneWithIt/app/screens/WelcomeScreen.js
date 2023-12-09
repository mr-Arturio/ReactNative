import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

// Import your image
import yourImage from "../assets/background.jpg";

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={yourImage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>

      {/* Red Rectangle for LOGIN */}
      <View style={styles.loginButton}></View>
      {/* Green Rectangle for REGISTER */}
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65", // Red color
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4", // Green color
  },
  logo: {
    width: 100,
    height: 100,

  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
