import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import yourImage from "../assets/chair.jpg";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={yourImage}
        resizeMode="contain"
        style={styles.image}
      >
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </ImageBackground>
    </View>
  );
}