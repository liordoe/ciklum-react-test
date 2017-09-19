import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" 
                    className={`btn btn-outline-${ this.props.type }`}
                    onClick={this.props.handler}>{this.props.label}</button>
        );
    }
}

export default Button;
