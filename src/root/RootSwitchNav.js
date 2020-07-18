import React, { useEffect } from 'react';

import { Provider as AuthProvider } from '../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

import RegisterStack from '../stacks/registration/RegisterStack';
import PostRegDrawer from '../stacks/postregistration/PostRegDrawer';

const RootSwitchNav = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                {/* <PostRegDrawer /> */}
                <RegisterStack />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default RootSwitchNav;
