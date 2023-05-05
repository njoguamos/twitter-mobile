import 'react-native-gesture-handler';
import React from "react";
import {View, Text, Button} from "react-native";

export default function HomeScreen({ navigation }){
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Home / Feed</Text>
        <Button title='New Tweet' onPress={() => navigation.navigate('New Tweet Screen')}/>
        <Button title='Tweet Screen' onPress={() => navigation.navigate('Tweet Screen')}/>
        <Button title='Profile Screen' onPress={() => navigation.navigate('Profile Screen')}/>
    </View>
}