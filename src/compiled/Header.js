'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavItemsStore = require('../services/NavItemsStore.js');

var _NavItemsStore2 = _interopRequireDefault(_NavItemsStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.items = (0, _NavItemsStore2.default)().items;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-expand-lg navbar-light bg-light' },
                _react2.default.createElement(
                    'a',
                    { className: 'navbar-brand', href: '#' },
                    this.props.title
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'navbar-toggler',
                        type: 'button', 'data-toggle': 'collapse',
                        'data-target': '#navbarNav', 'aria-controls': 'navbarNav',
                        'aria-expanded': 'false',
                        'aria-label': 'Toggle navigation' },
                    _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNav' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        this.items.map(function (item, ind) {
                            return _react2.default.createElement(_NavItem2.default, { link: item.link,
                                text: item.text,
                                key: ind });
                        })
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;
