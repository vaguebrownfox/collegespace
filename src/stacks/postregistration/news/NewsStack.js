import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewsScreen from './NewsScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const NewsStackNav = createStackNavigator();

const NewsStack = ({ navigation }) => {
    return (
        <NewsStackNav.Navigator screenOptions={headerStyle}>
            <NewsStackNav.Screen
                name="News"
                component={NewsScreen}
                options={{
                    title: 'News',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </NewsStackNav.Navigator>
    );
};

export default NewsStack;
