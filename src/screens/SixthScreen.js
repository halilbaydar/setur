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
import { CheckBox } from "native-base";
import style from "../style/style";
import Mybottombutton from "../../src/screens/components/nextbuttons";
const sixtscreen = ({ navigation }) => {
  const [Menemen, setMenemen] = React.useState(false);
  const [acikbufe, setacikbufe] = React.useState(false);
  const [Kuymak, setKuymak] = React.useState(false);
  const [koykahvaltisi, setkoykahvaltisi] = React.useState(false);
  const [simit, setsimit] = React.useState(false);
  const [neyimeshursa, setneyimeshursa] = React.useState(false);
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View>
          <Text style={style.soru}>Tatil sabahı kahvaltı dediğin</Text>
          <Text style={style.birdenFazlaSeenekIaretleyebilirsin}>
            {" "}
            Birden Fazla Seçenek Seçebilirsin
          </Text>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: Menemen ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={Menemen ? "checked" : "unchecked"}
            onPress={() => {
              setMenemen(!Menemen);
              console.log({ Menemen: !Menemen });
            }}
            checked={Menemen}
          >
            <Image
              source={require("../../assets/melemen.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: acikbufe ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={acikbufe ? "checked" : "unchecked"}
            onPress={() => {
              setacikbufe(!acikbufe);
              console.log({ acikbufe: !acikbufe });
            }}
            checked={acikbufe}
          >
            <Image
              source={require("../../assets/acikbufe.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: Kuymak ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={Kuymak ? "checked" : "unchecked"}
            onPress={() => {
              setKuymak(!Kuymak);
              console.log({ kuymak: !Kuymak });
            }}
            checked={Kuymak}
          >
            <Image
              source={require("../../assets/kuymak.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: koykahvaltisi ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={koykahvaltisi ? "checked" : "unchecked"}
            onPress={() => {
              setkoykahvaltisi(!koykahvaltisi);
              console.log({ koykahvaltısı: !koykahvaltisi });
            }}
            checked={koykahvaltisi}
          >
            <Image
              source={require("../../assets/acikbufe.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: simit ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={simit ? "checked" : "unchecked"}
            onPress={() => {
              setsimit(!simit);
              console.log({ simit: !simit });
            }}
            checked={simit}
          >
            <Image
              source={require("../../assets/simit.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: neyimeshursa ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={neyimeshursa ? "checked" : "unchecked"}
            onPress={() => {
              setneyimeshursa(!neyimeshursa);
              console.log({ neyimeshursa: !neyimeshursa });
            }}
            checked={neyimeshursa}
          >
            <Image
              source={require("../../assets/neyimeshur.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{ padding: 5, marginTop: 2 }}
            onPress={() => navigation.navigate("SeventhScreen")}
          >
            <Image
              source={require("../../assets/soruyugec.png")}
              style={style.yuvarlakKeliDikdrtgen1Kopya2}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.navigate("SeventhScreen")}
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

export default sixtscreen;
