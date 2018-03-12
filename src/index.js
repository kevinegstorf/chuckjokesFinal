import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import favoriteJokeList from './components/FavoriteJokeList';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, enhancers);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/favorites" component={favoriteJokeList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
