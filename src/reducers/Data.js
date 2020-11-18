import * as CONSTANTS from '../constants';

const INIT_STATE = {

};

const reducers = {};

reducers[CONSTANTS.INITDB] = initDb;

const defineReducer = createReducer(INIT_STATE, reducers);

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }

    }
}

function initDb(state, action) {
    for (let i in state) {
        const v = INIT_STATE[i];
        if (v !== undefined) {
            state[i] = v;
        }
        else {
            delete state[i];
        }
    }
}

const Data = (state = INIT_STATE, action) => {
    return defineReducer(state, action);
}



export default Data;
