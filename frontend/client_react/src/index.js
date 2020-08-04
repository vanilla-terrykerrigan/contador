import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Continents} from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/Continents" component={Continents}/>
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
