import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../constants/color";


export const FULL_HEIGHT = Dimensions.get('window').height;
export const FULL_WIDTH = Dimensions.get('window').width;


export const globalStyles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'gray',
    },
    titleHeader: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.light,
    },
    customHeader: {

        //  height: '9.1%',
        width: '100%',
        //  flex: 1,
        backgroundColor: 'white',
        padding: '8.5%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBotton: {
        position: 'relative',
        height: '100%',
        width: FULL_WIDTH,
        paddingHorizontal: 24,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor: '#f4f4f4',
        paddingTop: 24,
    },
    flatList: {
        width: FULL_WIDTH,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
    },
    item: {
        flex: 1,
        height: 140,
        borderRadius: 20,
        marginBottom: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 2.0,
        elevation: 1,
    },
    info: {
        flex: 1,
        borderRadius: 20,
        paddingLeft: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        width: '70%',
        height: 15,
        marginBottom: 5,
        borderRadius: 5,
    },
    brand: {
        color: '#777',
        fontSize: 14,
        backgroundColor: '#e2e2e2',
        width: '50%',
        height: 15,
        marginBottom: 5,
        borderRadius: 5,
    },
    status: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '40%',
        height: 15,
        backgroundColor: '#e2e2e2',
        marginBottom: 5,
        borderRadius: 5,
    },

});