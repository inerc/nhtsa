export const GET_DECODER_REQUEST = 'GET_DECODER_REQUEST';
export const GET_DECODER_FAILURE = 'GET_DECODER_FAILURE';
export const GET_DECODER_SUCCESS = 'GET_DECODER_SUCCESS';

////////////////////////////////////////////////////////////
export const getDecoderSuccess = (payload) => {
    return {
        type: GET_DECODER_SUCCESS,
        payload
    };
};

export const getDecoderFailure = (payload) => {
    return {
        type: GET_DECODER_FAILURE,
        payload
    };
};

export const getDecoderRequest = (payload) => {
    return {
        type: GET_DECODER_REQUEST,
        payload
    };
};
