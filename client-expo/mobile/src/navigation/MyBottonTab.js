import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Schedule from "../screens/Schedule";
import Califications from "../screens/Califications";
import Settings from "../screens/Settings";
import { Octicons } from '@expo/vector-icons';
import { Colors } from "../constants/color";
const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
    return (

        <MyTab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors.dark,
                //tabBarInactiveBackgroundColor: "black",
                // tabBarActiveBackgroundColor: "black",

                //headerShown: false,

            }}>

            <MyTab.Screen
                name="Home"
                component={Home}

                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    headerTintColor: 'white',

                    //  headerTransparent: true,
                    tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />
                }}

            />
            <MyTab.Screen
                name="Schedule"
                component={Schedule}


                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Octicons name="book" size={24} color={color} />
                }}
            />

            <MyTab.Screen
                name="Califications"
                component={Califications}


                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Octicons name="sun" size={24} color={color} />
                }}
            />
            <MyTab.Screen
                name="Settings"
                component={Settings}


                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Octicons name="apps" size={24} color={color} />
                }}
            />
            <MyTab.Screen
                name="Profile"
                component={Profile}


                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Octicons name="circle" size={24} color={color} />
                }}
            />
        </MyTab.Navigator>

    );

}