//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Form, Picker } from 'native-base';

import Colors from '../../../shared/Colors';

import { Context as RegContext } from '../../../context/RegContext';

// create a component
const UserType = () => {
    const { state, updateUserType } = useContext(RegContext);

    return (
        <Card>
            <View style={styles.pickerView}>
                <Text style={styles.pickerType}>User type</Text>
                <Form>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={state.userType}
                        onValueChange={(itemValue, itemIndex) => {
                            updateUserType(itemValue);
                        }}>
                        <Picker.Item label="Select" value={null} />
                        <Picker.Item label="Student" value="Student" />
                        <Picker.Item label="Teacher" value="Teacher" />
                    </Picker>
                </Form>
            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
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
export default UserType;
