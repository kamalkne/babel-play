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

store.subscribe(() => console.log(store.getState()));

store.dispatch({
    type: C.UPDATE_NAME,
    payload: 'Kamal kokne'
});

console.log(`
    New state
    ------------------
    ${JSON.stringify(store.getState())}
`);

