//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

// create a component
const TaskCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.discriptionView}>
                <View style={styles.dispheadView}>
                    <Text style={styles.descriptionHead}>Task Heading</Text>
                </View>

                <View style={styles.dispView}>
                    <Text style={styles.description}>Task description</Text>
                </View>
            </View>

            <View style={styles.taskstateView}>
                <IconAnt name="rightcircle" size={32} color="red" />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        margin: 8,
        padding: 8,
        height: 100,
        elevation: 4,
        backgroundColor: '#fefefe',

        borderWidth: 0,
        borderRadius: 16,
    },
    discriptionView: {
        flex: 3,
        alignSelf: 'stretch',
        margin: 8,
        borderWidth: 0,
        borderRadius: 8,
    },
    taskstateView: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',

        borderWidth: 0,
        borderRadius: 8,
    },
    dispheadView: {
        paddingBottom: 4,
        marginBottom: 4,

        borderBottomWidth: 0,
        borderRadius: 2,
        borderColor: '#aaa',
    },
    descriptionHead: {
        color: '#353535',
        fontSize: 16,
        fontFamily: 'sans-serif-large',
    },
    dispView: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',

        borderWidth: 0,
        borderRadius: 8,
    },
    description: {
        color: '#535353',
        fontSize: 14,
        fontFamily: 'sans-serif-large',
    },
});

//make this component available to the app
export default TaskCard;
