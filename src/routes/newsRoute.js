import { createStackNavigator } from 'react-navigation-stack';
import { NewsScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    News: {
        screen: NewsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="News" />
                ),
            };
        },
    },
};

const NewsStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default NewsStack;
