import React from 'react';
import MainScreen from "./components/MainScreen";
import Study from "./components/Study/Study";

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<Create/>*/}
                <Study/>
                {/*<Browse/>*/}
                {/*<Settings/>*/}
            </div>
        </Provider>
    );
}

export default App;
