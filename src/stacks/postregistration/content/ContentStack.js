import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContentScreen from './ContentScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const ContentStackNav = createStackNavigator();

const ContentStack = ({ navigation }) => {
    return (
        <ContentStackNav.Navigator screenOptions={headerStyle}>
            <ContentStackNav.Screen
                name="Content"
                component={ContentScreen}
                options={{
                    title: 'Content',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </ContentStackNav.Navigator>
    );
};

export default ContentStack;
