import React from 'react';
import { TouchableOpacity } from 'react-native';
import Colors from './Colors';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

const HeaderLeft = ({ navigation }) => {
    return (
        <>
            <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.openDrawer()}>
                <IconAnt
                    name="menuunfold"
                    size={24}
                    color={Colors.headerTint}
                />
            </TouchableOpacity>
        </>
    );
};

export default HeaderLeft;
