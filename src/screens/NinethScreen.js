import {Text,StyleSheet,View,ScrollView,Button} from 'react-native'
import ImageDetails from '../screens/components/ImageDetails'
import React from 'react'
const NinethScreen=(props)=>{
    return<View>
        <ScrollView>
            <Text style={{fontSize:30}}>Mutlaka gitmek istediğin bölge / bölgeleri işaretler misin ?</Text>
        <ImageDetails title="karadeniz" mysrc={require('../../assets/karadeniz.jpg')}/>
         <ImageDetails title="Marmara" mysrc={require('../../assets/marmara.jpg')} />
        <ImageDetails title="Güney Doğu Anadolu" mysrc={require('../../assets/guneydoguanadolu.jpg')} />
        <ImageDetails title="Akdeniz" mysrc={require('../../assets/akdeniz.jpg')} />
        <ImageDetails title="Ege" mysrc={require('../../assets/ege.jpg')}/>
        <ImageDetails title="Doğu Anadolu" mysrc={require('../../assets/doguanadolu.jpg')} />
        <Button title="İleri" onPress={()=>{props.navigation.navigate("PaymentScreen")}}></Button>
    </ScrollView>
    </View> 
        
}

export default NinethScreen