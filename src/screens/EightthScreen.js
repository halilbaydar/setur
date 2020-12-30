import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import ImageDetails from "../screens/components/ImageDetails";
import style from "../style/style";
const eigthscreen = (props) => {
  const [trafik, setTrafik] = React.useState(false);
  const [kalabalik, setKalabalik] = React.useState(false);
  const [beton, setBeton] = React.useState(false);
  const [mountain, setMountain] = React.useState(false);
  return (
    <View
      style={{
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={style.soru}>
          Son zamanlarda en çok hangilerinden sıkıldın ?
        </Text>
        <Text style={style.birdenFazlaSeenekIaretleyebilirsin}>
          Birden Fazla Seçenek Seçebilirsin
        </Text>
      </View>

      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
           style={{
            padding: 5,
            backgroundColor: trafik ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={trafik ? "checked" : "unchecked"}
          onPress={() => {
            setTrafik(!trafik);
            console.log({ trafik: !trafik });
          }}
          checked={trafik}
        >
          <Image
            source={require("../../assets/trafik.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
           style={{
            padding: 5,
            backgroundColor: beton ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={beton ? "checked" : "unchecked"}
          onPress={() => {
            setBeton(!beton);
            console.log({ beton: !beton });
          }}
          checked={beton}
        >
          <Image
            source={require("../../assets/beton.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: kalabalik ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={kalabalik ? "checked" : "unchecked"}
          onPress={() => {
            setKalabalik(!kalabalik);
            console.log({ kalabalik: !kalabalik });
          }}
          checked={kalabalik}
        >
          <Image
            source={require("../../assets/kalabalik.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: mountain ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={mountain ? "checked" : "unchecked"}
          onPress={() => {
            setMountain(!mountain);
            console.log({mountain});
          }}
          checked={mountain}
        >
          <Image
            source={require("../../assets/mountain.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{ padding: 5, marginTop: 2 }}
          onPress={() => props.navigation.navigate("NinethScreen")}
        >
          <Image
            source={require("../../assets/soruyugec.png")}
            style={style.yuvarlakKeliDikdrtgen1Kopya2}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => props.navigation.navigate("NinethScreen")}
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

export default eigthscreen;
