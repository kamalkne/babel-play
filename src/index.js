import C from 'constants';
import { name } from './store/reducers'

const state = 'insane value';

state = name(state, {
    type: C.UPDATE_NAME,
    payload: 'Kamal kokne'
})

console.log(`
    This is insane.
    ------------------
    ${state}
`);


