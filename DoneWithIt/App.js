import { StatusBar } from "expo-status-bar";
import { Alert, Button } from "react-native";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Image,
} from "react-native";

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

      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          blurRadius={2}
          fadeDuration={2000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
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
