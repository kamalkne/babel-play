import C from '../constants';

const export name = (state = '', action) => {
    if (action.type === C.UPDATE_NAME) {
        return action.payload
    }
}
