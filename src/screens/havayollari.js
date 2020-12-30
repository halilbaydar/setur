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
const Havayolları = () => {
    const [thy, setThy] = React.useState(false);
    const [anadolu, setAnadolu] = React.useState(false);
    const [pegasus,setPegasus]=React.useState(false)
    return <View style={{padding:5}}>
      
      <Text style={style.ulasimmSecenekleri}>Ulaşım Seçenekleri</Text>
        <ScrollView style={{ padding:5,paddingHorizontal:20}}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        
        horizontal={true}>
          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: thy ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={thy ? "checked" : "unchecked"}
          onPress={() => {
            setThy(!thy);
            console.log({ thy: !thy });
          }}
          checked={thy}>
          <Image source={require('../../assets/thy.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: anadolu ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={anadolu ? "checked" : "unchecked"}
          onPress={() => {
            setAnadolu(!anadolu);
            console.log({ anadolu: !anadolu });
          }}
          checked={anadolu}>
          <Image source={require('../../assets/anadolu.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: pegasus ? "red" : "white",
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={pegasus ? "checked" : "unchecked"}
          onPress={() => {
            setPegasus(!pegasus);
            console.log({ pegasus: !pegasus });
          }}
          checked={pegasus}>
          <Image source={require('../../assets/pegasus.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={{
            padding: 5,
            borderStyle: "solid",
            borderRadius: 15,
          }}
          status={pegasus ? "checked" : "unchecked"}
          onPress={() => {
            setPegasus(!pegasus);
            console.log({ pegasus: !pegasus });
          }}
          checked={pegasus}>
          <Image source={require('../../assets/pegasus.png')} style={style.yuvarlakKeliDikdrtgen6}></Image>
          </TouchableOpacity>
        </ScrollView>
    </View>
}

export default Havayolları