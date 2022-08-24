import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Califications from "../screens/Califications";
import FormularioDePago from "../screens/FormularioDePago";
import Profile from "../screens/Profile";
import Schedule from "../screens/Schedule";

import { View, Text, Image, Pressable } from "react-native";
import { globalStyles } from "../styles/global";
import MyBottomTab, { MyBottonTab } from "./MyBottonTab";

import { useNavigation } from '@react-navigation/native';

import { Octicons } from '@expo/vector-icons';
import { Colors } from "../constants/color";
const HomeStack = createStackNavigator(); 
const myConfig = { 
    headerShown: false,
    presentation: "modal",
    gestureEnabled: true,
    animationEnabled: true,
}

export default function MyStack() {
    const navigation = useNavigation();
    return (

        <HomeStack.Navigator
            initialRouteName="MyBottomTab"
            screenOptions={myConfig}
        > 

            <HomeStack.Screen name='Root' component={MyBottomTab} />

            <HomeStack.Group screenOptions={{ headerShown: true }}>
                   
                <HomeStack.Screen name='FormularioDePago' component={FormularioDePago} />


            </HomeStack.Group>
        </HomeStack.Navigator >
    );
}