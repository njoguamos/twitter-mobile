import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TweetScreen from "./screens/TweetScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import SettingScreen from "./screens/SettingScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home Screen' component={HomeScreen}/>
            <Stack.Screen name='New Tweet Screen' component={NewTweetScreen}/>
            <Stack.Screen name='Tweet Screen' component={TweetScreen}/>
            <Stack.Screen name='Profile Screen' component={ProfileScreen}/>
        </Stack.Navigator>
    )
};

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home' component={HomeStackNavigator}/>
                <Drawer.Screen name='Settings' component={SettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}