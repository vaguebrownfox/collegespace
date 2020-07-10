import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogoutScreen from './LogoutScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const LogoutStackNav = createStackNavigator();

const LogoutStack = ({ navigation }) => {
    return (
        <LogoutStackNav.Navigator screenOptions={headerStyle}>
            <LogoutStackNav.Screen
                name="Logout"
                component={LogoutScreen}
                options={{
                    title: 'Logout',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </LogoutStackNav.Navigator>
    );
};

export default LogoutStack;
