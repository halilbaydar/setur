import React from 'react'
import {Text,StyleSheet,View,Image,} from 'react-native'

const ImageDetails=(props)=>{
    return <View onStartShouldSetResponder={() => console.log('You click',props.title)}>
        <Text style={{fontSize:30}}> {props.title}</Text>
        <Image source={props.mysrc}/>
        </View>
}

export default ImageDetails