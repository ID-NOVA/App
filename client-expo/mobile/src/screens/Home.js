import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.ScreenContainer}>
            <Text style={globalStyles.title}> Home </Text>
        </View>
    );
}