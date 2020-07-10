import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TaskScreen from './TaskScreen';

const TaskStackNav = createStackNavigator();

const TaskStack = () => {
    return (
        <TaskStackNav.Navigator>
            <TaskStackNav.Screen
                name="Task"
                component={TaskScreen}
                options={{ title: 'Task' }}
            />
        </TaskStackNav.Navigator>
    );
};

export default TaskStack;
