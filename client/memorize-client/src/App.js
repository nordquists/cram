import React from 'react';
import StudyContainer from "./components/StudyHooks/StudyContainer";
import StudyBrowseContainer from "./components/StudyBrowse/StudyBrowseContainer";
// import Browse from "./components/Browse/Browse";
import NavSidebar from "./components/NavSidebar";
import DeckViewContainer from "./components/DeckView/DeckViewContainer"
import EditContainer from './components/Edit/EditContainer'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './index.css';
import { LoginContainer } from './components/Authentication/LoginContainer';
import { Error404 } from './components/Error/Error404';
import { RegisterContainer } from './components/Authentication/RegisterContainer';
import CreateContainer from './components/Create/CreateContainer';


const categories = [
    {emoji: '🍎', label: 'Apples'},
    {emoji: '🍊', label: 'Oranges'},
    {emoji: '🍅', label: 'Tomatoes'},
    {emoji: '🍍', label: 'Pineapples'},
]

function App() {
    
    return (
        <Router>
            {/* <div className="nav-wrapper"> */}
                {/* <NavSidebar/> */}
                <div className="wrapper">
                    {/* <CategorySelector categories={categories}/>
                    <TableContainer path="/"/>

                    {/* <Route path="/:deck_id/edit" component={EditContainer}/> */}

                    <Switch>
                        <Route path="/create" component={CreateContainer}/>
                        {/* <Route path="/browse" component={Browse}/> */}
                        {/* <Route path="/settings" component={Browse}/> */}
                        <Route path="/login" component={LoginContainer}/>
                        <Route path="/register" component={RegisterContainer}/>

                        <Route path="/:deck_id/deck" exact component={DeckViewContainer}/>
                        <Route path="/:deck_id/study" exact component={StudyContainer}/>
                        <Route path="/:deck_id/test" exact component={StudyContainer}/>
                        <Route path="/:deck_id/edit" exact component={EditContainer}/>

                        
                        <Route exact path="/404" component={Error404}/>
                        {/* <Redirect to="/404"/> */}
                    </Switch>

                    

                </div>
            {/* </div> */}

            {/*<div className="wrapper">*/}
        {/*    <div className="App">*/}
        {/*        /!*<Create/>*!/*/}
        {/*        <Study/>*/}
        {/*        /!*<MainScreen/>*!/*/}
        {/*        /!*<Browse/>*!/*/}
        {/*        /!*<Settings/>*!/*/}
        {/*    </div>*/}
        {/*</div>*/}
        </Router>

        
    );
}

export default App;
