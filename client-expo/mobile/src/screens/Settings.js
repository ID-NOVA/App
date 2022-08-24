import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import {  ListItem2 } from '../components';
import Icon from '@expo/vector-icons/Feather';
import React from 'react';

import { useNavigation } from '@react-navigation/native';



const ItemList = [
    { id: 1, name: 'Tramites', icon: 'info', open: 'MyStack' },
    { id: 2, name: 'Settings', icon: 'settings', open: 'FormularioDePago' },
    { id: 3, name: 'Configurations', icon: 'sliders', open: 'FormularioDePago' },
    { id: 4, name: 'Dark Example', icon: 'moon', open: 'FormularioDePago'  },
];

export default function Settings() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <View style={{ marginTop: 30 }}></View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <ListItem2
                        dark={false}
                        styles={{ marginRight: 10 }}
                        item={ItemList[0]}
                    onPress={() => navigation.openDrawer()}
                    />
                <ListItem2 styles={{}} item={ItemList[1]}
                    onPress={() => navigation.openDrawer()} />
                </View>        
                
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <ListItem2
                        dark={false}
                        styles={{ marginRight: 10 }}
                    item={ItemList[2]}
                    onPress={() => navigation.openDrawer()}
                    />
                <ListItem2 dark styles={{}} item={ItemList[3]}
                    onPress={() => navigation.openDrawer()} />
                </View>
        </View>  
    );
}