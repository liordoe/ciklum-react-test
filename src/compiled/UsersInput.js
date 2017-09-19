'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ArticlesService = require('../services/ArticlesService.js');

var _ArticlesService2 = _interopRequireDefault(_ArticlesService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersInput = function (_Component) {
    _inherits(UsersInput, _Component);

    function UsersInput(props) {
        _classCallCheck(this, UsersInput);

        var _this = _possibleConstructorReturn(this, (UsersInput.__proto__ || Object.getPrototypeOf(UsersInput)).call(this, props));

        _this.state = {
            value: ''
        };

        _this.submitHandler = _this.submitHandler.bind(_this);
        _this.changeHandler = _this.changeHandler.bind(_this);
        return _this;
    }

    _createClass(UsersInput, [{
        key: 'submitHandler',
        value: function submitHandler(event) {
            var _this2 = this;

            var articleUrl = location.search.split('?articleURL=')[1].split('&')[0];
            (0, _ArticlesService2.default)().send({
                articleUrl: articleUrl,
                originalText: this.props.text,
                usersText: this.state.value
            }).then(function (res) {
                console.log(res);
                _this2.setState({
                    value: ''
                });
            });
            event.preventDefault();
        }
    }, {
        key: 'changeHandler',
        value: function changeHandler(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'users-input' },
                _react2.default.createElement(
                    'span',
                    { className: 'quote-text' },
                    this.props.text
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'flex-container' },
                    _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.changeHandler }),
                    _react2.default.createElement(_Button2.default, { handler: this.submitHandler,
                        type: 'primary',
                        label: 'Send' })
                )
            );
        }
    }]);

    return UsersInput;
}(_react.Component);

exports.default = UsersInput;
