import { View } from "native-base";
import React from "react";
import { Button, Text, TextInput } from "react-native";
import style from '../style/style'
const PaymentScreen = (props) => {
  const [mytext, setMyText] = React.useState("0")
  return (
    <View>
      <Text style={style.birdenFazlaSeenekIaretleyebilirsin}>Tatil için ayırmayı düşündüğün bütçe nedir ?</Text>
      <TextInput 
      style={{fontSize:40}}
        placeholder="Bütçe"
        onChangeText={(mytext) => {
            setMyText(mytext);
        }}
        defaultValue={mytext}
      ></TextInput>
      <Button color='red' title="Tatil Planı Öner" onPress={()=>props.navigation.navigate('TatilPlanlari')}/>
    
    </View>
  );
};

export default PaymentScreen