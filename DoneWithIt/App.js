import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>
        {" "}
        Laboris proident id id aute qui nulla culpa esse reprehenderit commodo
        veniam do est ea. Nisi aliquip eu labore eu magna nostrud velit duis ex
        magna adipisicing. Ullamco anim incididunt voluptate amet aliquip
        deserunt duis deserunt sint fugiat cillum qui. Sunt ea amet occaecat
        aute elit.{" "}
      </Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
