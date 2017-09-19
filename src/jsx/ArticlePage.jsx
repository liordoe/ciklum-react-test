import React, { Component } from 'react';
import ArticlesService from '../services/ArticlesService.js';
import UsersInput from './UsersInput';

class ArticlePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            articles: []
        };
        if (location.search && location.search.split('?articleURL=').length) {
            this.URI = location.search.split('?articleURL=')[1].split('&')[0];
        } else {
            this.URI = '';
        }
    }

    componentWillMount() {
        let self = this;
        if (this.URI)
            ArticlesService().get(this.URI)
                .then((res) => {
                    self.setState(prevState => ({
                        title: res.data.title,
                        articles: res.data.pharagraphs
                    }));
                });
    }

    render() {
        if (this.URI === '') {
            return (
                <div className="articles">
                    <div className="container">
                        <p>Please, use link with articleURL query string</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="articles">
                <p>{this.state.title}</p>
                <div className="container">
                    {this.state.articles.map((o, i) => <UsersInput key={i}
                        text={o} />)}
                </div>
            </div>
        );
    }
}

export default ArticlePage;
