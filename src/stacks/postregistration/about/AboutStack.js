import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const AboutStackNav = createStackNavigator();

const AboutStack = ({ navigation }) => {
    return (
        <AboutStackNav.Navigator screenOptions={headerStyle}>
            <AboutStackNav.Screen
                name="AboutThis"
                component={AboutScreen}
                options={{
                    title: 'About',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
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
