import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventScreen from './EventScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const EventStackNav = createStackNavigator();

const EventStack = ({ navigation }) => {
    return (
        <EventStackNav.Navigator screenOptions={headerStyle}>
            <EventStackNav.Screen
                name="Event"
                component={EventScreen}
                options={{
                    title: 'Event',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </EventStackNav.Navigator>
    );
};

export default EventStack;
