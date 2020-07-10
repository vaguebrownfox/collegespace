//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>AboutScreen</Text>
            <Button
                title="Contact"
                onPress={() => navigation.navigate('Contact')}
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
export default AboutScreen;
