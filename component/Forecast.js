import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.zipCode}>Zip Code</Text>
            <Text style={styles.zipCode}>{props.zipCode}</Text>
            <Text style={styles.main}>{props.main}</Text>
            <Text style={styles.description}>strupper {props.description}</Text>
            <View>
                <Text style={styles.country}>{props.country}</Text>
                <Text style={styles.temp}>{props.temp} 
                    <Text style={styles.tempText}>  °C</Text>
                </Text>
                <Image style={styles.icon}
                source={{
                    uri: "http://openweathermap.org/img/w/" + props.icon + ".png",
                }}
            />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: -50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        top: -100,
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
        textTransform: 'uppercase'
    },
    description:{
        top: -80,
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
        textTransform: 'uppercase'
    },
    temp:{
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
        top: -20,
        textTransform: 'uppercase'
    },
    country:{
        top: -50,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
        textTransform: 'uppercase'
    },
    tempText:{ 
        fontSize: 30,
    },
    icon:{
        left: 35,
        width: 120,
        height: 120,
    },
    zipCode: {
        top: -140,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
});