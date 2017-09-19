'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListService = require('../services/ListService.js');

var _ListService2 = _interopRequireDefault(_ListService);

var _UsersText = require('./UsersText.js');

var _UsersText2 = _interopRequireDefault(_UsersText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPage = function (_Component) {
    _inherits(ListPage, _Component);

    function ListPage(props) {
        _classCallCheck(this, ListPage);

        var _this = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call(this, props));

        _this.state = {
            list: []
        };
        _this.onChangeState = _this.onChangeState.bind(_this);
        return _this;
    }

    _createClass(ListPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            (0, _ListService2.default)().get().then(function (res) {
                self.setState(function (prevState) {
                    return {
                        list: res.data
                    };
                });
            });
        }
    }, {
        key: 'onChangeState',
        value: function onChangeState(id) {
            var list = this.state.list;
            var index = this.state.list.findIndex(function (elem) {
                return elem.id === id;
            });
            list.splice(index, 1);
            this.setState(function (prevState) {
                return {
                    list: list
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'list' },
                _react2.default.createElement(
                    'p',
                    null,
                    'List of corrections'
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table table-striped' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '#'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Original Text'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Corrected Text'
                            ),
                            _react2.default.createElement('th', null),
                            _react2.default.createElement('th', null)
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.state.list.map(function (o, i) {
                            return _react2.default.createElement(_UsersText2.default, { key: i,
                                id: o.id,
                                text: o.originalText,
                                userText: o.usersText,
                                onChangeState: _this2.onChangeState });
                        })
                    )
                )
            );
        }
    }]);

    return ListPage;
}(_react.Component);

exports.default = ListPage;
