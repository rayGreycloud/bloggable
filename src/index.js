import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class TestComponentOne extends Component {
  render() { return <div>This is the Test Component One.</div> }
}

class TestComponentTwo extends Component {
  render() { return <div>This is the Test Component Two.</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/test-component-one" component={TestComponentOne}/>
        <Route path="/test-component-two" component={TestComponentTwo}/>
      </div>
    </BrowserRouter>
{/*    <App /> */}
  </Provider>
  , document.querySelector('.container'));
