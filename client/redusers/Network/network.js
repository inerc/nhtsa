import {SET_NETWORK_STATUS} from '../../actions/setNetworkStatus';

export default (state = {}, action) => {
    switch(action.type){
        case SET_NETWORK_STATUS:

            return {isOnline: action.payload};

        default:
            return state;
    }

}