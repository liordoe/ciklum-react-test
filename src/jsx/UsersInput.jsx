import React, { Component } from 'react';
import Button from './Button';
import ArticlesService from '../services/ArticlesService.js'

class UsersInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    submitHandler(event) {
        let articleUrl = location.search.split('?articleURL=')[1].split('&')[0];
        ArticlesService()
            .send({
                articleUrl,
                originalText: this.props.text,
                usersText: this.state.value
            })
            .then((res) => {
                console.log(res);
                this.setState({
                    value: ''
                });
            });
        event.preventDefault();
    }

    changeHandler(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="users-input">
                <span className="quote-text">{this.props.text}</span>
                <div className="flex-container">
                    <input type="text" value={this.state.value} onChange={this.changeHandler} />
                    <Button handler={this.submitHandler}
                        type="primary"
                        label="Send" />
                </div>
            </div>
        );
    }
}

export default UsersInput;
