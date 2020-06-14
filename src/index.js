import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "Hi, how are you!", likesCount: 11},
    {id: 2, message: "It's my first post", likesCount: 12}
];

let dialogs = [
    {id: 1, name: "Serhii"},
    {id: 2, name: "Yurii"},
    {id: 3, name: "Hanna"},
    {id: 4, name: "Vitalik"},
    {id: 5, name: "Andrii"}
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Ok"}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
