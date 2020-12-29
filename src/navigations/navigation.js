import React from "react";
import { Text, Platform, SafeAreaView, Button, View } from "react-native";

//import { Ionicons,FontAwesome,AntDesign,Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
//import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen"
import ThirdScreen from "../screens/ThirdScreen"
import FourthScreen from "../screens/FourthScreen"
import FifthScreen from "../screens/FifthScreen"
import SixthScreen from "../screens/SixthScreen"
import SeventhScreen from "../screens/seventhscreen"
import EightthScreen from "../screens/EightthScreen"
import NinethScreen from '../screens/NinethScreen'
import PaymentScreen from '../screens/PaymentScreen'

const defaultStackNavOption = {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#ffffff" : "",
    },
    backButtonTintColor: 'red',
    headerTitleStyle: {
      fontSize: 25,
      width:180,
      color:'#FF0000',
      textAlign:'center',
    },
    headerTintColor: "blue",
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#ffffff' },
  }
const MainNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        SecondScreen: SecondScreen,
        ThirdScreen:ThirdScreen,
        FourthScreen : FourthScreen,
        FifthScreen : FifthScreen,
        SixthScreen:SixthScreen,
        SeventhScreen:SeventhScreen,
        EightthScreen:EightthScreen,
        NinethScreen:NinethScreen,
        PaymentScreen:PaymentScreen
    },
    {
      mode: "modal",
      defaultNavigationOptions: {
        ...defaultStackNavOption,
      },
    }
  );
const NavigationAppContainer = createAppContainer(MainNavigator);

export default NavigationAppContainer;
