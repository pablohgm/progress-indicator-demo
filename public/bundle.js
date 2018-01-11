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
/******/ 	__webpack_require__.p = "public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_progressIndicator_ProgressIndicator__ = __webpack_require__(1);


customElements.define('progress-indicator', __WEBPACK_IMPORTED_MODULE_0__src_components_progressIndicator_ProgressIndicator__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_indicator_template_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_indicator_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__progress_indicator_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_indicator_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_indicator_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__progress_indicator_css__);



class ProgressIndicator extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<style>${__WEBPACK_IMPORTED_MODULE_1__progress_indicator_css___default.a}</style>${__WEBPACK_IMPORTED_MODULE_0__progress_indicator_template_html___default.a}`;
    let indicator = this.getAttribute('indicator');
    let target = this.getAttribute('target');
    this.updatePending(indicator, target);
    this.updateTarget(target);
    this.updateIndicator(indicator);
    this.animate(indicator, target);
  }

  updatePending(indicator, target) {
    let pending = target - indicator;
    this.getElementsByClassName('pi__message')[0].innerHTML = `You need $${pending} more to reach your target.`;
  }

  updateTarget(target) {
    this.getElementsByClassName('pi__target-text')[0].innerHTML = `Target $${target}`;
  }

  updateIndicator(target) {
    this.getElementsByClassName('pi__indicator')[0].innerHTML = `$${target}`;
  }

  animate(indicator, target) {
    let max = Math.round(100 * indicator / target);
    let element = document.getElementsByClassName("pi__progress-bar")[0];
    let tmpIndicator = document.getElementsByClassName('pi__indicator')[0];
    let width = 1;

    let id = setInterval(() => {
      if (width >= max) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }, 100);

    let idIndicator = setInterval(() => {
      if (width >= indicator) {
        clearInterval(idIndicator);
      } else {
        width++;
        tmpIndicator.innerHTML = `$${width}`;
      }
    }, 100);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ProgressIndicator);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div class=pi__container> <div class=pi__title>Your Progress</div> <div class=pi__sub-container> <div class=pi__bar-panel> <div class=pi__bar-title>Reached: </div> <div class=pi__bar> <div class=pi__progress-bar> <div class=pi__indicator></div> </div> <div class=pi__target-panel> <p class=pi__target-text></p> </div> </div> </div> <div class=pi__message-panel> <div class=pi__icon></div> <div class=pi__message></div> </div> </div> </div> ";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".pi__container{border:1px #66666648;border-radius:10px;background-color:#66666648;padding-bottom:2px}.pi__title{background-color:rgba(53,53,53,.856);border-radius:10px 10px 0 0;padding:10px;color:#fff;margin-bottom:15px}.pi__sub-container{border:1px #000;border-radius:10px;padding:10px;margin:25px;background-color:#ffffff94;height:100px;padding-top:35px}.pi__bar-title{width:12%;padding-right:5px;text-align:right;float:left}.pi__bar{background-color:hsla(0,0%,48%,.534);height:1em;padding:4px;background:rgba(0,0,0,.25);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,.25),0 1px hsla(0,0%,100%,.08);margin-bottom:56px;width:85%;float:left;position:relative}.pi__progress-bar{width:1%;height:1em;background-color:rgba(97,185,97,.795);transition:1s linear;transition-property:width,background-color;box-shadow:0 0 1px 1px rgba(0,0,0,.25),inset 0 1px hsla(0,0%,100%,.1)}.pi__indicator{width:30px;float:right;padding-top:30px;position:relative;margin-right:-15px}.pi__indicator:before{z-index:-1;position:absolute;content:\"\";right:calc(50% - 5px);top:19px;border-left:5px solid;border-right:5px solid;border-bottom:10px solid rgba(97,185,97,.795);transition-duration:.3s;transition-property:transform;color:#ffffff94}.pi__message-panel{width:60%;margin:auto}.pi__icon{clear:left;height:16px;width:16px;float:left;padding-right:5px;background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwICAgYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcgICBjMCwzOS43OCw5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU5Miw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3ICAgczc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTYsMjkuNDAzLTcwLjI4NCwyOS40MDMtMTEwLjA2MiAgIEM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3ogTTE4Mi43MjcsNTQuODEzYzAtMi42NjYsMC44NTUtNC44NTMsMi41Ny02LjU2NSAgIGMxLjcxMi0xLjcxMSwzLjkwMy0yLjU3LDYuNTY3LTIuNTdoNTQuODJjMi42NjIsMCw0Ljg1MywwLjg1OSw2LjU2MSwyLjU3YzEuNzExLDEuNzEyLDIuNTczLDMuODk5LDIuNTczLDYuNTY1djQ1LjY4MiAgIGMwLDIuNjY0LTAuODYyLDQuODU0LTIuNTczLDYuNTY0Yy0xLjcwOCwxLjcxMi0zLjg5OCwyLjU2OC02LjU2MSwyLjU2OGgtNTQuODJjLTIuNjY0LDAtNC44NTQtMC44NTYtNi41NjctMi41NjggICBjLTEuNzE1LTEuNzA5LTIuNTctMy45LTIuNTctNi41NjRWNTQuODEzeiBNMjkyLjM1OSwzNTYuMzA5YzAsMi42NjItMC44NjMsNC44NTMtMi41Nyw2LjU2MWMtMS43MDQsMS43MTQtMy44OTUsMi41Ny02LjU2MywyLjU3ICAgSDE1NS4zMTdjLTIuNjY3LDAtNC44NTQtMC44NTYtNi41NjctMi41N2MtMS43MTItMS43MDgtMi41NjgtMy44OTgtMi41NjgtNi41NjR2LTQ1LjY4MmMwLTIuNjcsMC44NTYtNC44NTMsMi41NjgtNi41NjcgICBjMS43MTMtMS43MDgsMy45MDMtMi41Nyw2LjU2Ny0yLjU3aDI3LjQxdi05MS4zNThoLTI3LjQxYy0yLjY2NywwLTQuODUzLTAuODU1LTYuNTY3LTIuNTY4Yy0xLjcxMi0xLjcxMS0yLjU2OC0zLjkwMS0yLjU2OC02LjU2NyAgIHYtNDUuNjc5YzAtMi42NjYsMC44NTYtNC44NTMsMi41NjgtNi41NjdjMS43MTUtMS43MTMsMy45MDUtMi41NjgsNi41NjctMi41NjhoOTEuMzY3YzIuNjYyLDAsNC44NTMsMC44NTUsNi41NjEsMi41NjggICBjMS43MTEsMS43MTQsMi41NzMsMy45MDEsMi41NzMsNi41Njd2MTQ2LjE3OWgyNy40MDFjMi42NjksMCw0Ljg1OSwwLjg1NSw2LjU3LDIuNTY2YzEuNzA0LDEuNzEyLDIuNTY2LDMuOTAxLDIuNTY2LDYuNTY3djQ1LjY4MyAgIEgyOTIuMzU5eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);background-repeat:no-repeat}.pi__target-panel{background-color:#ced3ce;border-radius:5%;color:#fff;padding:4px;width:50px;height:50px;text-align:center;position:absolute;top:-78px;right:-8px}.pi__target-panel p{margin:0}.pi__target-panel:before{position:absolute;z-index:-1;content:\"\";right:calc(30% - 10px);top:57px;border-left:10px solid;border-right:10px solid;border-top:20px solid #758875bd;transition-duration:.3s;transition-property:transform}", ""]);

// exports


/***/ }),
/* 4 */
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


/***/ })
/******/ ]);