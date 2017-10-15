import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './pages/Home'
import Profile from './pages/Profile'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="profile/:id" component={Profile} />

        </Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
