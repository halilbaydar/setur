import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "../style/style";
const HomeScreen = ({ navigation }) => {
  const [tekbasima, setTekbasima] = React.useState(false);
  const [ailemle, setAilemle] = React.useState(false);
  const [arkadaslarimla, setArkadaslarimla] = React.useState(false);
  const [partnerimle, setPartnerimle] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={styles.soru}>Tatile kimlerle gitmeyi planlıyorsun ?</Text>
        <Text style={styles.birdenFazlaSeenekIaretleyebilirsin}>
          {" "}
          Birden Fazla Seçenek Seçebilirsin
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: tekbasima ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={tekbasima ? "checked" : "unchecked"}
          onPress={() => {
            setTekbasima(!tekbasima);
            //checked={tekbasima}
            setAilemle(false)
            setArkadaslarimla(false)
            setPartnerimle(false)
            console.log({ tekbasima: tekbasima });
          }}
        >
          <Image
            source={require("../../assets/tekbasina.png")}
            style={styles.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: ailemle ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={ailemle ? "checked" : "unchecked"}
          onPress={() => {
            setAilemle(!ailemle);
            //checked={ailemle}
            setTekbasima(false)
            setArkadaslarimla(false)
            setPartnerimle(false)
            console.log({ ailemle: ailemle });
          }}
        >
          <Image
            source={require("../../assets/aile.png")}
            style={styles.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: arkadaslarimla ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={arkadaslarimla ? "checked" : "unchecked"}
          onPress={() => {
            //checked={arkadaslarimla}
            setArkadaslarimla(!arkadaslarimla);
            setTekbasima(false)
            setAilemle(false)
            setPartnerimle(false)
            console.log({ arkadaslarimla: arkadaslarimla });
          }}
        >
          <Image
            source={require("../../assets/dostlar.png")}
            style={styles.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: partnerimle ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={partnerimle ? "checked" : "unchecked"}
          onPress={() => {
            //checked={partnerimle}
            setPartnerimle(!partnerimle);
            setTekbasima(false)
            setAilemle(false)
            setArkadaslarimla(false)
            console.log({ partnerimle: partnerimle });
          }}
        >
          <Image
            source={require("../../assets/hayatarkadasi.png")}
            style={styles.yuvarlakKeliDikdrtgen6}
          ></Image>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        title="İleri"
        onPress={() => navigation.navigate("SecondScreen")}
      >
        <Image
          source={require("../../assets/btntestibaslat.png")}
          style={styles.katman15}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.sanaEnUygunTatilNerileriniGrmekIinTestiTamamlaman}>
        Sana en uygun tatil önerilerini görmek için testi tamamlamanı öneririz
      </Text>
    </View>
  );
};

export default HomeScreen;
