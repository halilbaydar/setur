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
import sytles from "../style/style";

const FiftScreem = ({ navigation }) => {
  const [guneslenmek, setguneslenmek] = React.useState(false);
  const [dogayuruyusu, setdogayuruyusu] = React.useState(false);
  const [tarihiyer, settarihiyer] = React.useState(false);
  const [adrenalin, setadrenalin] = React.useState(false);
  const [yeniinsanlarlatanismak, setyeniinsanlarlatanismak] = React.useState(
    false
  );
  const [yerellezzetler, setyerellezzetler] = React.useState(false);
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View>
          <Text style={sytles.soru}>
            Bir tatilin olmazsa olmazı senin için nelerdir ?
          </Text>
          <Text style={sytles.birdenFazlaSeenekIaretleyebilirsin}>
            {" "}
            Birden Fazla Seçenek Seçebilirsin
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: guneslenmek ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={guneslenmek ? "checked" : "unchecked"}
            onPress={() => {
              setguneslenmek(!guneslenmek);
              console.log({ "guneslenmek ": !guneslenmek });
            }}
            checked={guneslenmek}
          >
            <Image
              source={require("../../assets/deniz.png")}
              style={sytles.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: dogayuruyusu ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={dogayuruyusu ? "checked" : "unchecked"}
            onPress={() => {
              setdogayuruyusu(!dogayuruyusu);
              console.log({ "dogayuruyusu ": !dogayuruyusu });
            }}
            checked={dogayuruyusu}
          >
            <Image
              source={require("../../assets/yuruyus.png")}
              style={sytles.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: tarihiyer ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={tarihiyer ? "checked" : "unchecked"}
            onPress={() => {
              settarihiyer(!tarihiyer);
              console.log({ "tarihiyer ": !tarihiyer });
            }}
            checked={tarihiyer}
          >
            <Image
              source={require("../../assets/tarih.png")}
              style={sytles.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: yerellezzetler ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={yerellezzetler ? "checked" : "unchecked"}
            onPress={() => {
              setyerellezzetler(!yerellezzetler);
              console.log({ "yerellezzetler ": !yerellezzetler });
            }}
            checked={yerellezzetler}
          >
            <Image
              source={require("../../assets/lezzet.png")}
              style={sytles.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: yeniinsanlarlatanismak ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={yeniinsanlarlatanismak ? "checked" : "unchecked"}
            onPress={() => {
              setyeniinsanlarlatanismak(!yeniinsanlarlatanismak);
              console.log({
                "yeniinsanlarlatanismak ": !yeniinsanlarlatanismak,
              });
            }}
            checked={yeniinsanlarlatanismak}
          >
            <Image
              source={require("../../assets/insan.png")}
              style={sytles.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: adrenalin ? "red" : "white",
              borderStyle: "solid",
              borderRadius: 15,
            }}
            status={adrenalin ? "checked" : "unchecked"}
            onPress={() => {
              setadrenalin(!adrenalin);
              console.log({ "adrenalin ": !adrenalin });
            }}
            checked={adrenalin}
          >
            <Image
              source={require("../../assets/adrenalin.png")}
              style={sytles.yuvarlakKeliDikdrtgen6}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{ padding: 5, marginTop: 2 }}
            title="İleri"
            onPress={() => navigation.navigate("SixthScreen")}
          >
            <Image
              source={require("../../assets/soruyugec.png")}
              style={sytles.yuvarlakKeliDikdrtgen1Kopya2}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            title="İleri"
            style={{ padding: 5 }}
            onPress={() => navigation.navigate("SixthScreen")}
          >
            <Image
              source={require("../../assets/sonrakisoru.png")}
              style={sytles.yuvarlakKeliDikdrtgen1Kopya2}
            ></Image>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default FiftScreem;
