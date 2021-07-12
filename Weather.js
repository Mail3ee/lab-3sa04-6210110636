import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather(props) {
    return (
        <Text>{props.zipCode}</Text>
    );
}
   