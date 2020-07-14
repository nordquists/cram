import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class NavSidebar extends Component {
    render() {
        return(
            <div>
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
            </div>
        );
    }
}


export default NavSidebar;