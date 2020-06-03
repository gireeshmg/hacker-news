import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import { StaticRouter } from 'react-router';

import './App.css';
import NewsPage from './pages/NewsPage';

const NoMatch = () => (
  <div>
    <h1>404</h1>
    React Page Not Found
  </div>
);

const AppRoutes = () => (
  <Switch>
    <Route path="/:page?" component={NewsPage} exact />
    <Route render={NoMatch} />
  </Switch>
)

function App(props) {
  return (
    <Provider store={props.store}>
      {
        props.location
          ? (
            <StaticRouter location={props.location} context={{}}>
              <AppRoutes store={props.store} />
            </StaticRouter>
          ) : (
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          )
      }
    </Provider>
  );
}

export default App;
