import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// Import your image
import yourImage from "../assets/background.jpg";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
    
      <ImageBackground
        source={yourImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Inside</Text>
          {/* Red Rectangle for LOGIN */}
          <View style={styles.loginButton}></View>
          {/* Green Rectangle for REGISTER */}
          <View style={styles.registerButton}></View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Add a semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    width: 200,
    height: 50,
    backgroundColor: "#fc5c65", // Red color
    marginVertical: 10,
  },
  registerButton: {
    width: 200,
    height: 50,
    backgroundColor: "#4ECDC4", // Green color
    marginVertical: 10,
  },
});
