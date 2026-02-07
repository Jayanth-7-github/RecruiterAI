import React, { createContext, useReducer, useEffect } from 'react';


const initialState = {
    token: 'mock-token',
    isAuthenticated: true,
    loading: false,
    user: { id: '1', name: 'Recruiter Admin', email: 'admin@recruiter.ai' }
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: true,
            };
        default:
            return state;
    }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const logout = () => {
        localStorage.clear();

        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};
