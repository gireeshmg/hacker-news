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
import Page404 from './pages/404';

const AppRoutes = () => (
  <Switch>
    <Route path="/news/:page" component={NewsPage} exact />
    <Route path="/news" component={NewsPage} exact />
    <Route path="/" component={NewsPage} exact />
    <Route component={Page404} />
  </Switch>
)

function App(props) {
  console.log(props.location);

  return (
    <Provider store={props.store}>
      {
        props.location
          ? (
            <StaticRouter location={props.location} context={{}}>
              <AppRoutes />
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
