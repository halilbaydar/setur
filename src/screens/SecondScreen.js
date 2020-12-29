import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { DatePicker } from "react-native-common-date-picker";
import { RadioButton } from "react-native-paper";
const SecondScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>
        Gidiş - dönüş için aklındaki tarihler nedir ?
      </Text>
      <Text>Gidiş</Text>
      <DatePicker
        confirm={(date) => {
          console.log("Gidiş : ",date);
        }}
      />
      <Text>önüş</Text>
      <DatePicker
        confirm={(date) => {
          console.log("Dönüş : ",date);
        }}
      />
      <Button title="İleri" onPress={()=>{props.navigation.navigate('ThirdScreen')}}></Button>
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
