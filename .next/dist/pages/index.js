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

var _jsxFileName = 'C:\\projects\\pedromagalhaes.github.io\\pages\\index.js?entry',
    _this = undefined;

var PostLink = function PostLink(props) {
    return _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?id=' + props.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, props.title)));
};

var Index = function Index(_ref) {
    var stories = _ref.stories;
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Hacker News - Latest'), _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, stories.map(function (story) {
        return _react2.default.createElement(PostLink, {
            key: story.id,
            id: story.id,
            title: story.title,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwibG9hZERCIiwiUG9zdExpbmsiLCJwcm9wcyIsImlkIiwidGl0bGUiLCJJbmRleCIsInN0b3JpZXMiLCJtYXAiLCJzdG9yeSIsImdldEluaXRpYWxQcm9wcyIsImRiIiwiY2hpbGQiLCJvbmNlIiwiaWRzIiwiYWxsIiwidmFsIiwic2xpY2UiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEOzJCQUNiLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxZQUFVLE1BQWhCLEFBQXNCLElBQU0sb0JBQWtCLE1BQTlDLEFBQW9EO3NCQUFwRDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsYUFISyxBQUNiLEFBQ0ksQUFDSSxBQUFVO0FBSHRCOztBQVFBLElBQU0sUUFBUSxTQUFSLEFBQVEsWUFBQTtRQUFBLEFBQUcsZUFBSCxBQUFHOzJCQUNiLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLHlDQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0s7QUFETDtBQUFBLGVBQ0ssQUFBUSxJQUFJLGlCQUFBOzZDQUNULEFBQUM7aUJBQ1EsTUFEVCxBQUNlLEFBQ1g7Z0JBQUksTUFGUixBQUVjLEFBQ1Y7bUJBQU8sTUFIWCxBQUdpQjs7MEJBSGpCOzRCQURTLEFBQ1Q7QUFBQTtBQUNJLFNBREo7QUFMRixBQUNWLEFBRUksQUFDSztBQUpiOztBQWVBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7aUJBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7MkJBQUEsQUFDSDs7cUJBQVg7QUFEYyxrQ0FBQTtvQ0FBQTsyQkFHRixHQUFBLEFBQUcsTUFBSCxBQUFTLGNBQVQsQUFBdUIsS0FIckIsQUFHRixBQUE0Qjs7cUJBQXhDO0FBSGMsbUNBQUE7b0NBQUE7NkNBSUEsQUFBUSxRQUN4QixBQUFJLE1BQUosQUFBVSxNQUFWLEFBQWdCLEdBQWhCLEFBQW1CLElBQW5CLEFBQXVCLElBQUksY0FBQTsrQkFBTSxHQUFBLEFBQzVCLE1BRDRCLEFBQ3RCLFFBRHNCLEFBRTVCLE1BRjRCLEFBRXRCLElBRnNCLEFBRzVCLEtBSHNCLEFBQU0sQUFHdkI7QUFSTSxBQUlBLEFBQ2hCLHFCQUFBLENBRGdCOztxQkFBaEI7QUFKZ0IsdUNBWXBCOztzQ0FBVSxBQUFRLElBQUksYUFBQTsrQkFBSyxFQUFMLEFBQUssQUFBRTtBQVpULEFBWXBCLEFBQVUscUJBQUE7O3FEQUVILEVBQUUsU0FkVyxBQWNiOztxQkFkYTtxQkFBQTtvQ0FBQTs7QUFBQTtnQkFBQTtBQUF4QixBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9wcm9qZWN0cy9wZWRyb21hZ2FsaGFlcy5naXRodWIuaW8ifQ==