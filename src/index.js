import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
    }

    .loading {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #btn {
        width: 40rem;
        color: white;
        background-color: black;
    }

    #btn:hover {
        width: 45rem;
    }

    .centered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle/>
            <App />
        </Provider>
    </BrowserRouter>
);


