export const SET_USERNAME = 'SET_USERNAME';

export const setUsername = (email) => {
    return {
        type: SET_USERNAME,
        payload: email,
    };
};