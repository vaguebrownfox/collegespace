import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './RegisterScreen';
import RegisterNextScreen from './RegisterNextScreen';

const RegisterStackNav = createStackNavigator();

const RegisterStack = () => {
    return (
        <RegisterStackNav.Navigator>
            <RegisterStackNav.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Register' }}
            />
            <RegisterStackNav.Screen
                name="RegisterNext"
                component={RegisterNextScreen}
                options={{ title: 'Register' }}
            />
        </RegisterStackNav.Navigator>
    );
};

export default RegisterStack;
