'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListService = require('../services/ListService.js');

var _ListService2 = _interopRequireDefault(_ListService);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersText = function (_Component) {
    _inherits(UsersText, _Component);

    function UsersText(props) {
        _classCallCheck(this, UsersText);

        var _this = _possibleConstructorReturn(this, (UsersText.__proto__ || Object.getPrototypeOf(UsersText)).call(this, props));

        _this.approveHandler = _this.approveHandler.bind(_this);
        _this.deleteHandler = _this.deleteHandler.bind(_this);
        return _this;
    }

    _createClass(UsersText, [{
        key: 'approveHandler',
        value: function approveHandler(event) {
            var _this2 = this;

            event.preventDefault();
            (0, _ListService2.default)().approve(this.props.id).then(function (res) {
                console.log(res.data);
                _this2.props.onChangeState(_this2.props.id);
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'deleteHandler',
        value: function deleteHandler(event) {
            var _this3 = this;

            event.preventDefault();
            (0, _ListService2.default)().delete(this.props.id).then(function (res) {
                console.log(res.data);
                _this3.props.onChangeState(_this3.props.id);
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'tr',
                { className: 'users-text' },
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.id
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.text
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.userText
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Button2.default, { handler: this.approveHandler,
                        type: 'success',
                        label: 'Approve' })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Button2.default, { handler: this.deleteHandler,
                        type: 'danger',
                        label: 'Delete' })
                )
            );
        }
    }]);

    return UsersText;
}(_react.Component);

exports.default = UsersText;
