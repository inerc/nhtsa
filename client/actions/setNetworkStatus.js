export const SET_NETWORK_STATUS = 'SET_NETWORK_STATUS';

export const setNetworkStatus = (payload) => {
    return {
        type: SET_NETWORK_STATUS,
        payload
    };
};
