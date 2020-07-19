import createDataContext from './createDataContext';
import Colors from '../shared/Colors';

const iniState = {
    userType: 'Select',
    selectedInstitution: {
        city: 'Select',
        district: 'Select',
        code: 'Select',
        locality: 'Select',
        address: 'Select',
        id: 'Select',
        name: 'Select',
        state: 'Select',
    },
    institutionList: [],
    listModalVisibility: false,
    input: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        mobnumber: '',
        photo: '',
    },
    error: {
        name: false,
        lastname: false,
        email: false,
        password: false,
        mobnumber: false,
        photo: false,
        passwordMsg: 'enter password',
        msgColor: Colors.textLight,
    },
};

const regReducer = (state, action) => {
    switch (action.type) {
        case 'USER_TYPE':
            console.log('usr, ', state);
            return { ...state, userType: action.payload };

        case 'LOAD_INSTITUTIONS':
            return { ...state, institutionList: action.payload };

        case 'SHOW_LIST_MODAL':
            return { ...state, listModalVisibility: action.payload };

        case 'INSTITUTION_SELECT':
            return {
                ...state,
                selectedInstitution: action.payload,
            };

        case 'UPDATE_INPUT':
            return { ...state, input: action.payload };

        case 'UPDATE_INPUT_ERROR':
            return { ...state, error: action.payload };

        default:
            return state;
    }
};

const _fetchInstitutions = () => {
    // fetch from api
    institutionList = [
        {
            city: 'CHENNAI',
            district: 'CHENNAI',
            code: '33020901301',
            locality: 'CHENNAI',
            address: 'NO 42 VELACHERY MAIN ROAD, GUINDY, CHENNAI - 600032',
            id: '0db2aacc-c754-11ea-9ddc-3d1305b993be',
            name: 'ADVENT CHRISTIAN MIDDLE SCHOOL - GUINDY',
            state: 'TAMIL NADU',
        },
        {
            city: 'CHENNAI',
            district: 'CHENNAI',
            code: '33020300913',
            locality: 'CHENNAI',
            address: 'D S MEMORIAL MATRICULATION SCHOOL',
            id: '8ed3090f-c754-11ea-96ce-3d1305b993be',
            name: 'S.NO',
            state: 'TAMIL NADU',
        },
    ];
    return institutionList;
};

const updateUserType = (dispatch) => {
    return (userType) => {
        dispatch({ type: 'USER_TYPE', payload: userType });
    };
};

const loadInstitutions = (dispatch) => {
    return () => {
        institutionList = _fetchInstitutions();
        dispatch({ type: 'LOAD_INSTITUTIONS', payload: institutionList });
    };
};

const showListModal = (dispatch) => {
    return (visible) => {
        dispatch({ type: 'SHOW_LIST_MODAL', payload: visible });
    };
};

const updateInstitution = (dispatch) => {
    return (institution) => {
        const i =
            institution == null ? iniState.selectedInstitution : institution;
        dispatch({ type: 'INSTITUTION_SELECT', payload: i });
    };
};

const updateInput = (dispatch) => {
    return (input) => {
        dispatch({ type: 'UPDATE_INPUT', payload: input });
    };
};

const updateInputError = (dispatch) => {
    return (error) => {
        dispatch({ type: 'UPDATE_INPUT_ERROR', payload: error });
    };
};

export const { Provider, Context } = createDataContext(
    regReducer,
    {
        updateUserType,
        updateInstitution,
        showListModal,
        loadInstitutions,
        updateInput,
        updateInputError,
    },
    iniState,
);
