import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogoutScreen from './LogoutScreen';

const LogoutStackNav = createStackNavigator();

const LogoutStack = () => {
    return (
        <LogoutStackNav.Navigator>
            <LogoutStackNav.Screen
                name="Logout"
                component={LogoutScreen}
                options={{ title: 'Logout' }}
            />
        </LogoutStackNav.Navigator>
    );
};

export default LogoutStack;
