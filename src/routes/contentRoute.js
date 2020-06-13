import { createStackNavigator } from 'react-navigation-stack';
import { ContentScreen } from '../screens';
import Header from '../shared/Header';
import React from 'react';

const screen = {
    Content: {
        screen: ContentScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Content" />
                ),
            };
        },
    },
};

const ContentStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
            height: 60,
        },
    },
});

export default ContentStack;
