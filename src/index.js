import * as serviceWorker from './serviceWorker';
import store  from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom'



const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter >
            <App state={ state }  addPost={ store.addPost.bind(store) } updateNewPostText={ store.updateNewPostText.bind(store) }/>
        </BrowserRouter>, document.getElementById('root'));
} 

rerenderEntireTree(store.getState())


store.subscribe(rerenderEntireTree);




serviceWorker.unregister();
