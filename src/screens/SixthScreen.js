import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Button} from "react-native";
import { CheckBox} from "native-base";

const sixtscreen=(props)=>{
    const [Menemen, setMenemen] = React.useState(false);
    const [acikbufe, setacikbufe] = React.useState(false);
    const [Kuymak, setKuymak] = React.useState(false);
    const [koykahvaltisi, setkoykahvaltisi] = React.useState(false);
    const [simit, setsimit] = React.useState(false);
    const [neyimeshursa, setneyimeshursa] = React.useState(false);
    return <View>
        <Text>Tatil sabahı kahvaltı dediğin</Text>
        <Text>Menemen</Text>
      <CheckBox
        status={Menemen ? "checked" : "unchecked"}
        onPress={() => {
          setMenemen(!Menemen);
          console.log({"menemen":!menemen})
        }}
        checked={Menemen}
      />
      <Text>Açık büfe</Text>
      <CheckBox
        status={acikbufe ? "checked" : "unchecked"}
        onPress={() => {
          setacikbufe(!acikbufe);
          console.log({"acikbufe":!acikbufe})
        }}
        checked={acikbufe}
      />
      <Text>Kuymak</Text>
      <CheckBox
        status={Kuymak ? "checked" : "unchecked"}
        onPress={() => {
          setKuymak(!Kuymak);
          console.log({"kuymak":!Kuymak})
        }}
        checked={Kuymak}
      />
      <Text>Köy kahvaltısı</Text>
      <CheckBox
        status={koykahvaltisi ? "checked" : "unchecked"}
        onPress={() => {
          setkoykahvaltisi(!koykahvaltisi);
          console.log({"koykahvaltısı":!koykahvaltisi})
        }}
        checked={koykahvaltisi}
      />
      <Text>Simit, peynir</Text>
      <CheckBox
        status={simit ? "checked" : "unchecked"}
        onPress={() => {
          setsimit(!simit);
          console.log({"simit":!simit})
        }}
        checked={simit}
      />
      <Text>Neyi Meşhursa </Text>
      <CheckBox
        status={neyimeshursa ? "checked" : "unchecked"}
        onPress={() => {
          setneyimeshursa(!neyimeshursa);
          console.log({"neyimeshursa":!neyimeshursa})
        }}
        checked={neyimeshursa}
      />
      <Button title="İleri" onPress={()=>{props.navigation.navigate("SeventhScreen")}}></Button>
    </View>
}

export default sixtscreen