import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import ImageDetails from "../screens/components/ImageDetails";
import React from "react";
import style from "../style/style";
const NinethScreen = (props) => {
  const [karadeniz, setKaradeniz] = React.useState(false);
  const [marmara, setMarmara] = React.useState(false);
  const [guneydoguanadolu, setGuneydoguanadolu] = React.useState(false);
  const [akdeniz, setAkdeniz] = React.useState(false);
  const [ege, setEge] = React.useState(false);
  const [doguanadolu, setDoguanadolu] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={style.soru}>
          Mutlaka gitmek istediğin bölge / bölgeleri işaretler misin ?
        </Text>
        <Text style={style.birdenFazlaSeenekIaretleyebilirsin}>
          Birden Fazla Seçenek Seçebilirsin
        </Text>
      </View>

      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: karadeniz ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={karadeniz ? "checked" : "unchecked"}
          onPress={() => {
            setKaradeniz(!karadeniz);
            console.log({ karadeniz: !karadeniz });
          }}
          checked={karadeniz}
        >
          <Image
            source={require("../../assets/karadeniz.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          />
        </TouchableOpacity>

        <TouchableOpacity
           style={{
            padding: 5,
            backgroundColor: marmara ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={marmara ? "checked" : "unchecked"}
          onPress={() => {
            setMarmara(!marmara);
            console.log({ marmara: !marmara });
          }}
          checked={marmara}
        >
          <Image
            source={require("../../assets/marmara.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: guneydoguanadolu ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={guneydoguanadolu ? "checked" : "unchecked"}
          onPress={() => {
            setGuneydoguanadolu(!guneydoguanadolu);
            console.log({ guneydoguanadolu: !guneydoguanadolu });
          }}
          checked={guneydoguanadolu}
        >
          <Image
            source={require("../../assets/guneydoguanadolu.jpg")}
            style={style.yuvarlakKeliDikdrtgen6}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: akdeniz ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={akdeniz ? "checked" : "unchecked"}
          onPress={() => {
            setAkdeniz(!akdeniz);
            console.log({ akdeniz: !akdeniz });
          }}
          checked={akdeniz}
        >
          <Image source={require("../../assets/akdeniz.jpg")}style={style.yuvarlakKeliDikdrtgen6} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: ege ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={ege ? "checked" : "unchecked"}
          onPress={() => {
            setEge(!ege);
            console.log({ ege: !ege });
          }}
          checked={ege}
        >
          <Image source={require("../../assets/ege.jpg")} style={style.yuvarlakKeliDikdrtgen6}/>
        </TouchableOpacity>
        <TouchableOpacity
           style={{
            padding: 5,
            backgroundColor: doguanadolu ? "red" :"white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={doguanadolu ? "checked" : "unchecked"}
          onPress={() => {
            setDoguanadolu(!doguanadolu);
            console.log({ doguanadolu: !doguanadolu });
          }}
          checked={doguanadolu}
        >
          <Image source={require("../../assets/doguanadolu.jpg")} style={style.yuvarlakKeliDikdrtgen6}/>
        </TouchableOpacity>
      </View>
       <View style={{ flexDirection: "row", padding: 5 }}>
                <TouchableOpacity
                    style={{ padding: 5, marginTop: 2 }}
                    onPress={() => props.navigation.navigate("PaymentScreen")}
                >
                    <Image
                        source={require("../../assets/soruyugec.png")}
                        style={style.yuvarlakKeliDikdrtgen1Kopya2}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ padding: 5 }}
                    onPress={() => props.navigation.navigate("PaymentScreen")}
                >
                    <Image
                        source={require("../../assets/sonrakisoru.png")}
                        style={{width:161}}
                    ></Image>
                </TouchableOpacity>
            </View>
    </View>
  );
};

export default NinethScreen;
