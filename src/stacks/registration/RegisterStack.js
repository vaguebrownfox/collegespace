import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './RegisterScreen';
import RegisterNextScreen from './RegisterNextScreen';

import { headerStyle } from '../../shared/ScreenOptions';
import { Provider as RegProvider } from '../../context/RegContext';

const RegisterStackNav = createStackNavigator();

const RegisterStack = ({ navigation }) => {
    return (
        <RegProvider>
            <RegisterStackNav.Navigator screenOptions={headerStyle}>
                <RegisterStackNav.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        title: 'Register',
                    }}
                />
                <RegisterStackNav.Screen
                    name="RegisterNext"
                    component={RegisterNextScreen}
                    options={{ title: 'Register' }}
                />
            </RegisterStackNav.Navigator>
        </RegProvider>
    );
};

export default RegisterStack;
