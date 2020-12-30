import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import style from "../style/style";
const SecondScreen = (props) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      
      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{ padding: 5, marginTop: 2 }}
          onPress={() => props.navigation.navigate("FifthScreen")}
        >
          <Image
            source={require("../../assets/soruyugec.png")}
            style={style.yuvarlakKeliDikdrtgen1Kopya2}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => props.navigation.navigate("FifthScreen")}
        >
          <Image
            source={require("../../assets/sonrakisoru.png")}
            style={style.yuvarlakKeliDikdrtgen1Kopya2}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
});
export default SecondScreen;
