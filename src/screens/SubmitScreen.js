//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const SubmitScreen = ({ navigation }) => {
    const toDoButtonHandler = () => {
        navigation.push('ToDo');
    };

    return (
        <View style={styles.container}>
            <Text>Submit screen</Text>
            <Button title="To Do" onPress={toDoButtonHandler} />
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
export default SubmitScreen;
