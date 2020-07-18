//import liraries
import React, { Component, useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, Form } from 'native-base';

import Colors from '../../shared/Colors';

import { Context as RegContext } from '../../context/RegContext';

import UserType from './UserTypeComponent';
import Institution from './InstitutionSelectComponent';
import Locality from './LocationSelectComponent';

// create a component
const RegisterScreen = () => {
    const { state, loadInstitutions } = useContext(RegContext);
    useEffect(() => {
        loadInstitutions();
    }, []);
    return (
        <Container>
            <View style={{ padding: 8 }}>
                <UserType />
                <Institution />
                <Locality />
            </View>
        </Container>
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
    pickerView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 8,
        marginVertical: 4,

        borderColor: 'red',
        borderWidth: 0,
    },
    pickerType: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif-large',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.accent,

        borderColor: 'red',
        borderWidth: 0,
    },
});

//make this component available to the app
export default RegisterScreen;
