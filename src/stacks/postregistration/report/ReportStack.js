import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ReportScreen from './ReportScreen';

import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';

const ReportStackNav = createStackNavigator();

const ReportStack = ({ navigation }) => {
    return (
        <ReportStackNav.Navigator screenOptions={headerStyle}>
            <ReportStackNav.Screen
                name="Report"
                component={ReportScreen}
                options={{
                    title: 'Report',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </ReportStackNav.Navigator>
    );
};

export default ReportStack;
