//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Container } from 'native-base';

import RegInput from './RegNextInputComponent';
import RegButton from './RegisterButtonComponent';

// create a component
const RegisterNextScreen = () => {
    return (
        <Container>
            <ScrollView>
                <RegInput />
                <RegButton />
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default RegisterNextScreen;
