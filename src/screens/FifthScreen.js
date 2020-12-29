import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Button} from "react-native";
import { CheckBox} from "native-base";

const FiftScreem = ({navigation}) => {
  const [guneslenmek, setguneslenmek] = React.useState(false);
  const [dogayuruyusu, setdogayuruyusu] = React.useState(false);
  const [tarihiyer, settarihiyer] = React.useState(false);
  const [manzaraselfisi, setmanzaraselfisi] = React.useState(false);
  const [yeniinsanlarlatanismak, setyeniinsanlarlatanismak] = React.useState(false);
  const [yerellezzetler, setyerellezzetler] = React.useState(false);
  const [dalis, setdalis] = React.useState(false);
  const [parasut, setparasut] = React.useState(false);
  return (
    <View>
      <Text>Yapmazsam olmaz dediğin seçenekleri işaretler misin ?</Text>
      <Text>Güneşlenmek</Text>
      <CheckBox
        status={guneslenmek ? "checked" : "unchecked"}
        onPress={() => {
          setguneslenmek(!guneslenmek);
          console.log({"guneslenmek ":!guneslenmek});
        }}
        checked={guneslenmek}
        
      />
      <Text>Doğa yürüyüşü</Text>
      <CheckBox
        status={dogayuruyusu ? "checked" : "unchecked"}
        onPress={() => {
          setdogayuruyusu(!dogayuruyusu);
          console.log({"dogayuruyusu ":!dogayuruyusu});
        }}
        checked={dogayuruyusu}
      />
      <Text>Tarihi yer gezmek</Text>
      <CheckBox
        status={tarihiyer ? "checked" : "unchecked"}
        onPress={() => {
          settarihiyer(!tarihiyer);
          console.log({"tarihiyer ":!tarihiyer});
        }}
        checked={tarihiyer}
      />
      <Text>Bol bol manzara selfie’s</Text>
      <CheckBox
        status={manzaraselfisi ? "checked" : "unchecked"}
        onPress={() => {
          setmanzaraselfisi(!manzaraselfisi);
          console.log({"manzaraselfisi ":!manzaraselfisi});
        }}
        checked={manzaraselfisi}
      />
      <Text>Yeni insanlarla tanışmak</Text>
      <CheckBox
        status={yeniinsanlarlatanismak ? "checked" : "unchecked"}
        onPress={() => {
          setyeniinsanlarlatanismak(!yeniinsanlarlatanismak);
          console.log({"yeniinsanlarlatanismak ":!yeniinsanlarlatanismak});
        }}
        checked={yeniinsanlarlatanismak}
      />
      <Text>Yerel lezzetleri tatmak</Text>
      <CheckBox
        status={yerellezzetler ? "checked" : "unchecked"}
        onPress={() => {
          setyerellezzetler(!yerellezzetler);
           console.log({"yerellezzetler ":!yerellezzetler});
        }}
        checked={yerellezzetler}
      />
      <Text>Dalış</Text>
      <CheckBox
        status={dalis ? "checked" : "unchecked"}
        onPress={() => {
          setdalis(!dalis);
          console.log({"dalis ":!dalis});
        }}
        checked={dalis}
      />
      <Text>Paraşüt</Text>
      <CheckBox
        status={parasut ? "checked" : "unchecked"}
        onPress={() => {
          setparasut(!parasut);
          console.log({"parasut ":!parasut});
        }}
        checked={parasut}
      />
      <Button title="İleri"  onPress={()=>navigation.navigate('SixthScreen')}/>
    </View>
  );
};
export default FiftScreem;
