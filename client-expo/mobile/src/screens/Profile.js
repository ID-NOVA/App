import { View, Text, ScrollView, FlatList } from 'react-native';
//import { globalStyles } from '../styles/global';
import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import { ListItem2 } from '../components';
const ItemList = [
    { id: 1, name: 'Informacion personal ', icon: 'edit', open: 'MyStack', open: 'FormularioDePago' },
    { id: 2, name: 'CURP', icon: 'archive', open: 'FormularioDePago' },
    { id: 3, name: 'Dirección', icon: 'trello', open: 'FormularioDePago' },
    { id: 4, name: 'Teléfono Domicilio ', icon: 'phone', open: 'FormularioDePago' },
    { id: 5, name: 'Celular', icon: 'smartphone', open: 'FormularioDePago' },
    { id: 6, name: 'E-Mail', icon: 'mail', open: 'FormularioDePago' },
    { id: 7, name: 'Fecha de Nacimiento', icon: 'user', open: 'FormularioDePago' },
    { id: 8, name: 'Escuela de Procedencia', icon: 'map-pin', open: 'FormularioDePago' },
];

export default function Profile() {
   
    return (
        
            <FlatList
                data={ItemList}
              renderItem={ListItem2}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingVertical: 50}}
                 numColumns= {2}
            />
                  
    );
}