import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import Colors from '../../../shared/Colors';
import HeaderLeft from '../../../shared/HeaderLeft';
import { headerStyle } from '../../../shared/ScreenOptions';
import TaskScreen from './TaskScreen';

const TaskStackNav = createStackNavigator();

const TaskStack = ({ navigation }) => {
    return (
        <TaskStackNav.Navigator screenOptions={headerStyle}>
            <TaskStackNav.Screen
                name="Task"
                component={TaskScreen}
                options={{
                    title: 'Task',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </TaskStackNav.Navigator>
    );
};

export default TaskStack;
