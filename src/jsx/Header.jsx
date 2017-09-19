import React, { Component } from 'react';
import NavItem from './NavItem';
import NavItemStore from '../services/NavItemsStore.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.items = NavItemStore().items;
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{this.props.title}</a>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.items.map((item, ind) => <NavItem link={item.link}
                            text={item.text}
                            key={ind} />)}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
