//import liraries
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Item, Label, Input } from 'native-base';

import Colors from '../../../shared/Colors';

import { Context as RegContext } from '../../../context/RegContext';

// create a component
const InstitutionSearch = () => {
    const { state, showListModal, updateInstitution } = useContext(RegContext);
    const { institutionList } = state;

    const [enteredName, setEnteredName] = useState('');
    const [list, setList] = useState(institutionList);
    const [refresh, stateRefresh] = useState(true);

    const ListItem = ({ inst }) => {
        const onSelectItem = () => {
            updateInstitution(inst);
            showListModal(false);
        };

        return (
            <TouchableOpacity onPress={onSelectItem}>
                <View style={styles.itemView}>
                    <Text style={styles.itemText}>{inst.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Item stackedLabel>
                <Label>Search Institution</Label>
                <Input
                    onChangeText={(text) => {
                        setEnteredName(text);
                        if (text.length > 0) {
                            setList(
                                list.filter(({ name }) => {
                                    return (
                                        name.slice(0, text.length) ===
                                        text.toUpperCase()
                                    );
                                }),
                            );
                        } else {
                            setList(institutionList);
                        }

                        stateRefresh(!refresh);
                    }}
                    value={enteredName}
                />
            </Item>
            <View style={styles.listView}>
                <FlatList
                    data={list}
                    extraData={refresh}
                    keyExtractor={(inst) => inst.id}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                inst={item}
                                showListModal={showListModal}
                            />
                        );
                    }}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    listView: {
        paddingVertical: 16,
    },
    itemView: {
        paddingVertical: 12,
        paddingHorizontal: 4,
        paddingStart: 8,
        marginVertical: 4,
        elevation: 1,

        borderWidth: 0,
        borderRadius: 4,
        borderColor: 'red',
    },
    itemText: {
        fontFamily: 'sans-serif-light',
        fontSize: 16,
    },
});

//make this component available to the app
export default InstitutionSearch;
