//import liraries
import React, { Component, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Card, Form, Button } from 'native-base';

import Colors from '../../shared/Colors';

import { Context as RegContext } from '../../context/RegContext';

import UserType from './UserTypeComponent';
import Institution from './InstitutionSelectComponent';
import Locality from './LocationSelectComponent';
import Description from './DescriptionComponent';

// create a component
const RegisterScreen = ({ navigation }) => {
    const { state, loadInstitutions } = useContext(RegContext);

    useEffect(() => {
        loadInstitutions();
    }, []);

    return (
        <Container>
            <View style={{ padding: 8 }}>
                <ScrollView>
                    <UserType />
                    <Institution />
                    <Locality />
                    <Description />

                    <Next nav={navigation} />
                </ScrollView>
            </View>
        </Container>
    );
};

const Next = ({ nav }) => {
    const onPressNextHandler = () => {
        // Add check for null values
        nav.navigate('RegisterNext');
    };

    return (
        <View style={styles.buttonView}>
            <Button style={styles.button} onPress={onPressNextHandler}>
                <Text style={styles.bt}>Next</Text>
            </Button>
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
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 8,
        padding: 16,

        borderColor: 'red',
        borderWidth: 0,
    },
    button: {
        borderRadius: 8,
        backgroundColor: Colors.headerBackground,
        width: 100,
        justifyContent: 'center',

        borderWidth: 0,
        borderColor: 'red',
    },
    bt: {
        color: Colors.headerTint,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

//make this component available to the app
export default RegisterScreen;
