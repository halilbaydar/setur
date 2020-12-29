import React ,{useState}from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'
import {Calender} from 'react-native-calendars'
import { RadioButton } from 'react-native-paper';

const FourthScreen=({navigation})=>{
    const [checked, setChecked]=React.useState('evet')
    return <View>
       <Text style={styles.text}>Tatil planlarında yurt dışına çıkmak var mı ? </Text>
        <Text >Evet</Text>
        <RadioButton 
        value="evet"
        status={checked==="evet" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("evet"); console.log({checked})}}
        ></RadioButton>
        <Text >Hayır</Text>
        <RadioButton 
        value="Hayir"
        status={checked==="Hayir" ? "checked" : "unchecked"}
        onPress={()=>{setChecked("Hayir");console.log({checked})}}
        ></RadioButton>
      <Button title="İleri" onPress={()=>{navigation.navigate('FifthScreen')}}></Button>
    </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default FourthScreen