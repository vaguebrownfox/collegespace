import { createStackNavigator } from 'react-navigation-stack';
import { SubmitScreen, ToDoScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    Submit: {
        screen: SubmitScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Submit" />
                ),
            };
        },
    },
    ToDo: {
        screen: ToDoScreen,
        navigationOptions: {
            title: 'To Do',
        },
    },
};

const SubmitStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default SubmitStack;
