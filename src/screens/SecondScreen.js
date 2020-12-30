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
  Alert,
  Platform,
} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import style from "../style/style";
const SecondScreen = (props) => {
  const [day,setDay]=React.useState(new Date().getDate())
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={style.birdenFazlaSeenekIaretleyebilirsin}>Gidiş Tarihi belirle</Text>
      <Calendar
      onDayPress={(day_)=>{
        Alert.alert("Gidiş Tarihiniz",day_.dateString);
        console.log(day_)
      }}
      ></Calendar>
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
      <Text style={{marginTop:40}}>{day.month}</Text>
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
