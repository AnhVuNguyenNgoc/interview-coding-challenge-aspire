import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import * as React from "react";
import Colors from "../constants/Colors";

const INIT_COUNT = 0;
const PADDING = 24;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function Card({ path }: { path: string }) {
  const [count, setCount] = React.useState(INIT_COUNT);

  // Name input ||| other component change => cũng sẽ vào lại useEffect, do có một function sẽ gọi lại nhiều lần
  React.useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
       <View style={styles.cardContainer}>

       </View>
    </>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "absolute",
    
        width: 379,
        height: 220,
    
        backgroundColor: Colors.green,
        borderRadius: 15,
        borderWidth: 0,
    
        top: -50,
    
        marginHorizontal: 24,
        color: Colors.white,
      },
});
