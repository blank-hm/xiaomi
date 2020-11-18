import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers';
import sagas from "../sagas";
import Reactotron from '../ReactotronConfig' ;
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
let globalStore = null;

    // const schema = await fetchSchema();

    // const reducers = require('../reducers').default;
    // console.dir(reducers)
    // const sagas = require("../sagas").default;
    // const store =  Reactotron.createStore(
    const store = createStore(
        reducers,
        compose(applyMiddleware(...middlewares),
        Reactotron.createEnhancer()
      )
        
    );



    sagaMiddleware.run(sagas);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    globalStore = store;

    

    export default store;

export function dispatch(...options) {
    return globalStore.dispatch(...options);
} 