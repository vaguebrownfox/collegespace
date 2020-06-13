import { createStackNavigator } from 'react-navigation-stack';
import { AboutThisScreen, ContactScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    About: {
        screen: AboutThisScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="About" />
                ),
            };
        },
    },
    Contact: {
        screen: ContactScreen,
        navigationOptions: {
            title: 'Contact',
        },
    },
};

const AboutStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default AboutStack;
