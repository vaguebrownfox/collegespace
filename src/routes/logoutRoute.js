import { createStackNavigator } from 'react-navigation-stack';
import { LogoutScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    Logout: {
        screen: LogoutScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Logout" />
                ),
            };
        },
    },
};

const LogoutStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default LogoutStack;
