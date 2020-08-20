import React, { Component } from 'react';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg'
import {ReactComponent as PlusIcon} from '../../icons/plus.svg'
import {ReactComponent as StudyIcon} from '../../icons/study.svg'
import {ReactComponent as BrowseIcon} from '../../icons/browse.svg'
import {ReactComponent as StatsIcon} from '../../icons/stats.svg'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";

let ICON_SIZE = "28px"
let MOBILE_NAV_SIZE = "950px"

const Navbar = styled.div`
    z-index: 10;
    background-color: #F9F9F9;
  
    ${media.lessThan(MOBILE_NAV_SIZE)`
        width: 100vw;
        height: 4.2rem;
        bottom: 0;

        border-top: 1px solid #EEEEEE;

        position: fixed;
    `}

    ${media.greaterThan(MOBILE_NAV_SIZE)`
        top: 0;
        position: sticky;

        width: 200px;
        height: 100vh;

        border-right: 1px solid #EEEEEE;
        
        margin-right: 30px;
        margin-left: 40px;
    `}

`

const NavbarNav = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;

    ${media.lessThan(MOBILE_NAV_SIZE)`
        padding-top: 9px;

        flex-direction: row;

        height: 10%;
    `}

    ${media.greaterThan(MOBILE_NAV_SIZE)`
        padding-top: 40px;

        flex-direction: column;

        height: 95%;
    `}
`

const NavItem = styled.li`
    ${media.lessThan(MOBILE_NAV_SIZE)`
        height: 3rem;
        margin-left: auto;
        margin-right: auto;

        &:last-child {
            padding-top: 0.6rem;
        }
    `}

    ${media.greaterThan(MOBILE_NAV_SIZE)`
        height: 4rem;
        width: 100%;

        &:last-child {
            margin-top: auto;
            margin-left: auto;
            width: 32px;
            margin-right: 40px;
        }
    `}
`

const Link = styled(NavLink)`
    font-family: Inter;
    font-style: normal;
    letter-spacing: 0.04em;

    display: flex;
    flex-direction: column;

    color: #BABABA;
    stroke: #A9A9A9;
    fill: #A9A9A9;

    text-decoration: none;
    transition: 100ms;

    &:hover {
        color: #3A3A3A;
        stroke: #3a3a3a;
    }

    &.selected {
        color: #3a3a3a;
        stroke: #3a3a3a;
        fill: #3A3A3A;
    }

    ${media.lessThan(MOBILE_NAV_SIZE)`
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;

        transition: 0ms;
    `}

    ${media.greaterThan(MOBILE_NAV_SIZE)`
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
    `}
`

const MobileNav = styled.span`
    margin-left: auto;
    margin-right: auto;
    fill: none;

    &.selected {
        stroke: #3a3a3a;
    }

    ${media.greaterThan(MOBILE_NAV_SIZE)`
        display: none;
    `}
`

const SettingsSVG = styled(SettingsIcon)`
    width: 32px;
    height: 32px;
    stroke: none;

    &:hover {
        fill: #3A3A3A;
    }
`

class NavSidebar extends Component {
    render() {
        return(
            <Navbar>
                <NavbarNav>
                    <NavItem>
                        <Link activeClassName="selected" to="/create">
                            <MobileNav><PlusIcon  height={ICON_SIZE} width={ICON_SIZE}/></MobileNav>
                            <span>Create</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link activeClassName="selected" exact to="/home">
                            <MobileNav><StudyIcon  height={ICON_SIZE} width={ICON_SIZE}/></MobileNav>
                            <span>Study</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link activeClassName="selected" to="/browse">
                            <MobileNav><BrowseIcon  height={ICON_SIZE} width={ICON_SIZE}/></MobileNav>
                            <span>Browse</span>
                        </Link>
                    </NavItem>
                    {/* <NavItem>
                        <Link activeClassName="selected" to="/stats">
                            <MobileNav><StatsIcon  height={ICON_SIZE} width={ICON_SIZE}/></MobileNav>
                            <span>Stats</span>
                        </Link>
                    </NavItem> */}
                    <NavItem>
                        <Link activeClassName="selected" to="/settings">
                            <SettingsSVG height={ICON_SIZE} width={ICON_SIZE}/>
                        </Link>
                    </NavItem>
                </NavbarNav>
            </Navbar>
        );
    }
}


export default NavSidebar;