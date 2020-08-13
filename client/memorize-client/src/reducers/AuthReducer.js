const initialAuthState = {
    isAuthenticated: false,
    user: null,
    jwtToken: null,
    error: {
        status: null,
        statusText: null
    }
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.username,
                jwtToken: action.payload.token
            }
        case "USER_LOGIN_FAILURE":
            return {
                ...state,
                isAuthenticated: false,
                error: {
                    status: action.payload.error.status,
                    statusText: action.payload.error.statusText
                }
            }
        case "USER_LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                jwtToken: null
            }
        default:
            return state;
    }
}

export { initialAuthState, authReducer };
