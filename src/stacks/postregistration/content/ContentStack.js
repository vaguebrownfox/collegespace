import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContentScreen from './ContentScreen';

const ContentStackNav = createStackNavigator();

const ContentStack = () => {
    return (
        <ContentStackNav.Navigator>
            <ContentStackNav.Screen
                name="Content"
                component={ContentScreen}
                options={{ title: 'Content' }}
            />
        </ContentStackNav.Navigator>
    );
};

export default ContentStack;
