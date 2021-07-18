import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Ranong', code: '85000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Surat Thani', code: '84000' },
]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
         <View style={styles.zipItem}>
            <Text style={styles.text}>{place}</Text>
            <Text style={styles.text}>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (   
    <View> 
        <Text style={styles.header}> Weather </Text>
        <FlatList
            data={availableZipItems}
            keyExtractor={_keyExtractor}
            renderItem={ ({item}) => 
                <ZipItem {...item} navigation={navigation}/>
            }
        />
        <StatusBar style="auto" />
    </View>
    );
}
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "auto",
        height: 50,
        backgroundColor : "#C5FFD2",
    },
    text:{
        textAlign: "center",
        fontSize: 20,
        color: "#BC153B",
        padding : 10
    },
    header:{
        width: "auto",
        height: 80,
        fontSize: 50,
        textAlign: "center",
        backgroundColor : "#BECAFE",
        borderRadius : 100
    }
})
   