import React from 'react';
import ReactDOM from 'react-dom';
import BaseCalc from './components/BaseCalc'
import {createStore} from 'redux';
import historyReducer from './reducers/calculations'; // REDUCER
import { Provider } from 'react-redux';
import CalcHistory from './components/CalcHistory';
import Nav from './components/Nav';
import HomePage from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const store = createStore(
  historyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enabling Browser Redux Extension
)

store.subscribe(() => console.log(store.getState()));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path='/' component={HomePage} exact />
      <Route path='/history' component={CalcHistory}/>
      <Route path='/calculator' component={BaseCalc} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
