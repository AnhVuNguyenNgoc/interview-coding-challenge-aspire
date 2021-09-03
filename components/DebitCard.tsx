import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import * as React from "react";
import Colors from "../constants/Colors";
import Card from "./Card";
const INIT_COUNT = 0;
const PADDING = 24;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function DebitCard({ path }: { path: string }) {
  const [count, setCount] = React.useState(INIT_COUNT);

  // Name input ||| other component change => cũng sẽ vào lại useEffect, do có một function sẽ gọi lại nhiều lần
  React.useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          Debit Card
        </Text>
        
        <Text style={{ fontSize: 14, color: "white", marginTop: 24 }}>
          Available balance
        </Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 22,
              backgroundColor: Colors.green,
              alignItems: "center",
              justifyContent: 'center',
              borderRadius: 5,
              borderWidth: 0,
              marginRight: 5
            }}
          >
            <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>
              $$
            </Text>
          </View>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            3,000
          </Text>
        </View>
      </View>
      <View style={styles.functionContainer}>
        <View style={styles.functionCardContainer}>
        
         <Text style={{ fontSize: 14, color: "black" }}>
              Hide card number
         </Text>
        </View>
        <Card></Card>
       <View style={styles.servicesContainer}>
          <Text>first word</Text>
        </View>
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
  headerContainer: {
    flex: 0.25,
    backgroundColor: Colors.blue,
    marginHorizontal: 24,
  },
  functionContainer: {
    flex: 0.75,
    backgroundColor: Colors.white,

    borderRadius: 23,
    borderWidth: 0,
    borderColor: Colors.white,
  },
  cardContainer: {
    zIndex: 99,
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
  functionCardContainer: {
    position: "absolute",
    width: 151,
    height: 50,
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,

    top: -80,
    right: 25,
  },
  servicesContainer: {
    flex: 1,
    marginTop: 200,
    backgroundColor: Colors.blue,

    alignItems: "center",
    marginHorizontal: 24,
  },

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
