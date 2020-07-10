import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';

const HomeStackNav = createStackNavigator();

const HomeStack = () => {
    return (
        <HomeStackNav.Navigator>
            <HomeStackNav.Screen name="Home" component={HomeScreen} />
        </HomeStackNav.Navigator>
    );
};

export default HomeStack;
