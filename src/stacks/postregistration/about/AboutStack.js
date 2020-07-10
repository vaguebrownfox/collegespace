import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const AboutStackNav = createStackNavigator();

const AboutStack = () => {
    return (
        <AboutStackNav.Navigator>
            <AboutStackNav.Screen
                name="AboutThis"
                component={AboutScreen}
                options={{ title: 'About' }}
            />
            <AboutStackNav.Screen
                name="Contact"
                component={ContactScreen}
                options={{ title: 'Contact' }}
            />
        </AboutStackNav.Navigator>
    );
};

export default AboutStack;
