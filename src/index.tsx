import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" exact component={App} />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
