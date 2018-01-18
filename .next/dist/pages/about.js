'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('p', null, 'This is the about page'), _react2.default.createElement(_reactHighlight2.default, null, "code snippet to be highlighted"));
};