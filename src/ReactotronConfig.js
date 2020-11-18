import Reactotron from 'reactotron-react-js'
import sagaPlugin from 'reactotron-redux-saga'
import { reactotronRedux } from 'reactotron-redux'
  const reactotron = Reactotron
    .configure({
      name:'mmi'
    })
    .use(sagaPlugin())
    .use(reactotronRedux())
    .connect()

export default reactotron;
