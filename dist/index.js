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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./src/styles/lloyds.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./src/styles/lloyds.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #006a4d;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #001e15;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 0;\n}\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777777;\n}\n.text-primary {\n  color: #006a4d;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #003728;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #006a4d;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #003728;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 0;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 0;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #003728;\n  border-color: #000000;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #00130e;\n  border-color: #000000;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-primary .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #77b800;\n  border-color: #679f00;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #568500;\n  border-color: #141f00;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #568500;\n  border-color: #3f6100;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #568500;\n  border-color: #3f6100;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #3f6100;\n  border-color: #141f00;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #77b800;\n  border-color: #679f00;\n}\n.btn-success .badge {\n  color: #77b800;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #003728;\n  border-color: #000000;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #00130e;\n  border-color: #000000;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-info .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #d24702;\n  border-color: #b93e02;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #9f3602;\n  border-color: #3a1401;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #9f3602;\n  border-color: #7c2a01;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #9f3602;\n  border-color: #7c2a01;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #7c2a01;\n  border-color: #3a1401;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #d24702;\n  border-color: #b93e02;\n}\n.btn-warning .badge {\n  color: #d24702;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #dc2a4d;\n  border-color: #cb2143;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #b51e3c;\n  border-color: #5e0f1f;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #b51e3c;\n  border-color: #971931;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #b51e3c;\n  border-color: #971931;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #971931;\n  border-color: #5e0f1f;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #dc2a4d;\n  border-color: #cb2143;\n}\n.btn-danger .badge {\n  color: #dc2a4d;\n  background-color: #fff;\n}\n.btn-link {\n  color: #006a4d;\n  font-weight: normal;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #001e15;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #006a4d;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n  }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 0;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 0;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 0;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.nav > li.disabled > a {\n  color: #777777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #006a4d;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid white;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 0 0 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee white;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid white;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 0;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 0 0 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 0;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #006a4d;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 0;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 0 0 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 50px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  padding: 20px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 60px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 10px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n}\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 19px;\n  margin-bottom: 19px;\n}\n.navbar-text {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: white;\n  border-color: #eeeeee;\n}\n.navbar-default .navbar-brand {\n  color: #333333;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #fff;\n  background-color: none;\n}\n.navbar-default .navbar-text {\n  color: #333333;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #333333;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: #ebebeb;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #ebebeb;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ebebeb;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ebebeb;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #333333;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #eeeeee;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #ebebeb;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #333333;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: #ebebeb;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #ebebeb;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #333333;\n}\n.navbar-default .navbar-link:hover {\n  color: #fff;\n}\n.navbar-default .btn-link {\n  color: #333333;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #fff;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #006a4d;\n  border-color: #003728;\n}\n.navbar-inverse .navbar-brand {\n  color: #ccc;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: none;\n}\n.navbar-inverse .navbar-text {\n  color: #ccc;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #ccc;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: #002d21;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #002d21;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #002d21;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #002d21;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #004633;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #002d21;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #003728;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #003728;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #ccc;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: #002d21;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #002d21;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #ccc;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #ccc;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #ccc;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 0;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n.breadcrumb > .active {\n  color: #777777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 0;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #006a4d;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #001e15;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #006a4d;\n  cursor: default;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #006a4d;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #003728;\n}\n.label-success {\n  background-color: #77b800;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #568500;\n}\n.label-info {\n  background-color: #006a4d;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #003728;\n}\n.label-warning {\n  background-color: #d24702;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #9f3602;\n}\n.label-danger {\n  background-color: #dc2a4d;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #b51e3c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 0;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #006a4d;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 0;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #006a4d;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #77b800;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #006a4d;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #d24702;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #dc2a4d;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #006a4d;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #37ffc8;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: -1;\n  border-top-left-radius: -1;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: -1;\n  border-top-left-radius: -1;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: -1;\n  border-top-left-radius: -1;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: -1;\n  border-top-right-radius: -1;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: -1;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: -1;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: -1;\n  border-bottom-right-radius: -1;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: -1;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: -1;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 0;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #006a4d;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #006a4d;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #006a4d;\n}\n.panel-primary > .panel-heading .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #006a4d;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 0;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 0;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -1 -1 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n@font-face {\n  font-family: 'lloyds';\n  src: url(" + escape(__webpack_require__(/*! ./lloyds_bank_jack-regularWEB.woff */ "./src/styles/lloyds_bank_jack-regularWEB.woff")) + ");\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  background: white;\n  font-family: 'lloyds';\n}\n.navbar-brand {\n  padding: 10px 15px;\n}\n.navbar {\n  margin-bottom: 0;\n  border: 0;\n}\n.navbar .navbar-brand {\n  color: white;\n}\n.navbar .navbar-brand img {\n  height: 40px;\n  width: auto;\n  background: #006a4d;\n  padding: 0 0 0 15px;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: white;\n}\n.container {\n  background: #efedea;\n}\n.container .jumbotron {\n  background: #2d8259;\n  color: white;\n  width: 100%;\n}\n.tabs {\n  margin-bottom: 1em;\n}\n.tab-content {\n  background: white;\n  padding: 20px;\n}\n.navbar-header {\n  float: left;\n}\n.glyphicon-thumbs-down {\n  color: red;\n}\n.glyphicon-thumbs-up {\n  color: green;\n}\n.navbar .hideShow {\n  line-height: 60px;\n  padding-right: 10px;\n  color: #006a4d;\n}\n.navbar .hideShow .btn {\n  background: white;\n  border: 1px solid white;\n}\n.navbar .hideShow .btn:hover {\n  background: #000;\n  color: white;\n}\n.navbar-inverse .navbar-nav > li > a:focus {\n  background: none;\n}\n.wrapper {\n  font-family: 'lloyds';\n  height: calc(100vh - 60px);\n  padding-top: 6px;\n  width: 100%;\n}\n.wrapper .one,\n.wrapper .two,\n.wrapper .three {\n  float: left;\n  width: 25%;\n  overflow: hidden;\n}\n.wrapper .two {\n  width: 50%;\n}\n.wrapper .two.col1Hidden,\n.wrapper .two.col3Hidden {\n  width: 75%;\n}\n.wrapper .two.col1Hidden.col3Hidden {\n  width: 100%;\n}\n.wrapper .two.leftColHidden {\n  width: 75%;\n}\n.wrapper .custom-widget {\n  float: left;\n  padding: 0 3px;\n  width: calc((100vw / 8 * 1));\n  margin-bottom: 6px;\n}\n.wrapper .widget-content {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: white;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  height: calc((96vh - 122px) / 5);\n  display: flex;\n  flex-direction: column;\n}\n.wrapper .cellDoubleHeight .widget-content {\n  height: calc((96vh - 122px) / 5 * 2 + 6px);\n}\n.wrapper .cellDoubleHeight .widget-content .widget-body {\n  padding: 20px;\n}\n.wrapper .cellDoubleWidth {\n  width: calc((100vw / 8 * 2));\n}\n.wrapper .cellTripleWidth {\n  width: calc((100vw / 8 * 3));\n}\n.wrapper .cellQuadWidth {\n  width: calc((100vw / 8 * 4));\n}\n.wrapper .one .category-head > div {\n  background: linear-gradient(90deg, #02874f, #5fb24f);\n}\n.wrapper .two .category-head > div {\n  background: linear-gradient(90deg, #18519d, #3192d0);\n}\n.wrapper .two h1 {\n  color: #18519d;\n}\n.wrapper .three .category-head > div {\n  background: linear-gradient(90deg, #9c1a5d, #cd143e);\n}\n.wrapper .three img {\n  top: 8px;\n}\n.wrapper #quality.category-head {\n  clear: both;\n  margin-top: 10px;\n}\n.wrapper #quality.category-head > div {\n  background: linear-gradient(90deg, #d74f14, #f7a500);\n}\n.wrapper .category-head {\n  width: 100%;\n  margin-bottom: 6px;\n}\n.wrapper .category-head > div {\n  margin: 0 3px;\n  height: 4vh;\n  padding: 0 20px 0 4.5vh;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.wrapper .category-head h5,\n.wrapper .category-head h6 {\n  color: white;\n  line-height: 1.2;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper .category-head h5 {\n  margin: 0;\n  font-size: 1.5vh;\n  padding-top: 0.5vh;\n}\n.wrapper .category-head h6 {\n  font-size: 1.2vh;\n}\n.wrapper .category-head img {\n  position: absolute;\n  top: 1vh;\n  left: 12px;\n  height: 2vh;\n}\n.wrapper .widget-title {\n  font-size: 22px;\n  text-transform: uppercase;\n  color: #666;\n  border-bottom: 1px solid #ddd;\n  padding: 0;\n  position: relative;\n  height: 4vh;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n.wrapper .widget-title h6 {\n  flex: 1 1 auto;\n  padding-left: 10px;\n  line-height: 1;\n  margin: 0;\n  font-size: 1.5vh;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper .widget-title .fa {\n  flex: 0 1 auto;\n  width: 30px;\n  padding-right: 10px;\n  font-size: 2vh;\n  text-align: right;\n}\n.wrapper .widget-body {\n  height: 110px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding: 10px;\n  flex-grow: 1;\n}\n.wrapper .widget-body h1 {\n  font-size: 7vh;\n  font-weight: bold;\n}\n.wrapper .widget-body h5 {\n  position: absolute;\n  width: 100%;\n}\n.wrapper .widget-body h6,\n.wrapper .widget-body .magnitude-container {\n  display: inline;\n  text-align: center;\n}\n.wrapper .widget-body h6 .number,\n.wrapper .widget-body .magnitude-container .number,\n.wrapper .widget-body h6 .symbol,\n.wrapper .widget-body .magnitude-container .symbol {\n  font-size: 5vh;\n}\n.wrapper .widget-body .unit {\n  font-size: 20px;\n}\n.wrapper .widget-body .sub-widget {\n  display: none;\n}\n.wrapper .widget-body .sub-widget {\n  text-align: center;\n  padding: 0 10px;\n  border-right: 1px solid lightgrey;\n  display: block;\n}\n.wrapper .widget-body .sub-widget:last-child {\n  border: none;\n}\n.wrapper .widget-body .fa-thumbs-up,\n.wrapper .widget-body .fa-thumbs-down {\n  font-size: 4vh;\n}\n.wrapper .widget-body h5 {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  height: calc((100vh - 210px) / 5 - 4rem);\n  font-size: 2vh;\n  margin: 0;\n}\n.canvasWrapper {\n  height: calc((69vh - 122px) / 5 - 20px);\n  width: calc((69vh - 122px) / 5 - 20px);\n}\n.panel-default {\n  position: absolute;\n  right: 20px;\n  bottom: -21px;\n  width: 330px;\n  height: 350px;\n  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.6);\n  border: 0;\n}\n.panel-default > .panel-heading {\n  color: white;\n  background: #006a4d;\n  height: 100px;\n  cursor: pointer;\n}\n.panel-default > .panel-heading .panel-title {\n  font-size: 2rem;\n}\n.panel-default > .panel-heading .panel-title img {\n  height: 42px;\n  margin-bottom: 0.25rem;\n  margin-right: 10px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  width: 42px;\n}\n.panel-default > .panel-heading p {\n  padding: 1rem 0 0 0;\n}\n.panel-default > .panel-heading .glyphicon {\n  margin-top: 10px;\n}\n.panel-default > .panel-heading .glyphicon-triangle-bottom {\n  display: block;\n}\n.panel-default > .panel-heading .glyphicon-triangle-top {\n  display: none;\n}\n.panel-default .bubble {\n  background: #77b800;\n  padding: 8px;\n  border-radius: 8px;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.4rem;\n}\n.panel-default .bubble a {\n  color: white;\n  font-weight: bold;\n}\n.panel-default .panel-footer {\n  display: none;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n.panel-default > .panel-heading .badge.badge-error {\n  background-color: #dc2a4d;\n  font-size: 2rem;\n  margin-left: 4px;\n  margin-top: -4px;\n}\n.panel-default.minimised {\n  height: 60px;\n  overflow: hidden;\n}\n.panel-default.minimised > .panel-heading {\n  height: 60px;\n}\n.panel-default.minimised > .panel-heading .glyphicon-triangle-bottom {\n  display: none;\n}\n.panel-default.minimised > .panel-heading .glyphicon-triangle-top {\n  display: block;\n}\n.panel-default.minimised .panel-body,\n.panel-default.minimised .panel-footer {\n  margin: 0;\n  height: 0;\n  padding: 0;\n}\n", "", {"version":3,"sources":["/Users/jozhart/Development/speedy-components/src/styles/lloyds.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/normalize.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/print.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/scaffolding.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/vendor-prefixes.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/tab-focus.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/image.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/type.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/text-emphasis.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/background-variant.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/text-overflow.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/code.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/grid.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/grid.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/grid-framework.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/tables.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/table-row.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/forms.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/forms.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/buttons.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/buttons.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/opacity.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/component-animations.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/dropdowns.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/nav-divider.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/reset-filter.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/button-groups.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/border-radius.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/input-groups.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/navs.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/navbar.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/nav-vertical-align.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/utilities.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/breadcrumbs.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/pagination.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/pagination.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/pager.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/labels.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/labels.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/badges.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/jumbotron.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/thumbnails.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/alerts.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/alerts.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/progress-bars.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/gradients.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/progress-bar.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/media.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/list-group.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/list-group.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/panels.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/panels.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/responsive-embed.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/wells.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/close.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/modals.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/tooltip.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/reset-text.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/popovers.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/carousel.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/clearfix.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/center-block.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/hide-text.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/responsive-utilities.less","/Users/jozhart/Development/speedy-components/node_modules/bootstrap/less/mixins/responsive-visibility.less","/Users/jozhart/Development/speedy-components/src/styles/lloyds.less","/Users/jozhart/Development/speedy-components/src/styles/lloyds-widgets.less","/Users/jozhart/Development/speedy-components/src/styles/lloyds-chat.less"],"names":[],"mappings":"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oBAAA;CdkyBH;AcnyBC;EACE,WAAA;CdqyBH;ActyBC;EACE,oBAAA;CdwyBH;AczyBC;EACE,mBAAA;Cd2yBH;AcvyBC;EACE,YAAA;CdyyBH;AczzBC;EACE,WAAA;Cd2zBH;Ac5zBC;EACE,mBAAA;Cd8zBH;Ac/zBC;EACE,mBAAA;Cdi0BH;Acl0BC;EACE,UAAA;Cdo0BH;Acr0BC;EACE,mBAAA;Cdu0BH;Acx0BC;EACE,mBAAA;Cd00BH;Ac30BC;EACE,UAAA;Cd60BH;Ac90BC;EACE,mBAAA;Cdg1BH;Acj1BC;EACE,mBAAA;Cdm1BH;Acp1BC;EACE,UAAA;Cds1BH;Acv1BC;EACE,mBAAA;Cdy1BH;Ac11BC;EACE,kBAAA;Cd41BH;Acx1BC;EACE,WAAA;Cd01BH;Ac50BC;EACE,kBAAA;Cd80BH;Ac/0BC;EACE,0BAAA;Cdi1BH;Acl1BC;EACE,0BAAA;Cdo1BH;Acr1BC;EACE,iBAAA;Cdu1BH;Acx1BC;EACE,0BAAA;Cd01BH;Ac31BC;EACE,0BAAA;Cd61BH;Ac91BC;EACE,iBAAA;Cdg2BH;Acj2BC;EACE,0BAAA;Cdm2BH;Acp2BC;EACE,0BAAA;Cds2BH;Acv2BC;EACE,iBAAA;Cdy2BH;Ac12BC;EACE,0BAAA;Cd42BH;Ac72BC;EACE,yBAAA;Cd+2BH;Ach3BC;EACE,gBAAA;Cdk3BH;AY33BD;EEzBI;IACE,YAAA;Gdu5BH;Ech5BD;IACE,YAAA;Gdk5BD;Ecn5BD;IACE,oBAAA;Gdq5BD;Ect5BD;IACE,oBAAA;Gdw5BD;Ecz5BD;IACE,WAAA;Gd25BD;Ec55BD;IACE,oBAAA;Gd85BD;Ec/5BD;IACE,oBAAA;Gdi6BD;Ecl6BD;IACE,WAAA;Gdo6BD;Ecr6BD;IACE,oBAAA;Gdu6BD;Ecx6BD;IACE,oBAAA;Gd06BD;Ec36BD;IACE,WAAA;Gd66BD;Ec96BD;IACE,oBAAA;Gdg7BD;Ecj7BD;IACE,mBAAA;Gdm7BD;Ecr6BD;IACE,YAAA;Gdu6BD;Ecx6BD;IACE,oBAAA;Gd06BD;Ec36BD;IACE,oBAAA;Gd66BD;Ec96BD;IACE,WAAA;Gdg7BD;Ecj7BD;IACE,oBAAA;Gdm7BD;Ecp7BD;IACE,oBAAA;Gds7BD;Ecv7BD;IACE,WAAA;Gdy7BD;Ec17BD;IACE,oBAAA;Gd47BD;Ec77BD;IACE,oBAAA;Gd+7BD;Ech8BD;IACE,WAAA;Gdk8BD;Ecn8BD;IACE,oBAAA;Gdq8BD;Ect8BD;IACE,mBAAA;Gdw8BD;Ecp8BD;IACE,YAAA;Gds8BD;Ect9BD;IACE,WAAA;Gdw9BD;Ecz9BD;IACE,mBAAA;Gd29BD;Ec59BD;IACE,mBAAA;Gd89BD;Ec/9BD;IACE,UAAA;Gdi+BD;Ecl+BD;IACE,mBAAA;Gdo+BD;Ecr+BD;IACE,mBAAA;Gdu+BD;Ecx+BD;IACE,UAAA;Gd0+BD;Ec3+BD;IACE,mBAAA;Gd6+BD;Ec9+BD;IACE,mBAAA;Gdg/BD;Ecj/BD;IACE,UAAA;Gdm/BD;Ecp/BD;IACE,mBAAA;Gds/BD;Ecv/BD;IACE,kBAAA;Gdy/BD;Ecr/BD;IACE,WAAA;Gdu/BD;Ecz+BD;IACE,kBAAA;Gd2+BD;Ec5+BD;IACE,0BAAA;Gd8+BD;Ec/+BD;IACE,0BAAA;Gdi/BD;Ecl/BD;IACE,iBAAA;Gdo/BD;Ecr/BD;IACE,0BAAA;Gdu/BD;Ecx/BD;IACE,0BAAA;Gd0/BD;Ec3/BD;IACE,iBAAA;Gd6/BD;Ec9/BD;IACE,0BAAA;GdggCD;EcjgCD;IACE,0BAAA;GdmgCD;EcpgCD;IACE,iBAAA;GdsgCD;EcvgCD;IACE,0BAAA;GdygCD;Ec1gCD;IACE,yBAAA;Gd4gCD;Ec7gCD;IACE,gBAAA;Gd+gCD;CACF;AYhhCD;EElCI;IACE,YAAA;GdqjCH;Ec9iCD;IACE,YAAA;GdgjCD;EcjjCD;IACE,oBAAA;GdmjCD;EcpjCD;IACE,oBAAA;GdsjCD;EcvjCD;IACE,WAAA;GdyjCD;Ec1jCD;IACE,oBAAA;Gd4jCD;Ec7jCD;IACE,oBAAA;Gd+jCD;EchkCD;IACE,WAAA;GdkkCD;EcnkCD;IACE,oBAAA;GdqkCD;EctkCD;IACE,oBAAA;GdwkCD;EczkCD;IACE,WAAA;Gd2kCD;Ec5kCD;IACE,oBAAA;Gd8kCD;Ec/kCD;IACE,mBAAA;GdilCD;EcnkCD;IACE,YAAA;GdqkCD;EctkCD;IACE,oBAAA;GdwkCD;EczkCD;IACE,oBAAA;Gd2kCD;Ec5kCD;IACE,WAAA;Gd8kCD;Ec/kCD;IACE,oBAAA;GdilCD;EcllCD;IACE,oBAAA;GdolCD;EcrlCD;IACE,WAAA;GdulCD;EcxlCD;IACE,oBAAA;Gd0lCD;Ec3lCD;IACE,oBAAA;Gd6lCD;Ec9lCD;IACE,WAAA;GdgmCD;EcjmCD;IACE,oBAAA;GdmmCD;EcpmCD;IACE,mBAAA;GdsmCD;EclmCD;IACE,YAAA;GdomCD;EcpnCD;IACE,WAAA;GdsnCD;EcvnCD;IACE,mBAAA;GdynCD;Ec1nCD;IACE,mBAAA;Gd4nCD;Ec7nCD;IACE,UAAA;Gd+nCD;EchoCD;IACE,mBAAA;GdkoCD;EcnoCD;IACE,mBAAA;GdqoCD;EctoCD;IACE,UAAA;GdwoCD;EczoCD;IACE,mBAAA;Gd2oCD;Ec5oCD;IACE,mBAAA;Gd8oCD;Ec/oCD;IACE,UAAA;GdipCD;EclpCD;IACE,mBAAA;GdopCD;EcrpCD;IACE,kBAAA;GdupCD;EcnpCD;IACE,WAAA;GdqpCD;EcvoCD;IACE,kBAAA;GdyoCD;Ec1oCD;IACE,0BAAA;Gd4oCD;Ec7oCD;IACE,0BAAA;Gd+oCD;EchpCD;IACE,iBAAA;GdkpCD;EcnpCD;IACE,0BAAA;GdqpCD;EctpCD;IACE,0BAAA;GdwpCD;EczpCD;IACE,iBAAA;Gd2pCD;Ec5pCD;IACE,0BAAA;Gd8pCD;Ec/pCD;IACE,0BAAA;GdiqCD;EclqCD;IACE,iBAAA;GdoqCD;EcrqCD;IACE,0BAAA;GduqCD;EcxqCD;IACE,yBAAA;Gd0qCD;Ec3qCD;IACE,gBAAA;Gd6qCD;CACF;AYrqCD;EE3CI;IACE,YAAA;GdmtCH;Ec5sCD;IACE,YAAA;Gd8sCD;Ec/sCD;IACE,oBAAA;GditCD;EcltCD;IACE,oBAAA;GdotCD;EcrtCD;IACE,WAAA;GdutCD;EcxtCD;IACE,oBAAA;Gd0tCD;Ec3tCD;IACE,oBAAA;Gd6tCD;Ec9tCD;IACE,WAAA;GdguCD;EcjuCD;IACE,oBAAA;GdmuCD;EcpuCD;IACE,oBAAA;GdsuCD;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","file":"lloyds.less","sourcesContent":["/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #006a4d;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #001e15;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 0;\n}\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777777;\n}\n.text-primary {\n  color: #006a4d;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #003728;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #006a4d;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #003728;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 0;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 0;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #003728;\n  border-color: #000000;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #00130e;\n  border-color: #000000;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-primary .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #77b800;\n  border-color: #679f00;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #568500;\n  border-color: #141f00;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #568500;\n  border-color: #3f6100;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #568500;\n  border-color: #3f6100;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #3f6100;\n  border-color: #141f00;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #77b800;\n  border-color: #679f00;\n}\n.btn-success .badge {\n  color: #77b800;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #003728;\n  border-color: #000000;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #003728;\n  border-color: #00130e;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #00130e;\n  border-color: #000000;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #006a4d;\n  border-color: #00513a;\n}\n.btn-info .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #d24702;\n  border-color: #b93e02;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #9f3602;\n  border-color: #3a1401;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #9f3602;\n  border-color: #7c2a01;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #9f3602;\n  border-color: #7c2a01;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #7c2a01;\n  border-color: #3a1401;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #d24702;\n  border-color: #b93e02;\n}\n.btn-warning .badge {\n  color: #d24702;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #dc2a4d;\n  border-color: #cb2143;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #b51e3c;\n  border-color: #5e0f1f;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #b51e3c;\n  border-color: #971931;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #b51e3c;\n  border-color: #971931;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #971931;\n  border-color: #5e0f1f;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #dc2a4d;\n  border-color: #cb2143;\n}\n.btn-danger .badge {\n  color: #dc2a4d;\n  background-color: #fff;\n}\n.btn-link {\n  color: #006a4d;\n  font-weight: normal;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #001e15;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #006a4d;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n  }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 0;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 0;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 0;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 0;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.nav > li.disabled > a {\n  color: #777777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #006a4d;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid white;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 0 0 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee white;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid white;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 0;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 0 0 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 0;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #006a4d;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 0;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 0 0 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 50px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  padding: 20px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 60px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 10px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n}\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 19px;\n  margin-bottom: 19px;\n}\n.navbar-text {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: white;\n  border-color: #eeeeee;\n}\n.navbar-default .navbar-brand {\n  color: #333333;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #fff;\n  background-color: none;\n}\n.navbar-default .navbar-text {\n  color: #333333;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #333333;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: #ebebeb;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #ebebeb;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ebebeb;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ebebeb;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #333333;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #eeeeee;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #ebebeb;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #333333;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: #ebebeb;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #ebebeb;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #333333;\n}\n.navbar-default .navbar-link:hover {\n  color: #fff;\n}\n.navbar-default .btn-link {\n  color: #333333;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #fff;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #006a4d;\n  border-color: #003728;\n}\n.navbar-inverse .navbar-brand {\n  color: #ccc;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: none;\n}\n.navbar-inverse .navbar-text {\n  color: #ccc;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #ccc;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: #002d21;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #002d21;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #002d21;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #002d21;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #004633;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #002d21;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #003728;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #003728;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #ccc;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: #002d21;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #002d21;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #ccc;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #ccc;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #ccc;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 0;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  content: \"/\\00a0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n.breadcrumb > .active {\n  color: #777777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 0;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #006a4d;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #001e15;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #006a4d;\n  cursor: default;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #006a4d;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #003728;\n}\n.label-success {\n  background-color: #77b800;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #568500;\n}\n.label-info {\n  background-color: #006a4d;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #003728;\n}\n.label-warning {\n  background-color: #d24702;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #9f3602;\n}\n.label-danger {\n  background-color: #dc2a4d;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #b51e3c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 0;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #006a4d;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 0;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #006a4d;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #77b800;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #006a4d;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #d24702;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #dc2a4d;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #006a4d;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #37ffc8;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: -1;\n  border-top-left-radius: -1;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: -1;\n  border-top-left-radius: -1;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: -1;\n  border-top-left-radius: -1;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: -1;\n  border-top-right-radius: -1;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: -1;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: -1;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: -1;\n  border-bottom-right-radius: -1;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: -1;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: -1;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 0;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #006a4d;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #006a4d;\n  border-color: #006a4d;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #006a4d;\n}\n.panel-primary > .panel-heading .badge {\n  color: #006a4d;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #006a4d;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 0;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 0;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -1 -1 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n@font-face {\n  font-family: 'lloyds';\n  src: url('lloyds_bank_jack-regularWEB.woff');\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  background: white;\n  font-family: 'lloyds';\n}\n.navbar-brand {\n  padding: 10px 15px;\n}\n.navbar {\n  margin-bottom: 0;\n  border: 0;\n}\n.navbar .navbar-brand {\n  color: white;\n}\n.navbar .navbar-brand img {\n  height: 40px;\n  width: auto;\n  background: #006a4d;\n  padding: 0 0 0 15px;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: white;\n}\n.container {\n  background: #efedea;\n}\n.container .jumbotron {\n  background: #2d8259;\n  color: white;\n  width: 100%;\n}\n.tabs {\n  margin-bottom: 1em;\n}\n.tab-content {\n  background: white;\n  padding: 20px;\n}\n.navbar-header {\n  float: left;\n}\n.glyphicon-thumbs-down {\n  color: red;\n}\n.glyphicon-thumbs-up {\n  color: green;\n}\n.navbar .hideShow {\n  line-height: 60px;\n  padding-right: 10px;\n  color: #006a4d;\n}\n.navbar .hideShow .btn {\n  background: white;\n  border: 1px solid white;\n}\n.navbar .hideShow .btn:hover {\n  background: #000;\n  color: white;\n}\n.navbar-inverse .navbar-nav > li > a:focus {\n  background: none;\n}\n.wrapper {\n  font-family: 'lloyds';\n  height: calc(100vh - 60px);\n  padding-top: 6px;\n  width: 100%;\n}\n.wrapper .one,\n.wrapper .two,\n.wrapper .three {\n  float: left;\n  width: 25%;\n  overflow: hidden;\n}\n.wrapper .two {\n  width: 50%;\n}\n.wrapper .two.col1Hidden,\n.wrapper .two.col3Hidden {\n  width: 75%;\n}\n.wrapper .two.col1Hidden.col3Hidden {\n  width: 100%;\n}\n.wrapper .two.leftColHidden {\n  width: 75%;\n}\n.wrapper .custom-widget {\n  float: left;\n  padding: 0 3px;\n  width: calc((100vw / 8 * 1));\n  margin-bottom: 6px;\n}\n.wrapper .widget-content {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: white;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  height: calc((96vh - 122px) / 5);\n  display: flex;\n  flex-direction: column;\n}\n.wrapper .cellDoubleHeight .widget-content {\n  height: calc((96vh - 122px) / 5 * 2 + 6px);\n}\n.wrapper .cellDoubleHeight .widget-content .widget-body {\n  padding: 20px;\n}\n.wrapper .cellDoubleWidth {\n  width: calc((100vw / 8 * 2));\n}\n.wrapper .cellTripleWidth {\n  width: calc((100vw / 8 * 3));\n}\n.wrapper .cellQuadWidth {\n  width: calc((100vw / 8 * 4));\n}\n.wrapper .one .category-head > div {\n  background: linear-gradient(90deg, #02874f, #5fb24f);\n}\n.wrapper .two .category-head > div {\n  background: linear-gradient(90deg, #18519d, #3192d0);\n}\n.wrapper .two h1 {\n  color: #18519d;\n}\n.wrapper .three .category-head > div {\n  background: linear-gradient(90deg, #9c1a5d, #cd143e);\n}\n.wrapper .three img {\n  top: 8px;\n}\n.wrapper #quality.category-head {\n  clear: both;\n  margin-top: 10px;\n}\n.wrapper #quality.category-head > div {\n  background: linear-gradient(90deg, #d74f14, #f7a500);\n}\n.wrapper .category-head {\n  width: 100%;\n  margin-bottom: 6px;\n}\n.wrapper .category-head > div {\n  margin: 0 3px;\n  height: 4vh;\n  padding: 0 20px 0 4.5vh;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.wrapper .category-head h5,\n.wrapper .category-head h6 {\n  color: white;\n  line-height: 1.2;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper .category-head h5 {\n  margin: 0;\n  font-size: 1.5vh;\n  padding-top: 0.5vh;\n}\n.wrapper .category-head h6 {\n  font-size: 1.2vh;\n}\n.wrapper .category-head img {\n  position: absolute;\n  top: 1vh;\n  left: 12px;\n  height: 2vh;\n}\n.wrapper .widget-title {\n  font-size: 22px;\n  text-transform: uppercase;\n  color: #666;\n  border-bottom: 1px solid #ddd;\n  padding: 0;\n  position: relative;\n  height: 4vh;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background: #f5f5f5;\n}\n.wrapper .widget-title h6 {\n  flex: 1 1 auto;\n  padding-left: 10px;\n  line-height: 1;\n  margin: 0;\n  font-size: 1.5vh;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper .widget-title .fa {\n  flex: 0 1 auto;\n  width: 30px;\n  padding-right: 10px;\n  font-size: 2vh;\n  text-align: right;\n}\n.wrapper .widget-body {\n  height: 110px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding: 10px;\n  flex-grow: 1;\n}\n.wrapper .widget-body h1 {\n  font-size: 7vh;\n  font-weight: bold;\n}\n.wrapper .widget-body h5 {\n  position: absolute;\n  width: 100%;\n}\n.wrapper .widget-body h6,\n.wrapper .widget-body .magnitude-container {\n  display: inline;\n  text-align: center;\n}\n.wrapper .widget-body h6 .number,\n.wrapper .widget-body .magnitude-container .number,\n.wrapper .widget-body h6 .symbol,\n.wrapper .widget-body .magnitude-container .symbol {\n  font-size: 5vh;\n}\n.wrapper .widget-body .unit {\n  font-size: 20px;\n}\n.wrapper .widget-body .sub-widget {\n  display: none;\n}\n.wrapper .widget-body .sub-widget {\n  text-align: center;\n  padding: 0 10px;\n  border-right: 1px solid lightgrey;\n  display: block;\n}\n.wrapper .widget-body .sub-widget:last-child {\n  border: none;\n}\n.wrapper .widget-body .fa-thumbs-up,\n.wrapper .widget-body .fa-thumbs-down {\n  font-size: 4vh;\n}\n.wrapper .widget-body h5 {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  height: calc((100vh - 210px) / 5 - 4rem);\n  font-size: 2vh;\n  margin: 0;\n}\n.canvasWrapper {\n  height: calc((69vh - 122px) / 5 - 20px);\n  width: calc((69vh - 122px) / 5 - 20px);\n}\n.panel-default {\n  position: absolute;\n  right: 20px;\n  bottom: -21px;\n  width: 330px;\n  height: 350px;\n  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.6);\n  border: 0;\n}\n.panel-default > .panel-heading {\n  color: white;\n  background: #006a4d;\n  height: 100px;\n  cursor: pointer;\n}\n.panel-default > .panel-heading .panel-title {\n  font-size: 2rem;\n}\n.panel-default > .panel-heading .panel-title img {\n  height: 42px;\n  margin-bottom: 0.25rem;\n  margin-right: 10px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  width: 42px;\n}\n.panel-default > .panel-heading p {\n  padding: 1rem 0 0 0;\n}\n.panel-default > .panel-heading .glyphicon {\n  margin-top: 10px;\n}\n.panel-default > .panel-heading .glyphicon-triangle-bottom {\n  display: block;\n}\n.panel-default > .panel-heading .glyphicon-triangle-top {\n  display: none;\n}\n.panel-default .bubble {\n  background: #77b800;\n  padding: 8px;\n  border-radius: 8px;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.4rem;\n}\n.panel-default .bubble a {\n  color: white;\n  font-weight: bold;\n}\n.panel-default .panel-footer {\n  display: none;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n}\n.panel-default > .panel-heading .badge.badge-error {\n  background-color: #dc2a4d;\n  font-size: 2rem;\n  margin-left: 4px;\n  margin-top: -4px;\n}\n.panel-default.minimised {\n  height: 60px;\n  overflow: hidden;\n}\n.panel-default.minimised > .panel-heading {\n  height: 60px;\n}\n.panel-default.minimised > .panel-heading .glyphicon-triangle-bottom {\n  display: none;\n}\n.panel-default.minimised > .panel-heading .glyphicon-triangle-top {\n  display: block;\n}\n.panel-default.minimised .panel-body,\n.panel-default.minimised .panel-footer {\n  margin: 0;\n  height: 0;\n  padding: 0;\n}\n","/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n//\n// 1. Set default font family to sans-serif.\n// 2. Prevent iOS and IE text size adjust after device orientation change,\n//    without disabling user zoom.\n//\n\nhtml {\n  font-family: sans-serif; // 1\n  -ms-text-size-adjust: 100%; // 2\n  -webkit-text-size-adjust: 100%; // 2\n}\n\n//\n// Remove default margin.\n//\n\nbody {\n  margin: 0;\n}\n\n// HTML5 display definitions\n// ==========================================================================\n\n//\n// Correct `block` display not defined for any HTML5 element in IE 8/9.\n// Correct `block` display not defined for `details` or `summary` in IE 10/11\n// and Firefox.\n// Correct `block` display not defined for `main` in IE 11.\n//\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n//\n// 1. Correct `inline-block` display not defined in IE 8/9.\n// 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n//\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; // 1\n  vertical-align: baseline; // 2\n}\n\n//\n// Prevent modern browsers from displaying `audio` without controls.\n// Remove excess height in iOS 5 devices.\n//\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n//\n// Address `[hidden]` styling not present in IE 8/9/10.\n// Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n//\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n// Links\n// ==========================================================================\n\n//\n// Remove the gray background color from active links in IE 10.\n//\n\na {\n  background-color: transparent;\n}\n\n//\n// Improve readability of focused elements when they are also in an\n// active/hover state.\n//\n\na:active,\na:hover {\n  outline: 0;\n}\n\n// Text-level semantics\n// ==========================================================================\n\n//\n// Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n//\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n//\n// Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n//\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n//\n// Address styling not present in Safari and Chrome.\n//\n\ndfn {\n  font-style: italic;\n}\n\n//\n// Address variable `h1` font-size and margin within `section` and `article`\n// contexts in Firefox 4+, Safari, and Chrome.\n//\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n//\n// Address styling not present in IE 8/9.\n//\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n//\n// Address inconsistent and variable font size in all browsers.\n//\n\nsmall {\n  font-size: 80%;\n}\n\n//\n// Prevent `sub` and `sup` affecting `line-height` in all browsers.\n//\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n// Embedded content\n// ==========================================================================\n\n//\n// Remove border when inside `a` element in IE 8/9/10.\n//\n\nimg {\n  border: 0;\n}\n\n//\n// Correct overflow not hidden in IE 9/10/11.\n//\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n// Grouping content\n// ==========================================================================\n\n//\n// Address margin not present in IE 8/9 and Safari.\n//\n\nfigure {\n  margin: 1em 40px;\n}\n\n//\n// Address differences between Firefox and other browsers.\n//\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n//\n// Contain overflow in all browsers.\n//\n\npre {\n  overflow: auto;\n}\n\n//\n// Address odd `em`-unit font size rendering in all browsers.\n//\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n// Forms\n// ==========================================================================\n\n//\n// Known limitation: by default, Chrome and Safari on OS X allow very limited\n// styling of `select`, unless a `border` property is set.\n//\n\n//\n// 1. Correct color not being inherited.\n//    Known issue: affects color of disabled elements.\n// 2. Correct font properties not being inherited.\n// 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n//\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; // 1\n  font: inherit; // 2\n  margin: 0; // 3\n}\n\n//\n// Address `overflow` set to `hidden` in IE 8/9/10/11.\n//\n\nbutton {\n  overflow: visible;\n}\n\n//\n// Address inconsistent `text-transform` inheritance for `button` and `select`.\n// All other form control elements do not inherit `text-transform` values.\n// Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n// Correct `select` style inheritance in Firefox.\n//\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n//\n// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n//    and `video` controls.\n// 2. Correct inability to style clickable `input` types in iOS.\n// 3. Improve usability and consistency of cursor style between image-type\n//    `input` and others.\n//\n\nbutton,\nhtml input[type=\"button\"], // 1\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n  cursor: pointer; // 3\n}\n\n//\n// Re-set default cursor for disabled elements.\n//\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n//\n// Remove inner padding and border in Firefox 4+.\n//\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n//\n// Address Firefox 4+ setting `line-height` on `input` using `!important` in\n// the UA stylesheet.\n//\n\ninput {\n  line-height: normal;\n}\n\n//\n// It's recommended that you don't attempt to style these elements.\n// Firefox's implementation doesn't respect box-sizing, padding, or width.\n//\n// 1. Address box sizing set to `content-box` in IE 8/9/10.\n// 2. Remove excess padding in IE 8/9/10.\n//\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; // 1\n  padding: 0; // 2\n}\n\n//\n// Fix the cursor style for Chrome's increment/decrement buttons. For certain\n// `font-size` values of the `input`, it causes the cursor style of the\n// decrement button to change from `default` to `text`.\n//\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n//\n// 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n// 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n//\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; // 1\n  box-sizing: content-box; //2\n}\n\n//\n// Remove inner padding and search cancel button in Safari and Chrome on OS X.\n// Safari (but not Chrome) clips the cancel button when the search input has\n// padding (and `textfield` appearance).\n//\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n//\n// Define consistent border, margin, and padding.\n//\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n//\n// 1. Correct `color` not being inherited in IE 8/9/10/11.\n// 2. Remove padding so people aren't caught out if they zero out fieldsets.\n//\n\nlegend {\n  border: 0; // 1\n  padding: 0; // 2\n}\n\n//\n// Remove default vertical scrollbar in IE 8/9/10/11.\n//\n\ntextarea {\n  overflow: auto;\n}\n\n//\n// Don't inherit the `font-weight` (applied by a rule above).\n// NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n//\n\noptgroup {\n  font-weight: bold;\n}\n\n// Tables\n// ==========================================================================\n\n//\n// Remove most spacing between table cells.\n//\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n","/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n// ==========================================================================\n// Print styles.\n// Inlined to avoid the additional HTTP request: h5bp.com/r\n// ==========================================================================\n\n@media print {\n    *,\n    *:before,\n    *:after {\n        background: transparent !important;\n        color: #000 !important; // Black prints faster: h5bp.com/s\n        box-shadow: none !important;\n        text-shadow: none !important;\n    }\n\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n\n    // Don't show links that are fragment identifiers,\n    // or use the `javascript:` pseudo protocol\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid;\n    }\n\n    thead {\n        display: table-header-group; // h5bp.com/t\n    }\n\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    img {\n        max-width: 100% !important;\n    }\n\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n\n    // Bootstrap specific changes start\n\n    // Bootstrap components\n    .navbar {\n        display: none;\n    }\n    .btn,\n    .dropup > .btn {\n        > .caret {\n            border-top-color: #000 !important;\n        }\n    }\n    .label {\n        border: 1px solid #000;\n    }\n\n    .table {\n        border-collapse: collapse !important;\n\n        td,\n        th {\n            background-color: #fff !important;\n        }\n    }\n    .table-bordered {\n        th,\n        td {\n            border: 1px solid #ddd !important;\n        }\n    }\n\n    // Bootstrap specific changes end\n}\n","//\n// Scaffolding\n// --------------------------------------------------\n\n\n// Reset the box-sizing\n//\n// Heads up! This reset may cause conflicts with some third-party widgets.\n// For recommendations on resolving such conflicts, see\n// http://getbootstrap.com/getting-started/#third-box-sizing\n* {\n  .box-sizing(border-box);\n}\n*:before,\n*:after {\n  .box-sizing(border-box);\n}\n\n\n// Body reset\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\nbody {\n  font-family: @font-family-base;\n  font-size: @font-size-base;\n  line-height: @line-height-base;\n  color: @text-color;\n  background-color: @body-bg;\n}\n\n// Reset fonts for relevant elements\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n\n// Links\n\na {\n  color: @link-color;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: @link-hover-color;\n    text-decoration: @link-hover-decoration;\n  }\n\n  &:focus {\n    .tab-focus();\n  }\n}\n\n\n// Figures\n//\n// We reset this here because previously Normalize had no `figure` margins. This\n// ensures we don't break anyone's use of the element.\n\nfigure {\n  margin: 0;\n}\n\n\n// Images\n\nimg {\n  vertical-align: middle;\n}\n\n// Responsive images (ensure images don't scale beyond their parents)\n.img-responsive {\n  .img-responsive();\n}\n\n// Rounded corners\n.img-rounded {\n  border-radius: @border-radius-large;\n}\n\n// Image thumbnails\n//\n// Heads up! This is mixin-ed into thumbnails.less for `.thumbnail`.\n.img-thumbnail {\n  padding: @thumbnail-padding;\n  line-height: @line-height-base;\n  background-color: @thumbnail-bg;\n  border: 1px solid @thumbnail-border;\n  border-radius: @thumbnail-border-radius;\n  .transition(all .2s ease-in-out);\n\n  // Keep them at most 100% wide\n  .img-responsive(inline-block);\n}\n\n// Perfect circle\n.img-circle {\n  border-radius: 50%; // set radius in percents\n}\n\n\n// Horizontal rules\n\nhr {\n  margin-top:    @line-height-computed;\n  margin-bottom: @line-height-computed;\n  border: 0;\n  border-top: 1px solid @hr-border;\n}\n\n\n// Only display content to screen readers\n//\n// See: http://a11yproject.com/posts/how-to-hide-content\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0,0,0,0);\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n// Useful for \"Skip to main content\" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n// Credit: HTML5 Boilerplate\n\n.sr-only-focusable {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n  }\n}\n\n\n// iOS \"clickable elements\" fix for role=\"button\"\n//\n// Fixes \"clickability\" issue (and more generally, the firing of events such as focus as well)\n// for traditionally non-focusable elements with role=\"button\"\n// see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n","// Vendor Prefixes\n//\n// All vendor mixins are deprecated as of v3.2.0 due to the introduction of\n// Autoprefixer in our Gruntfile. They have been removed in v4.\n\n// - Animations\n// - Backface visibility\n// - Box shadow\n// - Box sizing\n// - Content columns\n// - Hyphens\n// - Placeholder text\n// - Transformations\n// - Transitions\n// - User Select\n\n\n// Animations\n.animation(@animation) {\n  -webkit-animation: @animation;\n       -o-animation: @animation;\n          animation: @animation;\n}\n.animation-name(@name) {\n  -webkit-animation-name: @name;\n          animation-name: @name;\n}\n.animation-duration(@duration) {\n  -webkit-animation-duration: @duration;\n          animation-duration: @duration;\n}\n.animation-timing-function(@timing-function) {\n  -webkit-animation-timing-function: @timing-function;\n          animation-timing-function: @timing-function;\n}\n.animation-delay(@delay) {\n  -webkit-animation-delay: @delay;\n          animation-delay: @delay;\n}\n.animation-iteration-count(@iteration-count) {\n  -webkit-animation-iteration-count: @iteration-count;\n          animation-iteration-count: @iteration-count;\n}\n.animation-direction(@direction) {\n  -webkit-animation-direction: @direction;\n          animation-direction: @direction;\n}\n.animation-fill-mode(@fill-mode) {\n  -webkit-animation-fill-mode: @fill-mode;\n          animation-fill-mode: @fill-mode;\n}\n\n// Backface visibility\n// Prevent browsers from flickering when using CSS 3D transforms.\n// Default value is `visible`, but can be changed to `hidden`\n\n.backface-visibility(@visibility) {\n  -webkit-backface-visibility: @visibility;\n     -moz-backface-visibility: @visibility;\n          backface-visibility: @visibility;\n}\n\n// Drop shadows\n//\n// Note: Deprecated `.box-shadow()` as of v3.1.0 since all of Bootstrap's\n// supported browsers that have box shadow capabilities now support it.\n\n.box-shadow(@shadow) {\n  -webkit-box-shadow: @shadow; // iOS <4.3 & Android <4.1\n          box-shadow: @shadow;\n}\n\n// Box sizing\n.box-sizing(@boxmodel) {\n  -webkit-box-sizing: @boxmodel;\n     -moz-box-sizing: @boxmodel;\n          box-sizing: @boxmodel;\n}\n\n// CSS3 Content Columns\n.content-columns(@column-count; @column-gap: @grid-gutter-width) {\n  -webkit-column-count: @column-count;\n     -moz-column-count: @column-count;\n          column-count: @column-count;\n  -webkit-column-gap: @column-gap;\n     -moz-column-gap: @column-gap;\n          column-gap: @column-gap;\n}\n\n// Optional hyphenation\n.hyphens(@mode: auto) {\n  word-wrap: break-word;\n  -webkit-hyphens: @mode;\n     -moz-hyphens: @mode;\n      -ms-hyphens: @mode; // IE10+\n       -o-hyphens: @mode;\n          hyphens: @mode;\n}\n\n// Placeholder text\n.placeholder(@color: @input-color-placeholder) {\n  // Firefox\n  &::-moz-placeholder {\n    color: @color;\n    opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526\n  }\n  &:-ms-input-placeholder { color: @color; } // Internet Explorer 10+\n  &::-webkit-input-placeholder  { color: @color; } // Safari and Chrome\n}\n\n// Transformations\n.scale(@ratio) {\n  -webkit-transform: scale(@ratio);\n      -ms-transform: scale(@ratio); // IE9 only\n       -o-transform: scale(@ratio);\n          transform: scale(@ratio);\n}\n.scale(@ratioX; @ratioY) {\n  -webkit-transform: scale(@ratioX, @ratioY);\n      -ms-transform: scale(@ratioX, @ratioY); // IE9 only\n       -o-transform: scale(@ratioX, @ratioY);\n          transform: scale(@ratioX, @ratioY);\n}\n.scaleX(@ratio) {\n  -webkit-transform: scaleX(@ratio);\n      -ms-transform: scaleX(@ratio); // IE9 only\n       -o-transform: scaleX(@ratio);\n          transform: scaleX(@ratio);\n}\n.scaleY(@ratio) {\n  -webkit-transform: scaleY(@ratio);\n      -ms-transform: scaleY(@ratio); // IE9 only\n       -o-transform: scaleY(@ratio);\n          transform: scaleY(@ratio);\n}\n.skew(@x; @y) {\n  -webkit-transform: skewX(@x) skewY(@y);\n      -ms-transform: skewX(@x) skewY(@y); // See https://github.com/twbs/bootstrap/issues/4885; IE9+\n       -o-transform: skewX(@x) skewY(@y);\n          transform: skewX(@x) skewY(@y);\n}\n.translate(@x; @y) {\n  -webkit-transform: translate(@x, @y);\n      -ms-transform: translate(@x, @y); // IE9 only\n       -o-transform: translate(@x, @y);\n          transform: translate(@x, @y);\n}\n.translate3d(@x; @y; @z) {\n  -webkit-transform: translate3d(@x, @y, @z);\n          transform: translate3d(@x, @y, @z);\n}\n.rotate(@degrees) {\n  -webkit-transform: rotate(@degrees);\n      -ms-transform: rotate(@degrees); // IE9 only\n       -o-transform: rotate(@degrees);\n          transform: rotate(@degrees);\n}\n.rotateX(@degrees) {\n  -webkit-transform: rotateX(@degrees);\n      -ms-transform: rotateX(@degrees); // IE9 only\n       -o-transform: rotateX(@degrees);\n          transform: rotateX(@degrees);\n}\n.rotateY(@degrees) {\n  -webkit-transform: rotateY(@degrees);\n      -ms-transform: rotateY(@degrees); // IE9 only\n       -o-transform: rotateY(@degrees);\n          transform: rotateY(@degrees);\n}\n.perspective(@perspective) {\n  -webkit-perspective: @perspective;\n     -moz-perspective: @perspective;\n          perspective: @perspective;\n}\n.perspective-origin(@perspective) {\n  -webkit-perspective-origin: @perspective;\n     -moz-perspective-origin: @perspective;\n          perspective-origin: @perspective;\n}\n.transform-origin(@origin) {\n  -webkit-transform-origin: @origin;\n     -moz-transform-origin: @origin;\n      -ms-transform-origin: @origin; // IE9 only\n          transform-origin: @origin;\n}\n\n\n// Transitions\n\n.transition(@transition) {\n  -webkit-transition: @transition;\n       -o-transition: @transition;\n          transition: @transition;\n}\n.transition-property(@transition-property) {\n  -webkit-transition-property: @transition-property;\n          transition-property: @transition-property;\n}\n.transition-delay(@transition-delay) {\n  -webkit-transition-delay: @transition-delay;\n          transition-delay: @transition-delay;\n}\n.transition-duration(@transition-duration) {\n  -webkit-transition-duration: @transition-duration;\n          transition-duration: @transition-duration;\n}\n.transition-timing-function(@timing-function) {\n  -webkit-transition-timing-function: @timing-function;\n          transition-timing-function: @timing-function;\n}\n.transition-transform(@transition) {\n  -webkit-transition: -webkit-transform @transition;\n     -moz-transition: -moz-transform @transition;\n       -o-transition: -o-transform @transition;\n          transition: transform @transition;\n}\n\n\n// User select\n// For selecting text on the page\n\n.user-select(@select) {\n  -webkit-user-select: @select;\n     -moz-user-select: @select;\n      -ms-user-select: @select; // IE10+\n          user-select: @select;\n}\n","// WebKit-style focus\n\n.tab-focus() {\n  // WebKit-specific. Other browsers will keep their default outline style.\n  // (Initially tried to also force default via `outline: initial`,\n  // but that seems to erroneously remove the outline in Firefox altogether.)\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n.img-responsive(@display: block) {\n  display: @display;\n  max-width: 100%; // Part 1: Set a maximum relative to the parent\n  height: auto; // Part 2: Scale the height according to the width, otherwise you get stretching\n}\n\n\n// Retina image\n//\n// Short retina mixin for setting background-image and -size. Note that the\n// spelling of `min--moz-device-pixel-ratio` is intentional.\n.img-retina(@file-1x; @file-2x; @width-1x; @height-1x) {\n  background-image: url(\"@{file-1x}\");\n\n  @media\n  only screen and (-webkit-min-device-pixel-ratio: 2),\n  only screen and (   min--moz-device-pixel-ratio: 2),\n  only screen and (     -o-min-device-pixel-ratio: 2/1),\n  only screen and (        min-device-pixel-ratio: 2),\n  only screen and (                min-resolution: 192dpi),\n  only screen and (                min-resolution: 2dppx) {\n    background-image: url(\"@{file-2x}\");\n    background-size: @width-1x @height-1x;\n  }\n}\n","//\n// Typography\n// --------------------------------------------------\n\n\n// Headings\n// -------------------------\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: @headings-font-family;\n  font-weight: @headings-font-weight;\n  line-height: @headings-line-height;\n  color: @headings-color;\n\n  small,\n  .small {\n    font-weight: normal;\n    line-height: 1;\n    color: @headings-small-color;\n  }\n}\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: @line-height-computed;\n  margin-bottom: (@line-height-computed / 2);\n\n  small,\n  .small {\n    font-size: 65%;\n  }\n}\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: (@line-height-computed / 2);\n  margin-bottom: (@line-height-computed / 2);\n\n  small,\n  .small {\n    font-size: 75%;\n  }\n}\n\nh1, .h1 { font-size: @font-size-h1; }\nh2, .h2 { font-size: @font-size-h2; }\nh3, .h3 { font-size: @font-size-h3; }\nh4, .h4 { font-size: @font-size-h4; }\nh5, .h5 { font-size: @font-size-h5; }\nh6, .h6 { font-size: @font-size-h6; }\n\n\n// Body text\n// -------------------------\n\np {\n  margin: 0 0 (@line-height-computed / 2);\n}\n\n.lead {\n  margin-bottom: @line-height-computed;\n  font-size: floor((@font-size-base * 1.15));\n  font-weight: 300;\n  line-height: 1.4;\n\n  @media (min-width: @screen-sm-min) {\n    font-size: (@font-size-base * 1.5);\n  }\n}\n\n\n// Emphasis & misc\n// -------------------------\n\n// Ex: (12px small font / 14px base font) * 100% = about 85%\nsmall,\n.small {\n  font-size: floor((100% * @font-size-small / @font-size-base));\n}\n\nmark,\n.mark {\n  background-color: @state-warning-bg;\n  padding: .2em;\n}\n\n// Alignment\n.text-left           { text-align: left; }\n.text-right          { text-align: right; }\n.text-center         { text-align: center; }\n.text-justify        { text-align: justify; }\n.text-nowrap         { white-space: nowrap; }\n\n// Transformation\n.text-lowercase      { text-transform: lowercase; }\n.text-uppercase      { text-transform: uppercase; }\n.text-capitalize     { text-transform: capitalize; }\n\n// Contextual colors\n.text-muted {\n  color: @text-muted;\n}\n.text-primary {\n  .text-emphasis-variant(@brand-primary);\n}\n.text-success {\n  .text-emphasis-variant(@state-success-text);\n}\n.text-info {\n  .text-emphasis-variant(@state-info-text);\n}\n.text-warning {\n  .text-emphasis-variant(@state-warning-text);\n}\n.text-danger {\n  .text-emphasis-variant(@state-danger-text);\n}\n\n// Contextual backgrounds\n// For now we'll leave these alongside the text classes until v4 when we can\n// safely shift things around (per SemVer rules).\n.bg-primary {\n  // Given the contrast here, this is the only class to have its color inverted\n  // automatically.\n  color: #fff;\n  .bg-variant(@brand-primary);\n}\n.bg-success {\n  .bg-variant(@state-success-bg);\n}\n.bg-info {\n  .bg-variant(@state-info-bg);\n}\n.bg-warning {\n  .bg-variant(@state-warning-bg);\n}\n.bg-danger {\n  .bg-variant(@state-danger-bg);\n}\n\n\n// Page header\n// -------------------------\n\n.page-header {\n  padding-bottom: ((@line-height-computed / 2) - 1);\n  margin: (@line-height-computed * 2) 0 @line-height-computed;\n  border-bottom: 1px solid @page-header-border-color;\n}\n\n\n// Lists\n// -------------------------\n\n// Unordered and Ordered lists\nul,\nol {\n  margin-top: 0;\n  margin-bottom: (@line-height-computed / 2);\n  ul,\n  ol {\n    margin-bottom: 0;\n  }\n}\n\n// List options\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  .list-unstyled();\n  margin-left: -5px;\n\n  > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n\n// Description Lists\ndl {\n  margin-top: 0; // Remove browser default\n  margin-bottom: @line-height-computed;\n}\ndt,\ndd {\n  line-height: @line-height-base;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0; // Undo browser default\n}\n\n// Horizontal description lists\n//\n// Defaults to being stacked without any of the below styles applied, until the\n// grid breakpoint is reached (default of ~768px).\n\n.dl-horizontal {\n  dd {\n    &:extend(.clearfix all); // Clear the floated `dt` if an empty `dd` is present\n  }\n\n  @media (min-width: @dl-horizontal-breakpoint) {\n    dt {\n      float: left;\n      width: (@dl-horizontal-offset - 20);\n      clear: left;\n      text-align: right;\n      .text-overflow();\n    }\n    dd {\n      margin-left: @dl-horizontal-offset;\n    }\n  }\n}\n\n\n// Misc\n// -------------------------\n\n// Abbreviations and acronyms\nabbr[title],\n// Add data-* attribute to help out our tooltip plugin, per https://github.com/twbs/bootstrap/issues/5257\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted @abbr-border-color;\n}\n.initialism {\n  font-size: 90%;\n  .text-uppercase();\n}\n\n// Blockquotes\nblockquote {\n  padding: (@line-height-computed / 2) @line-height-computed;\n  margin: 0 0 @line-height-computed;\n  font-size: @blockquote-font-size;\n  border-left: 5px solid @blockquote-border-color;\n\n  p,\n  ul,\n  ol {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  // Note: Deprecated small and .small as of v3.1.0\n  // Context: https://github.com/twbs/bootstrap/issues/11660\n  footer,\n  small,\n  .small {\n    display: block;\n    font-size: 80%; // back to default font-size\n    line-height: @line-height-base;\n    color: @blockquote-small-color;\n\n    &:before {\n      content: '\\2014 \\00A0'; // em dash, nbsp\n    }\n  }\n}\n\n// Opposite alignment of blockquote\n//\n// Heads up: `blockquote.pull-right` has been deprecated as of v3.1.0.\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid @blockquote-border-color;\n  border-left: 0;\n  text-align: right;\n\n  // Account for citation\n  footer,\n  small,\n  .small {\n    &:before { content: ''; }\n    &:after {\n      content: '\\00A0 \\2014'; // nbsp, em dash\n    }\n  }\n}\n\n// Addresses\naddress {\n  margin-bottom: @line-height-computed;\n  font-style: normal;\n  line-height: @line-height-base;\n}\n","// Typography\n\n.text-emphasis-variant(@color) {\n  color: @color;\n  a&:hover,\n  a&:focus {\n    color: darken(@color, 10%);\n  }\n}\n","// Contextual backgrounds\n\n.bg-variant(@color) {\n  background-color: @color;\n  a&:hover,\n  a&:focus {\n    background-color: darken(@color, 10%);\n  }\n}\n","// Text overflow\n// Requires inline-block or block for proper styling\n\n.text-overflow() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","//\n// Code (inline and block)\n// --------------------------------------------------\n\n\n// Inline and block code styles\ncode,\nkbd,\npre,\nsamp {\n  font-family: @font-family-monospace;\n}\n\n// Inline code\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: @code-color;\n  background-color: @code-bg;\n  border-radius: @border-radius-base;\n}\n\n// User input typically entered via keyboard\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: @kbd-color;\n  background-color: @kbd-bg;\n  border-radius: @border-radius-small;\n  box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);\n\n  kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none;\n  }\n}\n\n// Blocks of code\npre {\n  display: block;\n  padding: ((@line-height-computed - 1) / 2);\n  margin: 0 0 (@line-height-computed / 2);\n  font-size: (@font-size-base - 1); // 14px to 13px\n  line-height: @line-height-base;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: @pre-color;\n  background-color: @pre-bg;\n  border: 1px solid @pre-border-color;\n  border-radius: @border-radius-base;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0;\n  }\n}\n\n// Enable scrollable blocks of code\n.pre-scrollable {\n  max-height: @pre-scrollable-max-height;\n  overflow-y: scroll;\n}\n","//\n// Grid system\n// --------------------------------------------------\n\n\n// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n.container {\n  .container-fixed();\n\n  @media (min-width: @screen-sm-min) {\n    width: @container-sm;\n  }\n  @media (min-width: @screen-md-min) {\n    width: @container-md;\n  }\n  @media (min-width: @screen-lg-min) {\n    width: @container-lg;\n  }\n}\n\n\n// Fluid container\n//\n// Utilizes the mixin meant for fixed width containers, but without any defined\n// width for fluid, full width layouts.\n\n.container-fluid {\n  .container-fixed();\n}\n\n\n// Row\n//\n// Rows contain and clear the floats of your columns.\n\n.row {\n  .make-row();\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n.make-grid-columns();\n\n\n// Extra small grid\n//\n// Columns, offsets, pushes, and pulls for extra small devices like\n// smartphones.\n\n.make-grid(xs);\n\n\n// Small grid\n//\n// Columns, offsets, pushes, and pulls for the small device range, from phones\n// to tablets.\n\n@media (min-width: @screen-sm-min) {\n  .make-grid(sm);\n}\n\n\n// Medium grid\n//\n// Columns, offsets, pushes, and pulls for the desktop device range.\n\n@media (min-width: @screen-md-min) {\n  .make-grid(md);\n}\n\n\n// Large grid\n//\n// Columns, offsets, pushes, and pulls for the large desktop device range.\n\n@media (min-width: @screen-lg-min) {\n  .make-grid(lg);\n}\n","// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n// Centered container element\n.container-fixed(@gutter: @grid-gutter-width) {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left:  floor((@gutter / 2));\n  padding-right: ceil((@gutter / 2));\n  &:extend(.clearfix all);\n}\n\n// Creates a wrapper for a series of columns\n.make-row(@gutter: @grid-gutter-width) {\n  margin-left:  ceil((@gutter / -2));\n  margin-right: floor((@gutter / -2));\n  &:extend(.clearfix all);\n}\n\n// Generate the extra small columns\n.make-xs-column(@columns; @gutter: @grid-gutter-width) {\n  position: relative;\n  float: left;\n  width: percentage((@columns / @grid-columns));\n  min-height: 1px;\n  padding-left:  (@gutter / 2);\n  padding-right: (@gutter / 2);\n}\n.make-xs-column-offset(@columns) {\n  margin-left: percentage((@columns / @grid-columns));\n}\n.make-xs-column-push(@columns) {\n  left: percentage((@columns / @grid-columns));\n}\n.make-xs-column-pull(@columns) {\n  right: percentage((@columns / @grid-columns));\n}\n\n// Generate the small columns\n.make-sm-column(@columns; @gutter: @grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  (@gutter / 2);\n  padding-right: (@gutter / 2);\n\n  @media (min-width: @screen-sm-min) {\n    float: left;\n    width: percentage((@columns / @grid-columns));\n  }\n}\n.make-sm-column-offset(@columns) {\n  @media (min-width: @screen-sm-min) {\n    margin-left: percentage((@columns / @grid-columns));\n  }\n}\n.make-sm-column-push(@columns) {\n  @media (min-width: @screen-sm-min) {\n    left: percentage((@columns / @grid-columns));\n  }\n}\n.make-sm-column-pull(@columns) {\n  @media (min-width: @screen-sm-min) {\n    right: percentage((@columns / @grid-columns));\n  }\n}\n\n// Generate the medium columns\n.make-md-column(@columns; @gutter: @grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  (@gutter / 2);\n  padding-right: (@gutter / 2);\n\n  @media (min-width: @screen-md-min) {\n    float: left;\n    width: percentage((@columns / @grid-columns));\n  }\n}\n.make-md-column-offset(@columns) {\n  @media (min-width: @screen-md-min) {\n    margin-left: percentage((@columns / @grid-columns));\n  }\n}\n.make-md-column-push(@columns) {\n  @media (min-width: @screen-md-min) {\n    left: percentage((@columns / @grid-columns));\n  }\n}\n.make-md-column-pull(@columns) {\n  @media (min-width: @screen-md-min) {\n    right: percentage((@columns / @grid-columns));\n  }\n}\n\n// Generate the large columns\n.make-lg-column(@columns; @gutter: @grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  (@gutter / 2);\n  padding-right: (@gutter / 2);\n\n  @media (min-width: @screen-lg-min) {\n    float: left;\n    width: percentage((@columns / @grid-columns));\n  }\n}\n.make-lg-column-offset(@columns) {\n  @media (min-width: @screen-lg-min) {\n    margin-left: percentage((@columns / @grid-columns));\n  }\n}\n.make-lg-column-push(@columns) {\n  @media (min-width: @screen-lg-min) {\n    left: percentage((@columns / @grid-columns));\n  }\n}\n.make-lg-column-pull(@columns) {\n  @media (min-width: @screen-lg-min) {\n    right: percentage((@columns / @grid-columns));\n  }\n}\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `@grid-columns`.\n\n.make-grid-columns() {\n  // Common styles for all sizes of grid columns, widths 1-12\n  .col(@index) { // initial\n    @item: ~\".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}\";\n    .col((@index + 1), @item);\n  }\n  .col(@index, @list) when (@index =< @grid-columns) { // general; \"=<\" isn't a typo\n    @item: ~\".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}\";\n    .col((@index + 1), ~\"@{list}, @{item}\");\n  }\n  .col(@index, @list) when (@index > @grid-columns) { // terminal\n    @{list} {\n      position: relative;\n      // Prevent columns from collapsing when empty\n      min-height: 1px;\n      // Inner gutter via padding\n      padding-left:  ceil((@grid-gutter-width / 2));\n      padding-right: floor((@grid-gutter-width / 2));\n    }\n  }\n  .col(1); // kickstart it\n}\n\n.float-grid-columns(@class) {\n  .col(@index) { // initial\n    @item: ~\".col-@{class}-@{index}\";\n    .col((@index + 1), @item);\n  }\n  .col(@index, @list) when (@index =< @grid-columns) { // general\n    @item: ~\".col-@{class}-@{index}\";\n    .col((@index + 1), ~\"@{list}, @{item}\");\n  }\n  .col(@index, @list) when (@index > @grid-columns) { // terminal\n    @{list} {\n      float: left;\n    }\n  }\n  .col(1); // kickstart it\n}\n\n.calc-grid-column(@index, @class, @type) when (@type = width) and (@index > 0) {\n  .col-@{class}-@{index} {\n    width: percentage((@index / @grid-columns));\n  }\n}\n.calc-grid-column(@index, @class, @type) when (@type = push) and (@index > 0) {\n  .col-@{class}-push-@{index} {\n    left: percentage((@index / @grid-columns));\n  }\n}\n.calc-grid-column(@index, @class, @type) when (@type = push) and (@index = 0) {\n  .col-@{class}-push-0 {\n    left: auto;\n  }\n}\n.calc-grid-column(@index, @class, @type) when (@type = pull) and (@index > 0) {\n  .col-@{class}-pull-@{index} {\n    right: percentage((@index / @grid-columns));\n  }\n}\n.calc-grid-column(@index, @class, @type) when (@type = pull) and (@index = 0) {\n  .col-@{class}-pull-0 {\n    right: auto;\n  }\n}\n.calc-grid-column(@index, @class, @type) when (@type = offset) {\n  .col-@{class}-offset-@{index} {\n    margin-left: percentage((@index / @grid-columns));\n  }\n}\n\n// Basic looping in LESS\n.loop-grid-columns(@index, @class, @type) when (@index >= 0) {\n  .calc-grid-column(@index, @class, @type);\n  // next iteration\n  .loop-grid-columns((@index - 1), @class, @type);\n}\n\n// Create grid for specific class\n.make-grid(@class) {\n  .float-grid-columns(@class);\n  .loop-grid-columns(@grid-columns, @class, width);\n  .loop-grid-columns(@grid-columns, @class, pull);\n  .loop-grid-columns(@grid-columns, @class, push);\n  .loop-grid-columns(@grid-columns, @class, offset);\n}\n","//\n// Tables\n// --------------------------------------------------\n\n\ntable {\n  background-color: @table-bg;\n}\ncaption {\n  padding-top: @table-cell-padding;\n  padding-bottom: @table-cell-padding;\n  color: @text-muted;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n\n\n// Baseline styles\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: @line-height-computed;\n  // Cells\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        padding: @table-cell-padding;\n        line-height: @line-height-base;\n        vertical-align: top;\n        border-top: 1px solid @table-border-color;\n      }\n    }\n  }\n  // Bottom align for column headings\n  > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid @table-border-color;\n  }\n  // Remove top border from thead by default\n  > caption + thead,\n  > colgroup + thead,\n  > thead:first-child {\n    > tr:first-child {\n      > th,\n      > td {\n        border-top: 0;\n      }\n    }\n  }\n  // Account for multiple tbody instances\n  > tbody + tbody {\n    border-top: 2px solid @table-border-color;\n  }\n\n  // Nesting\n  .table {\n    background-color: @body-bg;\n  }\n}\n\n\n// Condensed table w/ half padding\n\n.table-condensed {\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        padding: @table-condensed-cell-padding;\n      }\n    }\n  }\n}\n\n\n// Bordered version\n//\n// Add borders all around the table and between all the columns.\n\n.table-bordered {\n  border: 1px solid @table-border-color;\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        border: 1px solid @table-border-color;\n      }\n    }\n  }\n  > thead > tr {\n    > th,\n    > td {\n      border-bottom-width: 2px;\n    }\n  }\n}\n\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  > tbody > tr:nth-of-type(odd) {\n    background-color: @table-bg-accent;\n  }\n}\n\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover {\n    background-color: @table-bg-hover;\n  }\n}\n\n\n// Table cell sizing\n//\n// Reset default table behavior\n\ntable col[class*=\"col-\"] {\n  position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)\n  float: none;\n  display: table-column;\n}\ntable {\n  td,\n  th {\n    &[class*=\"col-\"] {\n      position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)\n      float: none;\n      display: table-cell;\n    }\n  }\n}\n\n\n// Table backgrounds\n//\n// Exact selectors below required to override `.table-striped` and prevent\n// inheritance to nested tables.\n\n// Generate the contextual variants\n.table-row-variant(active; @table-bg-active);\n.table-row-variant(success; @state-success-bg);\n.table-row-variant(info; @state-info-bg);\n.table-row-variant(warning; @state-warning-bg);\n.table-row-variant(danger; @state-danger-bg);\n\n\n// Responsive tables\n//\n// Wrap your tables in `.table-responsive` and we'll make them mobile friendly\n// by enabling horizontal scrolling. Only applies <768px. Everything above that\n// will display normally.\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; // Workaround for IE9 bug (see https://github.com/twbs/bootstrap/issues/14837)\n\n  @media screen and (max-width: @screen-xs-max) {\n    width: 100%;\n    margin-bottom: (@line-height-computed * 0.75);\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid @table-border-color;\n\n    // Tighten up spacing\n    > .table {\n      margin-bottom: 0;\n\n      // Ensure the content doesn't wrap\n      > thead,\n      > tbody,\n      > tfoot {\n        > tr {\n          > th,\n          > td {\n            white-space: nowrap;\n          }\n        }\n      }\n    }\n\n    // Special overrides for the bordered tables\n    > .table-bordered {\n      border: 0;\n\n      // Nuke the appropriate borders so that the parent can handle them\n      > thead,\n      > tbody,\n      > tfoot {\n        > tr {\n          > th:first-child,\n          > td:first-child {\n            border-left: 0;\n          }\n          > th:last-child,\n          > td:last-child {\n            border-right: 0;\n          }\n        }\n      }\n\n      // Only nuke the last row's bottom-border in `tbody` and `tfoot` since\n      // chances are there will be only one `tr` in a `thead` and that would\n      // remove the border altogether.\n      > tbody,\n      > tfoot {\n        > tr:last-child {\n          > th,\n          > td {\n            border-bottom: 0;\n          }\n        }\n      }\n\n    }\n  }\n}\n","// Tables\n\n.table-row-variant(@state; @background) {\n  // Exact selectors below required to override `.table-striped` and prevent\n  // inheritance to nested tables.\n  .table > thead > tr,\n  .table > tbody > tr,\n  .table > tfoot > tr {\n    > td.@{state},\n    > th.@{state},\n    &.@{state} > td,\n    &.@{state} > th {\n      background-color: @background;\n    }\n  }\n\n  // Hover states for `.table-hover`\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\n  .table-hover > tbody > tr {\n    > td.@{state}:hover,\n    > th.@{state}:hover,\n    &.@{state}:hover > td,\n    &:hover > .@{state},\n    &.@{state}:hover > th {\n      background-color: darken(@background, 5%);\n    }\n  }\n}\n","//\n// Forms\n// --------------------------------------------------\n\n\n// Normalize non-controls\n//\n// Restyle and baseline non-control form elements.\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  // Chrome and Firefox set a `min-width: min-content;` on fieldsets,\n  // so we reset that to ensure it behaves more like a standard block element.\n  // See https://github.com/twbs/bootstrap/issues/12359.\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: @line-height-computed;\n  font-size: (@font-size-base * 1.5);\n  line-height: inherit;\n  color: @legend-color;\n  border: 0;\n  border-bottom: 1px solid @legend-border-color;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%; // Force IE8 to wrap long content (see https://github.com/twbs/bootstrap/issues/13141)\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n\n// Normalize form controls\n//\n// While most of our form styles require extra classes, some basic normalization\n// is required to ensure optimum display with or without those classes to better\n// address browser inconsistencies.\n\n// Override content-box in Normalize (* isn't specific enough)\ninput[type=\"search\"] {\n  .box-sizing(border-box);\n}\n\n// Position radios and checkboxes better\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9; // IE8-9\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\n// Make range inputs behave like textual form controls\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\n// Make multiple select elements height not fixed\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\n// Focus for file, radio, and checkbox\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  .tab-focus();\n}\n\n// Adjust output element\noutput {\n  display: block;\n  padding-top: (@padding-base-vertical + 1);\n  font-size: @font-size-base;\n  line-height: @line-height-base;\n  color: @input-color;\n}\n\n\n// Common form controls\n//\n// Shared size and type resets for form controls. Apply `.form-control` to any\n// of the following form controls:\n//\n// select\n// textarea\n// input[type=\"text\"]\n// input[type=\"password\"]\n// input[type=\"datetime\"]\n// input[type=\"datetime-local\"]\n// input[type=\"date\"]\n// input[type=\"month\"]\n// input[type=\"time\"]\n// input[type=\"week\"]\n// input[type=\"number\"]\n// input[type=\"email\"]\n// input[type=\"url\"]\n// input[type=\"search\"]\n// input[type=\"tel\"]\n// input[type=\"color\"]\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: @input-height-base; // Make inputs at least the height of their button counterpart (base line-height + padding + border)\n  padding: @padding-base-vertical @padding-base-horizontal;\n  font-size: @font-size-base;\n  line-height: @line-height-base;\n  color: @input-color;\n  background-color: @input-bg;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid @input-border;\n  border-radius: @input-border-radius; // Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS.\n  .box-shadow(inset 0 1px 1px rgba(0,0,0,.075));\n  .transition(~\"border-color ease-in-out .15s, box-shadow ease-in-out .15s\");\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  .form-control-focus();\n\n  // Placeholder\n  .placeholder();\n\n  // Unstyle the caret on `<select>`s in IE10+.\n  &::-ms-expand {\n    border: 0;\n    background-color: transparent;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &[disabled],\n  &[readonly],\n  fieldset[disabled] & {\n    background-color: @input-bg-disabled;\n    opacity: 1; // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655\n  }\n\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: @cursor-disabled;\n  }\n\n  // Reset height for `textarea`s\n  textarea& {\n    height: auto;\n  }\n}\n\n\n// Search inputs in iOS\n//\n// This overrides the extra rounded corners on search inputs in iOS so that our\n// `.form-control` class can properly style them. Note that this cannot simply\n// be added to `.form-control` as it's not specific enough. For details, see\n// https://github.com/twbs/bootstrap/issues/11586.\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n\n// Special styles for iOS temporal inputs\n//\n// In Mobile Safari, setting `display: block` on temporal inputs causes the\n// text within the input to become vertically misaligned. As a workaround, we\n// set a pixel line-height that matches the given height of the input, but only\n// for Safari. See https://bugs.webkit.org/show_bug.cgi?id=139848\n//\n// Note that as of 9.3, iOS doesn't support `week`.\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    &.form-control {\n      line-height: @input-height-base;\n    }\n\n    &.input-sm,\n    .input-group-sm & {\n      line-height: @input-height-small;\n    }\n\n    &.input-lg,\n    .input-group-lg & {\n      line-height: @input-height-large;\n    }\n  }\n}\n\n\n// Form groups\n//\n// Designed to help with the organization and spacing of vertical forms. For\n// horizontal forms, use the predefined grid classes.\n\n.form-group {\n  margin-bottom: @form-group-margin-bottom;\n}\n\n\n// Checkboxes and radios\n//\n// Indent the labels to position radios/checkboxes as hanging controls.\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n  label {\n    min-height: @line-height-computed; // Ensure the input doesn't jump when there is no text\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer;\n  }\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; // Move up sibling radios or checkboxes for tighter spacing\n}\n\n// Radios and checkboxes on same line\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; // space out consecutive inline controls\n}\n\n// Apply same disabled cursor tweak as for inputs\n// Some special care is needed because <label>s don't inherit their parent's `cursor`.\n//\n// Note: Neither radios nor checkboxes can be readonly.\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  &[disabled],\n  &.disabled,\n  fieldset[disabled] & {\n    cursor: @cursor-disabled;\n  }\n}\n// These classes are used directly on <label>s\n.radio-inline,\n.checkbox-inline {\n  &.disabled,\n  fieldset[disabled] & {\n    cursor: @cursor-disabled;\n  }\n}\n// These classes are used on elements with <label> descendants\n.radio,\n.checkbox {\n  &.disabled,\n  fieldset[disabled] & {\n    label {\n      cursor: @cursor-disabled;\n    }\n  }\n}\n\n\n// Static form control text\n//\n// Apply class to a `p` element to make any string of text align with labels in\n// a horizontal form layout.\n\n.form-control-static {\n  // Size it appropriately next to real form controls\n  padding-top: (@padding-base-vertical + 1);\n  padding-bottom: (@padding-base-vertical + 1);\n  // Remove default margin from `p`\n  margin-bottom: 0;\n  min-height: (@line-height-computed + @font-size-base);\n\n  &.input-lg,\n  &.input-sm {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// The `.form-group-* form-control` variations are sadly duplicated to avoid the\n// issue documented in https://github.com/twbs/bootstrap/issues/15074.\n\n.input-sm {\n  .input-size(@input-height-small; @padding-small-vertical; @padding-small-horizontal; @font-size-small; @line-height-small; @input-border-radius-small);\n}\n.form-group-sm {\n  .form-control {\n    height: @input-height-small;\n    padding: @padding-small-vertical @padding-small-horizontal;\n    font-size: @font-size-small;\n    line-height: @line-height-small;\n    border-radius: @input-border-radius-small;\n  }\n  select.form-control {\n    height: @input-height-small;\n    line-height: @input-height-small;\n  }\n  textarea.form-control,\n  select[multiple].form-control {\n    height: auto;\n  }\n  .form-control-static {\n    height: @input-height-small;\n    min-height: (@line-height-computed + @font-size-small);\n    padding: (@padding-small-vertical + 1) @padding-small-horizontal;\n    font-size: @font-size-small;\n    line-height: @line-height-small;\n  }\n}\n\n.input-lg {\n  .input-size(@input-height-large; @padding-large-vertical; @padding-large-horizontal; @font-size-large; @line-height-large; @input-border-radius-large);\n}\n.form-group-lg {\n  .form-control {\n    height: @input-height-large;\n    padding: @padding-large-vertical @padding-large-horizontal;\n    font-size: @font-size-large;\n    line-height: @line-height-large;\n    border-radius: @input-border-radius-large;\n  }\n  select.form-control {\n    height: @input-height-large;\n    line-height: @input-height-large;\n  }\n  textarea.form-control,\n  select[multiple].form-control {\n    height: auto;\n  }\n  .form-control-static {\n    height: @input-height-large;\n    min-height: (@line-height-computed + @font-size-large);\n    padding: (@padding-large-vertical + 1) @padding-large-horizontal;\n    font-size: @font-size-large;\n    line-height: @line-height-large;\n  }\n}\n\n\n// Form control feedback states\n//\n// Apply contextual and semantic states to individual form controls.\n\n.has-feedback {\n  // Enable absolute positioning\n  position: relative;\n\n  // Ensure icons don't overlap text\n  .form-control {\n    padding-right: (@input-height-base * 1.25);\n  }\n}\n// Feedback icon (requires .glyphicon classes)\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2; // Ensure icon is above input groups\n  display: block;\n  width: @input-height-base;\n  height: @input-height-base;\n  line-height: @input-height-base;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: @input-height-large;\n  height: @input-height-large;\n  line-height: @input-height-large;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: @input-height-small;\n  height: @input-height-small;\n  line-height: @input-height-small;\n}\n\n// Feedback states\n.has-success {\n  .form-control-validation(@state-success-text; @state-success-text; @state-success-bg);\n}\n.has-warning {\n  .form-control-validation(@state-warning-text; @state-warning-text; @state-warning-bg);\n}\n.has-error {\n  .form-control-validation(@state-danger-text; @state-danger-text; @state-danger-bg);\n}\n\n// Reposition feedback icon if input has visible label above\n.has-feedback label {\n\n  & ~ .form-control-feedback {\n    top: (@line-height-computed + 5); // Height of the `label` and its margin\n  }\n  &.sr-only ~ .form-control-feedback {\n    top: 0;\n  }\n}\n\n\n// Help text\n//\n// Apply to any element you wish to create light text for placement immediately\n// below a form control. Use for general help, formatting, or instructional text.\n\n.help-block {\n  display: block; // account for any element using help-block\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: lighten(@text-color, 25%); // lighten the text some for contrast\n}\n\n\n// Inline forms\n//\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\n// forms begin stacked on extra small (mobile) devices and then go inline when\n// viewports reach <768px.\n//\n// Requires wrapping inputs and labels with `.form-group` for proper display of\n// default HTML form controls and our custom form controls (e.g., input groups).\n//\n// Heads up! This is mixin-ed into `.navbar-form` in navbars.less.\n\n.form-inline {\n\n  // Kick in the inline\n  @media (min-width: @screen-sm-min) {\n    // Inline-block all the things for \"inline\"\n    .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle;\n    }\n\n    // In navbar-form, allow folks to *not* use `.form-group`\n    .form-control {\n      display: inline-block;\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\n      vertical-align: middle;\n    }\n\n    // Make static controls behave like regular ones\n    .form-control-static {\n      display: inline-block;\n    }\n\n    .input-group {\n      display: inline-table;\n      vertical-align: middle;\n\n      .input-group-addon,\n      .input-group-btn,\n      .form-control {\n        width: auto;\n      }\n    }\n\n    // Input groups need that 100% width though\n    .input-group > .form-control {\n      width: 100%;\n    }\n\n    .control-label {\n      margin-bottom: 0;\n      vertical-align: middle;\n    }\n\n    // Remove default margin on radios/checkboxes that were used for stacking, and\n    // then undo the floating of radios and checkboxes to match.\n    .radio,\n    .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle;\n\n      label {\n        padding-left: 0;\n      }\n    }\n    .radio input[type=\"radio\"],\n    .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0;\n    }\n\n    // Re-override the feedback icon.\n    .has-feedback .form-control-feedback {\n      top: 0;\n    }\n  }\n}\n\n\n// Horizontal forms\n//\n// Horizontal forms are built on grid classes and allow you to create forms with\n// labels on the left and inputs on the right.\n\n.form-horizontal {\n\n  // Consistent vertical alignment of radios and checkboxes\n  //\n  // Labels also get some reset styles, but that is scoped to a media query below.\n  .radio,\n  .checkbox,\n  .radio-inline,\n  .checkbox-inline {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: (@padding-base-vertical + 1); // Default padding plus a border\n  }\n  // Account for padding we're adding to ensure the alignment and of help text\n  // and other content below items\n  .radio,\n  .checkbox {\n    min-height: (@line-height-computed + (@padding-base-vertical + 1));\n  }\n\n  // Make form groups behave like rows\n  .form-group {\n    .make-row();\n  }\n\n  // Reset spacing and right align labels, but scope to media queries so that\n  // labels on narrow viewports stack the same as a default form example.\n  @media (min-width: @screen-sm-min) {\n    .control-label {\n      text-align: right;\n      margin-bottom: 0;\n      padding-top: (@padding-base-vertical + 1); // Default padding plus a border\n    }\n  }\n\n  // Validation states\n  //\n  // Reposition the icon because it's now within a grid column and columns have\n  // `position: relative;` on them. Also accounts for the grid gutter padding.\n  .has-feedback .form-control-feedback {\n    right: floor((@grid-gutter-width / 2));\n  }\n\n  // Form group sizes\n  //\n  // Quick utility class for applying `.input-lg` and `.input-sm` styles to the\n  // inputs and labels within a `.form-group`.\n  .form-group-lg {\n    @media (min-width: @screen-sm-min) {\n      .control-label {\n        padding-top: (@padding-large-vertical + 1);\n        font-size: @font-size-large;\n      }\n    }\n  }\n  .form-group-sm {\n    @media (min-width: @screen-sm-min) {\n      .control-label {\n        padding-top: (@padding-small-vertical + 1);\n        font-size: @font-size-small;\n      }\n    }\n  }\n}\n","// Form validation states\n//\n// Used in forms.less to generate the form validation CSS for warnings, errors,\n// and successes.\n\n.form-control-validation(@text-color: #555; @border-color: #ccc; @background-color: #f5f5f5) {\n  // Color the label and help text\n  .help-block,\n  .control-label,\n  .radio,\n  .checkbox,\n  .radio-inline,\n  .checkbox-inline,\n  &.radio label,\n  &.checkbox label,\n  &.radio-inline label,\n  &.checkbox-inline label  {\n    color: @text-color;\n  }\n  // Set the border and box shadow on specific inputs to match\n  .form-control {\n    border-color: @border-color;\n    .box-shadow(inset 0 1px 1px rgba(0,0,0,.075)); // Redeclare so transitions work\n    &:focus {\n      border-color: darken(@border-color, 10%);\n      @shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px lighten(@border-color, 20%);\n      .box-shadow(@shadow);\n    }\n  }\n  // Set validation states also for addons\n  .input-group-addon {\n    color: @text-color;\n    border-color: @border-color;\n    background-color: @background-color;\n  }\n  // Optional feedback icon\n  .form-control-feedback {\n    color: @text-color;\n  }\n}\n\n\n// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `@input-border-focus` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n.form-control-focus(@color: @input-border-focus) {\n  @color-rgba: rgba(red(@color), green(@color), blue(@color), .6);\n  &:focus {\n    border-color: @color;\n    outline: 0;\n    .box-shadow(~\"inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px @{color-rgba}\");\n  }\n}\n\n// Form control sizing\n//\n// Relative text size, padding, and border-radii changes for form controls. For\n// horizontal sizing, wrap controls in the predefined grid classes. `<select>`\n// element gets special love because it's special, and that's a fact!\n.input-size(@input-height; @padding-vertical; @padding-horizontal; @font-size; @line-height; @border-radius) {\n  height: @input-height;\n  padding: @padding-vertical @padding-horizontal;\n  font-size: @font-size;\n  line-height: @line-height;\n  border-radius: @border-radius;\n\n  select& {\n    height: @input-height;\n    line-height: @input-height;\n  }\n\n  textarea&,\n  select[multiple]& {\n    height: auto;\n  }\n}\n","//\n// Buttons\n// --------------------------------------------------\n\n\n// Base styles\n// --------------------------------------------------\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0; // For input.btn\n  font-weight: @btn-font-weight;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid transparent;\n  white-space: nowrap;\n  .button-size(@padding-base-vertical; @padding-base-horizontal; @font-size-base; @line-height-base; @btn-border-radius-base);\n  .user-select(none);\n\n  &,\n  &:active,\n  &.active {\n    &:focus,\n    &.focus {\n      .tab-focus();\n    }\n  }\n\n  &:hover,\n  &:focus,\n  &.focus {\n    color: @btn-default-color;\n    text-decoration: none;\n  }\n\n  &:active,\n  &.active {\n    outline: 0;\n    background-image: none;\n    .box-shadow(inset 0 3px 5px rgba(0,0,0,.125));\n  }\n\n  &.disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: @cursor-disabled;\n    .opacity(.65);\n    .box-shadow(none);\n  }\n\n  a& {\n    &.disabled,\n    fieldset[disabled] & {\n      pointer-events: none; // Future-proof disabling of clicks on `<a>` elements\n    }\n  }\n}\n\n\n// Alternate buttons\n// --------------------------------------------------\n\n.btn-default {\n  .button-variant(@btn-default-color; @btn-default-bg; @btn-default-border);\n}\n.btn-primary {\n  .button-variant(@btn-primary-color; @btn-primary-bg; @btn-primary-border);\n}\n// Success appears as green\n.btn-success {\n  .button-variant(@btn-success-color; @btn-success-bg; @btn-success-border);\n}\n// Info appears as blue-green\n.btn-info {\n  .button-variant(@btn-info-color; @btn-info-bg; @btn-info-border);\n}\n// Warning appears as orange\n.btn-warning {\n  .button-variant(@btn-warning-color; @btn-warning-bg; @btn-warning-border);\n}\n// Danger and error appear as red\n.btn-danger {\n  .button-variant(@btn-danger-color; @btn-danger-bg; @btn-danger-border);\n}\n\n\n// Link buttons\n// -------------------------\n\n// Make a button look and behave like a link\n.btn-link {\n  color: @link-color;\n  font-weight: normal;\n  border-radius: 0;\n\n  &,\n  &:active,\n  &.active,\n  &[disabled],\n  fieldset[disabled] & {\n    background-color: transparent;\n    .box-shadow(none);\n  }\n  &,\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: transparent;\n  }\n  &:hover,\n  &:focus {\n    color: @link-hover-color;\n    text-decoration: @link-hover-decoration;\n    background-color: transparent;\n  }\n  &[disabled],\n  fieldset[disabled] & {\n    &:hover,\n    &:focus {\n      color: @btn-link-disabled-color;\n      text-decoration: none;\n    }\n  }\n}\n\n\n// Button Sizes\n// --------------------------------------------------\n\n.btn-lg {\n  // line-height: ensure even-numbered height of button next to large input\n  .button-size(@padding-large-vertical; @padding-large-horizontal; @font-size-large; @line-height-large; @btn-border-radius-large);\n}\n.btn-sm {\n  // line-height: ensure proper height of button next to small input\n  .button-size(@padding-small-vertical; @padding-small-horizontal; @font-size-small; @line-height-small; @btn-border-radius-small);\n}\n.btn-xs {\n  .button-size(@padding-xs-vertical; @padding-xs-horizontal; @font-size-small; @line-height-small; @btn-border-radius-small);\n}\n\n\n// Block button\n// --------------------------------------------------\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n// Vertically space out multiple block buttons\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\n// Specificity overrides\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  &.btn-block {\n    width: 100%;\n  }\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n.button-variant(@color; @background; @border) {\n  color: @color;\n  background-color: @background;\n  border-color: @border;\n\n  &:focus,\n  &.focus {\n    color: @color;\n    background-color: darken(@background, 10%);\n        border-color: darken(@border, 25%);\n  }\n  &:hover {\n    color: @color;\n    background-color: darken(@background, 10%);\n        border-color: darken(@border, 12%);\n  }\n  &:active,\n  &.active,\n  .open > .dropdown-toggle& {\n    color: @color;\n    background-color: darken(@background, 10%);\n        border-color: darken(@border, 12%);\n\n    &:hover,\n    &:focus,\n    &.focus {\n      color: @color;\n      background-color: darken(@background, 17%);\n          border-color: darken(@border, 25%);\n    }\n  }\n  &:active,\n  &.active,\n  .open > .dropdown-toggle& {\n    background-image: none;\n  }\n  &.disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    &:hover,\n    &:focus,\n    &.focus {\n      background-color: @background;\n          border-color: @border;\n    }\n  }\n\n  .badge {\n    color: @background;\n    background-color: @color;\n  }\n}\n\n// Button sizes\n.button-size(@padding-vertical; @padding-horizontal; @font-size; @line-height; @border-radius) {\n  padding: @padding-vertical @padding-horizontal;\n  font-size: @font-size;\n  line-height: @line-height;\n  border-radius: @border-radius;\n}\n","// Opacity\n\n.opacity(@opacity) {\n  opacity: @opacity;\n  // IE8 filter\n  @opacity-ie: (@opacity * 100);\n  filter: ~\"alpha(opacity=@{opacity-ie})\";\n}\n","//\n// Component animations\n// --------------------------------------------------\n\n// Heads up!\n//\n// We don't use the `.opacity()` mixin here since it causes a bug with text\n// fields in IE7-8. Source: https://github.com/twbs/bootstrap/pull/3552.\n\n.fade {\n  opacity: 0;\n  .transition(opacity .15s linear);\n  &.in {\n    opacity: 1;\n  }\n}\n\n.collapse {\n  display: none;\n\n  &.in      { display: block; }\n  tr&.in    { display: table-row; }\n  tbody&.in { display: table-row-group; }\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  .transition-property(~\"height, visibility\");\n  .transition-duration(.35s);\n  .transition-timing-function(ease);\n}\n","//\n// Dropdown menus\n// --------------------------------------------------\n\n\n// Dropdown arrow/caret\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top:   @caret-width-base dashed;\n  border-top:   @caret-width-base solid ~\"\\9\"; // IE8\n  border-right: @caret-width-base solid transparent;\n  border-left:  @caret-width-base solid transparent;\n}\n\n// The dropdown wrapper (div)\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n// Prevent the focus on the dropdown toggle when closing dropdowns\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n// The dropdown menu (ul)\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: @zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0; // override default ul\n  list-style: none;\n  font-size: @font-size-base;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  background-color: @dropdown-bg;\n  border: 1px solid @dropdown-fallback-border; // IE8 fallback\n  border: 1px solid @dropdown-border;\n  border-radius: @border-radius-base;\n  .box-shadow(0 6px 12px rgba(0,0,0,.175));\n  background-clip: padding-box;\n\n  // Aligns the dropdown menu to right\n  //\n  // Deprecated as of 3.1.0 in favor of `.dropdown-menu-[dir]`\n  &.pull-right {\n    right: 0;\n    left: auto;\n  }\n\n  // Dividers (basically an hr) within the dropdown\n  .divider {\n    .nav-divider(@dropdown-divider-bg);\n  }\n\n  // Links within the dropdown menu\n  > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: @line-height-base;\n    color: @dropdown-link-color;\n    white-space: nowrap; // prevent links from randomly breaking onto new lines\n  }\n}\n\n// Hover/Focus state\n.dropdown-menu > li > a {\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: @dropdown-link-hover-color;\n    background-color: @dropdown-link-hover-bg;\n  }\n}\n\n// Active state\n.dropdown-menu > .active > a {\n  &,\n  &:hover,\n  &:focus {\n    color: @dropdown-link-active-color;\n    text-decoration: none;\n    outline: 0;\n    background-color: @dropdown-link-active-bg;\n  }\n}\n\n// Disabled state\n//\n// Gray out text and ensure the hover/focus state remains gray\n\n.dropdown-menu > .disabled > a {\n  &,\n  &:hover,\n  &:focus {\n    color: @dropdown-link-disabled-color;\n  }\n\n  // Nuke hover/focus effects\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    background-color: transparent;\n    background-image: none; // Remove CSS gradient\n    .reset-filter();\n    cursor: @cursor-disabled;\n  }\n}\n\n// Open state for the dropdown\n.open {\n  // Show the menu\n  > .dropdown-menu {\n    display: block;\n  }\n\n  // Remove the outline when :focus is triggered\n  > a {\n    outline: 0;\n  }\n}\n\n// Menu positioning\n//\n// Add extra class to `.dropdown-menu` to flip the alignment of the dropdown\n// menu with the parent.\n.dropdown-menu-right {\n  left: auto; // Reset the default from `.dropdown-menu`\n  right: 0;\n}\n// With v3, we enabled auto-flipping if you have a dropdown within a right\n// aligned nav component. To enable the undoing of that, we provide an override\n// to restore the default dropdown menu alignment.\n//\n// This is only for left-aligning a dropdown menu within a `.navbar-right` or\n// `.pull-right` nav component.\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: @font-size-small;\n  line-height: @line-height-base;\n  color: @dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Backdrop to catch body clicks on mobile, etc.\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: (@zindex-dropdown - 10);\n}\n\n// Right aligned dropdowns\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n//\n// Just add .dropup after the standard .dropdown class and you're set, bro.\n// TODO: abstract this so that the navbar fixed styles are not placed here?\n\n.dropup,\n.navbar-fixed-bottom .dropdown {\n  // Reverse the caret\n  .caret {\n    border-top: 0;\n    border-bottom: @caret-width-base dashed;\n    border-bottom: @caret-width-base solid ~\"\\9\"; // IE8\n    content: \"\";\n  }\n  // Different positioning for bottom up menu\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-bottom: 2px;\n  }\n}\n\n\n// Component alignment\n//\n// Reiterate per navbar.less and the modified component alignment there.\n\n@media (min-width: @grid-float-breakpoint) {\n  .navbar-right {\n    .dropdown-menu {\n      .dropdown-menu-right();\n    }\n    // Necessary for overrides of the default right aligned menu.\n    // Will remove come v4 in all likelihood.\n    .dropdown-menu-left {\n      .dropdown-menu-left();\n    }\n  }\n}\n","// Horizontal dividers\n//\n// Dividers (basically an hr) within dropdowns and nav lists\n\n.nav-divider(@color: #e5e5e5) {\n  height: 1px;\n  margin: ((@line-height-computed / 2) - 1) 0;\n  overflow: hidden;\n  background-color: @color;\n}\n","// Reset filters for IE\n//\n// When you need to remove a gradient background, do not forget to use this to reset\n// the IE filter for IE9 and below.\n\n.reset-filter() {\n  filter: e(%(\"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"));\n}\n","//\n// Button groups\n// --------------------------------------------------\n\n// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n  > .btn {\n    position: relative;\n    float: left;\n    // Bring the \"active\" button to the front\n    &:hover,\n    &:focus,\n    &:active,\n    &.active {\n      z-index: 2;\n    }\n  }\n}\n\n// Prevent double borders when buttons are next to each other\n.btn-group {\n  .btn + .btn,\n  .btn + .btn-group,\n  .btn-group + .btn,\n  .btn-group + .btn-group {\n    margin-left: -1px;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  margin-left: -5px; // Offset the first child's margin\n  &:extend(.clearfix all);\n\n  .btn,\n  .btn-group,\n  .input-group {\n    float: left;\n  }\n  > .btn,\n  > .btn-group,\n  > .input-group {\n    margin-left: 5px;\n  }\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n// Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match\n.btn-group > .btn:first-child {\n  margin-left: 0;\n  &:not(:last-child):not(.dropdown-toggle) {\n    .border-right-radius(0);\n  }\n}\n// Need .dropdown-toggle since :last-child doesn't apply, given that a .dropdown-menu is used immediately after it\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  .border-left-radius(0);\n}\n\n// Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group)\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) {\n  > .btn:last-child,\n  > .dropdown-toggle {\n    .border-right-radius(0);\n  }\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  .border-left-radius(0);\n}\n\n// On active and open, don't show outline\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-xs > .btn { &:extend(.btn-xs); }\n.btn-group-sm > .btn { &:extend(.btn-sm); }\n.btn-group-lg > .btn { &:extend(.btn-lg); }\n\n\n// Split button dropdowns\n// ----------------------\n\n// Give the line between buttons some depth\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n// The clickable button for toggling the menu\n// Remove the gradient and set the same inset shadow as the :active state\n.btn-group.open .dropdown-toggle {\n  .box-shadow(inset 0 3px 5px rgba(0,0,0,.125));\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    .box-shadow(none);\n  }\n}\n\n\n// Reposition the caret\n.btn .caret {\n  margin-left: 0;\n}\n// Carets in other button sizes\n.btn-lg .caret {\n  border-width: @caret-width-large @caret-width-large 0;\n  border-bottom-width: 0;\n}\n// Upside down carets for .dropup\n.dropup .btn-lg .caret {\n  border-width: 0 @caret-width-large @caret-width-large;\n}\n\n\n// Vertical button groups\n// ----------------------\n\n.btn-group-vertical {\n  > .btn,\n  > .btn-group,\n  > .btn-group > .btn {\n    display: block;\n    float: none;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  // Clear floats so dropdown menus can be properly placed\n  > .btn-group {\n    &:extend(.clearfix all);\n    > .btn {\n      float: none;\n    }\n  }\n\n  > .btn + .btn,\n  > .btn + .btn-group,\n  > .btn-group + .btn,\n  > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0;\n  }\n}\n\n.btn-group-vertical > .btn {\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  &:first-child:not(:last-child) {\n    .border-top-radius(@btn-border-radius-base);\n    .border-bottom-radius(0);\n  }\n  &:last-child:not(:first-child) {\n    .border-top-radius(0);\n    .border-bottom-radius(@btn-border-radius-base);\n  }\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) {\n  > .btn:last-child,\n  > .dropdown-toggle {\n    .border-bottom-radius(0);\n  }\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  .border-top-radius(0);\n}\n\n\n// Justified button groups\n// ----------------------\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n  > .btn,\n  > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%;\n  }\n  > .btn-group .btn {\n    width: 100%;\n  }\n\n  > .btn-group .dropdown-menu {\n    left: auto;\n  }\n}\n\n\n// Checkbox and radio options\n//\n// In order to support the browser's form validation feedback, powered by the\n// `required` attribute, we have to \"hide\" the inputs via `clip`. We cannot use\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\n// certain cases which is prevented by using `clip` and `pointer-events`.\n// This way, we ensure a DOM element is visible to position the popover from.\n//\n// See https://github.com/twbs/bootstrap/pull/12794 and\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\n\n[data-toggle=\"buttons\"] {\n  > .btn,\n  > .btn-group > .btn {\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      position: absolute;\n      clip: rect(0,0,0,0);\n      pointer-events: none;\n    }\n  }\n}\n","// Single side border-radius\n\n.border-top-radius(@radius) {\n  border-top-right-radius: @radius;\n   border-top-left-radius: @radius;\n}\n.border-right-radius(@radius) {\n  border-bottom-right-radius: @radius;\n     border-top-right-radius: @radius;\n}\n.border-bottom-radius(@radius) {\n  border-bottom-right-radius: @radius;\n   border-bottom-left-radius: @radius;\n}\n.border-left-radius(@radius) {\n  border-bottom-left-radius: @radius;\n     border-top-left-radius: @radius;\n}\n","//\n// Input groups\n// --------------------------------------------------\n\n// Base styles\n// -------------------------\n.input-group {\n  position: relative; // For dropdowns\n  display: table;\n  border-collapse: separate; // prevent input groups from inheriting border styles from table cells when placed within a table\n\n  // Undo padding and float of grid classes\n  &[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .form-control {\n    // Ensure that the input is always above the *appended* addon button for\n    // proper border colors.\n    position: relative;\n    z-index: 2;\n\n    // IE9 fubars the placeholder attribute in text inputs and the arrows on\n    // select elements in input groups. To fix it, we float the input. Details:\n    // https://github.com/twbs/bootstrap/issues/11561#issuecomment-28936855\n    float: left;\n\n    width: 100%;\n    margin-bottom: 0;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n}\n\n// Sizing options\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  .input-lg();\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  .input-sm();\n}\n\n\n// Display as table-cell\n// -------------------------\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n}\n// Addon and addon wrapper for buttons\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; // Match the inputs\n}\n\n// Text input groups\n// -------------------------\n.input-group-addon {\n  padding: @padding-base-vertical @padding-base-horizontal;\n  font-size: @font-size-base;\n  font-weight: normal;\n  line-height: 1;\n  color: @input-color;\n  text-align: center;\n  background-color: @input-group-addon-bg;\n  border: 1px solid @input-group-addon-border-color;\n  border-radius: @input-border-radius;\n\n  // Sizing\n  &.input-sm {\n    padding: @padding-small-vertical @padding-small-horizontal;\n    font-size: @font-size-small;\n    border-radius: @input-border-radius-small;\n  }\n  &.input-lg {\n    padding: @padding-large-vertical @padding-large-horizontal;\n    font-size: @font-size-large;\n    border-radius: @input-border-radius-large;\n  }\n\n  // Nuke default margins from checkboxes and radios to vertically center within.\n  input[type=\"radio\"],\n  input[type=\"checkbox\"] {\n    margin-top: 0;\n  }\n}\n\n// Reset rounded corners\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  .border-right-radius(0);\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  .border-left-radius(0);\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n// Button input groups\n// -------------------------\n.input-group-btn {\n  position: relative;\n  // Jankily prevent input button groups from wrapping with `white-space` and\n  // `font-size` in combination with `inline-block` on buttons.\n  font-size: 0;\n  white-space: nowrap;\n\n  // Negative margin for spacing, position for bringing hovered/focused/actived\n  // element above the siblings.\n  > .btn {\n    position: relative;\n    + .btn {\n      margin-left: -1px;\n    }\n    // Bring the \"active\" button to the front\n    &:hover,\n    &:focus,\n    &:active {\n      z-index: 2;\n    }\n  }\n\n  // Negative margin to only have a 1px border between the two\n  &:first-child {\n    > .btn,\n    > .btn-group {\n      margin-right: -1px;\n    }\n  }\n  &:last-child {\n    > .btn,\n    > .btn-group {\n      z-index: 2;\n      margin-left: -1px;\n    }\n  }\n}\n","//\n// Navs\n// --------------------------------------------------\n\n\n// Base class\n// --------------------------------------------------\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0; // Override default ul/ol\n  list-style: none;\n  &:extend(.clearfix all);\n\n  > li {\n    position: relative;\n    display: block;\n\n    > a {\n      position: relative;\n      display: block;\n      padding: @nav-link-padding;\n      &:hover,\n      &:focus {\n        text-decoration: none;\n        background-color: @nav-link-hover-bg;\n      }\n    }\n\n    // Disabled state sets text to gray and nukes hover/tab effects\n    &.disabled > a {\n      color: @nav-disabled-link-color;\n\n      &:hover,\n      &:focus {\n        color: @nav-disabled-link-hover-color;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: @cursor-disabled;\n      }\n    }\n  }\n\n  // Open dropdowns\n  .open > a {\n    &,\n    &:hover,\n    &:focus {\n      background-color: @nav-link-hover-bg;\n      border-color: @link-color;\n    }\n  }\n\n  // Nav dividers (deprecated with v3.0.1)\n  //\n  // This should have been removed in v3 with the dropping of `.nav-list`, but\n  // we missed it. We don't currently support this anywhere, but in the interest\n  // of maintaining backward compatibility in case you use it, it's deprecated.\n  .nav-divider {\n    .nav-divider();\n  }\n\n  // Prevent IE8 from misplacing imgs\n  //\n  // See https://github.com/h5bp/html5-boilerplate/issues/984#issuecomment-3985989\n  > li > a > img {\n    max-width: none;\n  }\n}\n\n\n// Tabs\n// -------------------------\n\n// Give the tabs something to sit on\n.nav-tabs {\n  border-bottom: 1px solid @nav-tabs-border-color;\n  > li {\n    float: left;\n    // Make the list-items overlay the bottom border\n    margin-bottom: -1px;\n\n    // Actual tabs (as links)\n    > a {\n      margin-right: 2px;\n      line-height: @line-height-base;\n      border: 1px solid transparent;\n      border-radius: @border-radius-base @border-radius-base 0 0;\n      &:hover {\n        border-color: @nav-tabs-link-hover-border-color @nav-tabs-link-hover-border-color @nav-tabs-border-color;\n      }\n    }\n\n    // Active state, and its :hover to override normal :hover\n    &.active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: @nav-tabs-active-link-hover-color;\n        background-color: @nav-tabs-active-link-hover-bg;\n        border: 1px solid @nav-tabs-active-link-hover-border-color;\n        border-bottom-color: transparent;\n        cursor: default;\n      }\n    }\n  }\n  // pulling this in mainly for less shorthand\n  &.nav-justified {\n    .nav-justified();\n    .nav-tabs-justified();\n  }\n}\n\n\n// Pills\n// -------------------------\n.nav-pills {\n  > li {\n    float: left;\n\n    // Links rendered as pills\n    > a {\n      border-radius: @nav-pills-border-radius;\n    }\n    + li {\n      margin-left: 2px;\n    }\n\n    // Active state\n    &.active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: @nav-pills-active-link-hover-color;\n        background-color: @nav-pills-active-link-hover-bg;\n      }\n    }\n  }\n}\n\n\n// Stacked pills\n.nav-stacked {\n  > li {\n    float: none;\n    + li {\n      margin-top: 2px;\n      margin-left: 0; // no need for this gap between nav items\n    }\n  }\n}\n\n\n// Nav variations\n// --------------------------------------------------\n\n// Justified nav links\n// -------------------------\n\n.nav-justified {\n  width: 100%;\n\n  > li {\n    float: none;\n    > a {\n      text-align: center;\n      margin-bottom: 5px;\n    }\n  }\n\n  > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto;\n  }\n\n  @media (min-width: @screen-sm-min) {\n    > li {\n      display: table-cell;\n      width: 1%;\n      > a {\n        margin-bottom: 0;\n      }\n    }\n  }\n}\n\n// Move borders to anchors instead of bottom of list\n//\n// Mixin for adding on top the shared `.nav-justified` styles for our tabs\n.nav-tabs-justified {\n  border-bottom: 0;\n\n  > li > a {\n    // Override margin from .nav-tabs\n    margin-right: 0;\n    border-radius: @border-radius-base;\n  }\n\n  > .active > a,\n  > .active > a:hover,\n  > .active > a:focus {\n    border: 1px solid @nav-tabs-justified-link-border-color;\n  }\n\n  @media (min-width: @screen-sm-min) {\n    > li > a {\n      border-bottom: 1px solid @nav-tabs-justified-link-border-color;\n      border-radius: @border-radius-base @border-radius-base 0 0;\n    }\n    > .active > a,\n    > .active > a:hover,\n    > .active > a:focus {\n      border-bottom-color: @nav-tabs-justified-active-link-border-color;\n    }\n  }\n}\n\n\n// Tabbable tabs\n// -------------------------\n\n// Hide tabbable panes to start, show them when `.active`\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n\n\n// Dropdowns\n// -------------------------\n\n// Specific dropdowns\n.nav-tabs .dropdown-menu {\n  // make dropdown border overlap tab border\n  margin-top: -1px;\n  // Remove the top rounded corners here since there is a hard edge above the menu\n  .border-top-radius(0);\n}\n","//\n// Navbars\n// --------------------------------------------------\n\n\n// Wrapper and base class\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  min-height: @navbar-height; // Ensure a navbar always shows (e.g., without a .navbar-brand in collapsed mode)\n  margin-bottom: @navbar-margin-bottom;\n  border: 1px solid transparent;\n\n  // Prevent floats from breaking the navbar\n  &:extend(.clearfix all);\n\n  @media (min-width: @grid-float-breakpoint) {\n    border-radius: @navbar-border-radius;\n  }\n}\n\n\n// Navbar heading\n//\n// Groups `.navbar-brand` and `.navbar-toggle` into a single component for easy\n// styling of responsive aspects.\n\n.navbar-header {\n  &:extend(.clearfix all);\n\n  @media (min-width: @grid-float-breakpoint) {\n    float: left;\n  }\n}\n\n\n// Navbar collapse (body)\n//\n// Group your navbar content into this for easy collapsing and expanding across\n// various device sizes. By default, this content is collapsed when <768px, but\n// will expand past that for a horizontal display.\n//\n// To start (on mobile devices) the navbar links, forms, and buttons are stacked\n// vertically and include a `max-height` to overflow in case you have too much\n// content for the user's viewport.\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: @navbar-padding-horizontal;\n  padding-left:  @navbar-padding-horizontal;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);\n  &:extend(.clearfix all);\n  -webkit-overflow-scrolling: touch;\n\n  &.in {\n    overflow-y: auto;\n  }\n\n  @media (min-width: @grid-float-breakpoint) {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n\n    &.collapse {\n      display: block !important;\n      height: auto !important;\n      padding-bottom: 0; // Override default setting\n      overflow: visible !important;\n    }\n\n    &.in {\n      overflow-y: visible;\n    }\n\n    // Undo the collapse side padding for navbars with containers to ensure\n    // alignment of right-aligned contents.\n    .navbar-fixed-top &,\n    .navbar-static-top &,\n    .navbar-fixed-bottom & {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  .navbar-collapse {\n    max-height: @navbar-collapse-max-height;\n\n    @media (max-device-width: @screen-xs-min) and (orientation: landscape) {\n      max-height: 200px;\n    }\n  }\n}\n\n\n// Both navbar header and collapse\n//\n// When a container is present, change the behavior of the header and collapse.\n\n.container,\n.container-fluid {\n  > .navbar-header,\n  > .navbar-collapse {\n    margin-right: -@navbar-padding-horizontal;\n    margin-left:  -@navbar-padding-horizontal;\n\n    @media (min-width: @grid-float-breakpoint) {\n      margin-right: 0;\n      margin-left:  0;\n    }\n  }\n}\n\n\n//\n// Navbar alignment options\n//\n// Display the navbar across the entirety of the page or fixed it to the top or\n// bottom of the page.\n\n// Static top (unfixed, but 100% wide) navbar\n.navbar-static-top {\n  z-index: @zindex-navbar;\n  border-width: 0 0 1px;\n\n  @media (min-width: @grid-float-breakpoint) {\n    border-radius: 0;\n  }\n}\n\n// Fix the top/bottom navbars when screen real estate supports it\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: @zindex-navbar-fixed;\n\n  // Undo the rounded corners\n  @media (min-width: @grid-float-breakpoint) {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0; // override .navbar defaults\n  border-width: 1px 0 0;\n}\n\n\n// Brand/project name\n\n.navbar-brand {\n  float: left;\n  padding: @navbar-padding-vertical @navbar-padding-horizontal;\n  font-size: @font-size-large;\n  line-height: @line-height-computed;\n  height: @navbar-height;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n\n  > img {\n    display: block;\n  }\n\n  @media (min-width: @grid-float-breakpoint) {\n    .navbar > .container &,\n    .navbar > .container-fluid & {\n      margin-left: -@navbar-padding-horizontal;\n    }\n  }\n}\n\n\n// Navbar toggle\n//\n// Custom button for toggling the `.navbar-collapse`, powered by the collapse\n// JavaScript plugin.\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: @navbar-padding-horizontal;\n  padding: 9px 10px;\n  .navbar-vertical-align(34px);\n  background-color: transparent;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid transparent;\n  border-radius: @border-radius-base;\n\n  // We remove the `outline` here, but later compensate by attaching `:hover`\n  // styles to `:focus`.\n  &:focus {\n    outline: 0;\n  }\n\n  // Bars\n  .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n  }\n  .icon-bar + .icon-bar {\n    margin-top: 4px;\n  }\n\n  @media (min-width: @grid-float-breakpoint) {\n    display: none;\n  }\n}\n\n\n// Navbar nav links\n//\n// Builds on top of the `.nav` components with its own modifier class to make\n// the nav the full height of the horizontal nav (above 768px).\n\n.navbar-nav {\n  margin: (@navbar-padding-vertical / 2) -@navbar-padding-horizontal;\n\n  > li > a {\n    padding-top:    10px;\n    padding-bottom: 10px;\n    line-height: @line-height-computed;\n  }\n\n  @media (max-width: @grid-float-breakpoint-max) {\n    // Dropdowns get custom display when collapsed\n    .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none;\n      > li > a,\n      .dropdown-header {\n        padding: 5px 15px 5px 25px;\n      }\n      > li > a {\n        line-height: @line-height-computed;\n        &:hover,\n        &:focus {\n          background-image: none;\n        }\n      }\n    }\n  }\n\n  // Uncollapse the nav\n  @media (min-width: @grid-float-breakpoint) {\n    float: left;\n    margin: 0;\n\n    > li {\n      float: left;\n      > a {\n        padding-top:    @navbar-padding-vertical;\n        padding-bottom: @navbar-padding-vertical;\n      }\n    }\n  }\n}\n\n\n// Navbar form\n//\n// Extension of the `.form-inline` with some extra flavor for optimum display in\n// our navbars.\n\n.navbar-form {\n  margin-left: -@navbar-padding-horizontal;\n  margin-right: -@navbar-padding-horizontal;\n  padding: 10px @navbar-padding-horizontal;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  @shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1);\n  .box-shadow(@shadow);\n\n  // Mixin behavior for optimum display\n  .form-inline();\n\n  .form-group {\n    @media (max-width: @grid-float-breakpoint-max) {\n      margin-bottom: 5px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  // Vertically center in expanded, horizontal navbar\n  .navbar-vertical-align(@input-height-base);\n\n  // Undo 100% width for pull classes\n  @media (min-width: @grid-float-breakpoint) {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    .box-shadow(none);\n  }\n}\n\n\n// Dropdown menus\n\n// Menu position and menu carets\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  .border-top-radius(0);\n}\n// Menu position and menu caret support for dropups via extra dropup class\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  .border-top-radius(@navbar-border-radius);\n  .border-bottom-radius(0);\n}\n\n\n// Buttons in navbars\n//\n// Vertically center a button within a navbar (when *not* in a form).\n\n.navbar-btn {\n  .navbar-vertical-align(@input-height-base);\n\n  &.btn-sm {\n    .navbar-vertical-align(@input-height-small);\n  }\n  &.btn-xs {\n    .navbar-vertical-align(22);\n  }\n}\n\n\n// Text in navbars\n//\n// Add a class to make any element properly align itself vertically within the navbars.\n\n.navbar-text {\n  .navbar-vertical-align(@line-height-computed);\n\n  @media (min-width: @grid-float-breakpoint) {\n    float: left;\n    margin-left: @navbar-padding-horizontal;\n    margin-right: @navbar-padding-horizontal;\n  }\n}\n\n\n// Component alignment\n//\n// Repurpose the pull utilities as their own navbar utilities to avoid specificity\n// issues with parents and chaining. Only do this when the navbar is uncollapsed\n// though so that navbar contents properly stack and align in mobile.\n//\n// Declared after the navbar components to ensure more specificity on the margins.\n\n@media (min-width: @grid-float-breakpoint) {\n  .navbar-left  { .pull-left(); }\n  .navbar-right {\n    .pull-right();\n    margin-right: -@navbar-padding-horizontal;\n\n    ~ .navbar-right {\n      margin-right: 0;\n    }\n  }\n}\n\n\n// Alternate navbars\n// --------------------------------------------------\n\n// Default navbar\n.navbar-default {\n  background-color: @navbar-default-bg;\n  border-color: @navbar-default-border;\n\n  .navbar-brand {\n    color: @navbar-default-brand-color;\n    &:hover,\n    &:focus {\n      color: @navbar-default-brand-hover-color;\n      background-color: @navbar-default-brand-hover-bg;\n    }\n  }\n\n  .navbar-text {\n    color: @navbar-default-color;\n  }\n\n  .navbar-nav {\n    > li > a {\n      color: @navbar-default-link-color;\n\n      &:hover,\n      &:focus {\n        color: @navbar-default-link-hover-color;\n        background-color: @navbar-default-link-hover-bg;\n      }\n    }\n    > .active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: @navbar-default-link-active-color;\n        background-color: @navbar-default-link-active-bg;\n      }\n    }\n    > .disabled > a {\n      &,\n      &:hover,\n      &:focus {\n        color: @navbar-default-link-disabled-color;\n        background-color: @navbar-default-link-disabled-bg;\n      }\n    }\n  }\n\n  .navbar-toggle {\n    border-color: @navbar-default-toggle-border-color;\n    &:hover,\n    &:focus {\n      background-color: @navbar-default-toggle-hover-bg;\n    }\n    .icon-bar {\n      background-color: @navbar-default-toggle-icon-bar-bg;\n    }\n  }\n\n  .navbar-collapse,\n  .navbar-form {\n    border-color: @navbar-default-border;\n  }\n\n  // Dropdown menu items\n  .navbar-nav {\n    // Remove background color from open dropdown\n    > .open > a {\n      &,\n      &:hover,\n      &:focus {\n        background-color: @navbar-default-link-active-bg;\n        color: @navbar-default-link-active-color;\n      }\n    }\n\n    @media (max-width: @grid-float-breakpoint-max) {\n      // Dropdowns get custom display when collapsed\n      .open .dropdown-menu {\n        > li > a {\n          color: @navbar-default-link-color;\n          &:hover,\n          &:focus {\n            color: @navbar-default-link-hover-color;\n            background-color: @navbar-default-link-hover-bg;\n          }\n        }\n        > .active > a {\n          &,\n          &:hover,\n          &:focus {\n            color: @navbar-default-link-active-color;\n            background-color: @navbar-default-link-active-bg;\n          }\n        }\n        > .disabled > a {\n          &,\n          &:hover,\n          &:focus {\n            color: @navbar-default-link-disabled-color;\n            background-color: @navbar-default-link-disabled-bg;\n          }\n        }\n      }\n    }\n  }\n\n\n  // Links in navbars\n  //\n  // Add a class to ensure links outside the navbar nav are colored correctly.\n\n  .navbar-link {\n    color: @navbar-default-link-color;\n    &:hover {\n      color: @navbar-default-link-hover-color;\n    }\n  }\n\n  .btn-link {\n    color: @navbar-default-link-color;\n    &:hover,\n    &:focus {\n      color: @navbar-default-link-hover-color;\n    }\n    &[disabled],\n    fieldset[disabled] & {\n      &:hover,\n      &:focus {\n        color: @navbar-default-link-disabled-color;\n      }\n    }\n  }\n}\n\n// Inverse navbar\n\n.navbar-inverse {\n  background-color: @navbar-inverse-bg;\n  border-color: @navbar-inverse-border;\n\n  .navbar-brand {\n    color: @navbar-inverse-brand-color;\n    &:hover,\n    &:focus {\n      color: @navbar-inverse-brand-hover-color;\n      background-color: @navbar-inverse-brand-hover-bg;\n    }\n  }\n\n  .navbar-text {\n    color: @navbar-inverse-color;\n  }\n\n  .navbar-nav {\n    > li > a {\n      color: @navbar-inverse-link-color;\n\n      &:hover,\n      &:focus {\n        color: @navbar-inverse-link-hover-color;\n        background-color: @navbar-inverse-link-hover-bg;\n      }\n    }\n    > .active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: @navbar-inverse-link-active-color;\n        background-color: @navbar-inverse-link-active-bg;\n      }\n    }\n    > .disabled > a {\n      &,\n      &:hover,\n      &:focus {\n        color: @navbar-inverse-link-disabled-color;\n        background-color: @navbar-inverse-link-disabled-bg;\n      }\n    }\n  }\n\n  // Darken the responsive nav toggle\n  .navbar-toggle {\n    border-color: @navbar-inverse-toggle-border-color;\n    &:hover,\n    &:focus {\n      background-color: @navbar-inverse-toggle-hover-bg;\n    }\n    .icon-bar {\n      background-color: @navbar-inverse-toggle-icon-bar-bg;\n    }\n  }\n\n  .navbar-collapse,\n  .navbar-form {\n    border-color: darken(@navbar-inverse-bg, 7%);\n  }\n\n  // Dropdowns\n  .navbar-nav {\n    > .open > a {\n      &,\n      &:hover,\n      &:focus {\n        background-color: @navbar-inverse-link-active-bg;\n        color: @navbar-inverse-link-active-color;\n      }\n    }\n\n    @media (max-width: @grid-float-breakpoint-max) {\n      // Dropdowns get custom display\n      .open .dropdown-menu {\n        > .dropdown-header {\n          border-color: @navbar-inverse-border;\n        }\n        .divider {\n          background-color: @navbar-inverse-border;\n        }\n        > li > a {\n          color: @navbar-inverse-link-color;\n          &:hover,\n          &:focus {\n            color: @navbar-inverse-link-hover-color;\n            background-color: @navbar-inverse-link-hover-bg;\n          }\n        }\n        > .active > a {\n          &,\n          &:hover,\n          &:focus {\n            color: @navbar-inverse-link-active-color;\n            background-color: @navbar-inverse-link-active-bg;\n          }\n        }\n        > .disabled > a {\n          &,\n          &:hover,\n          &:focus {\n            color: @navbar-inverse-link-disabled-color;\n            background-color: @navbar-inverse-link-disabled-bg;\n          }\n        }\n      }\n    }\n  }\n\n  .navbar-link {\n    color: @navbar-inverse-link-color;\n    &:hover {\n      color: @navbar-inverse-link-hover-color;\n    }\n  }\n\n  .btn-link {\n    color: @navbar-inverse-link-color;\n    &:hover,\n    &:focus {\n      color: @navbar-inverse-link-hover-color;\n    }\n    &[disabled],\n    fieldset[disabled] & {\n      &:hover,\n      &:focus {\n        color: @navbar-inverse-link-disabled-color;\n      }\n    }\n  }\n}\n","// Navbar vertical align\n//\n// Vertically center elements in the navbar.\n// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.\n\n.navbar-vertical-align(@element-height) {\n  margin-top: ((@navbar-height - @element-height) / 2);\n  margin-bottom: ((@navbar-height - @element-height) / 2);\n}\n","//\n// Utility classes\n// --------------------------------------------------\n\n\n// Floats\n// -------------------------\n\n.clearfix {\n  .clearfix();\n}\n.center-block {\n  .center-block();\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n\n\n// Toggling content\n// -------------------------\n\n// Note: Deprecated .hide in favor of .hidden or .sr-only (as appropriate) in v3.0.1\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  .text-hide();\n}\n\n\n// Hide from screenreaders and browsers\n//\n// Credit: HTML5 Boilerplate\n\n.hidden {\n  display: none !important;\n}\n\n\n// For Affix plugin\n// -------------------------\n\n.affix {\n  position: fixed;\n}\n","//\n// Breadcrumbs\n// --------------------------------------------------\n\n\n.breadcrumb {\n  padding: @breadcrumb-padding-vertical @breadcrumb-padding-horizontal;\n  margin-bottom: @line-height-computed;\n  list-style: none;\n  background-color: @breadcrumb-bg;\n  border-radius: @border-radius-base;\n\n  > li {\n    display: inline-block;\n\n    + li:before {\n      content: \"@{breadcrumb-separator}\\00a0\"; // Unicode space added since inline-block means non-collapsing white-space\n      padding: 0 5px;\n      color: @breadcrumb-color;\n    }\n  }\n\n  > .active {\n    color: @breadcrumb-active-color;\n  }\n}\n","//\n// Pagination (multiple pages)\n// --------------------------------------------------\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: @line-height-computed 0;\n  border-radius: @border-radius-base;\n\n  > li {\n    display: inline; // Remove list-style and block-level defaults\n    > a,\n    > span {\n      position: relative;\n      float: left; // Collapse white-space\n      padding: @padding-base-vertical @padding-base-horizontal;\n      line-height: @line-height-base;\n      text-decoration: none;\n      color: @pagination-color;\n      background-color: @pagination-bg;\n      border: 1px solid @pagination-border;\n      margin-left: -1px;\n    }\n    &:first-child {\n      > a,\n      > span {\n        margin-left: 0;\n        .border-left-radius(@border-radius-base);\n      }\n    }\n    &:last-child {\n      > a,\n      > span {\n        .border-right-radius(@border-radius-base);\n      }\n    }\n  }\n\n  > li > a,\n  > li > span {\n    &:hover,\n    &:focus {\n      z-index: 2;\n      color: @pagination-hover-color;\n      background-color: @pagination-hover-bg;\n      border-color: @pagination-hover-border;\n    }\n  }\n\n  > .active > a,\n  > .active > span {\n    &,\n    &:hover,\n    &:focus {\n      z-index: 3;\n      color: @pagination-active-color;\n      background-color: @pagination-active-bg;\n      border-color: @pagination-active-border;\n      cursor: default;\n    }\n  }\n\n  > .disabled {\n    > span,\n    > span:hover,\n    > span:focus,\n    > a,\n    > a:hover,\n    > a:focus {\n      color: @pagination-disabled-color;\n      background-color: @pagination-disabled-bg;\n      border-color: @pagination-disabled-border;\n      cursor: @cursor-disabled;\n    }\n  }\n}\n\n// Sizing\n// --------------------------------------------------\n\n// Large\n.pagination-lg {\n  .pagination-size(@padding-large-vertical; @padding-large-horizontal; @font-size-large; @line-height-large; @border-radius-large);\n}\n\n// Small\n.pagination-sm {\n  .pagination-size(@padding-small-vertical; @padding-small-horizontal; @font-size-small; @line-height-small; @border-radius-small);\n}\n","// Pagination\n\n.pagination-size(@padding-vertical; @padding-horizontal; @font-size; @line-height; @border-radius) {\n  > li {\n    > a,\n    > span {\n      padding: @padding-vertical @padding-horizontal;\n      font-size: @font-size;\n      line-height: @line-height;\n    }\n    &:first-child {\n      > a,\n      > span {\n        .border-left-radius(@border-radius);\n      }\n    }\n    &:last-child {\n      > a,\n      > span {\n        .border-right-radius(@border-radius);\n      }\n    }\n  }\n}\n","//\n// Pager pagination\n// --------------------------------------------------\n\n\n.pager {\n  padding-left: 0;\n  margin: @line-height-computed 0;\n  list-style: none;\n  text-align: center;\n  &:extend(.clearfix all);\n  li {\n    display: inline;\n    > a,\n    > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: @pager-bg;\n      border: 1px solid @pager-border;\n      border-radius: @pager-border-radius;\n    }\n\n    > a:hover,\n    > a:focus {\n      text-decoration: none;\n      background-color: @pager-hover-bg;\n    }\n  }\n\n  .next {\n    > a,\n    > span {\n      float: right;\n    }\n  }\n\n  .previous {\n    > a,\n    > span {\n      float: left;\n    }\n  }\n\n  .disabled {\n    > a,\n    > a:hover,\n    > a:focus,\n    > span {\n      color: @pager-disabled-color;\n      background-color: @pager-bg;\n      cursor: @cursor-disabled;\n    }\n  }\n}\n","//\n// Labels\n// --------------------------------------------------\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: @label-color;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n\n  // Add hover effects, but only for links\n  a& {\n    &:hover,\n    &:focus {\n      color: @label-link-hover-color;\n      text-decoration: none;\n      cursor: pointer;\n    }\n  }\n\n  // Empty labels collapse automatically (not available in IE8)\n  &:empty {\n    display: none;\n  }\n\n  // Quick fix for labels in buttons\n  .btn & {\n    position: relative;\n    top: -1px;\n  }\n}\n\n// Colors\n// Contextual variations (linked labels get darker on :hover)\n\n.label-default {\n  .label-variant(@label-default-bg);\n}\n\n.label-primary {\n  .label-variant(@label-primary-bg);\n}\n\n.label-success {\n  .label-variant(@label-success-bg);\n}\n\n.label-info {\n  .label-variant(@label-info-bg);\n}\n\n.label-warning {\n  .label-variant(@label-warning-bg);\n}\n\n.label-danger {\n  .label-variant(@label-danger-bg);\n}\n","// Labels\n\n.label-variant(@color) {\n  background-color: @color;\n\n  &[href] {\n    &:hover,\n    &:focus {\n      background-color: darken(@color, 10%);\n    }\n  }\n}\n","//\n// Badges\n// --------------------------------------------------\n\n\n// Base class\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: @font-size-small;\n  font-weight: @badge-font-weight;\n  color: @badge-color;\n  line-height: @badge-line-height;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: @badge-bg;\n  border-radius: @badge-border-radius;\n\n  // Empty badges collapse automatically (not available in IE8)\n  &:empty {\n    display: none;\n  }\n\n  // Quick fix for badges in buttons\n  .btn & {\n    position: relative;\n    top: -1px;\n  }\n\n  .btn-xs &,\n  .btn-group-xs > .btn & {\n    top: 0;\n    padding: 1px 5px;\n  }\n\n  // Hover state, but only for links\n  a& {\n    &:hover,\n    &:focus {\n      color: @badge-link-hover-color;\n      text-decoration: none;\n      cursor: pointer;\n    }\n  }\n\n  // Account for badges in navs\n  .list-group-item.active > &,\n  .nav-pills > .active > a > & {\n    color: @badge-active-color;\n    background-color: @badge-active-bg;\n  }\n\n  .list-group-item > & {\n    float: right;\n  }\n\n  .list-group-item > & + & {\n    margin-right: 5px;\n  }\n\n  .nav-pills > li > a > & {\n    margin-left: 3px;\n  }\n}\n","//\n// Jumbotron\n// --------------------------------------------------\n\n\n.jumbotron {\n  padding-top:    @jumbotron-padding;\n  padding-bottom: @jumbotron-padding;\n  margin-bottom: @jumbotron-padding;\n  color: @jumbotron-color;\n  background-color: @jumbotron-bg;\n\n  h1,\n  .h1 {\n    color: @jumbotron-heading-color;\n  }\n\n  p {\n    margin-bottom: (@jumbotron-padding / 2);\n    font-size: @jumbotron-font-size;\n    font-weight: 200;\n  }\n\n  > hr {\n    border-top-color: darken(@jumbotron-bg, 10%);\n  }\n\n  .container &,\n  .container-fluid & {\n    border-radius: @border-radius-large; // Only round corners at higher resolutions if contained in a container\n    padding-left:  (@grid-gutter-width / 2);\n    padding-right: (@grid-gutter-width / 2);\n  }\n\n  .container {\n    max-width: 100%;\n  }\n\n  @media screen and (min-width: @screen-sm-min) {\n    padding-top:    (@jumbotron-padding * 1.6);\n    padding-bottom: (@jumbotron-padding * 1.6);\n\n    .container &,\n    .container-fluid & {\n      padding-left:  (@jumbotron-padding * 2);\n      padding-right: (@jumbotron-padding * 2);\n    }\n\n    h1,\n    .h1 {\n      font-size: @jumbotron-heading-font-size;\n    }\n  }\n}\n","//\n// Thumbnails\n// --------------------------------------------------\n\n\n// Mixin and adjust the regular image class\n.thumbnail {\n  display: block;\n  padding: @thumbnail-padding;\n  margin-bottom: @line-height-computed;\n  line-height: @line-height-base;\n  background-color: @thumbnail-bg;\n  border: 1px solid @thumbnail-border;\n  border-radius: @thumbnail-border-radius;\n  .transition(border .2s ease-in-out);\n\n  > img,\n  a > img {\n    &:extend(.img-responsive);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  // Add a hover state for linked versions only\n  a&:hover,\n  a&:focus,\n  a&.active {\n    border-color: @link-color;\n  }\n\n  // Image captions\n  .caption {\n    padding: @thumbnail-caption-padding;\n    color: @thumbnail-caption-color;\n  }\n}\n","//\n// Alerts\n// --------------------------------------------------\n\n\n// Base styles\n// -------------------------\n\n.alert {\n  padding: @alert-padding;\n  margin-bottom: @line-height-computed;\n  border: 1px solid transparent;\n  border-radius: @alert-border-radius;\n\n  // Headings for larger alerts\n  h4 {\n    margin-top: 0;\n    // Specified for the h4 to prevent conflicts of changing @headings-color\n    color: inherit;\n  }\n\n  // Provide class for links that match alerts\n  .alert-link {\n    font-weight: @alert-link-font-weight;\n  }\n\n  // Improve alignment and spacing of inner content\n  > p,\n  > ul {\n    margin-bottom: 0;\n  }\n\n  > p + p {\n    margin-top: 5px;\n  }\n}\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissable, // The misspelled .alert-dismissable was deprecated in 3.2.0.\n.alert-dismissible {\n  padding-right: (@alert-padding + 20);\n\n  // Adjust close link position\n  .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n  }\n}\n\n// Alternate styles\n//\n// Generate contextual modifier classes for colorizing the alert.\n\n.alert-success {\n  .alert-variant(@alert-success-bg; @alert-success-border; @alert-success-text);\n}\n\n.alert-info {\n  .alert-variant(@alert-info-bg; @alert-info-border; @alert-info-text);\n}\n\n.alert-warning {\n  .alert-variant(@alert-warning-bg; @alert-warning-border; @alert-warning-text);\n}\n\n.alert-danger {\n  .alert-variant(@alert-danger-bg; @alert-danger-border; @alert-danger-text);\n}\n","// Alerts\n\n.alert-variant(@background; @border; @text-color) {\n  background-color: @background;\n  border-color: @border;\n  color: @text-color;\n\n  hr {\n    border-top-color: darken(@border, 5%);\n  }\n  .alert-link {\n    color: darken(@text-color, 10%);\n  }\n}\n","//\n// Progress bars\n// --------------------------------------------------\n\n\n// Bar animations\n// -------------------------\n\n// WebKit\n@-webkit-keyframes progress-bar-stripes {\n  from  { background-position: 40px 0; }\n  to    { background-position: 0 0; }\n}\n\n// Spec and IE10+\n@keyframes progress-bar-stripes {\n  from  { background-position: 40px 0; }\n  to    { background-position: 0 0; }\n}\n\n\n// Bar itself\n// -------------------------\n\n// Outer container\n.progress {\n  overflow: hidden;\n  height: @line-height-computed;\n  margin-bottom: @line-height-computed;\n  background-color: @progress-bg;\n  border-radius: @progress-border-radius;\n  .box-shadow(inset 0 1px 2px rgba(0,0,0,.1));\n}\n\n// Bar of progress\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: @font-size-small;\n  line-height: @line-height-computed;\n  color: @progress-bar-color;\n  text-align: center;\n  background-color: @progress-bar-bg;\n  .box-shadow(inset 0 -1px 0 rgba(0,0,0,.15));\n  .transition(width .6s ease);\n}\n\n// Striped bars\n//\n// `.progress-striped .progress-bar` is deprecated as of v3.2.0 in favor of the\n// `.progress-bar-striped` class, which you just add to an existing\n// `.progress-bar`.\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  #gradient > .striped();\n  background-size: 40px 40px;\n}\n\n// Call animation for the active one\n//\n// `.progress.active .progress-bar` is deprecated as of v3.2.0 in favor of the\n// `.progress-bar.active` approach.\n.progress.active .progress-bar,\n.progress-bar.active {\n  .animation(progress-bar-stripes 2s linear infinite);\n}\n\n\n// Variations\n// -------------------------\n\n.progress-bar-success {\n  .progress-bar-variant(@progress-bar-success-bg);\n}\n\n.progress-bar-info {\n  .progress-bar-variant(@progress-bar-info-bg);\n}\n\n.progress-bar-warning {\n  .progress-bar-variant(@progress-bar-warning-bg);\n}\n\n.progress-bar-danger {\n  .progress-bar-variant(@progress-bar-danger-bg);\n}\n","// Gradients\n\n#gradient {\n\n  // Horizontal gradient, from left to right\n  //\n  // Creates two color stops, start and end, by specifying a color and position for each color stop.\n  // Color stops are not available in IE9 and below.\n  .horizontal(@start-color: #555; @end-color: #333; @start-percent: 0%; @end-percent: 100%) {\n    background-image: -webkit-linear-gradient(left, @start-color @start-percent, @end-color @end-percent); // Safari 5.1-6, Chrome 10+\n    background-image: -o-linear-gradient(left, @start-color @start-percent, @end-color @end-percent); // Opera 12\n    background-image: linear-gradient(to right, @start-color @start-percent, @end-color @end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n    background-repeat: repeat-x;\n    filter: e(%(\"progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)\",argb(@start-color),argb(@end-color))); // IE9 and down\n  }\n\n  // Vertical gradient, from top to bottom\n  //\n  // Creates two color stops, start and end, by specifying a color and position for each color stop.\n  // Color stops are not available in IE9 and below.\n  .vertical(@start-color: #555; @end-color: #333; @start-percent: 0%; @end-percent: 100%) {\n    background-image: -webkit-linear-gradient(top, @start-color @start-percent, @end-color @end-percent);  // Safari 5.1-6, Chrome 10+\n    background-image: -o-linear-gradient(top, @start-color @start-percent, @end-color @end-percent);  // Opera 12\n    background-image: linear-gradient(to bottom, @start-color @start-percent, @end-color @end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n    background-repeat: repeat-x;\n    filter: e(%(\"progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)\",argb(@start-color),argb(@end-color))); // IE9 and down\n  }\n\n  .directional(@start-color: #555; @end-color: #333; @deg: 45deg) {\n    background-repeat: repeat-x;\n    background-image: -webkit-linear-gradient(@deg, @start-color, @end-color); // Safari 5.1-6, Chrome 10+\n    background-image: -o-linear-gradient(@deg, @start-color, @end-color); // Opera 12\n    background-image: linear-gradient(@deg, @start-color, @end-color); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n  }\n  .horizontal-three-colors(@start-color: #00b3ee; @mid-color: #7a43b6; @color-stop: 50%; @end-color: #c3325f) {\n    background-image: -webkit-linear-gradient(left, @start-color, @mid-color @color-stop, @end-color);\n    background-image: -o-linear-gradient(left, @start-color, @mid-color @color-stop, @end-color);\n    background-image: linear-gradient(to right, @start-color, @mid-color @color-stop, @end-color);\n    background-repeat: no-repeat;\n    filter: e(%(\"progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=1)\",argb(@start-color),argb(@end-color))); // IE9 and down, gets no color-stop at all for proper fallback\n  }\n  .vertical-three-colors(@start-color: #00b3ee; @mid-color: #7a43b6; @color-stop: 50%; @end-color: #c3325f) {\n    background-image: -webkit-linear-gradient(@start-color, @mid-color @color-stop, @end-color);\n    background-image: -o-linear-gradient(@start-color, @mid-color @color-stop, @end-color);\n    background-image: linear-gradient(@start-color, @mid-color @color-stop, @end-color);\n    background-repeat: no-repeat;\n    filter: e(%(\"progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)\",argb(@start-color),argb(@end-color))); // IE9 and down, gets no color-stop at all for proper fallback\n  }\n  .radial(@inner-color: #555; @outer-color: #333) {\n    background-image: -webkit-radial-gradient(circle, @inner-color, @outer-color);\n    background-image: radial-gradient(circle, @inner-color, @outer-color);\n    background-repeat: no-repeat;\n  }\n  .striped(@color: rgba(255,255,255,.15); @angle: 45deg) {\n    background-image: -webkit-linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent);\n    background-image: linear-gradient(@angle, @color 25%, transparent 25%, transparent 50%, @color 50%, @color 75%, transparent 75%, transparent);\n  }\n}\n","// Progress bars\n\n.progress-bar-variant(@color) {\n  background-color: @color;\n\n  // Deprecated parent class requirement as of v3.2.0\n  .progress-striped & {\n    #gradient > .striped();\n  }\n}\n",".media {\n  // Proper spacing between instances of .media\n  margin-top: 15px;\n\n  &:first-child {\n    margin-top: 0;\n  }\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n\n  // Fix collapse in webkit from max-width: 100% and display: table-cell.\n  &.img-thumbnail {\n    max-width: none;\n  }\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n// Reset margins on headings for tighter default spacing\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n// Media list variation\n//\n// Undo default ul/ol styles\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n","//\n// List groups\n// --------------------------------------------------\n\n\n// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  // No need to set list-style: none; since .list-group-item is block level\n  margin-bottom: 20px;\n  padding-left: 0; // reset padding because ul and ol\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  // Place the border on the list items and negative margin up for better styling\n  margin-bottom: -1px;\n  background-color: @list-group-bg;\n  border: 1px solid @list-group-border;\n\n  // Round the first and last items\n  &:first-child {\n    .border-top-radius(@list-group-border-radius);\n  }\n  &:last-child {\n    margin-bottom: 0;\n    .border-bottom-radius(@list-group-border-radius);\n  }\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive items.\n// Includes an extra `.active` modifier class for showing selected items.\n\na.list-group-item,\nbutton.list-group-item {\n  color: @list-group-link-color;\n\n  .list-group-item-heading {\n    color: @list-group-link-heading-color;\n  }\n\n  // Hover state\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: @list-group-link-hover-color;\n    background-color: @list-group-hover-bg;\n  }\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item {\n  // Disabled state\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:focus {\n    background-color: @list-group-disabled-bg;\n    color: @list-group-disabled-color;\n    cursor: @cursor-disabled;\n\n    // Force color to inherit for custom content\n    .list-group-item-heading {\n      color: inherit;\n    }\n    .list-group-item-text {\n      color: @list-group-disabled-text-color;\n    }\n  }\n\n  // Active class on item itself, not parent\n  &.active,\n  &.active:hover,\n  &.active:focus {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: @list-group-active-color;\n    background-color: @list-group-active-bg;\n    border-color: @list-group-active-border;\n\n    // Force color to inherit for custom content\n    .list-group-item-heading,\n    .list-group-item-heading > small,\n    .list-group-item-heading > .small {\n      color: inherit;\n    }\n    .list-group-item-text {\n      color: @list-group-active-text-color;\n    }\n  }\n}\n\n\n// Contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n.list-group-item-variant(success; @state-success-bg; @state-success-text);\n.list-group-item-variant(info; @state-info-bg; @state-info-text);\n.list-group-item-variant(warning; @state-warning-bg; @state-warning-text);\n.list-group-item-variant(danger; @state-danger-bg; @state-danger-text);\n\n\n// Custom content options\n//\n// Extra classes for creating well-formatted content within `.list-group-item`s.\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n","// List Groups\n\n.list-group-item-variant(@state; @background; @color) {\n  .list-group-item-@{state} {\n    color: @color;\n    background-color: @background;\n\n    a&,\n    button& {\n      color: @color;\n\n      .list-group-item-heading {\n        color: inherit;\n      }\n\n      &:hover,\n      &:focus {\n        color: @color;\n        background-color: darken(@background, 5%);\n      }\n      &.active,\n      &.active:hover,\n      &.active:focus {\n        color: #fff;\n        background-color: @color;\n        border-color: @color;\n      }\n    }\n  }\n}\n","//\n// Panels\n// --------------------------------------------------\n\n\n// Base class\n.panel {\n  margin-bottom: @line-height-computed;\n  background-color: @panel-bg;\n  border: 1px solid transparent;\n  border-radius: @panel-border-radius;\n  .box-shadow(0 1px 1px rgba(0,0,0,.05));\n}\n\n// Panel contents\n.panel-body {\n  padding: @panel-body-padding;\n  &:extend(.clearfix all);\n}\n\n// Optional heading\n.panel-heading {\n  padding: @panel-heading-padding;\n  border-bottom: 1px solid transparent;\n  .border-top-radius((@panel-border-radius - 1));\n\n  > .dropdown .dropdown-toggle {\n    color: inherit;\n  }\n}\n\n// Within heading, strip any `h*` tag of its default margins for spacing.\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: ceil((@font-size-base * 1.125));\n  color: inherit;\n\n  > a,\n  > small,\n  > .small,\n  > small > a,\n  > .small > a {\n    color: inherit;\n  }\n}\n\n// Optional footer (stays gray in every modifier class)\n.panel-footer {\n  padding: @panel-footer-padding;\n  background-color: @panel-footer-bg;\n  border-top: 1px solid @panel-inner-border;\n  .border-bottom-radius((@panel-border-radius - 1));\n}\n\n\n// List groups in panels\n//\n// By default, space out list group content from panel headings to account for\n// any kind of custom content between the two.\n\n.panel {\n  > .list-group,\n  > .panel-collapse > .list-group {\n    margin-bottom: 0;\n\n    .list-group-item {\n      border-width: 1px 0;\n      border-radius: 0;\n    }\n\n    // Add border top radius for first one\n    &:first-child {\n      .list-group-item:first-child {\n        border-top: 0;\n        .border-top-radius((@panel-border-radius - 1));\n      }\n    }\n\n    // Add border bottom radius for last one\n    &:last-child {\n      .list-group-item:last-child {\n        border-bottom: 0;\n        .border-bottom-radius((@panel-border-radius - 1));\n      }\n    }\n  }\n  > .panel-heading + .panel-collapse > .list-group {\n    .list-group-item:first-child {\n      .border-top-radius(0);\n    }\n  }\n}\n// Collapse space between when there's no additional content.\n.panel-heading + .list-group {\n  .list-group-item:first-child {\n    border-top-width: 0;\n  }\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n// Tables in panels\n//\n// Place a non-bordered `.table` within a panel (not within a `.panel-body`) and\n// watch it go full width.\n\n.panel {\n  > .table,\n  > .table-responsive > .table,\n  > .panel-collapse > .table {\n    margin-bottom: 0;\n\n    caption {\n      padding-left: @panel-body-padding;\n      padding-right: @panel-body-padding;\n    }\n  }\n  // Add border top radius for first one\n  > .table:first-child,\n  > .table-responsive:first-child > .table:first-child {\n    .border-top-radius((@panel-border-radius - 1));\n\n    > thead:first-child,\n    > tbody:first-child {\n      > tr:first-child {\n        border-top-left-radius: (@panel-border-radius - 1);\n        border-top-right-radius: (@panel-border-radius - 1);\n\n        td:first-child,\n        th:first-child {\n          border-top-left-radius: (@panel-border-radius - 1);\n        }\n        td:last-child,\n        th:last-child {\n          border-top-right-radius: (@panel-border-radius - 1);\n        }\n      }\n    }\n  }\n  // Add border bottom radius for last one\n  > .table:last-child,\n  > .table-responsive:last-child > .table:last-child {\n    .border-bottom-radius((@panel-border-radius - 1));\n\n    > tbody:last-child,\n    > tfoot:last-child {\n      > tr:last-child {\n        border-bottom-left-radius: (@panel-border-radius - 1);\n        border-bottom-right-radius: (@panel-border-radius - 1);\n\n        td:first-child,\n        th:first-child {\n          border-bottom-left-radius: (@panel-border-radius - 1);\n        }\n        td:last-child,\n        th:last-child {\n          border-bottom-right-radius: (@panel-border-radius - 1);\n        }\n      }\n    }\n  }\n  > .panel-body + .table,\n  > .panel-body + .table-responsive,\n  > .table + .panel-body,\n  > .table-responsive + .panel-body {\n    border-top: 1px solid @table-border-color;\n  }\n  > .table > tbody:first-child > tr:first-child th,\n  > .table > tbody:first-child > tr:first-child td {\n    border-top: 0;\n  }\n  > .table-bordered,\n  > .table-responsive > .table-bordered {\n    border: 0;\n    > thead,\n    > tbody,\n    > tfoot {\n      > tr {\n        > th:first-child,\n        > td:first-child {\n          border-left: 0;\n        }\n        > th:last-child,\n        > td:last-child {\n          border-right: 0;\n        }\n      }\n    }\n    > thead,\n    > tbody {\n      > tr:first-child {\n        > td,\n        > th {\n          border-bottom: 0;\n        }\n      }\n    }\n    > tbody,\n    > tfoot {\n      > tr:last-child {\n        > td,\n        > th {\n          border-bottom: 0;\n        }\n      }\n    }\n  }\n  > .table-responsive {\n    border: 0;\n    margin-bottom: 0;\n  }\n}\n\n\n// Collapsible panels (aka, accordion)\n//\n// Wrap a series of panels in `.panel-group` to turn them into an accordion with\n// the help of our collapse JavaScript plugin.\n\n.panel-group {\n  margin-bottom: @line-height-computed;\n\n  // Tighten up margin so it's only between panels\n  .panel {\n    margin-bottom: 0;\n    border-radius: @panel-border-radius;\n\n    + .panel {\n      margin-top: 5px;\n    }\n  }\n\n  .panel-heading {\n    border-bottom: 0;\n\n    + .panel-collapse > .panel-body,\n    + .panel-collapse > .list-group {\n      border-top: 1px solid @panel-inner-border;\n    }\n  }\n\n  .panel-footer {\n    border-top: 0;\n    + .panel-collapse .panel-body {\n      border-bottom: 1px solid @panel-inner-border;\n    }\n  }\n}\n\n\n// Contextual variations\n.panel-default {\n  .panel-variant(@panel-default-border; @panel-default-text; @panel-default-heading-bg; @panel-default-border);\n}\n.panel-primary {\n  .panel-variant(@panel-primary-border; @panel-primary-text; @panel-primary-heading-bg; @panel-primary-border);\n}\n.panel-success {\n  .panel-variant(@panel-success-border; @panel-success-text; @panel-success-heading-bg; @panel-success-border);\n}\n.panel-info {\n  .panel-variant(@panel-info-border; @panel-info-text; @panel-info-heading-bg; @panel-info-border);\n}\n.panel-warning {\n  .panel-variant(@panel-warning-border; @panel-warning-text; @panel-warning-heading-bg; @panel-warning-border);\n}\n.panel-danger {\n  .panel-variant(@panel-danger-border; @panel-danger-text; @panel-danger-heading-bg; @panel-danger-border);\n}\n","// Panels\n\n.panel-variant(@border; @heading-text-color; @heading-bg-color; @heading-border) {\n  border-color: @border;\n\n  & > .panel-heading {\n    color: @heading-text-color;\n    background-color: @heading-bg-color;\n    border-color: @heading-border;\n\n    + .panel-collapse > .panel-body {\n      border-top-color: @border;\n    }\n    .badge {\n      color: @heading-bg-color;\n      background-color: @heading-text-color;\n    }\n  }\n  & > .panel-footer {\n    + .panel-collapse > .panel-body {\n      border-bottom-color: @border;\n    }\n  }\n}\n","// Embeds responsive\n//\n// Credit: Nicolas Gallagher and SUIT CSS.\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n\n  .embed-responsive-item,\n  iframe,\n  embed,\n  object,\n  video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0;\n  }\n}\n\n// Modifier class for 16:9 aspect ratio\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n// Modifier class for 4:3 aspect ratio\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n","//\n// Wells\n// --------------------------------------------------\n\n\n// Base class\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: @well-bg;\n  border: 1px solid @well-border;\n  border-radius: @border-radius-base;\n  .box-shadow(inset 0 1px 1px rgba(0,0,0,.05));\n  blockquote {\n    border-color: #ddd;\n    border-color: rgba(0,0,0,.15);\n  }\n}\n\n// Sizes\n.well-lg {\n  padding: 24px;\n  border-radius: @border-radius-large;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: @border-radius-small;\n}\n","//\n// Close icons\n// --------------------------------------------------\n\n\n.close {\n  float: right;\n  font-size: (@font-size-base * 1.5);\n  font-weight: @close-font-weight;\n  line-height: 1;\n  color: @close-color;\n  text-shadow: @close-text-shadow;\n  .opacity(.2);\n\n  &:hover,\n  &:focus {\n    color: @close-color;\n    text-decoration: none;\n    cursor: pointer;\n    .opacity(.5);\n  }\n\n  // Additional properties for button version\n  // iOS requires the button element instead of an anchor tag.\n  // If you want the anchor version, it requires `href=\"#\"`.\n  // See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n  button& {\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n    -webkit-appearance: none;\n  }\n}\n","//\n// Modals\n// --------------------------------------------------\n\n// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and shit\n\n// Kill the scroll on the body\n.modal-open {\n  overflow: hidden;\n}\n\n// Container that the modal scrolls within\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: @zindex-modal;\n  -webkit-overflow-scrolling: touch;\n\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n\n  // When fading in the modal, animate it to slide down\n  &.fade .modal-dialog {\n    .translate(0, -25%);\n    .transition-transform(~\"0.3s ease-out\");\n  }\n  &.in .modal-dialog { .translate(0, 0) }\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  background-color: @modal-content-bg;\n  border: 1px solid @modal-content-fallback-border-color; //old browsers fallback (ie8 etc)\n  border: 1px solid @modal-content-border-color;\n  border-radius: @border-radius-large;\n  .box-shadow(0 3px 9px rgba(0,0,0,.5));\n  background-clip: padding-box;\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: @zindex-modal-background;\n  background-color: @modal-backdrop-bg;\n  // Fade for backdrop\n  &.fade { .opacity(0); }\n  &.in { .opacity(@modal-backdrop-opacity); }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  padding: @modal-title-padding;\n  border-bottom: 1px solid @modal-header-border-color;\n  &:extend(.clearfix all);\n}\n// Close icon\n.modal-header .close {\n  margin-top: -2px;\n}\n\n// Title text within header\n.modal-title {\n  margin: 0;\n  line-height: @modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  padding: @modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  padding: @modal-inner-padding;\n  text-align: right; // right align buttons\n  border-top: 1px solid @modal-footer-border-color;\n  &:extend(.clearfix all); // clear it in case folks use .pull-* classes on buttons\n\n  // Properly space out buttons\n  .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; // account for input[type=\"submit\"] which gets the bottom margin like all other inputs\n  }\n  // but override that for button groups\n  .btn-group .btn + .btn {\n    margin-left: -1px;\n  }\n  // and override it for block buttons as well\n  .btn-block + .btn-block {\n    margin-left: 0;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@media (min-width: @screen-sm-min) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    width: @modal-md;\n    margin: 30px auto;\n  }\n  .modal-content {\n    .box-shadow(0 5px 15px rgba(0,0,0,.5));\n  }\n\n  // Modal sizes\n  .modal-sm { width: @modal-sm; }\n}\n\n@media (min-width: @screen-md-min) {\n  .modal-lg { width: @modal-lg; }\n}\n","//\n// Tooltips\n// --------------------------------------------------\n\n\n// Base class\n.tooltip {\n  position: absolute;\n  z-index: @zindex-tooltip;\n  display: block;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  .reset-text();\n  font-size: @font-size-small;\n\n  .opacity(0);\n\n  &.in     { .opacity(@tooltip-opacity); }\n  &.top    { margin-top:  -3px; padding: @tooltip-arrow-width 0; }\n  &.right  { margin-left:  3px; padding: 0 @tooltip-arrow-width; }\n  &.bottom { margin-top:   3px; padding: @tooltip-arrow-width 0; }\n  &.left   { margin-left: -3px; padding: 0 @tooltip-arrow-width; }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: @tooltip-max-width;\n  padding: 3px 8px;\n  color: @tooltip-color;\n  text-align: center;\n  background-color: @tooltip-bg;\n  border-radius: @border-radius-base;\n}\n\n// Arrows\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n// Note: Deprecated .top-left, .top-right, .bottom-left, and .bottom-right as of v3.3.1\n.tooltip {\n  &.top .tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -@tooltip-arrow-width;\n    border-width: @tooltip-arrow-width @tooltip-arrow-width 0;\n    border-top-color: @tooltip-arrow-color;\n  }\n  &.top-left .tooltip-arrow {\n    bottom: 0;\n    right: @tooltip-arrow-width;\n    margin-bottom: -@tooltip-arrow-width;\n    border-width: @tooltip-arrow-width @tooltip-arrow-width 0;\n    border-top-color: @tooltip-arrow-color;\n  }\n  &.top-right .tooltip-arrow {\n    bottom: 0;\n    left: @tooltip-arrow-width;\n    margin-bottom: -@tooltip-arrow-width;\n    border-width: @tooltip-arrow-width @tooltip-arrow-width 0;\n    border-top-color: @tooltip-arrow-color;\n  }\n  &.right .tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -@tooltip-arrow-width;\n    border-width: @tooltip-arrow-width @tooltip-arrow-width @tooltip-arrow-width 0;\n    border-right-color: @tooltip-arrow-color;\n  }\n  &.left .tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -@tooltip-arrow-width;\n    border-width: @tooltip-arrow-width 0 @tooltip-arrow-width @tooltip-arrow-width;\n    border-left-color: @tooltip-arrow-color;\n  }\n  &.bottom .tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -@tooltip-arrow-width;\n    border-width: 0 @tooltip-arrow-width @tooltip-arrow-width;\n    border-bottom-color: @tooltip-arrow-color;\n  }\n  &.bottom-left .tooltip-arrow {\n    top: 0;\n    right: @tooltip-arrow-width;\n    margin-top: -@tooltip-arrow-width;\n    border-width: 0 @tooltip-arrow-width @tooltip-arrow-width;\n    border-bottom-color: @tooltip-arrow-color;\n  }\n  &.bottom-right .tooltip-arrow {\n    top: 0;\n    left: @tooltip-arrow-width;\n    margin-top: -@tooltip-arrow-width;\n    border-width: 0 @tooltip-arrow-width @tooltip-arrow-width;\n    border-bottom-color: @tooltip-arrow-color;\n  }\n}\n",".reset-text() {\n  font-family: @font-family-base;\n  // We deliberately do NOT reset font-size.\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: @line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n}\n","//\n// Popovers\n// --------------------------------------------------\n\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: @zindex-popover;\n  display: none;\n  max-width: @popover-max-width;\n  padding: 1px;\n  // Our parent element can be arbitrary since popovers are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  .reset-text();\n  font-size: @font-size-base;\n\n  background-color: @popover-bg;\n  background-clip: padding-box;\n  border: 1px solid @popover-fallback-border-color;\n  border: 1px solid @popover-border-color;\n  border-radius: @border-radius-large;\n  .box-shadow(0 5px 10px rgba(0,0,0,.2));\n\n  // Offset the popover to account for the popover arrow\n  &.top     { margin-top: -@popover-arrow-width; }\n  &.right   { margin-left: @popover-arrow-width; }\n  &.bottom  { margin-top: @popover-arrow-width; }\n  &.left    { margin-left: -@popover-arrow-width; }\n}\n\n.popover-title {\n  margin: 0; // reset heading margin\n  padding: 8px 14px;\n  font-size: @font-size-base;\n  background-color: @popover-title-bg;\n  border-bottom: 1px solid darken(@popover-title-bg, 5%);\n  border-radius: (@border-radius-large - 1) (@border-radius-large - 1) 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n// Arrows\n//\n// .arrow is outer, .arrow:after is inner\n\n.popover > .arrow {\n  &,\n  &:after {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n  }\n}\n.popover > .arrow {\n  border-width: @popover-arrow-outer-width;\n}\n.popover > .arrow:after {\n  border-width: @popover-arrow-width;\n  content: \"\";\n}\n\n.popover {\n  &.top > .arrow {\n    left: 50%;\n    margin-left: -@popover-arrow-outer-width;\n    border-bottom-width: 0;\n    border-top-color: @popover-arrow-outer-fallback-color; // IE8 fallback\n    border-top-color: @popover-arrow-outer-color;\n    bottom: -@popover-arrow-outer-width;\n    &:after {\n      content: \" \";\n      bottom: 1px;\n      margin-left: -@popover-arrow-width;\n      border-bottom-width: 0;\n      border-top-color: @popover-arrow-color;\n    }\n  }\n  &.right > .arrow {\n    top: 50%;\n    left: -@popover-arrow-outer-width;\n    margin-top: -@popover-arrow-outer-width;\n    border-left-width: 0;\n    border-right-color: @popover-arrow-outer-fallback-color; // IE8 fallback\n    border-right-color: @popover-arrow-outer-color;\n    &:after {\n      content: \" \";\n      left: 1px;\n      bottom: -@popover-arrow-width;\n      border-left-width: 0;\n      border-right-color: @popover-arrow-color;\n    }\n  }\n  &.bottom > .arrow {\n    left: 50%;\n    margin-left: -@popover-arrow-outer-width;\n    border-top-width: 0;\n    border-bottom-color: @popover-arrow-outer-fallback-color; // IE8 fallback\n    border-bottom-color: @popover-arrow-outer-color;\n    top: -@popover-arrow-outer-width;\n    &:after {\n      content: \" \";\n      top: 1px;\n      margin-left: -@popover-arrow-width;\n      border-top-width: 0;\n      border-bottom-color: @popover-arrow-color;\n    }\n  }\n\n  &.left > .arrow {\n    top: 50%;\n    right: -@popover-arrow-outer-width;\n    margin-top: -@popover-arrow-outer-width;\n    border-right-width: 0;\n    border-left-color: @popover-arrow-outer-fallback-color; // IE8 fallback\n    border-left-color: @popover-arrow-outer-color;\n    &:after {\n      content: \" \";\n      right: 1px;\n      border-right-width: 0;\n      border-left-color: @popover-arrow-color;\n      bottom: -@popover-arrow-width;\n    }\n  }\n}\n","//\n// Carousel\n// --------------------------------------------------\n\n\n// Wrapper for the slide container and indicators\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n\n  > .item {\n    display: none;\n    position: relative;\n    .transition(.6s ease-in-out left);\n\n    // Account for jankitude on images\n    > img,\n    > a > img {\n      &:extend(.img-responsive);\n      line-height: 1;\n    }\n\n    // WebKit CSS3 transforms for supported devices\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .transition-transform(~'0.6s ease-in-out');\n      .backface-visibility(~'hidden');\n      .perspective(1000px);\n\n      &.next,\n      &.active.right {\n        .translate3d(100%, 0, 0);\n        left: 0;\n      }\n      &.prev,\n      &.active.left {\n        .translate3d(-100%, 0, 0);\n        left: 0;\n      }\n      &.next.left,\n      &.prev.right,\n      &.active {\n        .translate3d(0, 0, 0);\n        left: 0;\n      }\n    }\n  }\n\n  > .active,\n  > .next,\n  > .prev {\n    display: block;\n  }\n\n  > .active {\n    left: 0;\n  }\n\n  > .next,\n  > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  > .next {\n    left: 100%;\n  }\n  > .prev {\n    left: -100%;\n  }\n  > .next.left,\n  > .prev.right {\n    left: 0;\n  }\n\n  > .active.left {\n    left: -100%;\n  }\n  > .active.right {\n    left: 100%;\n  }\n\n}\n\n// Left/right controls for nav\n// ---------------------------\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: @carousel-control-width;\n  .opacity(@carousel-control-opacity);\n  font-size: @carousel-control-font-size;\n  color: @carousel-control-color;\n  text-align: center;\n  text-shadow: @carousel-text-shadow;\n  background-color: rgba(0, 0, 0, 0); // Fix IE9 click-thru bug\n  // We can't have this transition here because WebKit cancels the carousel\n  // animation if you trip this while in the middle of another animation.\n\n  // Set gradients for backgrounds\n  &.left {\n    #gradient > .horizontal(@start-color: rgba(0,0,0,.5); @end-color: rgba(0,0,0,.0001));\n  }\n  &.right {\n    left: auto;\n    right: 0;\n    #gradient > .horizontal(@start-color: rgba(0,0,0,.0001); @end-color: rgba(0,0,0,.5));\n  }\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    outline: 0;\n    color: @carousel-control-color;\n    text-decoration: none;\n    .opacity(.9);\n  }\n\n  // Toggles\n  .icon-prev,\n  .icon-next,\n  .glyphicon-chevron-left,\n  .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block;\n  }\n  .icon-prev,\n  .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px;\n  }\n  .icon-next,\n  .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px;\n  }\n  .icon-prev,\n  .icon-next {\n    width:  20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif;\n  }\n\n\n  .icon-prev {\n    &:before {\n      content: '\\2039';// SINGLE LEFT-POINTING ANGLE QUOTATION MARK (U+2039)\n    }\n  }\n  .icon-next {\n    &:before {\n      content: '\\203a';// SINGLE RIGHT-POINTING ANGLE QUOTATION MARK (U+203A)\n    }\n  }\n}\n\n// Optional indicator pips\n//\n// Add an unordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n\n  li {\n    display: inline-block;\n    width:  10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid @carousel-indicator-border-color;\n    border-radius: 10px;\n    cursor: pointer;\n\n    // IE8-9 hack for event handling\n    //\n    // Internet Explorer 8-9 does not support clicks on elements without a set\n    // `background-color`. We cannot use `filter` since that's not viewed as a\n    // background color by the browser. Thus, a hack is needed.\n    // See https://developer.mozilla.org/en-US/docs/Web/Events/click#Internet_Explorer\n    //\n    // For IE8, we set solid black as it doesn't support `rgba()`. For IE9, we\n    // set alpha transparency for the best results possible.\n    background-color: #000 \\9; // IE8\n    background-color: rgba(0,0,0,0); // IE9\n  }\n  .active {\n    margin: 0;\n    width:  12px;\n    height: 12px;\n    background-color: @carousel-indicator-active-bg;\n  }\n}\n\n// Optional captions\n// -----------------------------\n// Hidden by default for smaller viewports\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: @carousel-caption-color;\n  text-align: center;\n  text-shadow: @carousel-text-shadow;\n  & .btn {\n    text-shadow: none; // No shadow for button elements in carousel-caption\n  }\n}\n\n\n// Scale up controls for tablets and up\n@media screen and (min-width: @screen-sm-min) {\n\n  // Scale up the controls a smidge\n  .carousel-control {\n    .glyphicon-chevron-left,\n    .glyphicon-chevron-right,\n    .icon-prev,\n    .icon-next {\n      width: (@carousel-control-font-size * 1.5);\n      height: (@carousel-control-font-size * 1.5);\n      margin-top: (@carousel-control-font-size / -2);\n      font-size: (@carousel-control-font-size * 1.5);\n    }\n    .glyphicon-chevron-left,\n    .icon-prev {\n      margin-left: (@carousel-control-font-size / -2);\n    }\n    .glyphicon-chevron-right,\n    .icon-next {\n      margin-right: (@carousel-control-font-size / -2);\n    }\n  }\n\n  // Show and left align the captions\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  // Move up the indicators\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n","// Clearfix\n//\n// For modern browsers\n// 1. The space content is one way to avoid an Opera bug when the\n//    contenteditable attribute is included anywhere else in the document.\n//    Otherwise it causes space to appear at the top and bottom of elements\n//    that are clearfixed.\n// 2. The use of `table` rather than `block` is only necessary if using\n//    `:before` to contain the top-margins of child elements.\n//\n// Source: http://nicolasgallagher.com/micro-clearfix-hack/\n\n.clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n","// Center-align a block level element\n\n.center-block() {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n","// CSS image replacement\n//\n// Heads up! v3 launched with only `.hide-text()`, but per our pattern for\n// mixins being reused as classes with the same name, this doesn't hold up. As\n// of v3.0.1 we have added `.text-hide()` and deprecated `.hide-text()`.\n//\n// Source: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757\n\n// Deprecated as of v3.0.1 (has been removed in v4)\n.hide-text() {\n  font: ~\"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n// New mixin to use as of v3.0.1\n.text-hide() {\n  .hide-text();\n}\n","//\n// Responsive: Utility classes\n// --------------------------------------------------\n\n\n// IE10 in Windows (Phone) 8\n//\n// Support for responsive views via media queries is kind of borked in IE10, for\n// Surface/desktop in split view and for Windows Phone 8. This particular fix\n// must be accompanied by a snippet of JavaScript to sniff the user agent and\n// apply some conditional CSS to *only* the Surface/desktop Windows 8. Look at\n// our Getting Started page for more information on this bug.\n//\n// For more information, see the following:\n//\n// Issue: https://github.com/twbs/bootstrap/issues/10497\n// Docs: http://getbootstrap.com/getting-started/#support-ie10-width\n// Source: http://timkadlec.com/2013/01/windows-phone-8-and-device-width/\n// Source: http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/\n\n@-ms-viewport {\n  width: device-width;\n}\n\n\n// Visibility utilities\n// Note: Deprecated .visible-xs, .visible-sm, .visible-md, and .visible-lg as of v3.2.0\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  .responsive-invisibility();\n}\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n.visible-xs {\n  @media (max-width: @screen-xs-max) {\n    .responsive-visibility();\n  }\n}\n.visible-xs-block {\n  @media (max-width: @screen-xs-max) {\n    display: block !important;\n  }\n}\n.visible-xs-inline {\n  @media (max-width: @screen-xs-max) {\n    display: inline !important;\n  }\n}\n.visible-xs-inline-block {\n  @media (max-width: @screen-xs-max) {\n    display: inline-block !important;\n  }\n}\n\n.visible-sm {\n  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) {\n    .responsive-visibility();\n  }\n}\n.visible-sm-block {\n  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) {\n    display: block !important;\n  }\n}\n.visible-sm-inline {\n  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) {\n    display: inline !important;\n  }\n}\n.visible-sm-inline-block {\n  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) {\n    display: inline-block !important;\n  }\n}\n\n.visible-md {\n  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) {\n    .responsive-visibility();\n  }\n}\n.visible-md-block {\n  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) {\n    display: block !important;\n  }\n}\n.visible-md-inline {\n  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) {\n    display: inline !important;\n  }\n}\n.visible-md-inline-block {\n  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) {\n    display: inline-block !important;\n  }\n}\n\n.visible-lg {\n  @media (min-width: @screen-lg-min) {\n    .responsive-visibility();\n  }\n}\n.visible-lg-block {\n  @media (min-width: @screen-lg-min) {\n    display: block !important;\n  }\n}\n.visible-lg-inline {\n  @media (min-width: @screen-lg-min) {\n    display: inline !important;\n  }\n}\n.visible-lg-inline-block {\n  @media (min-width: @screen-lg-min) {\n    display: inline-block !important;\n  }\n}\n\n.hidden-xs {\n  @media (max-width: @screen-xs-max) {\n    .responsive-invisibility();\n  }\n}\n.hidden-sm {\n  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) {\n    .responsive-invisibility();\n  }\n}\n.hidden-md {\n  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) {\n    .responsive-invisibility();\n  }\n}\n.hidden-lg {\n  @media (min-width: @screen-lg-min) {\n    .responsive-invisibility();\n  }\n}\n\n\n// Print utilities\n//\n// Media queries are placed on the inside to be mixin-friendly.\n\n// Note: Deprecated .visible-print as of v3.2.0\n.visible-print {\n  .responsive-invisibility();\n\n  @media print {\n    .responsive-visibility();\n  }\n}\n.visible-print-block {\n  display: none !important;\n\n  @media print {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n\n  @media print {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n\n  @media print {\n    display: inline-block !important;\n  }\n}\n\n.hidden-print {\n  @media print {\n    .responsive-invisibility();\n  }\n}\n","// Responsive utilities\n\n//\n// More easily include all the states for responsive-utilities.less.\n.responsive-visibility() {\n  display: block !important;\n  table&  { display: table !important; }\n  tr&     { display: table-row !important; }\n  th&,\n  td&     { display: table-cell !important; }\n}\n\n.responsive-invisibility() {\n  display: none !important;\n}\n","@import \"bootstrap\";\n\n@lloyds-primary-racing: #024731;\n@lloyds-primary-core:   #006a4d;\n@lloyds-primary-apple:  #77b800;\n\n@lloyds-secondary-blue:        #2178b0;\n@lloyds-secondary-dark-blue:   #002973;\n@lloyds-secondary-purple:      #481468;\n@lloyds-secondary-red:         #dc2a4d;\n@lloyds-secondary-orange:      #d24702;\n@lloyds-secondary-sand:        #c8d882;\n@lloyds-secondary-muted-green: #2d8259;\n@lloyds-secondary-gray:        #68777c;\n\n\n//  TODO - revist, should just use pure bootstrap import\n@brand-primary:         @lloyds-primary-core;\n@brand-success:         @lloyds-primary-apple;\n@brand-info:            @lloyds-primary-core;\n@brand-warning:         @lloyds-secondary-orange;\n@brand-danger:          @lloyds-secondary-red;\n\n\n@border-radius-base:        0;\n@border-radius-large:       0;\n@border-radius-small:       0;\n\n\n//== Navbar\n//\n//##\n\n// Basics of a navbar\n@navbar-height:                    60px;\n@navbar-margin-bottom:             @line-height-computed;\n@navbar-border-radius:             @border-radius-base;\n@navbar-padding-horizontal:        floor((@grid-gutter-width / 2));\n@navbar-padding-vertical:          ((@navbar-height - @line-height-computed) / 2);\n@navbar-collapse-max-height:       50px;\n\n@navbar-default-color:             @text-color;\n@navbar-default-bg:                white;\n@navbar-default-border:            darken(@navbar-default-bg, 6.5%);\n\n// Navbar links\n@navbar-default-link-color:                @text-color;\n@navbar-default-link-hover-color:          #fff;\n@navbar-default-link-hover-bg:             darken(@navbar-default-bg, 8%);\n@navbar-default-link-active-color:         #fff;\n@navbar-default-link-active-bg:            darken(@navbar-default-bg, 8%);\n@navbar-default-link-disabled-color:       #ccc;\n@navbar-default-link-disabled-bg:          transparent;\n\n// Navbar brand label\n@navbar-default-brand-color:               @navbar-default-link-color;\n@navbar-default-brand-hover-color:         #fff;\n@navbar-default-brand-hover-bg:            none;\n\n// Navbar toggle\n@navbar-default-toggle-hover-bg:           darken(@navbar-default-bg, 8%);\n@navbar-default-toggle-icon-bar-bg:        @text-color;\n@navbar-default-toggle-border-color:       darken(@navbar-default-bg, 8%);\n\n\n// Inverted navbar\n// Reset inverted navbar basics\n@navbar-inverse-color:                      #ccc;\n@navbar-inverse-bg:                         @lloyds-primary-core;\n@navbar-inverse-border:                     darken(@navbar-inverse-bg, 10%);\n\n// Inverted navbar links\n@navbar-inverse-link-color:                 #ccc;\n@navbar-inverse-link-hover-color:           #fff;\n@navbar-inverse-link-hover-bg:              darken(@navbar-inverse-bg, 12%);\n@navbar-inverse-link-active-color:          @navbar-inverse-link-hover-color;\n@navbar-inverse-link-active-bg:             darken(@navbar-inverse-bg, 12%);\n@navbar-inverse-link-disabled-color:        #ccc;\n@navbar-inverse-link-disabled-bg:           transparent;\n\n// Inverted navbar brand label\n@navbar-inverse-brand-color:                @navbar-inverse-link-color;\n@navbar-inverse-brand-hover-color:          #fff;\n@navbar-inverse-brand-hover-bg:             none;\n\n// Inverted navbar toggle\n@navbar-inverse-toggle-hover-bg:            darken(@navbar-inverse-bg, 12%);\n@navbar-inverse-toggle-icon-bar-bg:         #fff;\n@navbar-inverse-toggle-border-color:        darken(@navbar-inverse-bg, 12%);\n\n\n//== Navs\n//\n//##\n\n//=== Shared nav styles\n@nav-link-padding:                          10px 15px;\n@nav-link-hover-bg:                         @gray-lighter;\n\n@nav-disabled-link-color:                   @gray-light;\n@nav-disabled-link-hover-color:             @gray-light;\n\n//== Tabs\n@nav-tabs-border-color:                     white;\n\n@nav-tabs-link-hover-border-color:          @gray-lighter;\n\n@nav-tabs-active-link-hover-bg:             @body-bg;\n@nav-tabs-active-link-hover-color:          @gray;\n@nav-tabs-active-link-hover-border-color:   white;\n\n@nav-tabs-justified-link-border-color:            #ddd;\n@nav-tabs-justified-active-link-border-color:     @body-bg;\n\n//== Pills\n@nav-pills-border-radius:                   @border-radius-base;\n@nav-pills-active-link-hover-bg:            @component-active-bg;\n@nav-pills-active-link-hover-color:         @component-active-color;\n\n\n\n\n\n@font-face {\n  font-family: 'lloyds';\n  src: url('./lloyds_bank_jack-regularWEB.woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n\nbody {\n  background: white;\n  font-family: 'lloyds';\n}\n\n.navbar-brand {\n  padding: 10px 15px;\n}\n\n.navbar {\n  margin-bottom: 0;\n  border: 0;\n\n  .navbar-brand {\n    color: white;\n\n    img {\n      height:40px; \n      width: auto;\n      background: @lloyds-primary-core;\n      padding: 0 0 0 15px;\n    }\n  }\n}\n\n.navbar-inverse {\n  .navbar-nav > li > a {\n    color: white;\n\n  }\n}\n\n.container {\n  background: #efedea;\n\n  .jumbotron {\n    background: @lloyds-secondary-muted-green;\n    color: white;\n    width: 100%;\n  }\n}\n\n.tabs {\n  margin-bottom: 1em; \n}\n\n.tab-content {\n  background: white;\n  padding: 20px;\n}\n\n.navbar-header {\n  float: left;\n}\n\n.glyphicon-thumbs-down {\n  color: red;\n}\n\n.glyphicon-thumbs-up {\n  color: green;\n}\n\n\n\n\n.navbar .hideShow {\n\n  line-height: 60px; \n  padding-right: 10px;\n  color: @brand-primary;\n\n  .btn {\n    background: white;\n    border: 1px solid white;\n\n    &:hover {\n      background: #000;\n      color:white;\n      \n    }\n  }\n}\n\n.navbar-inverse .navbar-nav > li > a:focus {\n  background: none;\n}\n\n@import \"lloyds-widgets.less\";\n@import \"lloyds-chat.less\";\n\n\n",".wrapper {\n  font-family: 'lloyds';\n  height: calc(~\"100vh - 60px\");\n  padding-top: 6px;\n  width: 100%;\n\n.one, .two, .three {\n  float: left;\n  width: 25%;\n  overflow: hidden;\n}\n\n.two {\n  width: 50%;\n}\n\n.two.col1Hidden,\n.two.col3Hidden {\n  width: 75%;\n}\n\n.two.col1Hidden.col3Hidden {\n  width: 100%;\n}\n\n.two.leftColHidden {\n    width: 75%;\n}\n\n.custom-widget {\n  float: left;\n  padding: 0 3px;\n  width: calc(~\"(100vw / 8 * 1)\");\n  margin-bottom: 6px;\n}\n\n.widget-content {\n  border: 1px solid rgba(0,0,0,0.2);\n  background-color: white;\n  box-shadow: 0 0 2px rgba(0,0,0,.15);\n  overflow: hidden;\n  height: calc(~\"(96vh - 122px) / 5\");    \n  display: flex;\n  flex-direction: column;\n}\n\n.cellDoubleHeight .widget-content {\n  height: calc(~\"(96vh - 122px) / 5 * 2 + 6px\");\n\n  .widget-body {\n      padding: 20px;\n  }\n}\n\n.cellDoubleWidth {\n  width: calc(~\"(100vw / 8 * 2)\");\n}\n\n.cellTripleWidth {\n  width: calc(~\"(100vw / 8 * 3)\");\n}\n\n.cellQuadWidth {\n  width: calc(~\"(100vw / 8 * 4)\");\n}\n\n.one {\n  .category-head {\n      & > div {\n     background: linear-gradient(90deg,#02874f,#5fb24f);\n      }\n  }\n}\n\n.two { \n  .category-head {\n      & > div {\n     background: linear-gradient(90deg,#18519d,#3192d0);\n      }\n  }\n\n  h1 {\n    color: #18519d;\n  }\n}\n\n.three {\n  .category-head {\n      & > div {\n     background: linear-gradient(90deg,#9c1a5d,#cd143e);\n      }\n  }\n\n  img {\n      top: 8px;\n  }\n}\n\n#quality.category-head {\n    clear: both;\n    margin-top: 10px;\n    & > div {\n     background: linear-gradient(90deg,#d74f14,#f7a500);\n    }\n  }\n\n.category-head {\n  // padding: 0 3px;\n  width: 100%;\n  margin-bottom: 6px;\n\n  & > div {\n      margin: 0 3px;\n      height: 4vh;\n      padding: 0 20px 0 4.5vh;\n      box-shadow: 0 0 2px rgba(0,0,0,.3);\n      position: relative;\n  }\n  \n  h5, h6 {\n      color: white;\n      line-height: 1.2;\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n  }\n\n  h5 {\n      margin: 0;\n      font-size: 1.5vh;\n      padding-top: 0.5vh;\n  }\n\n  h6 {\n      font-size: 1.2vh;\n  }\n\n  img {\n      position: absolute;\n      top: 1vh;\n      left: 12px;\n      height: 2vh;\n  }\n}\n\n.widget-title {\n  font-size: 22px;\n  text-transform: uppercase;\n  color: #666;\n  border-bottom: 1px solid #ddd;\n  padding: 0;\n  display: flex;\n  position: relative;\n  height: 4vh;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background: #f5f5f5;\n\n  h6 {\n    flex: 1 1 auto;\n    padding-left:10px;\n    line-height: 1;\n    margin: 0;\n    font-size: 1.5vh;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .fa {\n      flex: 0 1 auto;\n      width: 30px;\n      padding-right: 10px;\n      font-size: 2vh;\n      text-align: right;\n  }\n}\n\n.widget-body {\n  height: 110px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding: 10px;\n  flex-grow: 1;\n\n  h1 {\n    font-size: 7vh;\n    font-weight: bold;\n  }\n\n  h5 {\n      position: absolute;\n      width: 100%;\n  }\n\n  h6,\n  .magnitude-container {\n      display: inline;\n      text-align: center;\n\n      .number,\n      .symbol {\n          font-size: 5vh;\n      }\n  }\n\n  .unit {\n      font-size: 20px;\n  }\n\n  .sub-widget {\n      display: none;\n  }\n}\n\n  .widget-body .sub-widget {\n      text-align: center;\n      padding: 0 10px;\n      border-right: 1px solid lightgrey;\n      display: block;\n  }\n\n  .widget-body .sub-widget:last-child {\n      border: none;\n  }\n\n  .widget-body .fa-thumbs-up,\n  .widget-body .fa-thumbs-down {\n      font-size: 4vh;\n  }\n\n  .widget-body h5 {\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n      height: calc(~\"(100vh - 210px) / 5 - 4rem\");\n      font-size: 2vh;\n      margin: 0;\n  }\n}\n\n\n\n.canvasWrapper {\n  height: calc(~\"(69vh - 122px) / 5 - 20px\");\n  width: calc(~\"(69vh - 122px) / 5 - 20px\");\n}",".panel-default {\n  \n  position: absolute; right: 20px; bottom: -21px; width: 330px; height: 350px; \n  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.6);\n  border: 0;\n\n  &>.panel-heading {\n    color: white;\n    background: @lloyds-primary-core;\n    height: 100px;\n    cursor: pointer;\n\n    .panel-title {\n      font-size: 2rem;\n\n      img {\n        height: 42px; \n        margin-bottom:0.25rem; \n        margin-right: 10px; \n        padding: 5px; \n        background: white; \n        border-radius: 50%; \n        width: 42px;\n      }\n    }\n\n    p {\n      padding: 1rem 0 0 0; \n    }\n\n    .glyphicon {\n      margin-top: 10px;\n    }\n\n    .glyphicon-triangle-bottom {\n      display: block;\n    }\n    .glyphicon-triangle-top {\n      display: none;\n    }\n\n  }\n\n  .bubble {\n    background: @lloyds-primary-apple;\n    padding: 8px;\n    border-radius: 8px;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.4rem; \n\n    a {\n      color: white;\n      font-weight: bold;\n    }\n\n  }\n\n  .panel-footer {\n    display: none;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n  }\n\n  &> .panel-heading .badge.badge-error {\n    background-color: @lloyds-secondary-red;\n    font-size: 2rem;\n    margin-left: 4px;\n    margin-top: -4px;\n  }\n  \n}\n\n\n\n.panel-default.minimised {\n\n  height: 60px;\n  overflow: hidden;\n\n\n  &>.panel-heading {\n\n    height: 60px;\n\n    // p {\n    //   height: 0;\n    //   padding: 0;\n    //   overflow: hidden;\n    //   margin: 0;\n\n    // }\n\n    .glyphicon-triangle-bottom {\n      display: none;\n    }\n    .glyphicon-triangle-top {\n      display: block;\n    }\n\n  }\n\n  .panel-body,\n  .panel-footer {\n    margin: 0;\n    height: 0;\n    padding: 0;\n  }\n\n  \n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/components/dumb/basic/basic.component.html":
/*!********************************************************!*\
  !*** ./src/components/dumb/basic/basic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>LBG Speedy: {{$ctrl.content}}</h1>"

/***/ }),

/***/ "./src/components/dumb/basic/basic.component.js":
/*!******************************************************!*\
  !*** ./src/components/dumb/basic/basic.component.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basicComponent = __webpack_require__(/*! ./basic.component.html */ "./src/components/dumb/basic/basic.component.html");

var _basicComponent2 = _interopRequireDefault(_basicComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicController = function () {
  function BasicController() {
    _classCallCheck(this, BasicController);
  }

  _createClass(BasicController, [{
    key: '$onInit',
    value: function $onInit() {
      console.log('basic component initialised');
    }
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      console.log('basic component changed');
    }
  }, {
    key: '$onDestroy',
    value: function $onDestroy() {
      console.log('basic component destroyed');
    }
  }]);

  return BasicController;
}();

var BasicComponent = {
  template: _basicComponent2.default,
  bindings: {
    content: '@'
  },
  controller: BasicController
};

exports.default = BasicComponent;

/***/ }),

/***/ "./src/components/dumb/chat/chat.component.html":
/*!******************************************************!*\
  !*** ./src/components/dumb/chat/chat.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" ng-class=\"{ minimised: $ctrl.minimised }\"> \n    <div class=\"panel-heading\" ng-click=\"$ctrl.showHide()\"> \n      <h3 class=\"panel-title\"><img src=\"../dist/assets/img/bot.png\" />  \n        Insights <span ng-if=\"$ctrl.insightsCount\" class=\"badge badge-error\">{{$ctrl.insightsCount}}</span>\n        <span class=\"glyphicon glyphicon-triangle-bottom pull-right\"></span> \n        <span class=\"glyphicon glyphicon-triangle-top pull-right\"></span> \n      </h3> \n      <p>I'm here to provide some insights into your metrics.</p> \n    </div> \n    <div class=\"panel-body\"> \n      <div class=\"bubble\">It looks like your DOR to DOD is slipping. \n        <a ng-click=\"$ctrl.also()\" target=\"_blank\" href=\"https://confluence.devops.lloydsbanking.com/display/ET/Speedy+FAQ\">Find out how to improve this <span class=\"glyphicon glyphicon-new-window\"></span></a> \n      </div> \n    </div> \n    <div class=\"panel-footer\"> \n      <input type=\"text\" placeholder=\"Potential future chat feature\" style=\"padding: 9px 20px; width: 230px;\" /> \n      <a class=\"btn btn-primary pull-right\">send</a> \n    </div> \n  </div>"

/***/ }),

/***/ "./src/components/dumb/chat/chat.component.js":
/*!****************************************************!*\
  !*** ./src/components/dumb/chat/chat.component.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chatComponent = __webpack_require__(/*! ./chat.component.html */ "./src/components/dumb/chat/chat.component.html");

var _chatComponent2 = _interopRequireDefault(_chatComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatController = function () {
  function ChatController() {
    _classCallCheck(this, ChatController);

    this.minimised = true;
    this.insightsCount = 1;
  }

  _createClass(ChatController, [{
    key: '$onInit',
    value: function $onInit() {
      console.log('chat component initialised');
    }
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      console.log('chat component changed');
    }
  }, {
    key: '$onDestroy',
    value: function $onDestroy() {
      console.log('chat component destroyed');
    }
  }, {
    key: 'showHide',
    value: function showHide() {
      this.minimised = !this.minimised;
    }
  }, {
    key: 'also',
    value: function also() {
      this.insightsCount = null;
      console.log();
    }
  }]);

  return ChatController;
}();

var ChatComponent = {
  template: _chatComponent2.default,
  bindings: {
    content: '@'
  },
  controller: ChatController
};

exports.default = ChatComponent;

/***/ }),

/***/ "./src/components/dumb/form/input-number/input-number.component.html":
/*!***************************************************************************!*\
  !*** ./src/components/dumb/form/input-number/input-number.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label>{{$ctrl.name}}\n    <span ng-if=\"$ctrl.description\" class=\"glyphicon glyphicon-question-sign\" uib-tooltip=\"{{$ctrl.description}}\" tooltip-placement=\"top-left\"></span>\n  </label>\n  <input type=\"number\" class=\"form-control\" placeholder=\"{{$ctrl.placeholder}}\" ng-model=\"$ctrl.value\" ng-required=\"required\">\n</div>\n"

/***/ }),

/***/ "./src/components/dumb/form/input-number/input-number.component.js":
/*!*************************************************************************!*\
  !*** ./src/components/dumb/form/input-number/input-number.component.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inputNumberComponent = __webpack_require__(/*! ./input-number.component.html */ "./src/components/dumb/form/input-number/input-number.component.html");

var _inputNumberComponent2 = _interopRequireDefault(_inputNumberComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: '$onInit',
    value: function $onInit() {}
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      this.placeholder = this.placeholder || this.name;
    }
  }]);

  return Controller;
}();

var InputTextComponent = {
  template: _inputNumberComponent2.default,
  bindings: {
    placeholder: '@',
    name: '@',
    description: '@',
    value: '='
  },
  controller: Controller
};

exports.default = InputTextComponent;

/***/ }),

/***/ "./src/components/dumb/form/input-text/input-text.component.html":
/*!***********************************************************************!*\
  !*** ./src/components/dumb/form/input-text/input-text.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label>{{$ctrl.name}}\n    <span ng-if=\"$ctrl.description\" class=\"glyphicon glyphicon-question-sign\" uib-tooltip=\"{{$ctrl.description}}\" tooltip-placement=\"top-left\"></span>\n  </label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"{{$ctrl.placeholder}}\" ng-model=\"$ctrl.value\">\n  <small ng-if=\"$ctrl.required\" class=\"form-text text-muted\">\n    This field is required\n  </small>\n</div>\n"

/***/ }),

/***/ "./src/components/dumb/form/input-text/input-text.component.js":
/*!*********************************************************************!*\
  !*** ./src/components/dumb/form/input-text/input-text.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inputTextComponent = __webpack_require__(/*! ./input-text.component.html */ "./src/components/dumb/form/input-text/input-text.component.html");

var _inputTextComponent2 = _interopRequireDefault(_inputTextComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: '$onInit',
    value: function $onInit() {}
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      this.placeholder = this.placeholder || this.name;
    }
  }]);

  return Controller;
}();

var InputTextComponent = {
  template: _inputTextComponent2.default,
  bindings: {
    placeholder: '@',
    name: '@',
    description: '@',
    required: '@',
    value: '='
  },
  controller: Controller
};

exports.default = InputTextComponent;

/***/ }),

/***/ "./src/components/dumb/form/input-textarea/input-textarea.component.html":
/*!*******************************************************************************!*\
  !*** ./src/components/dumb/form/input-textarea/input-textarea.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n\t<label>{{$ctrl.name}}\n    <span ng-if=\"$ctrl.description\" class=\"glyphicon glyphicon-question-sign\" uib-tooltip=\"{{$ctrl.description}}\" tooltip-placement=\"top-left\"></span>\n  </label>\n  <textarea class=\"form-control json\" ng-model=\"$ctrl.value\"></textarea>\n</div>"

/***/ }),

/***/ "./src/components/dumb/form/input-textarea/input-textarea.component.js":
/*!*****************************************************************************!*\
  !*** ./src/components/dumb/form/input-textarea/input-textarea.component.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inputTextareaComponent = __webpack_require__(/*! ./input-textarea.component.html */ "./src/components/dumb/form/input-textarea/input-textarea.component.html");

var _inputTextareaComponent2 = _interopRequireDefault(_inputTextareaComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: '$onInit',
    value: function $onInit() {}
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      this.placeholder = this.placeholder || this.name;
    }
  }]);

  return Controller;
}();

var InputTextareaComponent = {
  template: _inputTextareaComponent2.default,
  bindings: {
    value: '=',
    name: '@',
    description: '@'
  },
  controller: Controller
};

exports.default = InputTextareaComponent;

/***/ }),

/***/ "./src/components/dumb/nav/nav.component.html":
/*!****************************************************!*\
  !*** ./src/components/dumb/nav/nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\" style=\"\">\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAA0CAMAAADIWpbvAAAA4VBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8dHRv9/f1ra2o9PTsiIiDFxMRHR0UnJyX19fXs7OytraxfX15WVlVOTk1lZWQ4ODeLi4p+fn1wcG8yMjAsLCqampnV1dWkpKPg4ODc3Ny0tLSFhITl5eTOzs27u7uSkpF0dHPRjR0TAAAAKXRSTlMAzA/Sllr8HTzixJsxCu/p2mVKFgSspYVA9vMkuYxssoB2Nyq/U3uQIT9kSksAAAUwSURBVGje7dl5c5pAGAZw0ASjiEc8o7aas30WELzvW3N9/w/UdxekHhli+0cnZXymQ2DHWffnu4dppK8d/EWkr50z6Uw6JWfSmXQmfdGcSWfSv48/aT6c60EjmVO7rQeKZBmsYY6DRGquFszcGMYqOKT1os7YpD1oBob0vJ4yyqJn6EEhLcbMHjD21u/N/ohUzkinJiSu/47Uro/0LmOzTrd1RAojKrm5BC69zrLpBwA31SLdq0DNab0HEloEPNHKk+vIfIvSc6oW8XwQSVYety0FIO7cXQG4FXcXAHUQRkw83VKPP08n6VZzWWeNtj1tn0qKyHCjZjkkmqVGgfsmReCmlOZt8YTzpJQPSJTvToOWpH5+kxKhI1IaSJZ9q9Q8XDT9OuvPGsPmiaRQCkjmvxcqEGOhH4+iHjdQIpwUVlU54X7ehH+opS9ieWmHlIvHizV6tTN107zgGY+Ei0PSo4Lkvd/Ee5m9Gu/YTafBzNm4McCJJJUGpfGbYpJr7gjBy/QkRhNxxqQVFOBOygCVw4XlDroG0LwV6pSCpy1JgRLfJxUVJOJ+a0l/tdaWsTPHWhubsf6mx0bN1rJ5AimiIEUEYQJkScqJORRJoBTZkijfgSp/imU/Jj0BZbePdJXmrksqALE90t0NF/mRlr36lNXrbf11+D4ezWabTt9gjE1606nd7Xesz0nfucBNDEpIKit8AeSdbcIjZaO40aQUodOhD0jXSTyI5xxK2iN17pKu8+LeI93TJ3Un+ZIsGr85YA3jrW1Zr4u34XBUZ5S6yahxMFh9SvoB3O9sVlfimr8G5OwuScrxMtCIACVX3COJ3KiaW3NVyiYR25KoIap5pFQSN1eSP2nOWGfZXr2Pl61Zx7aN0ZgswtQYv7Sahtn6jJQHvB35lsZABaFaJPga2COpQJwEBY5CLnRIUirC+Q24Etc7l8Q/oIJHShDw5yck3WYNCy89qz3gELMnfjAx9/q9ud6xW59XyZ0J3lDuFPBx7JMqLj10GwZQ3d/xLn+koJBFSyDFz22q85akRaGUvYmXBlIRfxKeB5OptbDf6uww9e60j5ZpN/1JaeBp2xqm9eJOwFR2nxSiZb19WZEq9fNge9BoMTlHTlVVYwqUjEMSb1X1SHwipDL+JLR6E/ttMjkSdVaw6i28NPr+JDp/ku57PAI5Z/fdQhySd/BStg/FA5L0wDsPw0thS5JipNiSxEwIZ/xJusHM9gHHNPuWOHSHaI7GviTxHnJZiEq0gD4m3VeAREaK58rbw7l8QCqXIPMdPJYuqOptuoRkdkuKK4BHEotXDvmShvXBq0uyF8Nxt2sMX+Bm3Wjt73iKLHLFSSlxeyFpMvhXhFxUfEM4JiVlucS3tKIYTTh/UUmCTzKP9JBO13IJfhZUyeDV8dIhccQeKVvlJh+S3tjora5DWuMgzcH7PslJSeMk75uZVt2208MRyU04zgtacp/kyPF3PFX6qbhnLFWGXuORIqVdkqTFqJiaT5VWy+Wmzhj96+AonYa+Q8rLTmhRXMtuMoKgykoyVvOmeFyW3XplZJEf1y6glpcVuXIpedFkkVyByGlZ9k7tnCzfUzdXznFOryBDXladXio0Bh8S8GpORusGM5pHIr1jNP/LXwFtZqHLuvggq/H/+Vvtpge02VuQ/mvy3aDLaNIKEMkY0UXvdgJE6nISnqft4JBMZ2eYTZ8DQ1qzoc7LZE+soJBg9hagvDTMZlBIz/MWKPp8rgeFFPg/mZ1JXyZn0pl0Ss6kM+nE/AIw3znYRtbdJgAAAABJRU5ErkJggg==\">\n      </a>\n    </div>\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav  nav-pills pull-right\">\n        <li class=\"hideShow\">\n          <span class=\"btn\" data-toggle=\"modal\" data-target=\".modal-hideShow\">\n            <span class=\"fa fa-th\"></span> Hide/Show\n          </span>\n        </li>\n        <li role=\"presentation\" class=\"dropdown\" uib-dropdown>\n          <a class=\"dropdown-toggle btn-lg\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n            uib-dropdown-toggle>\n            Welcome Speedy User\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu>\n            <li>\n              <a href=\"/\">Readme</a>\n            </li>\n            <li>\n              <a href=\"#/sink\">Kitchen Sink</a>\n            </li>\n            <li>\n              <a href=\"#/status\">Status</a>\n            </li>\n            <li>\n              <a href=\"#/settings\">Settings</a>\n            </li>\n            <li>\n              <a href=\"#/team-dashboard\">Team Dashboard</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/components/dumb/nav/nav.component.js":
/*!**************************************************!*\
  !*** ./src/components/dumb/nav/nav.component.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navComponent = __webpack_require__(/*! ./nav.component.html */ "./src/components/dumb/nav/nav.component.html");

var _navComponent2 = _interopRequireDefault(_navComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavController = function () {
  function NavController() {
    _classCallCheck(this, NavController);
  }

  _createClass(NavController, [{
    key: '$onInit',
    value: function $onInit() {
      console.log('nav component initialised');
    }
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      console.log('nav component changed');
    }
  }, {
    key: '$onDestroy',
    value: function $onDestroy() {
      console.log('nav component destroyed');
    }
  }]);

  return NavController;
}();

var NavComponent = {
  template: _navComponent2.default,
  bindings: {
    content: '@'
  },
  controller: NavController
};

exports.default = NavComponent;

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basic = __webpack_require__(/*! ./dumb/basic/basic.component */ "./src/components/dumb/basic/basic.component.js");

var _basic2 = _interopRequireDefault(_basic);

var _inputText = __webpack_require__(/*! ./dumb/form/input-text/input-text.component */ "./src/components/dumb/form/input-text/input-text.component.js");

var _inputText2 = _interopRequireDefault(_inputText);

var _inputNumber = __webpack_require__(/*! ./dumb/form/input-number/input-number.component */ "./src/components/dumb/form/input-number/input-number.component.js");

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _inputTextarea = __webpack_require__(/*! ./dumb/form/input-textarea/input-textarea.component */ "./src/components/dumb/form/input-textarea/input-textarea.component.js");

var _inputTextarea2 = _interopRequireDefault(_inputTextarea);

var _nav = __webpack_require__(/*! ./dumb/nav/nav.component */ "./src/components/dumb/nav/nav.component.js");

var _nav2 = _interopRequireDefault(_nav);

var _chat = __webpack_require__(/*! ./dumb/chat/chat.component */ "./src/components/dumb/chat/chat.component.js");

var _chat2 = _interopRequireDefault(_chat);

var _status = __webpack_require__(/*! ./smart/status */ "./src/components/smart/status.js");

var _status2 = _interopRequireDefault(_status);

var _teamDashboard = __webpack_require__(/*! ./smart/team-dashboard */ "./src/components/smart/team-dashboard.js");

var _teamDashboard2 = _interopRequireDefault(_teamDashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentsModule = angular.module('app.components', []);

componentsModule.component('spdyBasic', _basic2.default);

componentsModule.component('spdyInputText', _inputText2.default);

componentsModule.component('spdyInputNumber', _inputNumber2.default);

componentsModule.component('spdyInputTextarea', _inputTextarea2.default);

componentsModule.component('spdyNav', _nav2.default);

componentsModule.component('spdyChat', _chat2.default);

componentsModule.component('spdyStatus', _status2.default);

componentsModule.component('spdyTeamDashboard', _teamDashboard2.default);

// import CustomWidgetComponent from './sapient/custom-widget.component'
// componentsModule.component('customWidget', CustomWidgetComponent);

exports.default = componentsModule;

/***/ }),

/***/ "./src/components/smart/status.html":
/*!******************************************!*\
  !*** ./src/components/smart/status.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statusPage\">\n  <div class=\"col-lg-8 col-lg-push-2\">\n    <div class=\"widget-modal r\">\n      <div class=\"widget-modal-heading\">\n        <h1 class=\"page-header\">Collectors status</h1>\n      </div>\n      <div class=\"widget-modal-body\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Status</th>\n              <th>Name</th>\n              <th>Last Execution</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr ng-repeat-start=\"collector in $ctrl.collectors\">\n              <td>\n                <span ng-if=\"!collector.errors.length\" class=\"glyphicon glyphicon-thumbs-up \"></span>\n                <span ng-if=\"collector.errors.length\" class=\"glyphicon glyphicon-thumbs-down\"></span>\n              </td>\n              <td>{{collector.collectorName}}</td>\n              <td>{{collector.lastExecuted | date:'EEE, dd MMM @ HH:mm a'}}</td>\n            </tr>\n            <tr ng-repeat-end ng-if=\"collector.errors.length\">\n              <td colspan=\"3\">\n                <div class=\"alert alert-danger\">\n                  <p ng-if=\"collector.errors.length\"><strong>{{collector.errors[0].errorCode}}</strong>: {{collector.errors[0].errorMessage}}</p>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/components/smart/status.js":
/*!****************************************!*\
  !*** ./src/components/smart/status.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _status = __webpack_require__(/*! ./status.html */ "./src/components/smart/status.html");

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatusController = function () {
  function StatusController(HealthService) {
    _classCallCheck(this, StatusController);

    this.healthService = HealthService;
  }

  _createClass(StatusController, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      this.healthService.collectors().then(function (data) {
        _this.collectors = data;
      });
    }
  }]);

  return StatusController;
}();

var StatusComponent = {
  template: _status2.default,
  controller: StatusController
};

StatusController.$inject = ['HealthService'];

exports.default = StatusComponent;

/***/ }),

/***/ "./src/components/smart/team-dashboard.html":
/*!**************************************************!*\
  !*** ./src/components/smart/team-dashboard.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"one\" ng-if=\"$ctrl.showValueHeader || $ctrl.showPeopleHeader\">\n    <div ng-show=\"$ctrl.showPeopleHeader\" class=\"category-head cellDoubleWidth\" id=\"people\">\n      <div>\n        <img src=\"../dist/assets/img/people-icon.png\">\n        <h5>PEOPLE</h5>\n        <h6>Are people engaged?</h6>\n      </div>\n    </div>\n    <custom-widget ng-if=\"$ctrl.layout.col0.improvement.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col0.improvement.classes\"\n      fetch-data=\"$ctrl.fetchImprovement()\"></custom-widget>\n\n    <!-- HAPPINESS INDEX -->\n    <custom-widget ng-if=\"$ctrl.layout.col0.happiness.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col0.happiness.classes\"\n      fetch-data=\"$ctrl.fetchHappinessIndex()\"></custom-widget>\n    <div ng-show=\"$ctrl.showValueHeader\" class=\"category-head cellDoubleWidth\" id=\"quality\">\n      <div>\n        <img src=\"../dist/assets/img/value-icon.png\">\n        <h5>VALUE</h5>\n        <h6>Are we delivering value?</h6>\n      </div>\n    </div>\n    <custom-widget ng-if=\"$ctrl.layout.col0.value.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col0.value.classes\" fetch-data=\"$ctrl.fetchAssignValueMetric()\"></custom-widget>\n  </div>\n\n  <div class=\"two\" ng-class=\"[{ col1Hidden: !($ctrl.showValueHeader || $ctrl.showPeopleHeader) }, { col3Hidden: !$ctrl.showQualityHeader }]\">\n    <div ng-show=\"$ctrl.showSpeedHeader\" class=\"category-head\" id=\"productivity\">\n      <div>\n        <img src=\"../dist/assets/img/productivity-icon.png\">\n        <h5>SPEED</h5>\n        <h6>Are we going fast?</h6>\n      </div>\n    </div>\n    <!-- <custom-widget ng-if=\"$ctrl.layout.col1.backlogToDOR.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.backlogToDOR.classes\" fetch-data=\"$ctrl.fetchStoryBacklogtoDOR()\"></custom-widget> -->\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.storyDORtoDOD.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.storyDORtoDOD.classes\"\n      fetch-data=\"$ctrl.fetchStoryDORtoDOD()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('storyLeadTime')\"></custom-widget>\n\n    <!-- <custom-widget ng-if=\"$ctrl.layout.col1.storyLeadTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.storyLeadTime.classes\" fetch-data=\"$ctrl.fetchStoryLeadTime()\"></custom-widget> -->\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.dodToLive.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.dodToLive.classes\"\n      fetch-data=\"$ctrl.fetchStoryDODtoLive()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('storyLiveLeadTime')\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.sprintPredictability.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.sprintPredictability.classes\"\n      fetch-data=\"$ctrl.fetchSprintPredictability()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('sprintPredictability')\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.commitmentReliability.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.commitmentReliability.classes\"\n      fetch-data=\"$ctrl.commitmentReliability()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('commitmentReliability')\"></custom-widget>\n\n    <!-- NUMBER OF CHECK-IN PER DAY   -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.noOfCheckins.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.noOfCheckins.classes\"\n      fetch-data=\"$ctrl.fetchNoOfCheckins()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('NoOfCheckins')\"></custom-widget>\n\n    <!-- CUMULATIVE FLOW DIAGRAM -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.cfdData.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.cfdData.classes\"\n      fetch-data=\"$ctrl.fetchCfdData()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\" ng-click=\"$ctrl.customWidgetClick('CfdData')\"></custom-widget>\n\n    <!-- BACKLOG HEALTH -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.backlogHealth.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.backlogHealth.classes\"\n      fetch-data=\"$ctrl.fetchBacklogHealth()\"></custom-widget>\n\n    <!-- TECH DEBT -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.techDebit.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.techDebit.classes\"\n      fetch-data=\"$ctrl.fetchTechDebt()\"></custom-widget>\n\n       <!-- CI TIME -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.ciTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.ciTime.classes\" fetch-data=\"$ctrl.fetchCITime()\"\n    data-toggle=\"modal\" focus-element=\"autofocus\" on-widget-click=\"$ctrl.customWidgetClick(widgetType)\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.envCreationTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.envCreationTime.classes\"\n      fetch-data=\"$ctrl.fetchEnvCreationTime()\"></custom-widget>\n  \n\n    <custom-widget ng-if=\"$ctrl.layout.col1.releaseDeployTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.releaseDeployTime.classes\"\n      fetch-data=\"$ctrl.fetchReleaseDeployTime()\"></custom-widget>\n\n  </div>\n  <div class=\"three\" ng-if=\"$ctrl.showQualityHeader\">\n    <div ng-show=\"$ctrl.showQualityHeader\" class=\"category-head\">\n      <div>\n        <img src=\"../dist/assets/img/quality-icon.png\">\n        <h5>QUALITY</h5>\n        <h6>Are we building a quality product?</h6>\n      </div>\n    </div>\n    <!-- <custom-widget ng-if=\"$ctrl.layout.col2.xxxxxxx.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.xxxxxxxx.classes\" fetch-data=\"$ctrl.fetchDefectInjectionRatePostlive()\"></custom-widget> -->\n    <custom-widget ng-if=\"$ctrl.layout.col2.defectInjectionRate.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.defectInjectionRate.classes\"\n      fetch-data=\"$ctrl.fetchDefectInjectionRate()\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col2.autoVsManualTest.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.autoVsManualTest.classes\"\n      fetch-data=\"$ctrl.fetchAutoVsManualTest()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('autoPercentage')\"></custom-widget>\n\n    <!-- CODE QUALITY -->\n    <custom-widget ng-if=\"$ctrl.layout.col2.codeQuality.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.codeQuality.classes\"\n      fetch-data=\"$ctrl.fetchCodeQuality()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('codeQuality')\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col2.jUnitCoverage.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.jUnitCoverage.classes\"\n      fetch-data=\"$ctrl.fetchJUnitCoverage()\" data-toggle=\"modal\" focus-element=\"autofocus\" on-widget-click=\"$ctrl.customWidgetClick(widgetType)\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col2.appDemonstration.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.appDemonstration.classes\"\n      fetch-data=\"$ctrl.fetchAppDemonstration()\"></custom-widget>\n  </div>\n</div>\n<spdy-chat></spdy-chat>"

/***/ }),

/***/ "./src/components/smart/team-dashboard.js":
/*!************************************************!*\
  !*** ./src/components/smart/team-dashboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _teamDashboard = __webpack_require__(/*! ./team-dashboard.html */ "./src/components/smart/team-dashboard.html");

var _teamDashboard2 = _interopRequireDefault(_teamDashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TeamDashboardController = function () {
  function TeamDashboardController(HealthService, $q, $scope, $controller, customDashboardData) {
    'ngInject'; // ng-annotate

    _classCallCheck(this, TeamDashboardController);

    this.$controller = $controller;
    this.$scope = $scope;
    this.customDashboardData = customDashboardData;
  }

  _createClass(TeamDashboardController, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      // Currently hard coding the colors
      // this.customDashboardData.fetchHelpers()
      // .then(function(response) {

      angular.extend(this, this.$controller('CustomTemplateController', {
        $scope: this.$scope,
        $rootScope: {
          commonResourseConfig: {
            "0": "#02874f",
            "1": "#18519d",
            "2": "#b2174f",
            "3": "#d74f14"
          }
        }
      }));

      this.$scope.$watch('this.layout', function (newValue, oldValue) {

        _this.showPeopleHeader = _this.layout.col0.improvement.show || _this.layout.col0.happiness.show;
        _this.showValueHeader = _this.layout.col0.value.show;

        _this.showSpeedHeader = _.find(_this.layout.col1, function (widget) {
          return widget.show;
        });
        _this.showQualityHeader = _.find(_this.layout.col2, function (widget) {
          return widget.show;
        });
      });
    }
  }]);

  return TeamDashboardController;
}();

var TeamDashboardComponent = {
  template: _teamDashboard2.default,
  controller: TeamDashboardController
};

exports.default = TeamDashboardComponent;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./components */ "./src/components/index.js");

__webpack_require__(/*! ./services */ "./src/services/index.js");

__webpack_require__(/*! ./vendor */ "./src/vendor/index.js");

__webpack_require__(/*! ./vendor/sapient */ "./src/vendor/sapient/index.js");

var _customWidget = __webpack_require__(/*! ./vendor/sapient/codebase/src/app/dashboard/views/custom-widget.html */ "./src/vendor/sapient/codebase/src/app/dashboard/views/custom-widget.html");

var _customWidget2 = _interopRequireDefault(_customWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULE_NAME = 'speedyComponents';

angular.module(MODULE_NAME, ['app.components', 'app.services', 'ui.router', 'app.sapient']).config(function ($stateProvider) {
  $stateProvider.state('statusState', {
    url: '/status',
    component: 'spdyStatus'
  });

  $stateProvider.state('teamDashboardState', {
    url: '/team-dashboard:id',
    component: 'spdyTeamDashboard'
  });
}).config(function ($provide) {
  /**
   * Hijacking the AngularUI Tabs directive
   * We need a way to set an active tab based on current router state
   * By default this is only supported when using tabs via an `ngRepeat` loop.
   *
   * @example
     <tab isactive="vm.test(isTrue)">tab contents</tab>
  */
  $provide.decorator('customWidgetDirective', function ($delegate) {
    var directive, link;
    directive = $delegate[0];
    link = directive.link;

    delete directive.templateUrl;
    directive.template = _customWidget2.default;

    // directive.compile = function() {
    //   return function Link(scope, element, attrs, ctrls) {
    //     scope.active = scope.$parent.$eval(attrs.isactive);
    //     return link.apply(this, arguments);
    //   };
    // };
    return $delegate;
  });
});
// .controller('JozzCustomTemplateController', ['$scope', '$controller', function ($scope, $controller) {
//   // Initialize the super class and extend it.
//   angular.extend(this, $controller('CustomTemplateController', {$scope: $scope}));

//   console.log(this)

// }]);

/***/ }),

/***/ "./src/services/health/health.js":
/*!***************************************!*\
  !*** ./src/services/health/health.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HealthService = function () {
  function HealthService($http) {
    _classCallCheck(this, HealthService);

    console.log('constructor');
    'ngInject';
    this.$http = $http;
  }

  _createClass(HealthService, [{
    key: 'collectors',
    value: function collectors() {
      return this.$http.get('/api/speedy/health').then(function (response) {
        return response.data;
      });
    }
  }]);

  return HealthService;
}();

exports.default = HealthService;

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _health = __webpack_require__(/*! ./health/health */ "./src/services/health/health.js");

var _health2 = _interopRequireDefault(_health);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicesModule = angular.module('app.services', []);

servicesModule.service('HealthService', _health2.default);

exports.default = servicesModule;

/***/ }),

/***/ "./src/styles/lloyds.less":
/*!********************************!*\
  !*** ./src/styles/lloyds.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/less-loader/dist/cjs.js??ref--6-2!./lloyds.less */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./src/styles/lloyds.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/lloyds_bank_jack-regularWEB.woff":
/*!*****************************************************!*\
  !*** ./src/styles/lloyds_bank_jack-regularWEB.woff ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ "./src/vendor/index.js":
/*!*****************************!*\
  !*** ./src/vendor/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let vendorModule = {};

angular.module('app.sapient', [HygieiaConfig.module, HygieiaConfig.module + '.core'])
//  Declare modules used in the sapient app
angular.module(HygieiaConfig.module, []);
angular.module(HygieiaConfig.module + '.core', [])

/* harmony default export */ __webpack_exports__["default"] = (vendorModule);





/***/ }),

/***/ "./src/vendor/sapient/codebase/src/app/dashboard/core/data-factories/custom-dashboard-data.js":
/*!****************************************************************************************************!*\
  !*** ./src/vendor/sapient/codebase/src/app/dashboard/core/data-factories/custom-dashboard-data.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Fetches data for Team Dashboard
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .factory('customDashboardData', customDashboardData);
    
    customDashboardData.$inject = ['$http'];
    function customDashboardData($http) {

        return {
            fetchProjectDetails: fetchProjectDetails,
            fetchWidgetDetails: fetchWidgetDetails,
            fetchWidgetHoverText: fetchWidgetHoverText,
            sendWidgetDetails: sendWidgetDetails,
            fetchHelpers : fetchHelpers
        };

        function fetchProjectDetails() {
            return $http.get('/api/excel/projectDetails').then(function (response) {
                return response.data;
            });
        }

        function fetchWidgetDetails(route) {
            return $http.get(route).then(function (response) {
                return response.data;
            });
        }

        function sendWidgetDetails(route, dataObj) {
            return $http.post(route, dataObj).then(function (response) {
                return response.data;
            });
        }
                
        function fetchHelpers() {
            return $http.get('../helpers/common-resource.json').then(function (response) {
                return response.data;
            });
        }
        
        function fetchWidgetHoverText() {
            return {
                'storyDorToDod': 'Time taken from ready to start development to reaching definition of done i.e. completing code with all the testing',
                'storyDodToLive': 'Time taken from definition of done to Complete to Live',
                'storyBacklogToDor': 'Time taken from Backlog to definition of ready',
                'storyLeadTime': 'Time taken from Development & Test Complete to Live',
                'defectInjectionRate': 'Number of defects identified post done (pre-live) over story count',
                'noOfCheckins': 'Number of check-ins and builds per day on the master branch',
                'flowEfficiency': "flow efficiency measures the percentage of time spent actively working on items that are ‘in the system’ and dividing it by the overall lead time which includes both active working time and wait time for those items",
                'cfd': 'Statuses of stories for a particular time interval',
                'envCreationTime': 'Time it takes to new environment for Dev / QA',
                'happinessIndex': 'Rating provided by the team against 4 parameters: (Work life balance, Recognition, Learning & Innovation) in the standup',
                'appDemonstration': 'Demonstration to Product owner',
                'sprintPredictablity': 'The +/- of velocity delivered based on a previous average.  This is calculated by dividing the velocity in the last sprint by the average velocity in the last 3 sprints',
                'releaseDeployTime': 'Time required to release the packet on Prod like cluster and  bringing the services back for use',
                'autoPercentage': 'Percent of automated tests (functional and Non functional) over Total tests',
                'codeQuality': 'The rating given to the project related to the value of its Technical Debt Ratio',
                'coveragePercentage': 'JUNIT COVERAGE: Code coverage over number of lines of Java code <br> JSUNIT COVERAGE: Code coverage over number of lines of JS code',
                'passPercentage': 'PASS %: Percentage of test cases getting passed',
                'improvement': 'Kaizen Mindset - Retrospectives regularly held and action items recorded and progressed',
                'citime': 'TIME TO FIX A BROKEN BUILD: Time lag between broken (including compilation or quality gate failure) build to the fixed build <br> CODE BUILD TIME: Time required to build the deployable packet, passing all gates of CI  (incl. code quality, sanity etc.) <br> FUNCTIONAL TEST EXECUTION TIME: Time taken to execute the testing',
                'commitmentReliability': 'The average story points delivered in the last 3 sprints divided by the average story points committed in the last 3 sprints',
                'techDebt': 'Total Story Points of all Technical Debt issues',
                'agingIssue':'Ageing analysis of the open issues,  median of the difference between issue create date and current date',
                'issues': 'All the open P1 issues of type issue',
                'sonarTechDebt': 'Aggregated effort from the Sonar related to tech debt',
                'assignedValuePercentage':'Percentage of stories that have assigned value over overall stories in Current Sprint ',
                'backlogHealthPercentage': 'The total number of stories in the Product Backlog status at the end of the last sprint divided by the average number of stories delivered in the last 3 sprints.',
                'assignmentValueTrend': 'Trend of stories that have assigned value over overall stories across sprints in given project',
                'risks': 'Top n issues of type risk',
                'topIssues':'Top n Issues',
                'defectCount': 'Number of open defects based on priority',
                'deploymentFrequency': 'Number of deployments in last 3 months',
                'trendOverAutoVsManual': 'Trend over time for auto vs manual test',
                'trendOverFunctionalTestExecutionTime': 'Trend over functional test execution',
                'trendOverFrontEndJUnit':'Trend over front end JUnit',
                'trendOverBackEndJUnit': 'Trend over back end JUnit',
                'trendOverCodeQuality': 'Trend Over code quality',
                'trendOverSprintPredictability': 'Trend over sprint predictability',
                'trendOverCommitmentReliability': 'Trend over commitment reliability',
                'trendOverTimeToFixedBrokenBuild': 'Trend Over time to fixed broken build',
                'trendOverCodeBuildTime': 'Trend over code build time',
                'trendOverStoryLeadTime': 'Trend over story lead time',
                'trendOverStoryLiveLeadTime': 'Trend over story live lead time',
                'defectInjectionRatePostLive': 'Number of defects identified post live'
            };
        }
    }
})();


/***/ }),

/***/ "./src/vendor/sapient/codebase/src/app/dashboard/core/data-factories/dashboard-data.js":
/*!*********************************************************************************************!*\
  !*** ./src/vendor/sapient/codebase/src/app/dashboard/core/data-factories/dashboard-data.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Communicates with dashboard methods on the api
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .constant('DashboardType', {
            PRODUCT: 'product',
            TEAM: 'team',
            CUSTOM: 'custom'
        })
        .factory('dashboardData', dashboardData);

    function dashboardData($http, $q) {
        var testSearchRoute = 'test-data/dashboard_search.json';
        var testDetailRoute = 'test-data/dashboard_detail.json';
        var testOwnedRoute='test-data/dashboard_owned.json';
        var testAllUsersRoute= 'test-data/all_users.json';
        var testOwnersRoute = 'test-data/owners.json';
        var  testMatchversion = 'test-data/matchversion.json';
        var testLogoImagePath = 'test-data/logo.json';
        var testAggregateDashboardRoute = 'test-data/aggregate-dashboard.json';
        var testAggregateProjectSettingsRoute = 'test-data/aggregate-project-settings.json';

        var dashboardRoute = '/api/dashboard';
        var mydashboardRoute = "/api/dashboard/mydashboard";
        var myownerRoute = "/api/dashboard/myowner";
        var updateBusItemsRoute = '/api/dashboard/updateBusItems'
        var  matchversion = 'api/speedy/getversionmetadata';
        var logoImagePath = 'api/file/logo';
        var aggregateDashboardRoute = 'api/aggregated/gridaccountview';
        var aggregateDashboardProjectViewRoute = 'api/aggregated/gridprojectview';
        var aggregateFilterListRoute = "api/aggregated/filteredlist";
        var kpimastermapRoute = "api/aggregated/kpimastermap";
        var acrossviewkpiRoute = "api/aggregated/acrossviewkpi";
        var aggregateProjectSettingsRoute = 'api/aggregated/orgHierarchy';
        var saveOrgHierarchyRoute = 'api/aggregated/saveOrgHierarchy';
        var kpiDataRoute = 'api/aggregated/getKpiData';
        var saveKpiDataRoute = 'api/aggregated/saveKpiData';

        return {
            search: search,
            mydashboard: mydashboard,
            myowner: myowner,
            owners: owners,
            updateOwners: updateOwners,
            detail: detail,
            create: create,
            delete: deleteDashboard,
            rename: renameDashboard,
            upsertWidget: upsertWidget,
            types: types,
            getComponent:getComponent,
            updateBusItems:updateBusItems,
            getMatchVersions: getMatchVersions,
            getLogoImage: getLogoImage,
            getAggregateDashboard: getAggregateDashboard,
            getAggregateFilteredlist: getAggregateFilteredlist,
            getKpimastermap: getKpimastermap,
            getAcrossviewkpi: getAcrossviewkpi,
            getAggregateProjectSetting: getAggregateProjectSetting,
            saveOrgHierarchy: saveOrgHierarchy,
            getKpiData: getKpiData,
            saveKpiData: saveKpiData
        };

        // reusable helper
        function getPromise(route) {
            return $http.get(route).then(function (response) {
                return response.data;
            });
        }
        
        // gets list of dashboards
        function search() {
            return getPromise(HygieiaConfig.local ? testSearchRoute : dashboardRoute);
        }

        //gets list of owned dashboard
        function mydashboard(username){
          return getPromise(HygieiaConfig.local ? testOwnedRoute : mydashboardRoute);
        }

        //gets dashboard owner from dashboard title
        function myowner(id)
        {
            return getPromise(HygieiaConfig.local ? testOwnedRoute : myownerRoute + "/" + id );
        }

        //gets component from componentId
        function getComponent(componentId){
            return getPromise(HygieiaConfig.local ? testOwnedRoute : myComponentRoute+ '/' + componentId);
        }

        function owners(id) {
            return getPromise(HygieiaConfig.local ? testOwnersRoute : dashboardRoute + "/" + id + "/owners");
        }
        
        function updateOwners(id, owners) {
        	return $http.put(dashboardRoute + "/" + id + "/owners", owners).then(function (response) {
                return response.data;
            });
        }

        // gets info for a single dashboard including available widgets
        function detail(id) {
            return getPromise(HygieiaConfig.local ? testDetailRoute : dashboardRoute + '/' + id);
        }

        // creates a new dashboard
        function create(data) {
            return $http.post(dashboardRoute, data)
                .success(function (response) {
                    return response.data;
                })
                .error(function (response) {
                    return null;
                });
        }


        // renames a dashboard

        function renameDashboard(id,newDashboardName, dashboardType, aggrFlag){
             console.log("In data renaming dashboard");
            var postData= {
                 title: newDashboardName
            }
            if(dashboardType === 'Team') {
                postData.aggrFlag = aggrFlag
            }
            return $http.put(dashboardRoute+"/rename/"+id, postData)
                .success(
                    function (response) {
                    return response.data;
                })
                .error (function (response) {
                    console.log("Error Occured while renaming Dashboard in Data layer:"+JSON.stringify(response));
                    return response.data;
                });
        }

        // deletes a dashboard
        function deleteDashboard(id) {
            return $http.delete(dashboardRoute + '/' + id)
                .then(function (response) {
                    return response.data;
            });
        }

        function types() {
            return [
                {
                    "id": "team",
                    "name": "Engineering Team"
                },
                {
                    "id": "product",
                    "name": "Product"
                },
                {
                    "id": "custom",
                    "name": "Team"
                }
            ];

        }

        // can be used to add a new widget or update an existing one
        function upsertWidget(dashboardId, widget) {
            // create a copy so we don't modify the original
            widget = angular.copy(widget);

            console.log('New Widget Config', widget);

            var widgetId = widget.id,
            widgetUrl = widget.baseUrl || 'widget';

            if (widgetId) {
                // remove the id since that would cause an api failure
                delete widget.id;
            }

            delete widget.baseUrl;

            var route = widgetId ?
                $http.put(dashboardRoute + '/' + dashboardId + "/" + widgetUrl + "/" + widgetId, widget) :
                $http.post(dashboardRoute + '/' + dashboardId + "/" + widgetUrl, widget);

            return route.then(function (response) {
                return response.data;
            });
        }

        function updateBusItems(id, data) {
            return $http.put(updateBusItemsRoute+"/"+id, data)
                .success(function (response) {
                    return response.data;
                })
                .error(function (response) {
                    return null;
                });
        }

        //gets list of owned dashboard
        function getMatchVersions(){
            return getPromise(HygieiaConfig.local ? testMatchversion : matchversion);
        }

        //get logo from db
        function getLogoImage(){
            return getPromise(HygieiaConfig.local ? testLogoImagePath : logoImagePath);
        }

        // gets aggregrated dashboard
        function getAggregateDashboard(postData, viewType) {            
            var route;
            if(viewType == 'account') {
                route = $http.post(aggregateDashboardRoute, postData);
            }else {
                route = $http.post(aggregateDashboardProjectViewRoute, postData);
            }
            return route.then(function (response) {
                return response.data;
            });
        }

        //get aggregrated filterlist
        function getAggregateFilteredlist(postData, queryParam) {
            var route = $http.post(aggregateFilterListRoute+'?selection='+ queryParam, postData);
            return route.then(function (response) {
                return response.data;
            });
        }
        
         //get Kpimastermap
         function getKpimastermap(postData, queryParam) {
            return getPromise(HygieiaConfig.local ? kpimastermapRoute : kpimastermapRoute);
        }

        //get Acrossviewkpi
        function getAcrossviewkpi(postData, firstKpi, graphtype, kpiRequestType, secondKpi) {
            var route = $http.post(acrossviewkpiRoute+'?firstkpi='+ firstKpi+'&graphtype='+graphtype+'&secondkpi='+secondKpi, postData);
            // return route.then(function (response) {
            //     return response.data;
            // });

                var deferred = $q.defer();                
                route.success(function (response) {
                       // deferred.resolve(response);
                       deferred.resolve({
                           response: response,
                           kpiRequestType: kpiRequestType
                    })
                    })
                    .error(function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
        }

        function getAggregateProjectSetting(){
            return getPromise(HygieiaConfig.local ? testAggregateProjectSettingsRoute : aggregateProjectSettingsRoute);
        }
 
        function saveOrgHierarchy(postData) {
            var route = $http.post(saveOrgHierarchyRoute, postData);
            return route.then(function (response) {
                return response.data;
            });
        }

        function getKpiData(){
            return getPromise(HygieiaConfig.local ? kpiDataRoute : kpiDataRoute);
        }
        function saveKpiData(postData){
            var route = $http.post(saveKpiDataRoute, postData);
            return route.then(function (response) {
                return response.data;
            });
        }
    }
})();


/***/ }),

/***/ "./src/vendor/sapient/codebase/src/app/dashboard/directives/custom-widget.js":
/*!***********************************************************************************!*\
  !*** ./src/vendor/sapient/codebase/src/app/dashboard/directives/custom-widget.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Custom widget directive
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .directive('customWidget', customWidgetDirective);

    customWidgetDirective.$inject = ['$http'];

    function customWidgetDirective($http) {
        return {
            templateUrl: 'app/dashboard/views/custom-widget.html',
            restrict: 'E',
            scope: {
                customWidget: '=',
                fetchData: '&',
                chartModalDialog: '=',
                chartModalData: '=',
                onWidgetClick: '&'
            },
            link: link
        };

        function link(scope, element, attrs) {
            var overlayDiv = $('#overlay'),
                textPopup = $('#textPopup');

            if (scope.chartModalDialog) {
                scope.$watch('chartModalData', function () {
                    scope.widgetInfo = scope.chartModalData;
                });
            } else {
                scope.fetchData().then(function (widgetInfo) {
                    scope.widgetInfo = widgetInfo;
                });
            }
            scope.showTooltip = function (event) {
                var sourceOffset = $(event.target).offset();
                overlayDiv.show();
                textPopup.html('<p>' + $(event.target).attr('data-tooltip-text') + '<br /><a target="_blank" href="https://confluence.devops.lloydsbanking.com/display/ENGTRAN/KPI+Definitions">Further details</a></p>');
                textPopup.offset({
                    top: sourceOffset.top,
                    left: sourceOffset.left - textPopup.width() - 20
                });
            };

            scope.hideTooltip = function (e) {
                var interval = setInterval(function () {
                    if (!textPopup.is(':hover')) {
                        clearInterval(interval)
                        overlayDiv.hide();
                    }
                }, 500);
            };

            scope.widgetInfoClicked = function (widgetType) {
                var modalElement = $('.modal');
                modalElement.modal('show')
                scope.onWidgetClick({
                    widgetType: widgetType
                })
            }
        }
    }
})();

/***/ }),

/***/ "./src/vendor/sapient/codebase/src/app/dashboard/views/custom-widget.html":
/*!********************************************************************************!*\
  !*** ./src/vendor/sapient/codebase/src/app/dashboard/views/custom-widget.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-content\">\n    <div class=\"widget-title\">\n        <h6>{{widgetInfo.title}}</h6>\n        <i ng-if=\"widgetInfo.tooltipText\" ng-mouseover=\"showTooltip($event)\" ng-mouseout=\"hideTooltip()\" data-tooltip-text={{widgetInfo.tooltipText}} class=\"fa fa-info\" aria-hidden=\"true\"></i>\n    </div>\n\n    <div ng-if=\"widgetInfo.type==='text'\" class=\"widget-body\">\n        <div ng-if=\"widgetInfo.data\" class=\"widget-metric\">\n            <div class=\"magnitude-container\">\n                <span ng-class=\"{'glyphicon':widgetInfo.name==='storyLeadTime' || widgetInfo.name==='storyLiveLeadTime', 'glyphicon-arrow-up':widgetInfo.data.trend==='up', 'glyphicon-minus':widgetInfo.data.trend==='equal', 'glyphicon-arrow-down':widgetInfo.data.trend==='down'}\" class=\"symbol\">{{widgetInfo.data.symbol}}</span>\n                <span class=\"number\">{{widgetInfo.data.value}}</span>\n            </div> \n            <span class=\"unit\">{{widgetInfo.data.unit}}</span>\n        </div>\n        <h6 class=\"no-data\" ng-if=\"!widgetInfo.data\">\n            No Data Available\n        </h6>\n    </div>\n\n    <div ng-if=\"widgetInfo.type==='multipleTextWidget'\" class=\"widget-body\">\n        <div ng-repeat=\"subWidget in widgetInfo.data\" class=\"sub-widget\" style=\"width:{{widgetInfo.width}};\">\n            <div ng-if=\"(subWidget.data && subWidget.data.value !== ' ')\" class=\"widget-metric\" ng-click=\"widgetInfoClicked(subWidget.name)\">\n                <div class=\"magnitude-container\">\n                    <span class=\"symbol\">{{subWidget.data.symbol}}</span>\n                    <span class=\"number\">{{subWidget.data.value}}</span>\n                </div> \n                <span class=\"unit\">{{subWidget.data.unit}}</span>\n            </div>\n            <h6 class=\"no-data\" ng-if=\"!subWidget.data\" ng-click=\"widgetInfoClicked(widgetInfo.type)\">\n                No Data Available\n            </h6>\n            <h6 class=\"no-data\" ng-if=\"(subWidget.data && subWidget.data.value === ' ')\">\n                {{subWidget.data.unit}}\n            </h6>\n            <span ng-if=\"subWidget.data\" class=\"sub-widget-name\">{{subWidget.title}}</span>\n        </div>\n    </div>\n\n    <div ng-if=\"widgetInfo.type==='doughnut' || widgetInfo.type==='pie'\" class=\"widget-body\">\n        <div ng-if=\"widgetInfo.data\" class=\"canvasWrapper graph-container\" ng-class=\"{'pie-chart':widgetInfo.type==='pie'}\">\n            <canvas id=\"base{{widgetInfo.name}}\"\n                height=\"1\"\n                width=\"1\"\n                class=\"chart-base\"\n                chart-type=\"widgetInfo.type\"\n                chart-data=\"widgetInfo.data.data\"\n                chart-labels=\"widgetInfo.data.labels\"\n                chart-options=\"widgetInfo.data.options\"\n                chart-colors=\"widgetInfo.data.colors\"\n            ></canvas>\n            \n        </div>\n        <h5 ng-if=\"widgetInfo.type==='doughnut'\" class=\"graph-inner-data\">{{widgetInfo.data.data[0]}}{{widgetInfo.data.symbol}}</h5>\n        <h6 class=\"no-data\" ng-if=\"!widgetInfo.data\">\n            No Data Available\n        </h6>\n    </div>\n\n    <div ng-if=\"widgetInfo.type==='status'\" class=\"widget-body\">\n        <i ng-if=\"widgetInfo.data && widgetInfo.data.response\" class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n        <i ng-if=\"widgetInfo.data && !widgetInfo.data.response\" class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i>\n        <h6 class=\"no-data\" ng-if=\"!widgetInfo.data\">\n            No Data Available\n        </h6>\n    </div>\n\n    <div ng-if=\"widgetInfo.type==='table'\" class=\"widget-body\">\n        <div ng-if=\"widgetInfo.data\">\n           <table class=\"table-widget\">\n                <tr> \n                    <td class=\"table-widget-header\"><b>Priority</b></td>\n                    <td class=\"table-widget-header\" ng-repeat=\"header in widgetInfo.data\">{{header.priority}}</td>\n                </tr>\n                <tr>\n                    <td class=\"table-widget-header\"><b>Count</b></td>\n                    <td class=\"table-widget-header\" ng-repeat=\"data in widgetInfo.data\">{{data.count}}</td>\n                </tr>\n            </table>\n           \n        </div>\n        <h6 class=\"no-data\" ng-if=\"!widgetInfo.data\">\n            No Data Available\n        </h6>\n    </div>\n\n    <div ng-if=\"widgetInfo.type==='list'\" class=\"widget-body\">\n        <div ng-if=\"widgetInfo.data\">\n            <ul class=\"list-widget\" ng-repeat=\"item in widgetInfo.data\">\n                <li><a href = \"https://tools.publicis.sapient.com/jira/browse/\"+{{item.data}}>{{item.data}}</a></li>\n            </ul>\n        </div>\n        <h6 class=\"no-data\" ng-if=\"!widgetInfo.data.length\">\n            No Data Available\n          \n        </h6>\n    </div>\n\n    <div ng-if=\"widgetInfo.type!=='text' && widgetInfo.type!=='doughnut' && widgetInfo.type!=='pie' && widgetInfo.type!=='status' && widgetInfo.type!=='multipleTextWidget'\" class=\"widget-body\">\n        <canvas id=\"base\"           \n            ng-if=\"widgetInfo.data\"\n            class=\"chart-base\"\n            chart-type=\"widgetInfo.type\"\n            chart-data=\"widgetInfo.data.data\"\n            chart-labels=\"widgetInfo.data.labels\"\n            chart-series=\"widgetInfo.data.series\"\n            chart-options=\"chartModalDialog ? widgetInfo.data.dialogoptions : widgetInfo.data.options\"\n            chart-colors=\"widgetInfo.data.colors\"\n            chart-dataset-override=\"widgetInfo.data.datasetOverride\"\n        ></canvas>            \n        <h6 class=\"no-data\" ng-if=\"!widgetInfo.data\">\n            No Data Available\n        </h6>\n    </div>\n</div>"

/***/ }),

/***/ "./src/vendor/sapient/codebase/src/components/templates/custom.js":
/*!************************************************************************!*\
  !*** ./src/vendor/sapient/codebase/src/components/templates/custom.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('CustomTemplateController', CustomTemplateController);

    CustomTemplateController.$inject = ['$scope','$rootScope','$http', '$q', 'customDashboardData', 'dashboardData'];
    function CustomTemplateController($scope, $rootScope, $http, $q, customDashboardData, dashboardData) {
        var ctrl = this,
            widgetHoverText; 

        //  Note this is stored in local store, so if any chages are made to it 
        //  must add some script to apply to the local store    
        var defaultLayout = {
            col0: {
                improvement: {
                    label: 'Improvement',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                happiness: {
                    label: 'Happiness Index',
                    show: true,
                    classes: 'cellDoubleWidth cellDoubleHeight'
                },
                value: {
                    label: 'Assign Value Metrics',
                    show: true,
                    classes: 'cellDoubleWidth'
                }    
            },
            col1: {
                // backlogToDOR: {
                //     label: 'Backlog to DOR',
                //     show: true,
                //     classes: 'cellDoubleWidth'
                // },
                storyDORtoDOD: {
                    label: 'DOR to DOD',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                dodToLive: {
                    label: 'DOD to Live',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                // storyLeadTime: {
                //     label: 'Lead Time',
                //     show: true,
                //     classes: 'cellDoubleWidth'
                // },
                sprintPredictability: {
                    label: 'Sprint Predictability',
                    show: true,
                    classes: ''
                },
                commitmentReliability: {
                    label: 'Commitment Reliability',
                    show: true,
                    classes: ''
                },
                cfdData: {
                    label: 'Cumulative Flow Diagram',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                backlogHealth: {
                    label: 'Backlog Health',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                noOfCheckins: {
                    label: 'No. of Checkins',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                ciTime: {
                    label: 'CI Time',
                    show: true,
                    classes: 'cellTripleWidth'
                },
                releaseDeployTime: {
                    label: 'Release Deploy Time',
                    show: true,
                    classes: ''
                },
                techDebit: {
                    label: 'Tech Debt',
                    show: true,
                    classes: ''
                },
                envCreationTime: {
                    label: 'Env. Creatation Time',
                    show: true,
                    classes: ''
                },
            },
            col2: {
                defectInjectionRate: {
                    label: 'Defect Injection Rate',
                    show: true,
                    classes: ''
                },
                autoVsManualTest: {
                    label: 'Automated Test %',
                    show: true,
                    classes: ''
                },
                codeQuality: {
                    label: 'Code Quality',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                jUnitCoverage: {
                    label: 'jUnit Coverage',
                    show: true,
                    classes: 'cellDoubleWidth'
                },
                appDemonstration: {
                    label: 'Completed Stories are Demonstrated to Product Owner',
                    show: true,
                    classes: 'cellDoubleWidth'
                }
            }
           
        }


        //  Layout management
        ctrl.layout =  defaultLayout;
        if($rootScope.localStorageSupported) {
            //  If layout hasn't ben set yet
            if(!localStorage.getItem('layout')) localStorage.setItem('layout', JSON.stringify(defaultLayout));

            var layout = JSON.parse(localStorage.getItem('layout'));

            //  Breaking change to layout config, need to reset
            if(!layout.col0) {
                localStorage.setItem('layout', JSON.stringify(defaultLayout))
                ctrl.layout =  defaultLayout;
            } else {
                ctrl.layout = layout;
            }       
        }
        ctrl.layoutSettings = angular.copy(ctrl.layout)
        
        ctrl.saveHideShow = function() {
            ctrl.layout = angular.copy(ctrl.layoutSettings);
            localStorage.setItem('layout', JSON.stringify(ctrl.layout))
        }        

        //  Careful here, using the controller alias used in the html template
        $scope.$watch('template.layout', function(newValue, oldValue) {
            ctrl.showPeopleHeader = ctrl.layout.col0.improvement.show || ctrl.layout.col0.happiness.show;
            ctrl.showValueHeader = ctrl.layout.col0.value.show;
            ctrl.showSpeedHeader = _.find(ctrl.layout.col1, function(widget){
                return widget.show; 
            });
            ctrl.showQualityHeader = _.find(ctrl.layout.col2, function(widget){
                return widget.show; 
            });
        });

        customDashboardData.fetchHelpers().then(function(response) {
            ctrl.resourceHelpers = response;
        });
       
        var pageLoad = function() {
                ctrl.showRadar = false;
                ctrl.startDate = '';
                ctrl.endDate = '' ;
                var commonResourseConfig = $rootScope.commonResourseConfig;
                if(commonResourseConfig) {
                    ctrl.firstColumnBgColor = commonResourseConfig[0];
                    ctrl.secondColumnBgColor = commonResourseConfig[1];
                    ctrl.thirdColumnBgColor = commonResourseConfig[2];
                    ctrl.fourthColumnBgColor = commonResourseConfig[3];
                }
                fetchProjectDetails();
                widgetHoverText = customDashboardData.fetchWidgetHoverText();
            },

            fetchProjectDetails = function() {
                customDashboardData.fetchProjectDetails().then(function(response) {
                    ctrl.projectDetails = response;
                });
            };

            ctrl.chartModalDialog= function (selectedChart) {
                ctrl.selectedChart= selectedChart;
                ctrl.chartdata = {};
                ctrl.startDate = '';
                ctrl.endDate = '';
                ctrl.isCalendarOpen = false;
                ctrl.isTrendOverDropdownActive = false;
                switch (selectedChart) {
                    case 'NoOfCheckins':
                        var noOfCheckinsOptions = {
                            elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: true
                            },
                            scales: {
                            yAxes: [
                                {
                                id: 'y-axis',
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    fontSize: 10
                                }
                                }
                            ],
                            xAxes: [
                                {
                                id: 'x-axis',
                                display: true,
                                ticks: {
                                    fontSize: 10
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                        };
                        ctrl.chartdata = _.assign({}, ctrl.noOfCheckins);
                        if(ctrl.chartdata.data) {
                            ctrl.chartdata['data']['dialogoptions'] = noOfCheckinsOptions;
                        }
                        break;
                    case 'FlowEfficiency':
                        ctrl.isCalendarOpen = false;
                        var flowEfficiencyOptions = {
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: false
                            },
                            scales: {
                            yAxes: [
                                {
                                id: 'y-axis',
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    fontSize: 10
                                }
                                }
                            ],
                            xAxes: [
                                {
                                id: 'x-axis',
                                display: true,
                                ticks: {
                                    fontSize: 10
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                        }
                        ctrl.chartdata = _.assign({}, ctrl.flowEfficiency);
                        if(ctrl.chartdata.data) {
                            ctrl.chartdata['data']['dialogoptions'] = flowEfficiencyOptions;
                        }
                    break;

                    case 'CfdData':
                        ctrl.isCalendarOpen = false;
                        var cfdDataOptions = {
                            responsive: true,
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: false
                            },
                            scales: {
                                yAxes: [{
                                    stacked: true,
                                    ticks  : {
                                        beginAtZero: true,
                                        fontSize: 10
                                    }
                                }],
                                xAxes: [{
                                    stacked: true,
                                    ticks  : {
                                        beginAtZero: true,
                                        fontSize: 10
                                    }
                                }]
                            },
                            fontSize: 20,
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    boxWidth: 10,
                                    fontSize: 14
                                }
                            }
                        };
                        ctrl.chartdata = _.assign({}, ctrl.cfdData);
                        if(ctrl.chartdata.data) {
                            ctrl.chartdata['data']['dialogoptions'] = cfdDataOptions;
                        }
                    break;

                    case 'AppDemonstration':
                        ctrl.isCalendarOpen = false;
                        var appDemonstrationOptions = {
                            elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: true
                            },
                            scales: {
                            yAxes: [
                                {
                                id: 'y-axis',
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 10,
                                    fixedStepSize: 1
                                }
                                }
                            ],
                            xAxes: [
                                {
                                id: 'x-axis',
                                display: true,
                                ticks: {
                                    fontSize: 12
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                        };
                        ctrl.chartdata = _.assign({}, ctrl.appDemonstration);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] = appDemonstrationOptions;
                        }                        
                        break;
                    default:
                        break;
                }
            };

            ctrl.applyTrendOverDates = function(selectedDates) {
                ctrl.chartdata = {};
                ctrl.startDate = selectedDates && selectedDates.startDate || '' ;
                ctrl.endDate = selectedDates && selectedDates.endDate || '';
                ctrl.selectedFromSprintList = '';
                ctrl.selectedToSprintList = '';
                switch (ctrl.selectedChart) {
                    case 'NoOfCheckins':
                        ctrl.fetchNoOfCheckins();
                        break; 
                    case 'CfdData':
                        ctrl.fetchCfdData();
                        break;                         
                    case 'autoPercentage':
                        ctrl.fetchTrendOverAutoVsManualTest();
                        break; 
                    case 'functionalTestExecutionTime':
                        ctrl.fetchTrendOverFunctionalTestExecutionTime();
                        break;
                    case 'codeBuildTime':
                        ctrl.fetchTrendOverCodeBuildTime();
                        break;
                    case 'timeToFixBrokenBuild':
                        ctrl.fetchTrendOverTimeToFixedBroken();
                        break;
                    case 'backEndJUnit':
                        ctrl.fetchTrendOverBackEndJUnit();
                        break;
                    case 'frontEndJSUnit':
                        ctrl.fetchTrendOverFrontEndJUnit();
                        break;
                    case 'sprintPredictability':
                        ctrl.fetchAllSprintList();
                        ctrl.fetchTrendOverSprintPredictability();
                        break;
                    case 'commitmentReliability':
                        ctrl.fetchAllSprintList();
                        ctrl.fetchTrendOverCommitmentReliability();
                        break;
                    case 'storyLeadTime':
                        ctrl.fetchAllSprintListWithoutStatus();
                        ctrl.fetchTrendOverStoryLeadTime();
                        break;
                    case 'storyLiveLeadTime':
                        ctrl.fetchAllSprintListWithoutStatus();
                        ctrl.fetchTrendOverStoryLiveLeadTime();
                        break;
                    default:
                        ctrl.isTrendOverDropdownActive = false;
                        ctrl.isCalendarOpen = false;
                        break;

                }
            }


            ctrl.trendOverChartModal = function() {
                ctrl.chartdata = {};
                ctrl.isTrendOverDropdownActive = false;
                switch (ctrl.selectedChart) {
                    case 'NoOfCheckins':
                        ctrl.chartdata = _.assign({}, ctrl.noOfCheckins);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = false;
                        break;
                    case 'CfdData':
                        ctrl.chartdata = _.assign({}, ctrl.cfdData);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = false;
                        break;
                    case 'autoPercentage':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverAutoVsManualTest);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'functionalTestExecutionTime':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverFunctionalTestExecutionTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                         }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'codeBuildTime':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverCodeBuildTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                         }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'timeToFixBrokenBuild':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverTimeToFixedBrokenBuild);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                         }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'codeQuality':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverCodeQuality);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;  
                    case 'backEndJUnit':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverBackEndJUnit);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'frontEndJSUnit':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverFrontEndJUnit);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'sprintPredictability':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverSprintPredictability);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    case 'commitmentReliability':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverCommitmentReliability);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    case 'storyLeadTime':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverStoryLeadTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    case 'storyLiveLeadTime':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverStoryLiveLeadTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    default:
                        break;
                }
            }

            ctrl.fromToSplitList = function(){
                var fromSprint = ctrl.selectedFromSprintList && ctrl.selectedFromSprintList.split(".");
                var toSprint = ctrl.selectedToSprintList && ctrl.selectedToSprintList.split(".");
                var sprintList = [];
                var fromCounter = fromSprint && parseInt(fromSprint[0]);
                var toCounter = toSprint && parseInt(toSprint[0]);
                if(fromCounter && toCounter && fromCounter >= toCounter){
                   ctrl.errorMessage = 'To sprint must be greater than from sprint';
                   ctrl.isApplyTrendOverActive = true;
                }else {
                    ctrl.isApplyTrendOverActive = false;
                    ctrl.errorMessage = '';
                    ctrl.allSprintList.forEach(function(item) {
                        var sprint = item.split(".");
                        if(fromCounter && toCounter && fromCounter <= toCounter && (parseInt(sprint[0]) >= fromCounter && parseInt(sprint[0]) <=toCounter)) {
                            sprintList.push(item)
                        }
                    }, this);
                }
                ctrl.paramSprintList = sprintList;
            }

            ctrl.setFromToSplitList = function(fromSprint, toSprint){              
                ctrl.allSprintList.forEach(function(item) {
                    var sprint = item.split(".");
                    if(sprint[1].trim() == fromSprint.trim()) {
                        ctrl.selectedFromSprintList = item
                    }
                    if(sprint[1].trim() === toSprint.trim()){
                        ctrl.selectedToSprintList = item
                    }
                }, this);              
            }

            ctrl.customWidgetClick = function(widgetType) {
                ctrl.chartdata = {};
                ctrl.selectedChart = widgetType;                
                ctrl.applyTrendOverDates();
            }

            ctrl.fetchStoryDORtoDOD = function() {
                var route = '/api/jiraMVP/DorToDod';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyDorToDod',
                        title: 'Definition of Ready (DoR) to Definition of Done (DoD)',
                        type: 'text',
                        tooltipText: widgetHoverText.storyDorToDod,
                        data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                    };
                 });
            };

            ctrl.fetchStoryDODtoLive = function() {
                var route = '/api/jiraMVP/DodToLive';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyDodToLive',
                        title: 'Definition of Done to Live',
                        type: 'text',
                        tooltipText: widgetHoverText.storyDodToLive,
                        data: (response.storyLiveLeadTime && response.storyLiveLeadTime.value) ? response.storyLiveLeadTime : null
                    };
                 });
            };
            
            ctrl.fetchStoryLeadTime = function() {
                var route = '/api/jiraMVP/leadTime';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyLeadTime',
                        title: 'Lead Time',
                        type: 'text',
                        tooltipText: widgetHoverText.storyLeadTime,
                        data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                    };
                 });
            };

            ctrl.fetchStoryBacklogtoDOR = function() {
                var route = '/api/jiraMVP/backlogToDor';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyBacklogToDor',
                        title: 'Backlog to Definition of Ready (DoR)',
                        type: 'text',
                        tooltipText: widgetHoverText.storyBacklogToDor,
                        data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                    };
                 });
            };

            ctrl.fetchDefectInjectionRate = function() {
                var route = '/api/jiraMVP/defectinjectionrate';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'defectInjectionRate',
                        title: 'Defect Injection Rate',
                        type: 'text',
                        tooltipText: widgetHoverText.defectInjectionRate,
                        data: (response.defectInjectionRate && response.defectInjectionRate.value) ? response.defectInjectionRate : null
                    };
                 });
            };

            ctrl.fetchDefectInjectionRatePostlive = function() {
                var route = '/api/jiraMVP/defectinjectionratepostlive';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'defectInjectionRatePostLive',
                        title: 'Defect Injection Rate Post Live',
                        type: 'text',
                        tooltipText: widgetHoverText.defectInjectionRatePostLive,
                        data: (response.defectInjectionRatePostLive && response.defectInjectionRatePostLive.value) ? response.defectInjectionRatePostLive : null
                    };
                 });
            };

            ctrl.fetchDeploymentFrequency = function() {
                var route = '/api/excel/deployFrequency';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 8
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 8
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }
                    return {
                    	 name: 'deploymentFrequency',
                         title: 'Deployment Frequency',
                         type: 'line',
                        tooltipText: widgetHoverText.deploymentFrequency,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchNoOfCheckins = function() {
                var route = '/api/ed/commit';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true,
                                    titleFontSize: 7,
                                    bodyFontSize: 7
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 8
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 8
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }
                    var noOfCheckins = {
                        name: 'noOfCheckins',
                        title: 'Number of Check-in Per Day',
                        type: 'line',
                        tooltipText: widgetHoverText.noOfCheckins,
                        data: graphData
                    };
                    ctrl.noOfCheckins = noOfCheckins;
                    ctrl.trendOverChartModal()
                    return noOfCheckins;
                 }); 
            };

            ctrl.fetchFlowEfficiency = function() {
                var route = '/api/excel/flowefficiency';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 8
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 8
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderWidth: "0.8",
                            }
                        };
                    }
                    var flowEfficiency = {
                        name: 'flowEfficiency',
                        title: 'Flow Efficiency',
                        type: 'line',
                        tooltipText: widgetHoverText.flowEfficiency,
                        data: graphData
                    };
                    ctrl.flowEfficiency = flowEfficiency;
                    return flowEfficiency;
                 });
            };

            ctrl.fetchCfdData = function() {
                var route = '/api/jiraMVP/cfddetails';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response && response.countList) {
                        graphData = {
                            data: response.countList,
                            labels: response.monthList,
                            series: response.statusList,
                            colors: [
                                ctrl.secondColumnBgColor,
                                '#f4424e',
                                '#2b3547',
                                '#1194db',
                                '#24513f',
                                '#09f9d9'
                            ],
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },
                                scales: {
                                    yAxes: [{
                                        stacked: true,
                                        ticks  : {
                                            beginAtZero: true,
                                            fontSize: 8
                                        }
                                    }],
                                    xAxes: [{
                                        stacked: true,
                                        ticks  : {
                                            beginAtZero: true,
                                            fontSize: 8
                                        }
                                    }]
                                },
                                fontSize: 8,
                                legend: {
                                    display: true,
                                    position: 'bottom',
                                    labels: {
                                        boxWidth: 3,
                                        fontSize: 8
                                    }
                                }
                            }
                        };
                    }
                    var cfdData = {
                        name: 'cfd',
                        title: 'Cumulative Flow Diagram',
                        type: 'line',
                        tooltipText: widgetHoverText.cfd,
                        data: graphData
                    };

                    ctrl.cfdData = cfdData;
                    ctrl.trendOverChartModal();
                    return cfdData;
                 });
            };

            ctrl.fetchEnvCreationTime = function() {
                var route = '/api/ed/citime';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'envCreationTime ',
                        title: 'Time to Create a New Environment',
                        type: 'text',
                        tooltipText: widgetHoverText.envCreationTime,
                        data: (response.envCreationTime && response.envCreationTime.value) ? response.envCreationTime : null
                    };
                 });
            };

            ctrl.fetchHappinessIndex = function() {
                var route = '/api/excel/happinessindex';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;
                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                scales: {
                                    xAxes: [{
                                        display: false
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: '#2d9b4f',
                                hoverBackgroundColor: ctrl.firstColumnBgColor,
                                borderColor: '#709dca'
                            }
                        };
                    }
                    return {
                        name: 'happinessIndex',
                        title: 'Happiness Index',
                        type: 'bar',
                        tooltipText: widgetHoverText.happinessIndex,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchAppDemonstration = function() {
                var route = '/api/excel/appdemonstration';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            colors: [
                                '#f8b2b5'
                            ],
                            options: {
                                elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 8
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 8
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.thirdColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",                             
                            }
                        };
                    }
                    var appDemonstration = {
                        name: 'appDemonstration',
                        title: 'Completed Stories are Demonstrated to Product Owner',
                        type: 'line',
                        tooltipText: widgetHoverText.appDemonstration,
                        data: graphData
                    };
                    ctrl.appDemonstration = appDemonstration;
                    return appDemonstration;
                 });
            };

            ctrl.fetchSprintPredictability = function() {
                var route = '/api/jiraMVP/sprintpredictability';
                
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                        sprintPredictablity;
                   
                    if(response && response.sprintPredictablity && response.sprintPredictablity.value) {
                        sprintPredictablity = response.sprintPredictablity.value;
                    }
                      
                    if(sprintPredictablity) {
                        var fillSprintPredictablityPercentage = parseInt(sprintPredictablity) > 100 ? 100 : sprintPredictablity
                        graphData = {
                            data: [sprintPredictablity, 100-fillSprintPredictablityPercentage],
                            symbol: response.sprintPredictablity.unit,
                            colors: [
                                ctrl.thirdColumnBgColor,
                                '#e2e2e2'
                            ],
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: true,
                                    titleFontSize: 7,
                                    bodyFontSize: 7
                                },
                                cutoutPercentage: 70
                            }
                        };
                    }
                    return {
                        name: 'sprintPredictablity',
                        title: 'Sprint Predictability',
                        type: 'doughnut',
                        tooltipText: widgetHoverText.sprintPredictablity,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchReleaseDeployTime = function() {
                var route = '/api/ed/citime';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'releaseDeployTime',
                        title: 'Release and Deploy Time',
                        type: 'text',
                        tooltipText: widgetHoverText.releaseDeployTime,
                        data: (response.relAndDeployTime && response.relAndDeployTime.value) ? response.relAndDeployTime : null
                    };
                 });
            };

            ctrl.fetchAutoVsManualTest = function() {
                var route ='/api/excel/autovsmanualtest';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                        autoPercentage;

                    if(response && response.autoPercentage && response.autoPercentage.value) {
                        autoPercentage = response.autoPercentage.value;
                    }

                    if(autoPercentage) {
                        var fillAutoPercentage = parseInt(autoPercentage) > 100 ? 100 : autoPercentage
                        graphData = {
                            data: [autoPercentage, 100-fillAutoPercentage],
                            labels: ['Automated', 'Manual'],
                            colors: [
                                ctrl.thirdColumnBgColor,
                                '#e2e2e2'
                            ],
                            options: {
                                tooltips: {
                                    enabled: false
                                }
                            }
                        };
                    }
                    var autoVsManualTest = {
                        name: 'autoPercentage',
                        title: 'Automated Test %',
                        type: 'pie',
                        tooltipText: widgetHoverText.autoPercentage,
                        data: graphData
                    };

                    ctrl.autoVsManualTest = autoVsManualTest;
                    return autoVsManualTest;
                 });
            };

            ctrl.fetchCodeQuality = function() {
                var route = '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                        qualityGrade,
                        colors = [
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2'
                        ];

                    qualityGrade = (response && response.qualityGrade) ? response.qualityGrade : null;
                    //qualityGrade = 'A';

                    switch(qualityGrade) {
                        case 'A':
                            qualityGrade = 5;
                            break;
                        case 'B':
                            qualityGrade = 4;
                            break;
                        case 'C':
                            qualityGrade = 3;
                            break;
                        case 'D':
                            qualityGrade = 2;
                            break;
                        case 'E':
                            qualityGrade = 1;
                            break;
                    };

                    colors[qualityGrade-1] = ctrl.thirdColumnBgColor;

                    if(qualityGrade) {
                        graphData = {
                            data: [1,2,3,4,5],
                            labels: ['E','D','C','B','A'],
                            colors: colors,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true,
                                    callbacks: {
                                        label: function() {
                                            return "";
                                        }
                                    }
                                },
                                scales: {
                                  yAxes: [
                                    {
                                        display: false,
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                        display: true,
                                        ticks: {
                                            fontSize: 7
                                          },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                  ]
                                }
                            }
                        };
                    }
                    return {
                        name: 'codeQuality',
                        title: 'Code Quality',
                        type: 'bar',
                        tooltipText: widgetHoverText.codeQuality,
                        data: qualityGrade !== 'NA' ? graphData : undefined
                    };
                 });
            };

            ctrl.fetchJUnitCoverage = function() {
                var route = '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var data,
                        coveragePercentage,
                        jscoveragePercentage;

                    if(response && response.coveragePercentage && response.coveragePercentage.value) {
                        coveragePercentage = response.coveragePercentage;
                    }

                    if(response && response.jscoveragePercentage && response.jscoveragePercentage.value) {
                        jscoveragePercentage = response.jscoveragePercentage;
                    }

                   data = [
                        {
                            name: 'backEndJUnit',
                            title: 'Back End Code Coverage',
                            data: coveragePercentage ? coveragePercentage : null
                        },
                        {
                            name: 'frontEndJSUnit',
                            title: 'Front End Code Coverage',
                            data: jscoveragePercentage ? jscoveragePercentage : null
                        }
                    ];

                    return {
                        name: 'coveragePercentage',
                        title: 'Coverage',
                        type: 'multipleTextWidget',
                        tooltipText: widgetHoverText.coveragePercentage,
                        width: (100/data.length)+'%',
                        data: data
                    };
                 });
            };

            ctrl.fetchPassPercent = function() {
                var route = '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var data,
                        jUnitSuccessPercentage,
                        jsJUnitSuccessPercentage;

                    if(response && response.jUnitSuccessPercentage && response.jUnitSuccessPercentage.value) {
                        jUnitSuccessPercentage = response.jUnitSuccessPercentage;
                    }

                    if(response && response.jsJUnitSuccessPercentage && response.jsJUnitSuccessPercentage.value) {
                        jsJUnitSuccessPercentage = response.jsJUnitSuccessPercentage;
                    }

                   data = [
                        {
                            title: 'Pass %',
                            data: jUnitSuccessPercentage ? jUnitSuccessPercentage : null
                        },
                        {
                            title: 'JS Pass %',
                            data: jsJUnitSuccessPercentage ? jsJUnitSuccessPercentage : null
                        }
                    ];

                    return {
                        name: 'passPercentage',
                        title: 'Pass %',
                        type: 'multipleTextWidget',
                        tooltipText: widgetHoverText.passPercentage,
                        width: (100/data.length)+'%',
                        data: data
                    };
                 });
            };  

            ctrl.fetchImprovement = function() {
                var route = '/api/excel/improvement';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'improvement',
                        title: 'Improvement',
                        type: 'status',
                        tooltipText: widgetHoverText.improvement,
                        data: (response && response.response !== undefined) ? response : null
                    };
                 });
            };

            ctrl.fetchCITime = function() {
                var fetchFixTime = function() {
                        var route = '/api/ed/citime';
                        return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                            return (response.fixTimeSVU && response.fixTimeSVU.value) ? response.fixTimeSVU : null;
                         });
                    },

                    fetchBuildTime = function() {
                        var route = '/api/ed/citime';
                        return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                            return (response.buildTimeSVU && response.buildTimeSVU.value) ? response.buildTimeSVU : null;
                         });
                    },

                    fetchSumTestExecution = function() {
                        var route = '/api/excel/autovsmanualtest';
                        return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                            return (response.sumTestExecution && response.sumTestExecution.value) ? response.sumTestExecution : null;
                         });
                    },

                    deferred = $q.defer();

                    $q.all([

                        fetchFixTime(),
                        fetchBuildTime(),
                        fetchSumTestExecution()

                    ]).then(function(response) {
                        var data = [
                                {
                                    name: 'timeToFixBrokenBuild',
                                    title: 'Time to fix a Broken Build',
                                    data: response[0] ? response[0] : null
                                },
                                {
                                    name:'codeBuildTime',
                                    title: 'Code Build Time',
                                    data: response[1] ? response[1] : null
                                },
                                {
                                    name:'functionalTestExecutionTime',
                                    title: 'Functional Test Execution Time',
                                    data: response[2] ? response[2] : null
                                }
                            ],
                            widgetData = {
                                name: 'citime',
                                title: 'CI Time',
                                type: 'multipleTextWidget',
                                tooltipText: widgetHoverText.citime,
                                width: (100/data.length)+'%',
                                data: data
                            };
                        deferred.resolve(widgetData);
                    });

                    return deferred.promise;
            };          

            ctrl.showMaturityRadar = function(event) {
                var button = $('.radar-button');
                ctrl.showRadar = !ctrl.showRadar;
                if(ctrl.showRadar) {
                    button.text('Team Dashboard');
                }else {
                    button.text('Maturity Radar');
                    d3.select(".maturity-radar").select("svg").remove();
                }
            };


            ctrl.commitmentReliability = function() {
                var route = '/api/jiraMVP/commitmentReliability';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'commitmentReliability',
                        title: 'Commitment Reliability',
                        type: 'text',
                        tooltipText: widgetHoverText.commitmentReliability,
                        data: (response.commitmentReliability && response.commitmentReliability.value) ? response.commitmentReliability : null
                    };
                 });
            };
            
            ctrl.fetchRisks = function(){
                var route = '/api/jiraMVP/risks';
               
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'risks',
                        title: 'Risks',
                        type: 'list',
                        tooltipText: widgetHoverText.risks,
                        data:response.dataCount || null
                    };
                });
            };

            ctrl.fetchTopIssues = function(){
                var route = '/api/jiraMVP/topIssues';
               
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'topIssues',
                        title: 'Top Issues',
                        type: 'list',
                        tooltipText: widgetHoverText.topIssues,
                        data:response.dataCount || null
                    };
                });
            };
            
            ctrl.fetchIssues = function(){
                var route = '/api/jiraMVP/issues';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'issues',
                        title: 'Issues',
                        type: 'list',
                        tooltipText: widgetHoverText.issues,
                       data:response.dataCount || null
                    };
                });
            };
            
            ctrl.fetchAgingIssue = function(){
                var route = '/api/jiraMVP/agingIssue';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                	return {
                        name: 'agingIssue',
                        title: 'Aging Issue',
                        type: 'text',
                        tooltipText: widgetHoverText.agingIssue,
                        data: (response.agingIssueLevel && response.agingIssueLevel.value) ? response.agingIssueLevel : null
                        //data: '{"agingIssueLevel":{"symbol":"","value":"65","unit":"%"}}'
                    };
                });
            };
            
            ctrl.fetchTechDebt = function(){
                var route = '/api/jiraMVP/techDebt';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'techDebt',
                        title: 'Tech Debt',
                        type: 'text',
                        tooltipText: widgetHoverText.techDebt,
                        data: (response.techDebt && response.techDebt.value) ? response.techDebt : null
                    };
                });
            };
            
            ctrl.fetchSonarTechDebt = function(){
                var route =  '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'techDebt',
                        title: 'Sonar Tech Debt',
                        type: 'text',
                        tooltipText: widgetHoverText.sonarTechDebt,
                        data: (response.techDebt && response.techDebt.value) ? response.techDebt : null
                    };
                });
            };
            
           /* ctrl.fetchAssignValueMetric = function() {
                var route = '/api/jiraMVP/assignedMetrics';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                    assignedValuePercentage;
                    
                    if(response && response.assignedValuePercentage && response.assignedValuePercentage.value) {
                    	assignedValuePercentage = response.assignedValuePercentage;
                    }

                    if(assignedValuePercentage) {
                        var fillAssignedValuePercentage = parseInt(assignedValuePercentage.value) > 100 ? 100 : assignedValuePercentage.value
                        graphData = {
                            data: [assignedValuePercentage.value, 100-fillAssignedValuePercentage],
                            symbol:"%",
                            colors: [
                                '#2779bc',
                                '#e2e2e2'
                            ],
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: false
                                },
                                cutoutPercentage: 70
                            }
                        };
                   }
                    return {
                        name: 'assignedValuePercentage',
                        title: 'Assign Value Metrics',
                        type: 'doughnut',
                        tooltipText: widgetHoverText.assignedValuePercentage,
                        data: graphData
                    };
                 });
            };           
            */
            ctrl.fetchAssignValueMetric = function() {
                var route = '/api/jiraMVP/assignedMetrics';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'assignedValuePercentage',
                        title: 'Assign Value Metrics',
                        type: 'text',
                        tooltipText: widgetHoverText.assignedValuePercentage,
                        data: (response.assignedValuePercentage && response.assignedValuePercentage.value) ? response.assignedValuePercentage : null
                    };
                 });
            };
           
/*            ctrl.fetchBacklogHealth = function() {
                var route = '/api/jiraMVP/backlogHealth';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                    backlogHealthPercentage;
                    
                    if(response && response.backlogHealthPercentage && response.backlogHealthPercentage.value) {
                    	backlogHealthPercentage = response.backlogHealthPercentage;
                    }
                    if(backlogHealthPercentage) {
                        var color  = ctrl.resourceHelpers && ctrl.resourceHelpers.backlogHealthBackgroundColor && ctrl.resourceHelpers.backlogHealthBackgroundColor[colorType]                       
                        var fillBacklogHealthPercentage = parseInt(backlogHealthPercentage.value) > 100 ? 100 : backlogHealthPercentage.value
                        graphData = {
                            data: [backlogHealthPercentage.value, 100-fillBacklogHealthPercentage],
                            symbol:"%",
                            colors: [
                                color,
                                '#e2e2e2'
                            ],
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: false
                                },
                                cutoutPercentage: 70
                            }
                        };
                   }
                    return {
                        name: 'backlogHealthPercentage',
                        title:'Backlog Health',
                        type: 'doughnut',
                        tooltipText: widgetHoverText.backlogHealthPercentage,
                        data: graphData
                    };
                 });
            };  */   
            ctrl.fetchBacklogHealth = function() {
                var route = '/api/jiraMVP/backlogHealth';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'backlogHealthPercentage',
                        title: 'Backlog Health',
                        type: 'text',
                        tooltipText: widgetHoverText.backlogHealthPercentage,
                        data: (response.backlogHealthPercentage && response.backlogHealthPercentage.value) ? response.backlogHealthPercentage : null
                    };
                 });
            };
            
            ctrl.fetchAssignValueTrend = function() {
                var route = '/api/jiraMVP/assignedMetricsTrend';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 4
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 4
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }
                    return {
                        name: 'assignmentTrend',
                        title: 'Trend for Assign Value Metrics',
                        type: 'line',
                        tooltipText: widgetHoverText.assignmentValueTrend,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchTrendOverAutoVsManualTest = function() {
                var route = '/api/trend/automation?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverAutoVsManualTest = {
                        name: 'TrendOverAutomation',
                        title: 'Trend over automation',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverAutoVsManual,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverAutoVsManualTest = trendOverAutoVsManualTest;
                    ctrl.trendOverChartModal();
                    return trendOverAutoVsManualTest;
                 });
            };

            ctrl.fetchTrendOverFunctionalTestExecutionTime = function() {
                var route = '/api/trend/functionaltest?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverFunctionalTestExecutionTime = {
                        name: 'trendOverFunctionalTestExecutionTime',
                        title: 'Trend over functional test execution',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverFunctionalTestExecutionTime,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverFunctionalTestExecutionTime = trendOverFunctionalTestExecutionTime;
                    ctrl.trendOverChartModal();
                    return trendOverFunctionalTestExecutionTime;
                 });
            };

            ctrl.fetchTrendOverCodeBuildTime = function() {
                var route = '/api/trend/buildTimeTrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverCodeBuildTime = {
                        name: 'trendOverCodeBuildTime',
                        title: 'Trend over Code Build Time',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverCodeBuildTime,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverCodeBuildTime = trendOverCodeBuildTime;
                    ctrl.trendOverChartModal();
                    return trendOverCodeBuildTime;
                 });
            };

            ctrl.fetchTrendOverTimeToFixedBroken = function() {
                var route = '/api/trend/fixTimeTrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverTimeToFixedBrokenBuild = {
                        name: 'trendOverTimeToFixedBrokenBuild',
                        title: 'Trend over time to fixed broken build',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverTimeToFixedBrokenBuild,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverTimeToFixedBrokenBuild = trendOverTimeToFixedBrokenBuild;
                    ctrl.trendOverChartModal();
                    return trendOverTimeToFixedBrokenBuild;
                 });
            };

            ctrl.fetchTrendOverCodeQuality = function() {
                var route = '/api/trend/codequalitytrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;
                    if(response.data && response.data.length) {
                        var data = [];
                        var unique = {};
                        var distinct = [];
                        var gradeItem = ["E","D","C","B","A"];
                        response.data.forEach(function(item){
                            if(!unique[item]) {
                                distinct.push(item);
                                unique[item] = true;                              
                            }
                            data.push(gradeItem.indexOf(item));
                        })
                       
                        graphData = {
                            data: data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',     
                                      ticks: {
                                        beginAtZero: true,                                       
                                        min: 0,
                                        stepSize: 1,
                                        max:4,
                                        callback: function(value, index, values) {                                         
                                          return ["A","B","C","D","E"][index];
                                        },
                                        autoSkip: true,
                                        maxTicksLimit: data.length
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in ' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false                                       
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverCodeQuality = {
                        name: 'trendOverCodeQuality',
                        title: 'Trend over Code quality',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverCodeQuality,
                        data: graphData,
                        startDate: response.startDate || '',
                        endDate: response.endDate || ''
                    };

                    ctrl.trendOverCodeQuality = trendOverCodeQuality;
                    ctrl.trendOverChartModal();
                    return trendOverCodeQuality;
             });
            };

            ctrl.fetchTrendOverBackEndJUnit = function() {
                var route = '/api/trend/backendjunittrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverBackEndJUnit = {
                        name: 'trendOverBackEndJUnit',
                        title: 'Trend over back end JUnit',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverBackEndJUnit,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverBackEndJUnit = trendOverBackEndJUnit;
                    ctrl.trendOverChartModal();
                    return trendOverBackEndJUnit;
                 });
            };

            ctrl.fetchTrendOverFrontEndJUnit = function() {
                var route = '/api/trend/frontendjunittrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverFrontEndJUnit = {
                        name: 'trendOverFrontEndJUnit',
                        title: 'Trend over front end JUnit',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverFrontEndJUnit,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverFrontEndJUnit = trendOverFrontEndJUnit;
                    ctrl.trendOverChartModal();
                    return trendOverFrontEndJUnit;
                 });
            };

            ctrl.fetchTrendOverSprintPredictability = function() {
                var route = '/api/trend/sprintPredictability';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverSprintPredictability = {
                        name: 'trendOverSprintPredictability',
                        title: 'Trend over sprint predictability',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverSprintPredictability,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverSprintPredictability = trendOverSprintPredictability;
                    ctrl.trendOverChartModal();
                 });
            };

            ctrl.fetchTrendOverCommitmentReliability = function() {
                var route = '/api/trend/commitmentReliability';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverCommitmentReliability = {
                        name: 'trendOverCommitmentReliability',
                        title: 'Trend over Commitment Reliability',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverCommitmentReliability,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverCommitmentReliability = trendOverCommitmentReliability;
                    ctrl.trendOverChartModal();
                 });
            };
            ctrl.fetchDefects = function(){
                var route = '/api/jiraMVP/defectCount';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true,
                                    fontSize: 3
                                },
                                scales: {
                                yAxes: [
                                    {
                                    id: 'y-axis',
                                    type: 'linear',
                                    display: true,
                                    position: 'left',
                                    ticks: {
                                        beginAtZero: true,
                                        fontSize: 8
                                    }
                                    }
                                ],
                                xAxes: [
                                    {
                                    id: 'x-axis',
                                    display: true,
                                    ticks: {
                                        fontSize: 8
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                    }
                                ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.thirdColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }
                    return {
                        name: 'defectCount',
                        title: 'Incidents/Defects',
                        type: 'bar',
                        tooltipText: widgetHoverText.defectCount,
                        data: graphData
                    };
                });
            };

            ctrl.fetchStoryLeadTimeToRelease = function() {
                var route = '/api/jiraMVP/DorToLive';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'timeToRelease',
                        title: 'Definition of Ready (DoR) to Live',
                        type: 'text',
                        tooltipText: widgetHoverText.storyLeadTime,
                        data: (response.timeToRelease && response.timeToRelease.value) ? response.timeToRelease : null
                    };
                 });
            };
            
            ctrl.fetchTrendOverStoryLeadTime = function() {
                var route = '/api/trend/dorToDod';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverStoryLeadTime = {
                        name: 'trendOverStoryLeadTime',
                        title: 'Trend over Story Lead Time',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverStoryLeadTime,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverStoryLeadTime = trendOverStoryLeadTime;
                    ctrl.trendOverChartModal();
                 });
            };

            ctrl.fetchTrendOverStoryLiveLeadTime = function() {
                var route = '/api/trend/dodToLive';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: ctrl.secondColumnBgColor,
                                borderColor: '#66666654',
                                borderWidth: "0.8",
                            }
                        };
                    }

                    var trendOverStoryLiveLeadTime = {
                        name: 'trendOverStoryLiveLeadTime',
                        title: 'Trend over Story Live Lead Time',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverStoryLiveLeadTime,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverStoryLiveLeadTime = trendOverStoryLiveLeadTime;
                    ctrl.trendOverChartModal();
                 });
            };

            ctrl.fetchAllSprintList = function() {
                var route = '/api/jiraMVP/sprintsList';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                  ctrl.allSprintList = response || []
                  ctrl.fromSprintList = response || []
                  ctrl.toSprintList = response || []
                });
            };

            ctrl.fetchAllSprintListWithoutStatus = function() {
                var route = '/api/jiraMVP/sprintsListWithoutStatus';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                  ctrl.allSprintList = response || []
                  ctrl.fromSprintList = response || []
                  ctrl.toSprintList = response || []
                });
            };
           
            $scope.$watch('$root.logoImage', function() {
                ctrl.logoImage = $rootScope.logoImage || localStorage.getItem('logoImage');
            });
        
        pageLoad();
    }
})();


/***/ }),

/***/ "./src/vendor/sapient/index.js":
/*!*************************************!*\
  !*** ./src/vendor/sapient/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codebase_src_app_dashboard_core_data_factories_custom_dashboard_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codebase/src/app/dashboard/core/data-factories/custom-dashboard-data */ "./src/vendor/sapient/codebase/src/app/dashboard/core/data-factories/custom-dashboard-data.js");
/* harmony import */ var _codebase_src_app_dashboard_core_data_factories_custom_dashboard_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codebase_src_app_dashboard_core_data_factories_custom_dashboard_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _codebase_src_app_dashboard_core_data_factories_dashboard_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codebase/src/app/dashboard/core/data-factories/dashboard-data */ "./src/vendor/sapient/codebase/src/app/dashboard/core/data-factories/dashboard-data.js");
/* harmony import */ var _codebase_src_app_dashboard_core_data_factories_dashboard_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_codebase_src_app_dashboard_core_data_factories_dashboard_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codebase_src_app_dashboard_directives_custom_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codebase/src/app/dashboard/directives/custom-widget */ "./src/vendor/sapient/codebase/src/app/dashboard/directives/custom-widget.js");
/* harmony import */ var _codebase_src_app_dashboard_directives_custom_widget__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codebase_src_app_dashboard_directives_custom_widget__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codebase_src_components_templates_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codebase/src/components/templates/custom */ "./src/vendor/sapient/codebase/src/components/templates/custom.js");
/* harmony import */ var _codebase_src_components_templates_custom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_codebase_src_components_templates_custom__WEBPACK_IMPORTED_MODULE_3__);
let sapientModule = {};






/* harmony default export */ __webpack_exports__["default"] = (sapientModule);





/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/styles/lloyds.less ./src/index ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/styles/lloyds.less */"./src/styles/lloyds.less");
module.exports = __webpack_require__(/*! ./src/index */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map