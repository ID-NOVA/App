import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
export const ListItem = ({ item, onPress, styles, dark }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={1.0}
            style={[
                globalStyles.item,
                globalStyles,
                {
                    backgroundColor: dark ? '#24292E' : 'white',
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                },
            ]}
            onPress={() => onPress(navigation.navigate(item.open) )}
            >
            <View style={globalStyles.info}>
                <Icon
                    name={item.icon}
                    size={30}
                    color={dark ? '#f4f4f4' : '#24292e'}
                    style={{ marginBottom: 10 }}
                />
                <Text style={{ fontSize: 22, color: dark ? '#f4f4f4' : '#24292e' }}>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export const ListItem2 = ({ item, onPress, dark }) => {

  

    return (
        <TouchableOpacity
            activeOpacity={1.0}
            style={[
                globalStyles.item,
                globalStyles,
                {
                    backgroundColor: dark ? '#24292E' : 'white',
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                },
            ]}
           
        >
            <View style={globalStyles.info}>
                <Icon
                    name={item.icon}
                    size={30}
                    color={dark ? '#f4f4f4' : '#24292e'}
                    style={{ marginBottom: 10 }}
                />
                <Text style={{ fontSize: 22, color: dark ? '#f4f4f4' : '#24292e' }}>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};