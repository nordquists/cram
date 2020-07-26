import React from 'react';
import MainScreen from "./components/MainScreen";
import Study from "./components/Study/Study";
import StudyBrowseContainer from "./components/StudyBrowse/StudyBrowseContainer";
import Browse from "./components/Browse/Browse";
import NavSidebar from "./components/NavSidebar";
import DeckViewContainer from "./components/DeckView/DeckViewContainer"
import EditContainer from './components/Edit/EditContainer'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="wrapper">
                    {/*<NavSidebar/>*/}
                    <Switch>
                        <Route path="/" exact component={StudyBrowseContainer}/>
                        <Route path="/create" component={Study}/>
                        <Route path="/study" component={Study}/>
                        <Route path="/browse" component={Browse}/>
                        <Route path="/settings" component={Browse}/>
                        <Route path="/:deck_id" exact component={DeckViewContainer}/>
                        <Route path="/:deck_id/edit" component={EditContainer}/>
                    </Switch>
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
