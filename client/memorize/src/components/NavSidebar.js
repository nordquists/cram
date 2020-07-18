import React, { Component } from 'react';

class NavSidebar extends Component {
    render() {
        return(
            <Nav vertical>
                <NavItem>
                    <NavLink disabled href="#">Create</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Study</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Browse</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Settings</NavLink>
                </NavItem>
            </Nav>

        );
    }
}


export default NavSidebar;