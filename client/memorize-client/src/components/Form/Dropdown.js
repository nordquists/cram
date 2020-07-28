import React, { Component } from "react";

class Dropdown extends Component {
    state = {
        open: false
    }
    
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            alert('You clicked outside of me!');
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({open: !this.state.open})}>dropdown</button>
                {this.state.open && 
                    <div className="dropdown">
                        {this.props.render}
                    </div>
                }
            </div>
        )   
    }

}

export default Dropdown;