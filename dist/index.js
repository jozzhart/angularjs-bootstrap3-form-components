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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js??ref--8-2!./src/styles/lloyds.less":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--8-2!./src/styles/lloyds.less ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"lloyds.less","sourceRoot":""}]);

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

module.exports = "<div class=\"panel panel-default\" ng-class=\"{ minimised: $ctrl.minimised }\"> \n    <div class=\"panel-heading\" ng-click=\"$ctrl.showHide()\"> \n      <h3 class=\"panel-title\"><img src=\"../dist/assets/img/bot.png\" />  \n        Insights\n        <span ng-if=\"$ctrl.insights.length\" class=\"badge badge-error\">{{$ctrl.insights.length}}</span>\n        <span class=\"glyphicon glyphicon-triangle-bottom pull-right\"></span> \n        <span class=\"glyphicon glyphicon-triangle-top pull-right\"></span> \n      </h3> \n      <p>I'm here to provide some insights into your metrics.</p> \n    </div> \n    <div class=\"panel-body\"> \n      <div class=\"bubble\" ng-repeat=\"insight in $ctrl.insights\">\n        {{insight.message}} \n        <a ng-click=\"$ctrl.insightSeen()\" target=\"_blank\" href=\"{{insight.cta.link}}\">{{insight.cta.title}}<span class=\"glyphicon glyphicon-new-window\"></span></a> \n      </div> \n    </div> \n    <div class=\"panel-footer\"> \n      <input type=\"text\" placeholder=\"Potential future chat feature\" style=\"padding: 9px 20px; width: 230px;\" /> \n      <a class=\"btn btn-primary pull-right\">send</a> \n    </div> \n  </div>"

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
    this.insightsCount = null;
  }

  _createClass(ChatController, [{
    key: '$onInit',
    value: function $onInit() {}
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

    //  TODO - implement

  }, {
    key: 'insightSeen',
    value: function insightSeen() {
      // Once seen remove from array?
      this.insights = [];
      this.minimised = true;
    }
  }]);

  return ChatController;
}();

var ChatComponent = {
  template: _chatComponent2.default,
  bindings: {
    insights: '<'
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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-3 hidden-xs hidden-sm\">\n\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"data:image/png;base64,{{$ctrl.logo}}\">\n          </a>\n        </div>\n\n      </div>\n      <div class=\"col-md-5 col-sm-6 hidden-xs\">\n        <!-- Team Dashboard -->\n        <div ng-if=\"$ctrl.page === 'teamDashboard'\">\n          <h3>{{$ctrl.projectDetails.name}}</h3>\n          <div class=\"hidden-sm hide\">\n            <dl ng-if=\"($ctrl.projectDetails.monetoryValue && $ctrl.projectDetails.monetoryValue !== '')\">\n              <dt>Revenue:</dt>\n              <dd>{{$ctrl.projectDetails.monetoryValue}}&emsp;</dd>\n            </dl>\n            <dl ng-if=\"($ctrl.projectDetails.teamSize && ($ctrl.projectDetails.teamSize > 0 || $ctrl.projectDetails.teamSize !==''))\">\n              <dt>Team Size:</dt>\n              <dd>{{$ctrl.projectDetails.teamSize}}&emsp;&emsp;</dd>\n            </dl>\n            <dl ng-if=\"($ctrl.projectDetails.startDate && $ctrl.projectDetails.startDate !=='')\">\n              <dt>Start Date:</dt>\n              <dd>{{$ctrl.projectDetails.startDate}}&emsp;&emsp;</dd>\n            </dl>\n            <dl ng-if=\"($ctrl.projectDetails.endDate && $ctrl.projectDetails.endDate !=='')\">\n              <dt>End Date:</dt>\n              <dd>{{$ctrl.projectDetails.endDate}}&emsp;&emsp;</dd>\n            </dl>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li ng-if=\"$ctrl.page === 'teamDashboard'\" class=\"hideShow\">\n            <div class=\"navbar-form\">\n              <button type=\"button\" class=\"btn btn-default\">Maturity Radar</button>\n            </div>\n          </li>\n          <li ng-if=\"$ctrl.page === 'teamDashboard'\" class=\"hideShow\">\n            <div class=\"navbar-form\">\n              <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\".modal-hideShow\">\n                <span class=\"fa fa-th glyphicon glyphicon-th\"></span>&nbsp; Hide/Show</button>\n            </div>\n          </li>\n          <li ng-if=\"$ctrl.page !== 'teamDashboard'\" role=\"presentation\" class=\"dropdown\" uib-dropdown>\n            <a class=\"dropdown-toggle btn-lg\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n              uib-dropdown-toggle>\n              Speedy User\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu>\n              <li>\n                <a href=\"#/\">Readme</a>\n              </li>\n              <li>\n                <a href=\"#/sink\">Kitchen Sink</a>\n              </li>\n              <li>\n                <a href=\"#/status\">Status</a>\n              </li>\n              <li>\n                <a href=\"#/settings\">Settings</a>\n              </li>\n              <li>\n                <a href=\"#/team-dashboard\">Team Dashboard</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n"

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
  function NavController(customDashboardData, dashboardData) {
    'ngInject'; // ng-annotate

    _classCallCheck(this, NavController);

    this.logo = null;
    this.projectDetails = null;
    this.customDashboardData = customDashboardData;
    this.dashboardData = dashboardData;
  }

  _createClass(NavController, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      console.log('nav component initialised, page:', this.page);

      this.dashboardData.getLogoImage().then(function (res) {
        _this.logo = res.image;
      });

      this.customDashboardData.fetchProjectDetails().then(function (res) {
        _this.projectDetails = res;
      });
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
    page: '@'
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

exports.default = componentsModule;

/***/ }),

/***/ "./src/components/smart/status.html":
/*!******************************************!*\
  !*** ./src/components/smart/status.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<spdy-nav></spdy-nav>\n<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"statusPage\">\n    <div class=\"col-lg-8 col-lg-push-2\">\n      <div class=\"widget-modal r\">\n        <div class=\"widget-modal-heading\">\n          <h1 class=\"page-header\">Collectors status</h1>\n        </div>\n        <div class=\"widget-modal-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Status</th>\n                <th>Name</th>\n                <th>Last Execution</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr ng-repeat-start=\"collector in $ctrl.collectors\">\n                <td>\n                  <span ng-if=\"!collector.errors.length\" class=\"glyphicon glyphicon-thumbs-up \"></span>\n                  <span ng-if=\"collector.errors.length\" class=\"glyphicon glyphicon-thumbs-down\"></span>\n                </td>\n                <td>{{collector.collectorName}}</td>\n                <td>{{collector.lastExecuted | date:'EEE, dd MMM @ HH:mm a'}}</td>\n              </tr>\n              <tr ng-repeat-end ng-if=\"collector.errors.length\">\n                <td colspan=\"3\">\n                  <div class=\"alert alert-danger\">\n                    <p ng-if=\"collector.errors.length\">\n                      <strong>{{collector.errors[0].errorCode}}</strong>: {{collector.errors[0].errorMessage}}</p>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

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

module.exports = "<spdy-nav page=\"teamDashboard\"></spdy-nav>\n<div class=\"wrapper\">\n  <div class=\"one\" ng-if=\"$ctrl.showValueHeader || $ctrl.showPeopleHeader\">\n    <div ng-show=\"$ctrl.showPeopleHeader\" class=\"category-head cellDoubleWidth\" id=\"people\">\n      <div>\n        <img src=\"../dist/assets/img/people-icon.png\">\n        <h5>PEOPLE</h5>\n        <h6>Are people engaged?</h6>\n      </div>\n    </div>\n    <custom-widget ng-if=\"$ctrl.layout.col0.improvement.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col0.improvement.classes\"\n      fetch-data=\"$ctrl.fetchImprovement()\"></custom-widget>\n\n    <!-- HAPPINESS INDEX -->\n    <custom-widget ng-if=\"$ctrl.layout.col0.happiness.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col0.happiness.classes\"\n      fetch-data=\"$ctrl.fetchHappinessIndex()\"></custom-widget>\n    <div ng-show=\"$ctrl.showValueHeader\" class=\"category-head cellDoubleWidth\" id=\"quality\">\n      <div>\n        <img src=\"../dist/assets/img/value-icon.png\">\n        <h5>VALUE</h5>\n        <h6>Are we delivering value?</h6>\n      </div>\n    </div>\n    <custom-widget ng-if=\"$ctrl.layout.col0.value.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col0.value.classes\" fetch-data=\"$ctrl.fetchAssignValueMetric()\"></custom-widget>\n  </div>\n\n  <div class=\"two\" ng-class=\"[{ col1Hidden: !($ctrl.showValueHeader || $ctrl.showPeopleHeader) }, { col3Hidden: !$ctrl.showQualityHeader }]\">\n    <div ng-show=\"$ctrl.showSpeedHeader\" class=\"category-head\" id=\"productivity\">\n      <div>\n        <img src=\"../dist/assets/img/productivity-icon.png\">\n        <h5>SPEED</h5>\n        <h6>Are we going fast?</h6>\n      </div>\n    </div>\n    <!-- <custom-widget ng-if=\"$ctrl.layout.col1.backlogToDOR.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.backlogToDOR.classes\" fetch-data=\"$ctrl.fetchStoryBacklogtoDOR()\"></custom-widget> -->\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.storyDORtoDOD.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.storyDORtoDOD.classes\"\n      fetch-data=\"$ctrl.fetchStoryDORtoDOD()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('storyLeadTime')\"></custom-widget>\n\n    <!-- <custom-widget ng-if=\"$ctrl.layout.col1.storyLeadTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.storyLeadTime.classes\" fetch-data=\"$ctrl.fetchStoryLeadTime()\"></custom-widget> -->\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.dodToLive.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.dodToLive.classes\"\n      fetch-data=\"$ctrl.fetchStoryDODtoLive()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('storyLiveLeadTime')\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.sprintPredictability.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.sprintPredictability.classes\"\n      fetch-data=\"$ctrl.fetchSprintPredictability()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('sprintPredictability')\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.commitmentReliability.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.commitmentReliability.classes\"\n      fetch-data=\"$ctrl.commitmentReliability()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('commitmentReliability')\"></custom-widget>\n\n    <!-- NUMBER OF CHECK-IN PER DAY   -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.noOfCheckins.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.noOfCheckins.classes\"\n      fetch-data=\"$ctrl.fetchNoOfCheckins()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('NoOfCheckins')\"></custom-widget>\n\n    <!-- CUMULATIVE FLOW DIAGRAM -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.cfdData.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.cfdData.classes\"\n      fetch-data=\"$ctrl.fetchCfdData()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\" ng-click=\"$ctrl.customWidgetClick('CfdData')\"></custom-widget>\n\n    <!-- BACKLOG HEALTH -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.backlogHealth.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.backlogHealth.classes\"\n      fetch-data=\"$ctrl.fetchBacklogHealth()\"></custom-widget>\n\n    <!-- TECH DEBT -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.techDebit.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.techDebit.classes\"\n      fetch-data=\"$ctrl.fetchTechDebt()\"></custom-widget>\n\n       <!-- CI TIME -->\n    <custom-widget ng-if=\"$ctrl.layout.col1.ciTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.ciTime.classes\" fetch-data=\"$ctrl.fetchCITime()\"\n    data-toggle=\"modal\" focus-element=\"autofocus\" on-widget-click=\"$ctrl.customWidgetClick(widgetType)\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col1.envCreationTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.envCreationTime.classes\"\n      fetch-data=\"$ctrl.fetchEnvCreationTime()\"></custom-widget>\n  \n\n    <custom-widget ng-if=\"$ctrl.layout.col1.releaseDeployTime.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col1.releaseDeployTime.classes\"\n      fetch-data=\"$ctrl.fetchReleaseDeployTime()\"></custom-widget>\n\n  </div>\n  <div class=\"three\" ng-if=\"$ctrl.showQualityHeader\">\n    <div ng-show=\"$ctrl.showQualityHeader\" class=\"category-head\">\n      <div>\n        <img src=\"../dist/assets/img/quality-icon.png\">\n        <h5>QUALITY</h5>\n        <h6>Are we building a quality product?</h6>\n      </div>\n    </div>\n    <!-- <custom-widget ng-if=\"$ctrl.layout.col2.xxxxxxx.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.xxxxxxxx.classes\" fetch-data=\"$ctrl.fetchDefectInjectionRatePostlive()\"></custom-widget> -->\n    <custom-widget ng-if=\"$ctrl.layout.col2.defectInjectionRate.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.defectInjectionRate.classes\"\n      fetch-data=\"$ctrl.fetchDefectInjectionRate()\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col2.autoVsManualTest.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.autoVsManualTest.classes\"\n      fetch-data=\"$ctrl.fetchAutoVsManualTest()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('autoPercentage')\"></custom-widget>\n\n    <!-- CODE QUALITY -->\n    <custom-widget ng-if=\"$ctrl.layout.col2.codeQuality.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.codeQuality.classes\"\n      fetch-data=\"$ctrl.fetchCodeQuality()\" data-toggle=\"modal\" focus-element=\"autofocus\" data-target=\".modal-toggle\"\n      ng-click=\"$ctrl.customWidgetClick('codeQuality')\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col2.jUnitCoverage.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.jUnitCoverage.classes\"\n      fetch-data=\"$ctrl.fetchJUnitCoverage()\" data-toggle=\"modal\" focus-element=\"autofocus\" on-widget-click=\"$ctrl.customWidgetClick(widgetType)\"></custom-widget>\n\n    <custom-widget ng-if=\"$ctrl.layout.col2.appDemonstration.show\" class=\"custom-widget\" ng-class=\"$ctrl.layout.col2.appDemonstration.classes\"\n      fetch-data=\"$ctrl.fetchAppDemonstration()\"></custom-widget>\n  </div>\n</div>\n<div id=\"overlay\">\n  <div id=\"textPopup\"></div>\n</div>\n<spdy-chat insights=\"$ctrl.insights\"></spdy-chat>"

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

    this.insights = [];
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

      //  Check happiness
      this.fetchHappinessIndex().then(function (res) {
        var data = res.data.data;

        if (parseFloat(data[0]) > parseFloat(data[1])) _this.insights.push({
          message: "Your happiness index has fallen over the last 5 weeks.",
          cta: {
            title: "Find out how to improve this",
            link: "https://confluence.devops.lloydsbanking.com/display/ET/Speedy+FAQ"
          }
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


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/less-loader/dist/cjs.js??ref--6-2!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js??ref--8-2!./lloyds.less */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js??ref--8-2!./src/styles/lloyds.less");

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
                    if (!$('#textPopup:hover').length) {
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