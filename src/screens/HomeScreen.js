import React ,{useState}from 'react'
import {StyleSheet,View,Text,Button,TouchableOpacity,Image} from 'react-native'
import { RadioButton } from 'react-native-paper';
import SecondScreen from "./SecondScreen"

const HomeScreen=({navigation})=>{
    const [checked, setChecked]=React.useState('tekbasima')
    return <View>
      <View style={{width: 50, height: 170}}>
        <Text style={styles.tatileKimlerleGitmeyiPlanlyorsun}>Tatile kimlerle gitmeyi planlıyorsun ?</Text>
      </View>
      <View>
        <Text >Tek Başima</Text>
        <RadioButton 
        value="tekbasima"
        status={checked==="tekbasima" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("tekbasima");console.log({checked})}}
        ></RadioButton>
        <Text >Ailemle</Text>
        <RadioButton 
        value="ailemle"
        status={checked==="ailemle" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("ailemle");console.log({checked})}}
        ></RadioButton>
        <Text >Arkadaşlarimla</Text>
        <RadioButton 
        value="arkdaslarimla"
        status={checked==="arkdaslarimla" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("arkdaslarimla");console.log({checked})}}
        ></RadioButton>
        <Text >Eşimle,Sevgilimle</Text>
        <RadioButton 
        value="partnerimle"
        status={checked==="partnerimle" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("partnerimle");console.log({checked})}}
        ></RadioButton>
      <Button title="İleri" onPress={()=>navigation.navigate('SecondScreen')}/>
      </View>
    </View>
}

const styles = StyleSheet.create({
  tatileKimlerleGitmeyiPlanlyorsun: {
    //fontFamily: "helvetica",
    fontSize: 29,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    marginLeft:70
  },
  katman12 : {
    width: 75.5,
    height: 24.5,
    marginLeft:170
  },
  birdenFazlaSeenekIaretleyebilirsin : {
    marginLeft:70,
    textAlign:'center',
    width: 314,
    height: 19.5,
    //fontFamily: "helvetica",
    fontSize: 23.3,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#7f7f7f"
  },
  yuvarlakKeliDikdrtgen6 : {
    width: 171,
    height: 165,
    borderRadius: 10,
    backgroundColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderColor: "#0f1111"
  }
});

export default HomeScreen