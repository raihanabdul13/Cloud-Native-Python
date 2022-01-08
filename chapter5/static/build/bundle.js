/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/components/Tweet.js":
/*!************************************!*\
  !*** ./static/components/Tweet.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Tweet = function (_React$Component) {\n  _inherits(Tweet, _React$Component);\n\n  function Tweet() {\n    _classCallCheck(this, Tweet);\n\n    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));\n  }\n\n  _createClass(Tweet, [{\n    key: \"sendTweet\",\n    value: function sendTweet(event) {\n      event.preventDefault();\n      this.props.sendTweet(this.refs.tweetTextArea.value);\n      this.refs.tweetTextArea.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        { className: \"row\" },\n        React.createElement(\n          \"nav\",\n          null,\n          React.createElement(\n            \"div\",\n            { className: \"nav-wrapper\" },\n            React.createElement(\n              \"a\",\n              { href: \"#\", className: \"brand-logo\" },\n              \"APP\"\n            ),\n            React.createElement(\n              \"ul\",\n              { id: \"nav-mobile\", className: \"right hide-on-med-and-down\" },\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"a\",\n                  { href: \"/profile\" },\n                  \"Profile\"\n                )\n              ),\n              React.createElement(\n                \"li\",\n                null,\n                React.createElement(\n                  \"a\",\n                  { href: \"/logout\" },\n                  \"Logout\"\n                )\n              )\n            )\n          )\n        ),\n        React.createElement(\n          \"form\",\n          { onSubmit: this.sendTweet.bind(this) },\n          React.createElement(\n            \"div\",\n            { className: \"input-field\" },\n            React.createElement(\"textarea\", { ref: \"tweetTextArea\", className: \"materialize-textarea\" }),\n            React.createElement(\n              \"label\",\n              null,\n              \"How you doing?\"\n            ),\n            React.createElement(\n              \"button\",\n              { className: \"btn waves-effect waves-light right\" },\n              \"Tweet now \",\n              React.createElement(\n                \"i\",\n                { className: \"material-icons right\" },\n                \"send\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Tweet;\n}(React.Component);\n\nexports.default = Tweet;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvY29tcG9uZW50cy9Ud2VldC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0aWMvY29tcG9uZW50cy9Ud2VldC5qcz84ZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2VuZFR3ZWV0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2VuZFR3ZWV0KHRoaXMucmVmcy50d2VldFRleHRBcmVhLnZhbHVlKTtcbiAgICB0aGlzLnJlZnMudHdlZXRUZXh0QXJlYS52YWx1ZSA9ICcnO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5BUFA8L2E+XG4gICAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvcHJvZmlsZVwiPlByb2ZpbGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbG9nb3V0XCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kVHdlZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJlZj1cInR3ZWV0VGV4dEFyZWFcIiBjbGFzc05hbWU9XCJtYXRlcmlhbGl6ZS10ZXh0YXJlYVwiIC8+XG4gICAgICAgICAgICA8bGFiZWw+SG93IHlvdSBkb2luZz88L2xhYmVsPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgcmlnaHRcIj5Ud2VldCBub3cgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5zZW5kPC9pPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBWEE7QUFvQkE7Ozs7QUE1QkE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/components/Tweet.js\n");

/***/ }),

/***/ "./static/main.js":
/*!************************!*\
  !*** ./static/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Tweet = __webpack_require__(/*! ./components/Tweet */ \"./static/components/Tweet.js\");\n\nvar _Tweet2 = _interopRequireDefault(_Tweet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main(props) {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));\n\n    _this.state = { userId: cookie.load('session') };\n    _this.state = { tweets: [] };\n    return _this;\n  }\n  // function to post tweets\n\n\n  _createClass(Main, [{\n    key: 'addTweet',\n    value: function addTweet(tweet) {\n      var self = this;\n      $.ajax({\n        url: '/api/v2/tweets',\n        contentType: 'application/json',\n        type: 'POST',\n        data: JSON.stringify({\n          'username': \"Saussiona55\",\n          'body': tweet\n        }),\n        success: function success() {\n          alert(\"success\");\n          var newTweetList = self.state.tweets;\n          newTweetList.unshift({ tweetedby: \"Saussiona55\", body: tweet, timestamp: Date.now });\n          self.setState({ tweets: newTweetList });\n          return;\n        },\n        error: function error() {\n          return console.log(\"Failed\");\n        }\n      });\n    }\n    // function to pull tweets\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      $.getJSON('/api/v2/tweets', function (tweetModels) {\n        var t = tweetModels;\n        // var t = $.map(tweetModels, function(item) {\n        //     return item;\n        //  });\n        alert(t);\n        self.setState({ tweets: t });\n      });\n\n      // $.ajax(\"/api/v2/tweets\")\n      // //  .success(data => this.setState({tweets: data}))\n      //  .success(alert(data))\n      //  .error(error => console.log(error));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_Tweet2.default, { sendTweet: this.addTweet.bind(this) }),\n        React.createElement(TweetList, { tweet: this.state.tweets })\n      );\n    }\n  }]);\n\n  return Main;\n}(React.Component);\n\nvar documentReady = function documentReady() {\n  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));\n};\n\n$(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zdGF0aWMvbWFpbi5qcz9iNTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VldCBmcm9tIFwiLi9jb21wb25lbnRzL1R3ZWV0XCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9ICB7IHVzZXJJZDogY29va2llLmxvYWQoJ3Nlc3Npb24nKSB9O1xuICAgIHRoaXMuc3RhdGU9e3R3ZWV0czpbXX1cbiAgfVxuICAvLyBmdW5jdGlvbiB0byBwb3N0IHR3ZWV0c1xuICBhZGRUd2VldCh0d2VldCl7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gIFx0ICAgIHVybDogJy9hcGkvdjIvdHdlZXRzJyxcbiAgXHQgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgXHQgICAgdHlwZTogJ1BPU1QnLFxuICBcdCAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gIFx0XHQndXNlcm5hbWUnOiBcIlNhdXNzaW9uYTU1XCIsXG4gICAgICAnYm9keSc6IHR3ZWV0LFxuICBcdCAgICB9KSxcbiAgXHQgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhbGVydChcInN1Y2Nlc3NcIilcbiAgICAgICAgICAgIGxldCBuZXdUd2VldExpc3QgPSBzZWxmLnN0YXRlLnR3ZWV0cztcbiAgICAgICAgICAgIG5ld1R3ZWV0TGlzdC51bnNoaWZ0KHsgdHdlZXRlZGJ5OiBcIlNhdXNzaW9uYTU1XCIsYm9keTogdHdlZXQsIHRpbWVzdGFtcDogRGF0ZS5ub3d9KTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3R3ZWV0czogbmV3VHdlZXRMaXN0fSlcbiAgXHRcdCAgICAgIHJldHVybjtcbiAgXHQgICAgfSxcbiAgXHQgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICBcdFx0ICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiRmFpbGVkXCIpO1xuICAgIH1cbiAgICB9KTtcbiAgfVxuLy8gZnVuY3Rpb24gdG8gcHVsbCB0d2VldHNcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNlbGY9dGhpcztcbiAgICAkLmdldEpTT04oJy9hcGkvdjIvdHdlZXRzJywgZnVuY3Rpb24odHdlZXRNb2RlbHMpIHtcbiAgICAgIHZhciB0ID0gdHdlZXRNb2RlbHNcbiAgICBcdC8vIHZhciB0ID0gJC5tYXAodHdlZXRNb2RlbHMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBcdC8vICAgICByZXR1cm4gaXRlbTtcbiAgXHQgIC8vICB9KTtcbiAgICAgIGFsZXJ0KHQpXG4gICAgICBzZWxmLnNldFN0YXRlKHt0d2VldHM6IHR9KVxuICAgIH0pO1xuXG4gICAgLy8gJC5hamF4KFwiL2FwaS92Mi90d2VldHNcIilcbiAgICAvLyAvLyAgLnN1Y2Nlc3MoZGF0YSA9PiB0aGlzLnNldFN0YXRlKHt0d2VldHM6IGRhdGF9KSlcbiAgICAvLyAgLnN1Y2Nlc3MoYWxlcnQoZGF0YSkpXG4gICAgLy8gIC5lcnJvcihlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VHdlZXQgc2VuZFR3ZWV0PXt0aGlzLmFkZFR3ZWV0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPFR3ZWV0TGlzdCB0d2VldD17dGhpcy5zdGF0ZS50d2VldHN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5sZXQgZG9jdW1lbnRSZWFkeSA9KCkgPT57XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8TWFpbiAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKVxuICApO1xufTtcblxuJChkb2N1bWVudFJlYWR5KTtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBdERBO0FBQ0E7QUF5REE7QUFDQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/main.js\n");

/***/ })

/******/ });