import { createStackNavigator } from 'react-navigation-stack';
import { SettingsScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Settings" />
                ),
            };
        },
    },
};

const SettingsStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default SettingsStack;
