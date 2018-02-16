import C from './constants';
import App from './appconstants';
import reducer from './store/reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

console.log(`
    Initial state
    ------------------
    ${JSON.stringify(store.getState())}
`);


store.dispatch({
    type: C.UPDATE_NAME,
    payload: 'Kamal kokne'
});

//state = status(state, {
//    type: C.UPDATE_STATUS,
//    payload: App.STATUS[2]
//});


console.log(`
    New state
    ------------------
    ${JSON.stringify(store.getState())}
`);
