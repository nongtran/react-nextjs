'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var firebase;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return typeof window === 'undefined' ? new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
                        eval('require.ensure = function (deps, callback) { callback(require) }');

                        require.ensure([], function (require) {
                            var m = require('firebase');

                            m.__webpackChunkName = 'firebase_bf12e1515c25c7d8c0352f1413ab9a15.js';
                            resolve(m);
                        }, 'chunks/firebase_bf12e1515c25c7d8c0352f1413ab9a15.js');
                    }) : new (require('next\\dist\\lib\\dynamic.js').SameLoopPromise)(function (resolve, reject) {
                        var weakId = require.resolveWeak('firebase');

                        try {
                            var weakModule = __webpack_require__(weakId);

                            return resolve(weakModule);
                        } catch (err) {}

                        require.ensure([], function (require) {
                            try {
                                var m = require('firebase');

                                resolve(m);
                            } catch (error) {
                                reject(error);
                            }
                        }, 'chunks/firebase_bf12e1515c25c7d8c0352f1413ab9a15.js');
                    });

                case 2:
                    firebase = _context.sent;

                    try {
                        firebase.initializeApp({
                            databaseURL: 'https://hacker-news.firebaseio.com'
                        });
                    } catch (err) {
                        // we skip the "already exists" message which is
                        // not an actual error when we're hot-reloading
                        if (!/already exists/.test(err.message)) {
                            console.error('Firebase initialization error', err.stack);
                        }
                    }

                    return _context.abrupt('return', firebase.database().ref('v0'));

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, _this);
}));