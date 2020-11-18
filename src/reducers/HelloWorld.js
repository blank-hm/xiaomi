import * as CONSTANTS from '../constants/';

const INIT_STATE = {
    helloWorld:"helloWorld"
}

const reducers = {};
reducers[CONSTANTS.HELLOWORLD]=helloWorld;

function helloWorld(state=INIT_STATE,action){
    console.log(action)
    switch(action.type){
        case 'HELLOWORLD':
            return action.data
        default:
            return state
    }
}

export default helloWorld;