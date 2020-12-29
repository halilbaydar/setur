import { View } from "native-base";
import React from "react";
import { Button, Text, TextInput } from "react-native";

const PaymentScreen = () => {
  const [mytext, setMyText] = React.useState("0")
  return (
    <View>
      <Text>Tatil için ayırmayı düşündüğün bütçe nedir ?</Text>
      <TextInput
        placeholder="Bütçe"
        onChangeText={(mytext) => {
            setMyText(mytext);
        }}
        defaultValue={mytext}
      ></TextInput>
      <Button title="Tatil Planı Öner" onPress={()=>{console.log("")}}></Button>
    </View>
  );
};

export default PaymentScreen