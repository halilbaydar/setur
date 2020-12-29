import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CheckBox} from "native-base"

export default class App extends React.Component {
  state={
    selectedLang1:false,
    selectedLang2:false,
    selectedLang3:false,
    selectedLang4:false,
    selectedLang5:false,
    selectedLang6:false,
    selectedLang7:false,
    selectedLang8:false

  }
  render(){
    const {selectedLang1,selectedLang2,selectedLang3,selectedLang4,selectedLang5,selectedLang6,selectedLang7,selectedLang8} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Yapmazsam olmaz dediğin seçenekleri işaretler misin ?</Text>
        <View style={styles.item} >
            <CheckBox checked={selectedLang1} color="#fc5185" onPress={()=>this.setState({selectedLang1:!selectedLang1})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang1?"#fc5185":"gray",
                fontWeight:this.state.selectedLang1? "bold" :"normal"
              }}
              >Güneşlenmek</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang2} color="#fc5185" onPress={()=>this.setState({selectedLang2:!selectedLang2})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang2?"#fc5185":"gray",
                fontWeight:this.state.selectedLang2? "bold" :"normal"
              }}
              > Doğa yürüyüşü</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang3} color="#fc5185" onPress={()=>this.setState({selectedLang3:!selectedLang3})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang3?"#fc5185":"gray",
                fontWeight:this.state.selectedLang3? "bold" :"normal"
              }}
              >Tarihi yer gezmek</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang4} color="#fc5185" onPress={()=>this.setState({selectedLang4:!selectedLang4})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang4?"#fc5185":"gray",
                fontWeight:this.state.selectedLang4? "bold" :"normal"
              }}
              > Bol bol manzara selfie’si #</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang5} color="#fc5185" onPress={()=>this.setState({selectedLang5:!selectedLang5})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang5?"#fc5185":"gray",
                fontWeight:this.state.selectedLang5? "bold" :"normal"
              }}
              > Yeni insanlarla tanışmak</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang6} color="#fc5185" onPress={()=>this.setState({selectedLang6:!selectedLang6})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang6?"#fc5185":"gray",
                fontWeight:this.state.selectedLang6? "bold" :"normal"
              }}
              > Yerel lezzetleri tatmak</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang7} color="#fc5185" onPress={()=>this.setState({selectedLang7:!selectedLang7})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang7?"#fc5185":"gray",
                fontWeight:this.state.selectedLang7? "bold" :"normal"
              }}
              > - Dalış</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang7} color="#fc5185" onPress={()=>this.setState({selectedLang8:!selectedLang8})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang8?"#fc5185":"gray",
                fontWeight:this.state.selectedLang8? "bold" :"normal"
              }}
              > Paraşüt</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={{color:"white"}}>İleri</Text>
        </TouchableOpacity>
  
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});