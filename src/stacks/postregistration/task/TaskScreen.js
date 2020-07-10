//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const TaskScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>TaskScreen</Text>
            <Button
                title="Drawer"
                onPress={() => navigation.navigate('Home')}
            />
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
export default TaskScreen;
