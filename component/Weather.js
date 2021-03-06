import React , {useState, useEffect}from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=12987faf5daaacddbfb2bac87406030c`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    country: json.sys.country,
                    icon: json.weather[0].icon,
                    zipCode: props.zipCode,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} resizeMode="cover" style={styles.backdrop}>
                <Forecast {...forecastInfo} />
            </ImageBackground>
                
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});