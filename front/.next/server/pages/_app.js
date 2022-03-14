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
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {},\n  name: 'zerocho',\n  age: 27\n}; // action creator\n\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIm5hbWUiLCJhZ2UiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsS0FEWTtBQUV4QkMsSUFBRSxFQUFFLElBRm9CO0FBR3hCQyxZQUFVLEVBQUUsRUFIWTtBQUl4QkMsV0FBUyxFQUFFLEVBSmE7QUFLeEJDLE1BQUksRUFBRSxTQUxrQjtBQU14QkMsS0FBRyxFQUFFO0FBTm1CLENBQXJCLEMsQ0FTUDs7QUFDTyxNQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBVTtBQUNqQyxTQUFPO0FBQ0hDLFFBQUksRUFBRSxRQURIO0FBRUhEO0FBRkcsR0FBUDtBQUlILENBTE07QUFNQSxNQUFNRSxZQUFZLEdBQUcsTUFBTTtBQUM5QixTQUFPO0FBQ0hELFFBQUksRUFBRTtBQURILEdBQVA7QUFHSCxDQUpNOztBQU1QLE1BQU1FLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdaLFlBQVQsRUFBdUJhLE1BQXZCLEtBQWtDO0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUssUUFBTDtBQUNJLDZDQUNPRyxLQURQO0FBRUlYLGtCQUFVLEVBQUUsSUFGaEI7QUFHSUMsVUFBRSxFQUFFVyxNQUFNLENBQUNMO0FBSGY7O0FBS0osU0FBSyxTQUFMO0FBQ0ksNkNBQ09JLEtBRFA7QUFFSVgsa0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxVQUFFLEVBQUU7QUFIUjs7QUFLSjtBQUNJLGFBQU9VLEtBQVA7QUFkUjtBQWlCSCxDQWxCRDs7QUFtQmVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgbWU6IG51bGwsXG4gICAgc2lnblVwRGF0YToge30sXG4gICAgbG9naW5EYXRhOiB7fSxcbiAgICBuYW1lOiAnemVyb2NobycsXG4gICAgYWdlOiAyNyxcbn1cblxuLy8gYWN0aW9uIGNyZWF0b3JcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0xPR19JTicsXG4gICAgICAgIGRhdGFcbiAgICB9XG59XG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\n\n\nconst configureStore = () => {\n  const middlewares = [];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer); // state와 reducer를 포함하는 게 store\n  // store.dispatch({\n  //     type: 'CHANGE_NICKNAME',\n  //     data: 'boogicho'\n  // })\n\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FDNEJDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FEaEU7QUFFQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVVOLFFBQVYsQ0FBekIsQ0FKeUIsQ0FJb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBT0ksS0FBUDtBQUNILENBVkQ7O0FBV0EsTUFBTUcsT0FBTyxHQUFHQyx3RUFBYSxDQUFDVixjQUFELEVBQWlCO0FBQzFDVyxPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWVGLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW11cbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcikgLy8gc3RhdGXsmYAgcmVkdWNlcuulvCDtj6ztlajtlZjripQg6rKMIHN0b3JlXG4gICAgLy8gc3RvcmUuZGlzcGF0Y2goe1xuICAgIC8vICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcbiAgICAvLyAgICAgZGF0YTogJ2Jvb2dpY2hvJ1xuICAgIC8vIH0pXG4gICAgcmV0dXJuIHN0b3JlXG59XG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

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

/***/ })

/******/ });