'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _loadDb = require('../lib/load-db');

var _loadDb2 = _interopRequireDefault(_loadDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var PostLink = function PostLink(props) {
    return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?id=' + props.id }, _react2.default.createElement('a', null, props.title)));
};

var Index = function Index(_ref) {
    var stories = _ref.stories;
    return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', null, 'Hacker News - Latest'), _react2.default.createElement('ul', null, stories.map(function (story) {
        return _react2.default.createElement(PostLink, {
            key: story.id,
            id: story.id,
            title: story.title
        });
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var db, ids, stories;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _loadDb2.default)();

                case 2:
                    db = _context.sent;
                    _context.next = 5;
                    return db.child('topstories').once('value');

                case 5:
                    ids = _context.sent;
                    _context.next = 8;
                    return _promise2.default.all(ids.val().slice(0, 10).map(function (id) {
                        return db.child('item').child(id).once('value');
                    }));

                case 8:
                    stories = _context.sent;

                    stories = stories.map(function (s) {
                        return s.val();
                    });

                    return _context.abrupt('return', { stories: stories });

                case 11:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, _this);
}));

exports.default = Index;