//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// create a component
const Header = ({ navigation, title }) => {
    const drawDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <SafeAreaView>
            <View style={styles.header}>
                {/* {icon for drawing drawer nav} */}
                <Icon.Button
                    name="menuunfold"
                    size={24}
                    color="white"
                    backgroundColor="black"
                    onPress={drawDrawer}
                />
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#eee',
        letterSpacing: 1,
        paddingLeft: 8,
    },
});

//make this component available to the app
export default Header;
