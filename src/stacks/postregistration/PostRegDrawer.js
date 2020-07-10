import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import IconAnt from 'react-native-vector-icons/dist/AntDesign';
import IconFA from 'react-native-vector-icons/dist/FontAwesome';
import IconMI from 'react-native-vector-icons/dist/MaterialIcons';
import IconMCI from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import HomeStack from './home/HomeStack';
import AboutStack from './about/AboutStack';
import ContentStack from './content/ContentStack';
import NewsStack from './news/NewsStack';
import TaskStack from './task/TaskStack';
import EventStack from './eventss/EventStack';
import ReportStack from './report/ReportStack';
import LogoutStack from './logout/LogoutStack';

const PostRegDrawerNav = createDrawerNavigator();
const CustomDrawerContent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.drawerHeader}>
                <Image
                    source={require('../../shared/dp.jpg')}
                    style={styles.drawerHeaderImage}
                />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};
const PostRegDrawer = () => {
    return (
        <PostRegDrawerNav.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <PostRegDrawerNav.Screen
                name="Home"
                component={HomeStack}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconAnt name="home" size={size} color={color} />
                        );
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="About"
                component={AboutStack}
                options={{
                    title: 'About',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconAnt
                                name="infocirlceo"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="Content"
                component={ContentStack}
                options={{
                    title: 'Content',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconAnt name="profile" size={size} color={color} />
                        );
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="News"
                component={NewsStack}
                options={{
                    title: 'News',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconAnt name="bars" size={size} color={color} />
                        );
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="Task"
                component={TaskStack}
                options={{
                    title: 'Task',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconFA name="tasks" size={size} color={color} />
                        );
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="Event"
                component={EventStack}
                options={{
                    title: 'Event',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconMI name="event" size={size} color={color} />
                        );
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="Report"
                component={ReportStack}
                options={{
                    title: 'Report',
                    drawerIcon: ({ focused, color, size }) => {
                        return <IconMI name="send" size={size} color={color} />;
                    },
                }}
            />
            <PostRegDrawerNav.Screen
                name="Logout"
                component={LogoutStack}
                options={{
                    title: 'Logout',
                    drawerIcon: ({ focused, color, size }) => {
                        return (
                            <IconMCI name="logout" size={size} color={color} />
                        );
                    },
                }}
            />
        </PostRegDrawerNav.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        height: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerHeaderImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
});

export default PostRegDrawer;
