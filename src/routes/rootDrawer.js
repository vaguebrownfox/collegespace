import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeRoute';
import NewsStack from './newsRoute';
import SubmitStack from './submitRoute';
import ContentStack from './contentRoute';
import EventStack from './eventsRoute';
import SettingStack from './settingsRoute';
import AboutStack from './aboutRoute';
import LogoutStack from './logoutRoute';

const RootDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        News: {
            screen: NewsStack,
        },
        Submit: {
            screen: SubmitStack,
        },
        Content: {
            screen: ContentStack,
        },
        Events: {
            screen: EventStack,
        },
        Settings: {
            screen: SettingStack,
        },
        About: {
            screen: AboutStack,
        },
        Logout: {
            screen: LogoutStack,
        },
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
        drawerContentOptions: {
            headeTitle: 'Screens',
            drawerLabel: 'Go to',
        },
    },
);

export default createAppContainer(RootDrawerNavigator);
