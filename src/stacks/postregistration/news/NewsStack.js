import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewsScreen from './NewsScreen';

const NewsStackNav = createStackNavigator();

const NewsStack = () => {
    return (
        <NewsStackNav.Navigator>
            <NewsStackNav.Screen
                name="News"
                component={NewsScreen}
                options={{ title: 'News' }}
            />
        </NewsStackNav.Navigator>
    );
};

export default NewsStack;
