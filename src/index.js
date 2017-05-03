import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class TestHeaderComponent extends Component {
  render() { return <div><h2>Header - header - header - header</h2></div> }
}

class TestComponentNested extends Component {
  render() { return <div><h4>This is a nested component.</h4></div> }
}

class TestComponentOne extends Component {
  render() {
    return (
      <div>
        <h3>This is the Test Component One.</h3>
        <TestComponentNested />
      </div>
    );
  }
}

class TestComponentTwo extends Component {
  render() { return <div><h3>This is the Test Component Two.</h3></div> }
}

class TestFooterComponent extends Component {
  render() { return <div><h4>footer - footer - footer - footer</h4></div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <TestHeaderComponent />
        <Route path="/page-one" component={TestComponentOne} />
        <Route path="/page-two" component={TestComponentTwo} />
        <TestFooterComponent />
      </div>
    </BrowserRouter>
{/*    <App /> */}
  </Provider>
  , document.querySelector('.container'));
