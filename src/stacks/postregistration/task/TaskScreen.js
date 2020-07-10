//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import TaskCard from './TaskCard';

// create a component
const TaskScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default TaskScreen;
