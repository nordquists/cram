import React from 'react'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { WithNav } from './component/NavComponent/WithNav';
import { BrowseViewContainer } from './views/BrowseView/BrowseViewContainer'; // Done
import { SettingsViewContainer } from './views/SettingsView/SettingsViewContainer';
import { DeckViewContainer } from './views/DeckView/DeckViewContainer'; // Working
import { StudyViewContainer } from './views/StudyView/StudyViewContainer';
import { EditViewContainer } from './views/EditView/EditViewContainer';
import { CreateViewContainer } from './views/CreateView/CreateViewContainer';
import { StudyBrowseViewContainer } from './views/StudyBrowseView/StudyBrowseViewContainer'; // Done
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { LoginComponent } from './component/LoginComponent/LoginComponent';
import { HomeViewContainer } from './views/HomeView/HomeViewContainer';
import { FirstTimeViewContainer } from './views/FirstTimeView/FirstTimeViewContainer';
import { LoginCheck } from './component/LoginCheckComponent/LoginCheck';
import { NotFoundView } from './views/ErrorViews/NotFoundView';
import { UnexpectedView } from './views/ErrorViews/UnexpectedView';
import { ViewAllViewController } from './views/ViewAllView/ViewAllViewController';
import {Helmet} from "react-helmet";

const ProtectedRoute = ({ component, ...args }) => {
    return <Route component={withAuthenticationRequired(component)} {...args} />
};

const Layout = () => {
    const {error, isLoading, isAuthenticated} = useAuth0();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cram</title>
                <link rel="canonical" href="http://usecram.com/" />
            </Helmet>

            {error &&
                <Redirect to="/"/>
            }
            {!isLoading &&
                <div>
                    {!isAuthenticated &&
                        <Route exact path="/" component={HomeViewContainer}/>
                    }
                    {isAuthenticated && 
                        <Route exact path="/"><Redirect to="/home"/></Route>
                    }

                    <Route path="/top" component={WithNav(ViewAllViewController)}/>
                    <Route path="/featured" component={WithNav(ViewAllViewController)}/>
                    <Route path="/browse" component={WithNav(BrowseViewContainer)}/>
                    <Route exact path="/login" component={LoginComponent}/>
                    <Route exact path="/check-login" component={LoginCheck}/>
                    <ProtectedRoute path="/home" component={WithNav(StudyBrowseViewContainer)}/>
                    <ProtectedRoute path="/welcome" component={FirstTimeViewContainer}/>
                    <ProtectedRoute path="/create" component={WithNav(CreateViewContainer)}/>
                    <ProtectedRoute path="/recent" component={WithNav(ViewAllViewController)}/>
                    <ProtectedRoute path="/my" component={WithNav(ViewAllViewController)}/>
                    <ProtectedRoute path="/:deck_id/deck" exact component={WithNav(DeckViewContainer)}/>
                    <ProtectedRoute path="/:deck_id/study" exact component={StudyViewContainer}/>
                    <ProtectedRoute path="/:deck_id/edit" exact component={WithNav(EditViewContainer)}/>
                    <ProtectedRoute path="/settings" component={WithNav(SettingsViewContainer)}/> 

                    <Route exact path="/notfound" component={NotFoundView}/>
                    <Route exact path="/unexpected" component={UnexpectedView}/>
                </div>
            }
        </div>
    )
}

export default withRouter(Layout);
