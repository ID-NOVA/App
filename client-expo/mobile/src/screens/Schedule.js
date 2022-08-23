import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Schedule() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Schedule </Text>
        </View>
    );
}