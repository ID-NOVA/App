import { createDrawerNavigator } from "@react-navigation/drawer"
import MyStack from "./MyStack";
import { View, Text } from 'react-native';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {

    return (
        <Drawer.Navigator>

            <Drawer.Screen name='Constancia de estudios' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
               

            />
            <Drawer.Screen name='Kardex' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#24292E',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
            />
            <Drawer.Screen name='Credencial' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
            />
            <Drawer.Screen name='Inscripción y Reincripion' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
            />
            <Drawer.Screen name='Examen titulación inglés' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
            />
            <Drawer.Screen name='Examen ubicación inglés' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
            />
            <Drawer.Screen name='Semestre inglés' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}
                
            />
            <Drawer.Screen name='Certificado de estudios' component={MyStack}
                options={{
                    headerShown: false,
                    drawerPosition: 'right',
                    //drawerActiveBackgroundColor:'#FFFFFF',
                    drawerHideStatusBarOnOpen: false,
                    drawerType: "slide",
                    gestureEnabled: false,
                }}

            />
        </Drawer.Navigator>

    );

}