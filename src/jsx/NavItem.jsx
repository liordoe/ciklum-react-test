import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item">
                <Link to={this.props.link}>{this.props.text}</Link>
            </li>
        );
    }
}

export default NavItem;
