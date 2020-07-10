import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ReportScreen from './ReportScreen';

const ReportStackNav = createStackNavigator();

const ReportStack = () => {
    return (
        <ReportStackNav.Navigator>
            <ReportStackNav.Screen
                name="Report"
                component={ReportScreen}
                options={{ title: 'Report' }}
            />
        </ReportStackNav.Navigator>
    );
};

export default ReportStack;
