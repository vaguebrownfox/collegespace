import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const HomeStackNav = createStackNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <HomeStackNav.Navigator screenOptions={headerStyle}>
            <HomeStackNav.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </HomeStackNav.Navigator>
    );
};

export default HomeStack;
