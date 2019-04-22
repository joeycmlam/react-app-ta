import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MenuAppBar from './MenuAppBar'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import TitlebarGridList from './TitlebarGridList';
import TextMobileStepper from './TextMobileStepper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.querySelector('#app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
