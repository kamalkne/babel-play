import C from './constants';
import App from './appconstants';
import { name, status } from './store/reducers';

let state = 'insane value';

state = name(state, {
    type: C.UPDATE_NAME,
    payload: 'Kamal kokne'
})

console.log(`
    This is insane.
    ------------------
    ${state}
`);


state = App.STATUS[2];

console.log(`
    Previous state
    ------------------
    ${state}
`);


state = status(state, {
    type: C.UPDATE_STATUS,
    payload: App.STATUS[1]
});


console.log(`
    New state
    ------------------
    ${state}
`);
