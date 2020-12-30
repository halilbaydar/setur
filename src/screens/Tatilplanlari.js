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
import sytles from "../style/style";
import Havayolları from './havayollari'
import Konaklama from './konaklama'
import Events from './Events'
import Yemedendonme from './Yemedendonme'
const TatilPlanlari = () => {
    return <View style={{alignItems:'center'}}>
            <ScrollView>
            <Image source={require('../../assets/antalyakapakfoto.jpg')} style={{marginRight:30}}></Image>
            <Text style={sytles.ulasimmSecenekleri}>Ulaşım Seçenekleri</Text>
            <Havayolları></Havayolları>
            <Text style={sytles.ulasimmSecenekleri}>Konaklama Seçenekleri</Text>
            <Konaklama></Konaklama>
            <Text style={sytles.ulasimmSecenekleri}>Senin için Aktiviler</Text>
            <Events></Events>
            <Text style={sytles.ulasimmSecenekleri}>Yemeden Dönme</Text>
            <Yemedendonme></Yemedendonme>
            </ScrollView>
    </View>
}

export default TatilPlanlari