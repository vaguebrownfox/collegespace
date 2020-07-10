import React from 'react';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        // Auth.signUp
    };
};

// Auth Actions

const confirmSignUp = (dispatch) => {
    return async ({ email, code }) => {
        // Auth.confirmSignUp
    };
};

const signIn = (dispatch) => {
    return async ({ email, password }) => {
        // Auth.signIn
    };
};

const signOut = (dispatch) => {
    return async () => {
        // Auth.signOut
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, confirmSignUp, signIn, signOut },
    { isSignIn: false },
);
