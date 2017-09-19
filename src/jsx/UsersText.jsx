import React, { Component } from 'react';
import ListService from '../services/ListService.js';
import Button from './Button';

class UsersText extends Component {
    constructor(props) {
        super(props);

        this.approveHandler = this.approveHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    approveHandler(event) {
        event.preventDefault();
        ListService()
            .approve(this.props.id)
            .then((res) => {
                console.log(res.data);
                this.props.onChangeState(this.props.id);
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    deleteHandler(event) {
        event.preventDefault();
        ListService()
            .delete(this.props.id)
            .then((res) => {
                console.log(res.data);
                this.props.onChangeState(this.props.id);
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    render() {
        return (
            <tr className="users-text">
                <td>{this.props.id}</td>
                <td>{this.props.text}</td>
                <td>{this.props.userText}</td>
                <td>
                    <Button handler={this.approveHandler}
                        type="success"
                        label="Approve" />
                </td>
                <td>
                    <Button handler={this.deleteHandler}
                        type="danger"
                        label="Delete" />
                </td>
            </tr>
        );
    }
}

export default UsersText;
