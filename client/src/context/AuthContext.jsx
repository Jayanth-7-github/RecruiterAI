import React, { createContext, useReducer, useEffect } from 'react';

// Mock initial state
const initialState = {
    token: localStorage.getItem('token') || 'mock-token',
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) || null
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user
            };
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT':
        case 'REGISTER_FAIL':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Mock load user
    const loadUser = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({
                type: 'USER_LOADED',
                payload: user
            });
        } else if (state.token) {
            // Default mock user if token exists but no user in storage
            const mockUser = { id: '1', name: 'Demo User', email: 'demo@example.com' };
            dispatch({
                type: 'USER_LOADED',
                payload: mockUser
            });
        }
    };

    const register = async (formData) => {
        const mockUser = { id: Date.now().toString(), name: formData.name, email: formData.email };
        const mockResponse = { token: 'mock-token-' + Date.now(), user: mockUser };

        localStorage.setItem('token', mockResponse.token);
        localStorage.setItem('user', JSON.stringify(mockUser));

        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: mockResponse
        });
    };

    const login = async (formData) => {
        const mockUser = { id: '1', name: 'Demo User', email: formData.email || 'demo@example.com' };
        const mockResponse = { token: 'mock-token-123', user: mockUser };

        localStorage.setItem('token', mockResponse.token);
        localStorage.setItem('user', JSON.stringify(mockUser));

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: mockResponse
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};
