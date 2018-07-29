import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoReducer from './store/reducers/todoReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
