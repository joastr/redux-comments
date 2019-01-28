import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';
import { addComment } from './actions';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales vel massa vel blandit. Sed malesuada ante massa, vel viverra metus ultricies sit amet. Donec sodales egestas ante, at viverra elit suscipit a. Vestibulum porttitor quam eu nisi ultrices luctus. Donec id faucibus ex, non accumsan mauris.'));
store.dispatch(addComment('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales vel massa vel blandit. Sed malesuada ante massa, vel viverra metus ultricies sit amet. Donec sodales egestas ante, at viverra elit suscipit a. Vestibulum porttitor quam eu nisi ultrices luctus. Donec id faucibus ex, non accumsan mauris.'));
store.dispatch(addComment('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales vel massa vel blandit. Sed malesuada ante massa, vel viverra metus ultricies sit amet. Donec sodales egestas ante, at viverra elit suscipit a. Vestibulum porttitor quam eu nisi ultrices luctus. Donec id faucibus ex, non accumsan mauris.'));
