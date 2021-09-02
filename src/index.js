import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.sass';

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="baris" />, mountNode);