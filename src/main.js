import React from 'react';
import ReactDOM from 'react-dom';
import { Gallery } from './Gallery.js'
import './styles.scss';

function App() {
    return (
        <>
        <header className={'header'}>
            <h1 className={'header__title'}>Your Daily Dose of Art</h1>
        </header>
        <Gallery />
        <footer className={'footer'}>
            <p>Thanks to <a href="https://www.artic.edu">Art Institute of Chicago</a> for their <a href="https://api.artic.edu/docs/">API</a></p>
        </footer>
        </>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);