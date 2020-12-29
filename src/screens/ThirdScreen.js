import React ,{useState}from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'
import {Calender} from 'react-native-calendars'
import { RadioButton } from 'react-native-paper';

const ThirdScreen=({navigation})=>{
    const [checked, setChecked]=React.useState('ikibessaat')
    return <View>
        <Text style={styles.text}>Yolculuğa ne kadar zaman ayırırsın ?</Text>
        <Text >0-2 saat</Text>
        <RadioButton 
        value="sifirikisaat"
        status={checked==="sifirikisaat" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("sifirikisaat");console.log({checked})}}
        ></RadioButton>
        <Text >2-5 saat</Text>
        <RadioButton 
        value="ikibessaat"
        status={checked==="ikibessaat" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("ikibessaat"); console.log({checked})}}
        ></RadioButton>
        <Text > 5-9 saat</Text>
        <RadioButton 
        value="besdokuzsaat"
        status={checked==="besdokuzsaat" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("besdokuzsaat");console.log({checked})}}
        ></RadioButton>
        <Text >Ne kadar uzağa o kadar iyi :) </Text>
        <RadioButton 
        value="uzak"
        status={checked==="uzak" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("uzak");console.log({checked})}}
        ></RadioButton>
      <Button title="İleri" onPress={()=>navigation.navigate('FourthScreen')}/>
    </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ThirdScreen