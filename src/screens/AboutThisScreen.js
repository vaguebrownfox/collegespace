import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutThisScreen = ({ navigation }) => {
    const contactButtonHandler = () => {
        navigation.push('Contact');
    };

    return (
        <View style={styles.container}>
            <Text>About this screen</Text>
            <Button title="Contact" onPress={contactButtonHandler} />
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

export default AboutThisScreen;
