'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _loadDb = require('../lib/load-db');

var _loadDb2 = _interopRequireDefault(_loadDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Post = function Post(_ref) {
    var item = _ref.item;
    return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', null, item.title), _react2.default.createElement('p', null, 'URL: ', _react2.default.createElement('a', { target: '_blank', href: item.url }, item.url)));
};

Post.getInitialProps = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var db, item;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('XXX', query.id);
                        _context.next = 3;
                        return (0, _loadDb2.default)();

                    case 3:
                        db = _context.sent;
                        _context.next = 6;
                        return db.child('item').child(query.id).once('value');

                    case 6:
                        item = _context.sent;

                        item = item.val();

                        return _context.abrupt('return', { item: item });

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x) {
        return _ref3.apply(this, arguments);
    };
}();

exports.default = Post;