//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Form, Item, Label, Input } from 'native-base';

import Colors from '../../../shared/Colors';

import { Context as RegContext } from '../../../context/RegContext';

// create a component
const RegNextInput = () => {
    const { state, updateInput } = useContext(RegContext);
    const { input, error } = state;
    return (
        <>
            <Form>
                <Item stackedLabel success={!error.name} error={error.name}>
                    <Label>First Name</Label>
                    <Input
                        onChangeText={(text) =>
                            updateInput({ ...input, name: text })
                        }
                        value={input.name}
                    />
                </Item>

                <Item
                    stackedLabel
                    success={!error.lastname}
                    error={error.lastname}>
                    <Label>Last Name</Label>
                    <Input
                        onChangeText={(text) =>
                            updateInput({ ...input, lastname: text })
                        }
                        value={input.lastname}
                    />
                </Item>

                <Item stackedLabel success={!error.email} error={error.email}>
                    <Label>Email</Label>
                    <Input
                        onChangeText={(text) =>
                            updateInput({ ...input, email: text })
                        }
                        value={input.email}
                    />
                </Item>

                <Item
                    stackedLabel
                    success={!error.password}
                    error={error.password}>
                    <Label>Password</Label>
                    <Text
                        style={{
                            ...styles.passwordTxt,
                            color: error.msgColor,
                        }}>
                        {error.passwordMsg + '*'}
                    </Text>
                    <Input
                        secureTextEntry
                        onChangeText={(text) =>
                            updateInput({ ...input, password: text })
                        }
                        value={input.password}
                    />
                </Item>

                <Item
                    stackedLabel
                    success={!error.mobnumber}
                    error={error.mobnumber}>
                    <Label>Mobile number</Label>
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            text = text.replace(/\D/g, '');
                            text = text.slice(0, 10);
                            updateInput({ ...input, mobnumber: text });
                        }}
                        value={input.mobnumber}
                    />
                </Item>
            </Form>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    passwordTxt: {
        alignSelf: 'flex-start',
        color: Colors.textLight,
        paddingVertical: 4,
        paddingStart: 8,
    },
});

//make this component available to the app
export default RegNextInput;
