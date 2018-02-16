import C from '../constants';
import App from '../appconstants';

export const name = (state = '', action) => {
    if (action.type === C.UPDATE_NAME) {
        return action.payload
    } else {
        return state;
    }
}


export const status = (state = App.STATUS[1], action) => {
    if (action.type === C.UPDATE_STATUS && state !== action.payload) {
        return action.payload;
    }
    return state;
}
