import React from 'react'
import {Text,StyleSheet,View,ScrollView,Button} from 'react-native'
import ImageDetails from '../screens/components/ImageDetails'

const SevenThScreen=(props)=>{
    return <View>
        <ScrollView>
        <ImageDetails title="Deniz" mysrc={require('../../assets/beach.jpg')} selected={false}/>
        <ImageDetails title="Bungalov" mysrc={require('../../assets/bungalov.jpeg')}/>
        <ImageDetails title="Disco" mysrc={require('../../assets/disco.jpg')} />
        <ImageDetails title="Yayla" mysrc={require('../../assets/yayla.jpg')} />
        <ImageDetails title="Orman" mysrc={require('../../assets/forest.jpg')}/>
        <ImageDetails title="Antik Kent" mysrc={require('../../assets/antik.jpeg')} />
        <Button title="İleri" onPress={()=>{props.navigation.navigate("EightthScreen")}}></Button>
        </ScrollView>
    </View>
}

export default SevenThScreen