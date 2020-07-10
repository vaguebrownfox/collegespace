import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventScreen from './EventScreen';

const EventStackNav = createStackNavigator();

const EventStack = () => {
    return (
        <EventStackNav.Navigator>
            <EventStackNav.Screen
                name="Event"
                component={EventScreen}
                options={{ title: 'Event' }}
            />
        </EventStackNav.Navigator>
    );
};

export default EventStack;
