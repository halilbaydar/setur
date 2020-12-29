import React from "react";
import { StyleSheet, Text, View,ScrollView,Button} from "react-native";
import ImageDetails from '../screens/components/ImageDetails'

const eigthscreen=(props)=>{
    return <View>
        <Text style={{fontSize:30}}>Son zamanlarda en çok hangilerinden sıkıldın ?</Text>
        <Button title="İleri" onPress={()=>{props.navigation.navigate("NinethScreen")}}></Button>
        <ScrollView>
        <ImageDetails title="Trafik" mysrc={require('../../assets/trafik.jpg')} />
        <ImageDetails title="Beton" mysrc={require('../../assets/beton.jpg')}/>
        <ImageDetails title="Kalabalık" mysrc={require('../../assets/kalabalik.jpg')} />
        </ScrollView>
    </View>
}

export default eigthscreen