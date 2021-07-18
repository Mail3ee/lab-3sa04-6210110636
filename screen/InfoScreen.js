import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet} from 'react-native';

export default function InfoScreen(){
    return (
        <View >
            <Text style={styles.text}>
               แอพพลิเคชั่นนี้ถูกสร้างขึ้นด้วย React-Native ในวิชา 240-301 Advanced Computer Engineering Lab I [3SA04] 
            </Text>
            <Text style={styles.text}>
               พัฒนาโดย นายไกรวิชญ์ เสนาสุ 6210110636
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
    },
})