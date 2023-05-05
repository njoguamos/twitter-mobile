import 'react-native-gesture-handler';
import React from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    StatusBar
} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {

    const DATA = [
        {
            id: '1',
            title: 'First Item'
        },
        {
            id: '2',
            title: 'Second Item'
        },
        {
            id: '3',
            title: 'Third Item'
        },
        {
            id: '4',
            title: 'Fourth Item'
        },
        {
            id: '5',
            title: 'Fifth Item'
        },
        {
            id: '6',
            title: 'Sixth Item'
        },
        {
            id: '7',
            title: 'Seventh Item'
        },
        {
            id: '8',
            title: 'Eighth Item'
        },
        {
            id: '9',
            title: 'Ninth Item'
        },
        {
            id: '10',
            title: 'Tenth Item'
        }
    ];

    function gotToTweetScreen() {
        return navigation.navigate('Tweet Screen');
    }

    const Item = ({title}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile Screen')}>
                <Image source={{uri: 'https://github.com/njoguamos.png'}} style={styles.avatar}/>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.flexRow} onPress={() => gotToTweetScreen()}>
                    <Text numberOfLines={1} style={styles.tweetName}>{title}</Text>
                    <Text numberOfLines={1} style={styles.handle}>@njoguamos</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.handle}>12m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotToTweetScreen()}>
                    <Text style={styles.tweetContent}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda aut consequatur cum dolorum ducimus facilis laborum tenetur, unde voluptatum!
                    </Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray" style={{ marginRight: 2 }}/>
                        <Text style={styles.textGray}>123</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray" style={{ marginRight: 2 }}/>
                        <Text style={styles.textGray}>2134</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray" style={{ marginRight: 2 }}/>
                        <Text style={styles.textGray}>14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={22} color="gray" style={{ marginRight: 2 }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title}/>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}/> }
            />
            <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('New Tweet Screen')}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight || 0,
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21
    },
    flexRow: {
        flexDirection: 'row'
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    handle: {
        marginHorizontal: 8,
        color: 'gray'
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 24
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    textGray: {
        color: 'gray'
    },
    ml4: {
        marginLeft: 16
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9bf1',
        position: 'absolute',
        bottom: 20,
        right: 12
    }
})