import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";
import style from "../style/style";
const Konaklama = () => {
    const [otel1, setotel1] = React.useState(false);
    const [otel2, setotel2] = React.useState(false);
    const [otel3,setotel3]=React.useState(false)
    return <View style={{flexDirection:'row' ,padding:5}}>
        <ScrollView style={{ padding:5}}
        horizontal={true}>
          <TouchableOpacity
      
          style={{
            padding: 5,
            backgroundColor: otel1 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={otel1 ? "checked" : "unchecked"}
          onPress={() => {
            setotel1(!otel1);
            console.log({ otel1: !otel1 });
          }}
          checked={otel1}>
          <Image source={require('../../assets/otel1.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: otel2 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={otel2 ? "checked" : "unchecked"}
          onPress={() => {
            setotel2(!otel2);
            console.log({ otel: !otel2 });
          }}
          checked={otel2}>
          <Image source={require('../../assets/anadolu.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: otel3 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={otel3 ? "checked" : "unchecked"}
          onPress={() => {
            setotel3(!otel3);
            console.log({ otel3: !otel3 });
          }}
          checked={otel3}>
          <Image source={require('../../assets/otel3.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>
        </ScrollView>
    </View>
}

export default Konaklama