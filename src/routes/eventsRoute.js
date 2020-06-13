import { createStackNavigator } from 'react-navigation-stack';
import { EventsScreen, CheckInScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    Event: {
        screen: EventsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Events" />
                ),
            };
        },
    },
    CheckIn: {
        screen: CheckInScreen,
        navigationOptions: {
            title: 'Check In',
        },
    },
};

const EventStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default EventStack;
