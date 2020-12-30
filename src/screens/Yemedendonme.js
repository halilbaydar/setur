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
import styles from "../style/style";
const Yemedendonme = () => {
    const [yemek1, seteve1] = React.useState(false);
    const [yemek2, setyemek2] = React.useState(false);
    const [yemek3,setyemek3]=React.useState(false)
    const [yemek4,setyemek4]=React.useState(false)
    return <View style={{flexDirection:'row' ,padding:5}}>
        <ScrollView style={{padding:5}} horizontal={true}>
          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: yemek1 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={yemek1 ? "checked" : "unchecked"}
          onPress={() => {
            setyemek1(!yemek1);
            console.log({ yemek1: !yemek1 });
          }}
          checked={yemek1}>
          <Image source={require('../../assets/yemek1.jpeg')} style={styles.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: yemek2 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={yemek2 ? "checked" : "unchecked"}
          onPress={() => {
            setyemek2(!yemek2);
            console.log({ yemek2: !yemek2 });
          }}
          checked={yemek2}>
          <Image source={require('../../assets/yemek2.jpeg')} style={styles.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: yemek3 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={yemek3 ? "checked" : "unchecked"}
          onPress={() => {
            setyemek3(!yemek3);
            console.log({ yemek3: !yemek3 });
          }}
          checked={yemek3}>
          <Image source={require('../../assets/yemek3.jpg')} style={styles.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: yemek4 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={yemek4 ? "checked" : "unchecked"}
          onPress={() => {
            setyemek4(!yemek4);
            console.log({ yemek4: !yemek4 });
          }}
          checked={yemek4}>
          <Image source={require('../../assets/yemek4.jpg')} style={styles.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>
        </ScrollView>
    </View>
}

export default Yemedendonme