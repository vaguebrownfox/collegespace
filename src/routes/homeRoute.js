import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Home" />
                ),
            };
        },
    },
};

const HomeStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'black', height: 60 },
    },
});

export default HomeStack;
