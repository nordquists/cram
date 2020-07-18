import React from 'react';
import MainScreen from "./components/MainScreen";
import Study from "./components/Study/Study";
import Browse from "./components/Browse/Browse";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="wrapper">
                    <Route path="/study" component={Study}/>
                    <Route path="/browse" component={Browse}/>
                </div>
            </Router>

            {/*<div className="wrapper">*/}
            {/*    <div className="App">*/}
            {/*        /!*<Create/>*!/*/}
            {/*        <Study/>*/}
            {/*        /!*<MainScreen/>*!/*/}
            {/*        /!*<Browse/>*!/*/}
            {/*        /!*<Settings/>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Provider>
    );
}

export default App;
