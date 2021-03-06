import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import {Provider} from 'react-redux';
import App from './App';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
