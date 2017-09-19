import React, { Component } from 'react';
import ListService from '../services/ListService.js';
import UsersText from './UsersText.js';

class ListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
        this.onChangeState = this.onChangeState.bind(this);
    }

    componentWillMount() {
        let self = this;
        ListService().get()
            .then((res) => {
                self.setState(prevState => ({
                    list: res.data
                }));
            });
    }

    onChangeState(id) {
        let list = this.state.list;
        let index = this.state.list.findIndex(function(elem) {
            return elem.id === id;
        });
        list.splice(index, 1);
        this.setState(prevState => ({
            list
        }));
    }

    render() {
        return (
            <div className="list">
                <p>List of corrections</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Original Text</th>
                            <th>Corrected Text</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((o, i) => <UsersText key={i}
                            id={o.id}
                            text={o.originalText}
                            userText={o.usersText} 
                            onChangeState={this.onChangeState}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListPage;
