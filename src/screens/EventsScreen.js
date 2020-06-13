//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const EventsScreen = ({ navigation }) => {
    const checkInButtonHandler = () => {
        navigation.push('CheckIn');
    };

    return (
        <View style={styles.container}>
            <Text>Event screen</Text>
            <Button title="Check In" onPress={checkInButtonHandler} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default EventsScreen;
