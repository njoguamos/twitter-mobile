import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TweetScreen from "./screens/TweetScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import SettingScreen from "./screens/SettingScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NotificationScreen from "./screens/NotificationScreen";
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
        }}>
            <Tab.Screen name='Home1' component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name='Search' component={SettingScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="search" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name='Notifications' component={NotificationScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="bell" size={size} color={color} />
                )
            }}/>
        </Tab.Navigator>
    )
}
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerBackTitleVisible: false,
        }}>
            <Stack.Screen name='Tab' component={TabNavigator} options={{
                headerShown: false
            }}/>
            <Stack.Screen name='New Tweet Screen' component={NewTweetScreen} options={{
                title: ''
            }}/>
            <Stack.Screen name='Tweet Screen' component={TweetScreen} options={{
                title: ''
            }}/>
            <Stack.Screen name='Profile Screen' component={ProfileScreen} options={{
                title: ''
            }}/>
        </Stack.Navigator>
    )
};

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home' screenOptions={{
                headerShown: true
            }}>
                <Drawer.Screen name='Home' component={HomeStackNavigator}/>
                <Drawer.Screen name='Settings' component={SettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}