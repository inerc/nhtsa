import {GET_DECODER_FAILURE, GET_DECODER_REQUEST, GET_DECODER_SUCCESS } from '../../actions/getDecoder';


export default (state = {}, action) => {
    switch(action.type){
        case GET_DECODER_FAILURE:
            return {isFetching: false};

        case GET_DECODER_REQUEST:
            return {isFetching: true} ;

        case GET_DECODER_SUCCESS:
            return {isFetching: false} ;

        default:
            return state;
    }

}