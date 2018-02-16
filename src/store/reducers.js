import C from '../constants';

export const name = (state = '', action) => {
    if (action.type === C.UPDATE_NAME) {
        return action.payload
    } else {
        return state;
    }
}
