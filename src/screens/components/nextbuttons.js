import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import style from '../../style/style'

const Mybutton=(props)=>{
    return <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{ padding: 5, marginTop: 2 }}
          title="İleri"
          onPress={() => props.navigation.navigate(props.next)}
        >
          <Image
            source={require("../../../assets/soruyugec.png")}
            style={style.yuvarlakKeliDikdrtgen1Kopya2}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          title="İleri"
          style={{ padding: 5 }}
          onPress={() => props.navigation.navigate(props.next)}
        >
          <Image
            source={require("../../../assets/sonrakisoru.png")}
            style={style.yuvarlakKeliDikdrtgen1Kopya2}
          ></Image>
        </TouchableOpacity>
      </View>
}
export default Mybutton