module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n\n\nvar _jsxFileName = \"/Users/kimja01/study/nodebird-nextJs-express/front/pages/_app.js\";\n// import React from 'react'\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\nNodeBird.protoTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm90b1R5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBQzlCLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFNSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQSxrQkFESjtBQVVILENBWEQ7O0FBYUFELFFBQVEsQ0FBQ0UsVUFBVCxHQUFzQjtBQUNsQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURmLENBQXRCO0FBR2VDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JQLFFBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuY29uc3QgTm9kZUJpcmQgPSAoe0NvbXBvbmVudH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgey8qIDxkaXY+6rO17Ya1IOuplOuJtDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbk5vZGVCaXJkLnByb3RvVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn1cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // userReducer\n\n\n //\n// const initialState = {\n//     user: {\n//\n//     },\n//     post: {\n//     }\n// }\n// (이전상태, 액션) => 다음상태\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    // 원래 없어도되는데, 서버사이드렌더링을위해서 작성\n    switch (action.type) {\n      // getInitialProps가 요즘에 거의 안쓰이고 getStaticProps, getServersideProps\n      // 이 2개를 쓰는걸로 ssr이 완전히 바뀌면서 새로 생김\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBRTBCOztBQUMxQjtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDaENDLE9BQUssRUFBRSxDQUFDQyxLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXdCO0FBQUU7QUFDN0IsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0k7QUFDQTtBQUNBLFdBQUtDLDBEQUFMO0FBQ0lDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLDBEQUF2QjtBQUNBLCtDQUFXSCxLQUFYLEdBQXFCQyxNQUFNLENBQUNLLE9BQTVCOztBQUNKO0FBQ0ksZUFBT04sS0FBUDtBQVBSO0FBU0gsR0FYK0I7QUFZaENPLHFEQVpnQztBQWFoQ0MscURBQUlBO0FBYjRCLENBQUQsQ0FBbkM7QUFnQmVYLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJyAvLyB1c2VyUmVkdWNlclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG4vL1xuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuLy8gICAgIHVzZXI6IHtcbi8vXG4vLyAgICAgfSxcbi8vICAgICBwb3N0OiB7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7IC8vIOybkOuemCDsl4bslrTrj4TrkJjripTrjbAsIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydhOychO2VtOyEnCDsnpHshLFcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgICAgICAvLyBnZXRJbml0aWFsUHJvcHPqsIAg7JqU7KaY7JeQIOqxsOydmCDslYjsk7DsnbTqs6AgZ2V0U3RhdGljUHJvcHMsIGdldFNlcnZlcnNpZGVQcm9wc1xuICAgICAgICAgICAgLy8g7J20IDLqsJzrpbwg7JOw64qU6rG466GcIHNzcuydtCDsmYTsoITtnogg67CU64CM66m07IScIOyDiOuhnCDsg53quYBcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIEhZRFJBVEUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXNlcixcbiAgICBwb3N0LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '루크'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://picsum.photos/800/800'\n    }, {\n      src: 'https://picsum.photos/900/700'\n    }, {\n      src: 'https://picsum.photos/700/500'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '댓글내용11'\n    }, {\n      User: {\n        nickname: 'nero'\n      },\n      content: '댓글내용12'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  User: {\n    id: 1,\n    nickname: '루크'\n  },\n  Images: [{\n    src: 'https://picsum.photos/200/300'\n  }, {\n    src: 'https://picsum.photos/200/300'\n  }, {\n    src: 'https://picsum.photos/200/300'\n  }],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FDVDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGUjtBQU1FQyxXQUFPLEVBQUUsdUJBTlg7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFBRUMsU0FBRyxFQUFFO0FBQVAsS0FETSxFQUVOO0FBQUVBLFNBQUcsRUFBRTtBQUFQLEtBRk0sRUFHTjtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUhNLENBUFY7QUFZRUMsWUFBUSxFQUFFLENBQ1I7QUFDRUwsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBRFEsRUFPUjtBQUNFRixVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BRFI7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FQUTtBQVpaLEdBRFMsQ0FEZTtBQThCMUJJLFlBQVUsRUFBRSxFQTlCYztBQStCMUJDLFdBQVMsRUFBRTtBQS9CZSxDQUFyQjtBQWtDUCxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxNQUFNQyxPQUFPLEdBQUc7QUFDckJDLE1BQUksRUFBRUY7QUFEZSxDQUFoQjtBQUlQLE1BQU1HLFNBQVMsR0FBRztBQUNoQlosSUFBRSxFQUFFLENBRFk7QUFFaEJDLE1BQUksRUFBRTtBQUNKRCxNQUFFLEVBQUUsQ0FEQTtBQUVKRSxZQUFRLEVBQUU7QUFGTixHQUZVO0FBTWhCRSxRQUFNLEVBQUUsQ0FDTjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQURNLEVBRU47QUFBRUEsT0FBRyxFQUFFO0FBQVAsR0FGTSxFQUdOO0FBQUVBLE9BQUcsRUFBRTtBQUFQLEdBSE0sQ0FOUTtBQVdoQkMsVUFBUSxFQUFFO0FBWE0sQ0FBbEI7O0FBY0EsTUFBTU8sT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR2hCLFlBQVQsRUFBdUJpQixNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRSxTQUFLRixRQUFMO0FBQ0UsNkNBQ0tLLEtBREw7QUFFRWYsaUJBQVMsRUFBRSxDQUFDYSxTQUFELEVBQVksR0FBR0UsS0FBSyxDQUFDZixTQUFyQixDQUZiO0FBR0VTLGlCQUFTLEVBQUU7QUFIYjs7QUFLRjtBQUNFLGFBQU9NLEtBQVA7QUFSSjtBQVVELENBWEQ7O0FBWWVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6ICfro6jtgawnLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHsgc3JjOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzgwMC84MDAnIH0sXG4gICAgICAgIHsgc3JjOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzkwMC83MDAnIH0sXG4gICAgICAgIHsgc3JjOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzcwMC81MDAnIH0sXG4gICAgICBdLFxuICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiAn64yT6riA64K07JqpMTEnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6ICfrjJPquIDrgrTsmqkxMicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XG4gIHR5cGU6IEFERF9QT1NULFxufTtcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMixcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAn66Oo7YGsJyxcbiAgfSxcbiAgSW1hZ2VzOiBbXG4gICAgeyBzcmM6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcgfSxcbiAgICB7IHNyYzogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyB9LFxuICAgIHsgc3JjOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnIH0sXG4gIF0sXG4gIENvbW1lbnRzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggingIn: false,\n  // 로그인 시도중\n  isLoggedIn: false,\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  me: null,\n  signUpData: {},\n  loginData: {},\n  name: 'luke',\n  age: 27\n}; // redux-thunk\n// export const loginAction = (data) => {\n//   return (dispatch, getState) => {\n//     const state = getState();\n//     dispatch(loginRequestAction());\n//     fetch()\n//       .then((res) => {\n//         dispatch(loginSuccessAction(res.data));\n//       })\n//       .catch((err) => {\n//         dispatch(loginFailureAction(err));\n//       });\n//   };\n// };\n// action creator\n\nconst loginRequestAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutRequestAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true\n      });\n\n    case 'LOG_IN_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'luke'\n        }) // me: action.data,\n\n      });\n\n    case 'LOG_IN_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: false\n      });\n\n    case 'LOG_OUT_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: true,\n        me: null\n      });\n\n    case 'LOG_OUT_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false,\n        me: null\n      });\n\n    case 'LOG_OUT_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibmFtZSIsImFnZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxhQUFXLEVBQUUsS0FEYTtBQUNOO0FBQ3BCQyxZQUFVLEVBQUUsS0FGYztBQUcxQkMsY0FBWSxFQUFFLEtBSFk7QUFHTDtBQUNyQkMsSUFBRSxFQUFFLElBSnNCO0FBSzFCQyxZQUFVLEVBQUUsRUFMYztBQU0xQkMsV0FBUyxFQUFFLEVBTmU7QUFPMUJDLE1BQUksRUFBRSxNQVBvQjtBQVExQkMsS0FBRyxFQUFFO0FBUnFCLENBQXJCLEMsQ0FXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ08sTUFBTUMsa0JBQWtCLEdBQUlDLElBQUQsSUFBVTtBQUMxQyxTQUFPO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxEO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxNQUFNRSxtQkFBbUIsR0FBRyxNQUFNO0FBQ3ZDLFNBQU87QUFDTEQsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSk07O0FBTVAsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR2QsWUFBVCxFQUF1QmUsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUNFLDZDQUNLRyxLQURMO0FBRUVaLGtCQUFVLEVBQUU7QUFGZDs7QUFJRixTQUFLLGdCQUFMO0FBQ0UsNkNBQ0tZLEtBREw7QUFFRWIsbUJBQVcsRUFBRSxLQUZmO0FBR0VDLGtCQUFVLEVBQUUsSUFIZDtBQUlFRSxVQUFFLGtDQUFNVyxNQUFNLENBQUNMLElBQWI7QUFBbUJNLGtCQUFRLEVBQUU7QUFBN0IsVUFKSixDQUtFOztBQUxGOztBQU9GLFNBQUssZ0JBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFYixtQkFBVyxFQUFFLEtBRmY7QUFHRUMsa0JBQVUsRUFBRTtBQUhkOztBQUtGLFNBQUssaUJBQUw7QUFDRSw2Q0FDS1ksS0FETDtBQUVFWCxvQkFBWSxFQUFFLElBRmhCO0FBR0VDLFVBQUUsRUFBRTtBQUhOOztBQUtGLFNBQUssaUJBQUw7QUFDRSw2Q0FDS1UsS0FETDtBQUVFWCxvQkFBWSxFQUFFLEtBRmhCO0FBR0VELGtCQUFVLEVBQUUsS0FIZDtBQUlFRSxVQUFFLEVBQUU7QUFKTjs7QUFNRixTQUFLLGlCQUFMO0FBQ0UsNkNBQ0tVLEtBREw7QUFFRVgsb0JBQVksRUFBRTtBQUZoQjs7QUFJRjtBQUNFLGFBQU9XLEtBQVA7QUF2Q0o7QUF5Q0QsQ0ExQ0Q7O0FBMkNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxuICBuYW1lOiAnbHVrZScsXG4gIGFnZTogMjcsXG59O1xuXG4vLyByZWR1eC10aHVua1xuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbi8vICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbi8vICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4vLyAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xuLy8gICAgIGZldGNoKClcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcbi8vICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xuLy8gICAgICAgfSk7XG4vLyAgIH07XG4vLyB9O1xuXG4vLyBhY3Rpb24gY3JlYXRvclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR19JTicsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dfT1VUJyxcbiAgfTtcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9HX0lOX1JFUVVFU1QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ0xPR19JTl9TVUNDRVNTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgIG1lOiB7Li4uYWN0aW9uLmRhdGEsIG5pY2tuYW1lOiAnbHVrZSd9LFxuICAgICAgICAvLyBtZTogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgJ0xPR19JTl9GQUlMVVJFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdMT0dfT1VUX1JFUVVFU1QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSxcbiAgICAgICAgbWU6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgJ0xPR19PVVRfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlICdMT0dfT1VUX0ZBSUxVUkUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"])]);\n} // const gen = function* () {\n//   console.log(1);\n//   yield;\n//   console.log(2);\n//   yield;\n//   console.log(3);\n//   yield;\n// };\n// const gen2 = function* () {\n//   while (true) {\n//     yield '무한';\n//   }\n// };\n// const g = gen2();\n// g.next();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUVlLFVBQVVBLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDQyw2Q0FBRCxDQUFMLEVBQWlCRCwrREFBSSxDQUFDRSw2Q0FBRCxDQUFyQixDQUFELENBQVQ7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbGwsXG4gIGZvcmssXG4gIGNhbGwsXG4gIHRha2UsXG4gIHB1dCxcbiAgZGVsYXksXG4gIGRlYm91bmNlLFxuICB0aHJvdHRsZSxcbiAgdGFrZUxhdGVzdCxcbiAgdGFrZUV2ZXJ5LFxuICB0YWtlTGVhZGluZyxcbiAgdGFrZU1heWJlLFxufSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayh1c2VyU2FnYSksIGZvcmsocG9zdFNhZ2EpXSk7XG59XG5cbi8vIGNvbnN0IGdlbiA9IGZ1bmN0aW9uKiAoKSB7XG4vLyAgIGNvbnNvbGUubG9nKDEpO1xuLy8gICB5aWVsZDtcbi8vICAgY29uc29sZS5sb2coMik7XG4vLyAgIHlpZWxkO1xuLy8gICBjb25zb2xlLmxvZygzKTtcbi8vICAgeWllbGQ7XG4vLyB9O1xuLy8gY29uc3QgZ2VuMiA9IGZ1bmN0aW9uKiAoKSB7XG4vLyAgIHdoaWxlICh0cnVlKSB7XG4vLyAgICAgeWllbGQgJ+ustO2VnCc7XG4vLyAgIH1cbi8vIH07XG4vLyBjb25zdCBnID0gZ2VuMigpO1xuLy8gZy5uZXh0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction addPostAPI(data) {\n  return axios.post('/api/post', data);\n}\n\nfunction* addPost(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addPostAPI, action.data);\n    yield put({\n      type: 'ADD_POST_SUCCESS',\n      data: result.data\n    });\n  } catch (error) {\n    yield put({\n      type: 'ADD_POST_FAILURE',\n      data: error.response.data\n    });\n  }\n}\n\nfunction* watchAddPost() {\n  //   yield takeLatest('ADD_POST_REQUEST', addPost);\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])('ADD_POST_REQUEST', addPost, 10000);\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost) // fork(watchLogOut),\n  ]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzPzNhYmEiXSwibmFtZXMiOlsiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJlcnJvciIsInJlc3BvbnNlIiwid2F0Y2hBZGRQb3N0IiwidGhyb3R0bGUiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVcsV0FBWCxFQUF3QkYsSUFBeEIsQ0FBUDtBQUNEOztBQUNELFVBQVVHLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1AsVUFBRCxFQUFhSyxNQUFNLENBQUNKLElBQXBCLENBQXpCO0FBQ0EsVUFBTU8sR0FBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxrQkFERTtBQUVSUixVQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT1MsS0FBUCxFQUFjO0FBQ2QsVUFBTUYsR0FBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxrQkFERTtBQUVSUixVQUFJLEVBQUVTLEtBQUssQ0FBQ0MsUUFBTixDQUFlVjtBQUZiLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVVcsWUFBVixHQUF5QjtBQUN2QjtBQUNBLFFBQU1DLG1FQUFRLENBQUMsa0JBQUQsRUFBcUJULE9BQXJCLEVBQThCLEtBQTlCLENBQWQ7QUFDRDs7QUFFYyxVQUFVVSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ0osWUFBRCxDQURJLENBRVI7QUFGUSxHQUFELENBQVQ7QUFJRCIsImZpbGUiOiIuL3NhZ2FzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsLCBmb3JrLCB0aHJvdHRsZSwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKTtcbn1cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiAnQUREX1BPU1RfU1VDQ0VTUycsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0FERF9QT1NUX0ZBSUxVUkUnLFxuICAgICAgZGF0YTogZXJyb3IucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICAvLyAgIHlpZWxkIHRha2VMYXRlc3QoJ0FERF9QT1NUX1JFUVVFU1QnLCBhZGRQb3N0KTtcbiAgeWllbGQgdGhyb3R0bGUoJ0FERF9QT1NUX1JFUVVFU1QnLCBhZGRQb3N0LCAxMDAwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgLy8gZm9yayh3YXRjaExvZ091dCksXG4gIF0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction loginAPI(data, a, b) {\n  return axios.post('/api/login', data);\n}\n\nfunction* logIn(action) {\n  // const {type, data} = action\n  try {\n    // const result = yield call(loginAPI, action.data, 'a', 'b');\n    yield delay(1000);\n    yield put({\n      type: 'LOG_IN_SUCCESS',\n      data: action.data // data: result.data,\n\n    });\n  } catch (error) {\n    yield put({\n      type: 'LOG_IN_FAILURE',\n      data: error.response.data\n    });\n  }\n}\n\nfunction logOutAPI() {\n  return axios.post('/api/logout');\n}\n\nfunction* logOut() {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logOutAPI);\n    yield put({\n      type: 'LOG_OUT_SUCCESS',\n      data: result.data\n    });\n  } catch (error) {\n    yield put({\n      type: 'LOG_OUT_FAILURE',\n      data: error.response.data\n    });\n  }\n}\n\nfunction* watchLogIn() {\n  yield takeLatest('LOG_IN_REQUEST', logIn); //   yield takeEvery('LOG_IN_REQUEST', logIn);\n  //   while (true) {\n  //     yield take('LOG_IN_REQUEST', logIn);\n  //   }\n}\n\nfunction* watchLogOut() {\n  yield takeLatest('LOG_OUT_REQUEST', logOut);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsibG9naW5BUEkiLCJkYXRhIiwiYSIsImIiLCJheGlvcyIsInBvc3QiLCJsb2dJbiIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsImVycm9yIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJyZXN1bHQiLCJjYWxsIiwid2F0Y2hMb2dJbiIsInRha2VMYXRlc3QiLCJ3YXRjaExvZ091dCIsInVzZXJTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0FBQzFCLFNBQU9DLEtBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJKLElBQXpCLENBQVA7QUFDRDs7QUFDRCxVQUFVSyxLQUFWLENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QjtBQUNBLE1BQUk7QUFDRjtBQUNBLFVBQU1DLEtBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyxHQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFLGdCQURFO0FBRVJULFVBQUksRUFBRU0sTUFBTSxDQUFDTixJQUZMLENBR1I7O0FBSFEsS0FBRCxDQUFUO0FBS0QsR0FSRCxDQVFFLE9BQU9VLEtBQVAsRUFBYztBQUNkLFVBQU1GLEdBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUsZ0JBREU7QUFFUlQsVUFBSSxFQUFFVSxLQUFLLENBQUNDLFFBQU4sQ0FBZVg7QUFGYixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVNZLFNBQVQsR0FBcUI7QUFDbkIsU0FBT1QsS0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0Q7O0FBQ0QsVUFBVVMsTUFBVixHQUFtQjtBQUNqQixNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNILFNBQUQsQ0FBekI7QUFDQSxVQUFNSixHQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFLGlCQURFO0FBRVJULFVBQUksRUFBRWMsTUFBTSxDQUFDZDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPVSxLQUFQLEVBQWM7QUFDZCxVQUFNRixHQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFLGlCQURFO0FBRVJULFVBQUksRUFBRVUsS0FBSyxDQUFDQyxRQUFOLENBQWVYO0FBRmIsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFHRCxVQUFVZ0IsVUFBVixHQUF1QjtBQUNuQixRQUFNQyxVQUFVLENBQUMsZ0JBQUQsRUFBbUJaLEtBQW5CLENBQWhCLENBRG1CLENBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsVUFBVWEsV0FBVixHQUF3QjtBQUN0QixRQUFNRCxVQUFVLENBQUMsaUJBQUQsRUFBb0JKLE1BQXBCLENBQWhCO0FBQ0Q7O0FBR1UsVUFBVU0sUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNMLFVBQUQsQ0FERSxFQUVOSywrREFBSSxDQUFDSCxXQUFELENBRkUsQ0FBRCxDQUFUO0FBS0QiLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yaywgYWxsLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhLCBhLCBiKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcbiAgfVxuICBmdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XG4gICAgLy8gY29uc3Qge3R5cGUsIGRhdGF9ID0gYWN0aW9uXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhLCAnYScsICdiJyk7XG4gICAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB5aWVsZCBwdXQoe1xuICAgICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxuICAgICAgICBkYXRhOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBsb2dPdXRBUEkoKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XG4gIH1cbiAgZnVuY3Rpb24qIGxvZ091dCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xuICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgdHlwZTogJ0xPR19PVVRfU1VDQ0VTUycsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6ICdMT0dfT1VUX0ZBSUxVUkUnLFxuICAgICAgICBkYXRhOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcbiAgICAgIC8vICAgeWllbGQgdGFrZUV2ZXJ5KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcbiAgICAgIC8vICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIC8vICAgICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcbiAgICAgIC8vICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dPdXQpO1xuICAgIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXG4gIFxuICAgIF0pXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n // action이 dispatch되는것들을 logging하는 미들웨어, 삼단 고차함수\n\nconst loggerMiddleware = ({\n  dispatch,\n  getState\n}) => next => action => {\n  console.log(action); // if (typeof action === 'function'){\n  // return action(dispatch, getState)\n  // return action(dispatch, getState, extraArgument)\n  // }\n\n  return next(action);\n};\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\n  const middlewares = [redux_saga__WEBPACK_IMPORTED_MODULE_3___default.a, loggerMiddleware]; //   const middlewares = [thunkMiddleware, loggerMiddleware];\n\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], enhancer); // state와 reducer를 포함하는 게 store\n\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // store.dispatch({\n  //     type: 'CHANGE_NICKNAME',\n  //     data: 'boogicho'\n  // })\n\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBLE1BQU1BLGdCQUFnQixHQUNwQixDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQ0NDLElBQUQsSUFDQ0MsTUFBRCxJQUFZO0FBQ1ZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBRFUsQ0FFVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFPRCxJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNELENBWEg7O0FBYUEsTUFBTUcsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0QsaURBQUQsRUFBdUJULGdCQUF2QixDQUFwQixDQUYyQixDQUczQjs7QUFDQSxRQUFNVyxRQUFRLEdBQ1osUUFDSUMsU0FESixHQUVJQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBSHpCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFVTixRQUFWLENBQXpCLENBUjJCLENBUW1COztBQUM5Q0ksT0FBSyxDQUFDRyxRQUFOLEdBQWlCVixjQUFjLENBQUNXLEdBQWYsQ0FBbUJDLDhDQUFuQixDQUFqQixDQVQyQixDQVUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFPTCxLQUFQO0FBQ0QsQ0FmRDs7QUFnQkEsTUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDZixjQUFELEVBQWlCO0FBQzVDZ0IsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XG5cbi8vIGFjdGlvbuydtCBkaXNwYXRjaOuQmOuKlOqyg+uTpOydhCBsb2dnaW5n7ZWY64qUIOuvuOuTpOybqOyWtCwg7IK864uoIOqzoOywqO2VqOyImFxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9XG4gICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PlxuICAobmV4dCkgPT5cbiAgKGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgLy8gaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpe1xuICAgIC8vIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlKVxuICAgIC8vIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KVxuICAgIC8vIH1cblxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gIH07XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW2NyZWF0ZVNhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcbiAgLy8gICBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVua01pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xuICBjb25zdCBlbmhhbmNlciA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpOyAvLyBzdGF0ZeyZgCByZWR1Y2Vy66W8IO2PrO2VqO2VmOuKlCDqsowgc3RvcmVcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuICAvLyBzdG9yZS5kaXNwYXRjaCh7XG4gIC8vICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcbiAgLy8gICAgIGRhdGE6ICdib29naWNobydcbiAgLy8gfSlcbiAgcmV0dXJuIHN0b3JlO1xufTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });