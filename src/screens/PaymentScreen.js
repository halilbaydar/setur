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
        placeholder="Bütçe"
        onChangeText={(mytext) => {
            setMyText(mytext);
        }}
        defaultValue={mytext}
      ></TextInput>
      <Button style={{backgroundColor:"red"}} title="Tatil Planı Öner" onPress={()=>props.navigation.navigate('TatilPlanlari')}></Button>
    </View>
  );
};

export default PaymentScreen