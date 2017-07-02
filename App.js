import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
// reducers is made by user.
import reducers from './src/reducers';
import rootSaga from './src/sagas';

// ui: Components, Containers
import {Testing, CTintro, ViewTesting} from './src/containers';
// ################################################333

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ViewTesting />
      /*<Provider store={store} >
        <CTintro />  
      </Provider>*/
    );
  }
} 

export default App;
  