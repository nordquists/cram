import React, { Component } from 'react';
import {ReactComponent as SettingsIcon} from '../icons/settings.svg'
import {ReactComponent as PlusIcon} from '../icons/plus.svg'
import {ReactComponent as StudyIcon} from '../icons/study.svg'
import {ReactComponent as BrowseIcon} from '../icons/browse.svg'
import {ReactComponent as StatsIcon} from '../icons/stats.svg'
import { NavLink } from 'react-router-dom';

let ICON_SIZE = "28px"

class NavSidebar extends Component {
    render() {
        return(
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/create">
                            <span className="mobile-nav mobile-nav-icon"><PlusIcon  height={ICON_SIZE} width={ICON_SIZE}/></span>
                            <span>Create</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to="/">
                            <span className="mobile-nav mobile-nav-icon"><StudyIcon  height={ICON_SIZE} width={ICON_SIZE}/></span>
                            <span>Study</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/browse">
                            <span className="mobile-nav mobile-nav-icon"><BrowseIcon  height={ICON_SIZE} width={ICON_SIZE}/></span>
                            <span>Browse</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/stats">
                            <span className="mobile-nav mobile-nav-icon"><StatsIcon  height={ICON_SIZE} width={ICON_SIZE}/></span>
                            <span>Stats</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" to="/settings">
                            <span className="settings-svg"><SettingsIcon height={ICON_SIZE} width={ICON_SIZE}/></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


export default NavSidebar;