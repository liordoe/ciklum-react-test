'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticlesService = require('../services/ArticlesService.js');

var _ArticlesService2 = _interopRequireDefault(_ArticlesService);

var _UsersInput = require('./UsersInput');

var _UsersInput2 = _interopRequireDefault(_UsersInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlePage = function (_Component) {
    _inherits(ArticlePage, _Component);

    function ArticlePage(props) {
        _classCallCheck(this, ArticlePage);

        var _this = _possibleConstructorReturn(this, (ArticlePage.__proto__ || Object.getPrototypeOf(ArticlePage)).call(this, props));

        _this.state = {
            title: '',
            articles: []
        };
        if (location.search && location.search.split('?articleURL=').length) {
            _this.URI = location.search.split('?articleURL=')[1].split('&')[0];
        } else {
            _this.URI = '';
        }
        return _this;
    }

    _createClass(ArticlePage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            if (this.URI) (0, _ArticlesService2.default)().get(this.URI).then(function (res) {
                self.setState(function (prevState) {
                    return {
                        title: res.data.title,
                        articles: res.data.pharagraphs
                    };
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.URI === '') {
                return _react2.default.createElement(
                    'div',
                    { className: 'articles' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Please, use link with articleURL query string'
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: 'articles' },
                _react2.default.createElement(
                    'p',
                    null,
                    this.state.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    this.state.articles.map(function (o, i) {
                        return _react2.default.createElement(_UsersInput2.default, { key: i,
                            text: o });
                    })
                )
            );
        }
    }]);

    return ArticlePage;
}(_react.Component);

exports.default = ArticlePage;
