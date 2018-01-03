import {GET_DECODER_FAILURE, GET_DECODER_REQUEST, GET_DECODER_SUCCESS } from '../../actions/getDecoder';


export default (state = {}, action) => {
    switch(action.type){
        case GET_DECODER_FAILURE:
            return state;

        case GET_DECODER_REQUEST:
            return state ;

        case GET_DECODER_SUCCESS:
            return action.payload ;

        default:
            return state;
    }

}