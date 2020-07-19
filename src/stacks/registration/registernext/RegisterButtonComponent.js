//import liraries
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

import Colors from '../../../shared/Colors';

import { Context as RegContext } from '../../../context/RegContext';

// create a component
const RegisterButton = () => {
    const { state, updateInputError } = useContext(RegContext);
    const { input, error } = state;

    let localError = {
        name: true,
        lastname: true,
        email: true,
        password: true,
        mobnumber: true,
        photo: true,
        passwordMsg: '',
        msgColor: Colors.textLight,
    };

    const nameValidate = () => {
        let reg = /^[a-z]+$/i;
        if (input.name.length >= 3 && reg.test(input.name)) {
            localError = { ...localError, name: false };
        } else {
            localError = { ...localError, name: true };
        }

        if (input.lastname.length >= 1 && reg.test(input.lastname)) {
            localError = { ...localError, lastname: false };
        } else {
            localError = { ...localError, lastname: true };
        }
    };

    const emailValidate = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(input.email) === false) {
            console.log('Email is Not Correct');
            localError = { ...localError, email: true };
        } else {
            localError = { ...localError, email: false };
        }
    };

    const passwordValidate = () => {
        let str = input.password;
        if (str.length < 6) {
            localError = {
                ...localError,
                password: true,
                passwordMsg: 'too short',
                msgColor: Colors.red,
            };
            return 'too_short';
        } else if (str.length > 50) {
            localError = {
                ...localError,
                password: true,
                passwordMsg: 'too long',
                msgColor: Colors.red,
            };
            return 'too_long';
        } else if (str.search(/\d/) == -1) {
            localError = {
                ...localError,
                password: true,
                passwordMsg: 'no number',
                msgColor: Colors.red,
            };
            return 'no_num';
        } else if (str.search(/[a-zA-Z]/) == -1) {
            localError = {
                ...localError,
                password: true,
                passwordMsg: 'no letter',
                msgColor: Colors.red,
            };
            return 'no_letter';
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
            localError = {
                ...localError,
                password: true,
                passwordMsg: 'bad char',
                msgColor: Colors.red,
            };
            return 'bad_char';
        } else {
            localError = {
                ...localError,
                password: false,
                passwordMsg: 'good password',
                msgColor: Colors.green,
            };
            return 'good password';
        }
    };

    const mobnumberValidate = () => {
        if (input.mobnumber.length == 10) {
            localError = { ...localError, mobnumber: false };
        } else {
            localError = { ...localError, mobnumber: true };
        }
    };

    const validateInput = () => {
        nameValidate();
        emailValidate();
        const msg = passwordValidate();
        console.log('button', msg);
        mobnumberValidate();
        updateInputError(localError);
    };

    return (
        <Container style={styles.buttonView}>
            <Button style={styles.button} onPress={() => validateInput()}>
                <Text>Register</Text>
            </Button>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    buttonView: {
        paddingTop: 32,
        paddingEnd: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexWrap: 'wrap',

        borderWidth: 0,
        borderColor: 'red',
    },
    button: {
        borderRadius: 8,
        backgroundColor: Colors.headerBackground,
        width: 100,
        justifyContent: 'center',

        borderWidth: 0,
        borderColor: 'red',
    },
});

//make this component available to the app
export default RegisterButton;
