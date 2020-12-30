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
import style from "../style/style";
const Events = () => {
    const [event1, setevent1] = React.useState(false);
    const [event2, setevent2] = React.useState(false);
    const [event3,setevent3]=React.useState(false)
    return <View style={{flexDirection:'row' ,padding:5}}>
    <ScrollView style={{padding:5,paddingHorizontal:30}} horizontal={true}
    showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: event1 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          
          status={event1 ? "checked" : "unchecked"}
          onPress={() => {
            setevent1(!event1);
            console.log({ event1: !event1 });
          }}
          checked={event1}>
          <Image source={require('../../assets/event1.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: event2 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={event2 ? "checked" : "unchecked"}
          onPress={() => {
            setevent2(!event2);
            console.log({ event2: !event2 });
          }}
          checked={event2}>
          <Image source={require('../../assets/event2.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>
       
          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: event3 ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={event3 ? "checked" : "unchecked"}
          onPress={() => {
            setevent3(!event3);
            console.log({ event3: !event3 });
          }}
          checked={event3}>
          <Image source={require('../../assets/event3.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            padding: 5,
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={event2 ? "checked" : "unchecked"}
          onPress={() => {
            setevent2(!event2);
            console.log({ event2: !event2 });
          }}
          checked={event2}>
          <Image source={require('../../assets/event2.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

        </ScrollView>
    </View>
}

export default  Events