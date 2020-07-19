//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Form, Body } from 'native-base';

import Colors from '../../../shared/Colors';

import { Context as RegContext } from '../../../context/RegContext';

// create a component
const DescriptionComponent = () => {
    const { state } = useContext(RegContext);
    const { selectedInstitution } = state;
    const { name, address, code } = selectedInstitution;

    return (
        <View style={styles.description}>
            <Card>
                <Text style={styles.instText}>Institution</Text>
                <CardItem>
                    <Body>
                        <Disp title="Name" disp={name} />
                        <Disp title="Address" disp={address} />
                        <Disp title="Code" disp={code} />
                        {/* Add more if necessary */}
                    </Body>
                </CardItem>
            </Card>
        </View>
    );
};

const Disp = ({ title, disp }) => {
    return (
        <View style={styles.dispView}>
            <Text style={styles.adrText}>{title}</Text>
            <Text style={{ color: Colors.textLight }}>{disp}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    description: {
        borderWidth: 0,
        borderRadius: 7,
        borderColor: 'black',
    },
    instText: {
        paddingStart: 16,
        paddingTop: 16,
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.accent,
    },
    nameText: {
        fontWeight: 'bold',
        paddingTop: 0,
        color: Colors.accent,
    },
    adrText: {
        fontWeight: 'bold',
        paddingBottom: 4,
        color: Colors.accent,
    },
    dispView: {
        paddingBottom: 8,
    },
});

//make this component available to the app
export default DescriptionComponent;
