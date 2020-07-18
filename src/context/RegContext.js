import createDataContext from './createDataContext';

const iniState = {
    userType: 'Select',
    selectedInstitution: { id: '0', name: 'Select', locality: 'Select' },
    institutionList: [],
};

const regReducer = (state, action) => {
    switch (action.type) {
        case 'USER_TYPE':
            console.log('usr, ', state);
            return { ...state, userType: action.payload };

        case 'LOAD_INSTITUTIONS':
            return { ...state, institutionList: action.payload };

        case 'INSTITUTION_SELECT':
            return {
                ...state,
                selectedInstitution: action.payload,
            };

        default:
            return state;
    }
};

const _fetchInstitutions = () => {
    institutionList = [
        {
            id: '0db2aacc-c754-11ea-9ddc-3d1305b993be',
            name: 'ADVENT CHRISTIAN ',
            locality: 'CHENNAI',
        },
        {
            id: '8ed3090f-c754-11ea-96ce-3d1305b993be',
            name: 'S.NO',
            locality: 'CHENNAI',
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

const updateInstitution = (dispatch) => {
    return (institution) => {
        const i =
            institution == null ? iniState.selectedInstitution : institution;
        dispatch({ type: 'INSTITUTION_SELECT', payload: i });
    };
};

export const { Provider, Context } = createDataContext(
    regReducer,
    { updateUserType, updateInstitution, loadInstitutions },
    iniState,
);
