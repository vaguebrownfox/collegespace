//import liraries
import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Card, Form, Picker, Item, Label, Input } from 'native-base';
import Modal from 'react-native-modal';

import Colors from '../../../shared/Colors';

import { Context as RegContext } from '../../../context/RegContext';

import InstSearch from './InstitutionSearchModal';

// create a component
const InstitutionSelect = () => {
    const { state, updateInstitution, showListModal } = useContext(RegContext);

    return (
        <>
            <Card>
                <TouchableOpacity onPress={() => showListModal(true)}>
                    <View style={styles.pickerView}>
                        <Text style={styles.pickerType}>Institution</Text>
                        <Form>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={state.selectedInstitution}
                                onValueChange={(itemValue, itemIndex) => {
                                    updateInstitution(itemValue);
                                    showListModal(true);
                                }}>
                                <Picker.Item
                                    label={state.selectedInstitution.name}
                                    value={state.selectedInstitution}
                                />
                                <Picker.Item label="Search" value={null} />
                            </Picker>
                        </Form>
                    </View>
                </TouchableOpacity>
            </Card>
            <Modal
                isVisible={state.listModalVisibility}
                animationIn="slideInUp"
                animationOut="slideOutUp"
                onRequestClose={() => {
                    showListModal(false);
                }}>
                <InstSearch />
            </Modal>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    pickerView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 8,
        marginVertical: 4,

        borderColor: 'red',
        borderWidth: 0,
    },
    pickerType: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif-large',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.accent,

        borderColor: 'red',
        borderWidth: 0,
    },
});

//make this component available to the app
export default InstitutionSelect;

// {
//     state.institutionList.map((i) => {
//         return <Picker.Item key={i.id} label={i.name} value={i} />;
//     });
// }
