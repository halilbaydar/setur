import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import ImageDetails from "../screens/components/ImageDetails";
import style from "../../src/style/style";
import Mybottombutton from "../../src/screens/components/nextbuttons";
const SevenThScreen = (props) => {
  const [deniz, setDeniz] = React.useState(false);
  const [bungalov, setBungalov] = React.useState(false);
  const [yayla, setYayla] = React.useState(false);
  const [disco, setDisco] = React.useState(false);
  const [antikkent, setAntikkent] = React.useState(false);
  const [bilinmiyor, setBilinmiyor] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={style.soru2}>
          Çok çalışmaktan bunaldığında hangisini düşünmek seni motive eder?
        </Text>
        <Text style={style.birdenFazlaSeenekIaretleyebilirsin}>
          Birden Fazla Seçenek Seçebilirsin
        </Text>
      </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: deniz ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={deniz ? "checked" : "unchecked"}
            onPress={() => {
              setDeniz(!deniz);
              console.log({ deniz: !deniz });
            }}
            checked={deniz}
          >
            <Image
              title="Deniz"
              source={require("../../assets/beach.jpg")}
              selected={false}
              style={style.yuvarlakKeliDikdrtgen6}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: bungalov ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={bungalov ? "checked" : "unchecked"}
            onPress={() => {
              setBungalov(!bungalov);
              console.log({ bungalov: !bungalov });
            }}
            checked={bungalov}
          >
            <Image
              style={style.yuvarlakKeliDikdrtgen6}
              source={require("../../assets/bungalov.jpeg")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: disco ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={disco ? "checked" : "unchecked"}
            onPress={() => {
              setDisco(!disco);
              console.log({ disco: !disco });
            }}
            checked={disco}
          >
            <Image
              source={require("../../assets/disco.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: yayla ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={yayla ? "checked" : "unchecked"}
            onPress={() => {
              setYayla(!yayla);
              console.log({ yayla: !yayla });
            }}
            checked={yayla}
          >
            <Image
              source={require("../../assets/yayla.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: antikkent ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={antikkent ? "checked" : "unchecked"}
            onPress={() => {
              setAntikkent(!antikkent);
              console.log({ antikkent: !antikkent });
            }}
            checked={antikkent}
          >
            <Image
              source={require("../../assets/antik.jpeg")}
              style={style.yuvarlakKeliDikdrtgen6}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: bilinmiyor ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={bilinmiyor ? "checked" : "unchecked"}
            onPress={() => {
              setBilinmiyor(!bilinmiyor);
              console.log({ bilinmiyor: !bilinmiyor });
            }}
            checked={bilinmiyor}
          >
            <Image
              source={require("../../assets/forest.jpg")}
              style={style.yuvarlakKeliDikdrtgen6}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{ padding: 5, marginTop: 2 }}
            onPress={() => props.navigation.navigate("EightthScreen")}
          >
            <Image
              source={require("../../assets/soruyugec.png")}
              style={style.yuvarlakKeliDikdrtgen1Kopya2}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => props.navigation.navigate("EightthScreen")}
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

export default SevenThScreen;
