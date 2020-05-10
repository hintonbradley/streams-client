
import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            let newObj = {...state};
            const mapObjKeys = function (a) {
                newObj[a.id]=a;
            }
            action.payload.forEach(function(a){mapObjKeys(a)});
            return newObj;
        case FETCH_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id] : action.payload};
        case DELETE_STREAM:
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}






