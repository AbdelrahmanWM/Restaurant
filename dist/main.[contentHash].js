/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/Alkatra-Regular.ttf */ "./src/assets/Alkatra-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/Freehand-Regular.ttf */ "./src/assets/Freehand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-family:"RestaurantFont";
    font-weight:normal;
    font-style: normal;
}
@font-face {
    src:url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-family:"RestaurantHeaderFont";
    font-weight:normal;
    font-style: normal;
}
*{
    font-family:RestaurantFont,Arial, Helvetica, sans-serif;
    --text-color:#f5f5f5;
    --text-color2:#a5a5a5;
}
body,html{
    padding:0;
    margin:0;
}
#content{
    background-size: cover;
    background-position: center;
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
    display:grid;
    grid-template-rows: auto 1fr 200px;
    justify-content: center;
}

#content::before{
    content:"";
    width:100%;
    height:100%;
    background-color: #00000066;
    position: absolute;
    top:0;
    z-index:0;

}
/* header */
header{
    padding:1rem 0;
    background-color: #000000cc;
    text-align: center;
}
header h1{
    font-size:70px;
    font-family:RestaurantHeaderFont,Arial, Helvetica, sans-serif;
    color:var(--text-color);
    font-weight: 300;
    margin:15px;
}
header nav{
    display:flex;
    justify-content: center;
    background-color:#766a6a22;
    padding:15px 0;
}
header nav a{
    color:var(--text-color);
    /* margin:0 25px; */
    font-size:25px;
    padding:10px 25px;
    text-align: center;
    cursor:pointer;
}

header nav a.active{ 
    border-bottom:1px solid var(--text-color);
}

/* footer */
footer{
    background-color: #000000cc;
    text-align: center;
    padding:20px;

}
footer p{
    color:var(--text-color);
}
/* main */
main {
    margin:50px;
    width:50%;
    text-align: center;
    margin-left:auto;
    margin-right:auto;
}
@media Screen and (max-width:991px){
    main{
        width:100%;
    }
}
/*  homepage */
main .homeDiv{
    display: flex;
    flex-direction: column;
    background-color: #00000066;
    padding:50px;

    
}
main .homeDiv div{
    color:var(--text-color);
    text-align: center;
    background-color: #00000055;
    padding:50px;
    margin-bottom:20px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2CAAqC;IACrC,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,2CAAsC;IACtC,kCAAkC;IAClC,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,uDAAuD;IACvD,oBAAoB;IACpB,qBAAqB;AACzB;AACA;IACI,SAAS;IACT,QAAQ;AACZ;AACA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,UAAU;IACV,WAAW;IACX,2BAA2B;IAC3B,kBAAkB;IAClB,KAAK;IACL,SAAS;;AAEb;AACA,WAAW;AACX;IACI,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,6DAA6D;IAC7D,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,0BAA0B;IAC1B,cAAc;AAClB;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,WAAW;AACX;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;;AAEhB;AACA;IACI,uBAAuB;AAC3B;AACA,SAAS;AACT;IACI,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI;QACI,UAAU;IACd;AACJ;AACA,cAAc;AACd;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;;;AAGhB;AACA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    src:url('assets/Alkatra-Regular.ttf');\r\n    font-family:\"RestaurantFont\";\r\n    font-weight:normal;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    src:url('assets/Freehand-Regular.ttf');\r\n    font-family:\"RestaurantHeaderFont\";\r\n    font-weight:normal;\r\n    font-style: normal;\r\n}\r\n*{\r\n    font-family:RestaurantFont,Arial, Helvetica, sans-serif;\r\n    --text-color:#f5f5f5;\r\n    --text-color2:#a5a5a5;\r\n}\r\nbody,html{\r\n    padding:0;\r\n    margin:0;\r\n}\r\n#content{\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed; \r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1; \r\n    display:grid;\r\n    grid-template-rows: auto 1fr 200px;\r\n    justify-content: center;\r\n}\r\n\r\n#content::before{\r\n    content:\"\";\r\n    width:100%;\r\n    height:100%;\r\n    background-color: #00000066;\r\n    position: absolute;\r\n    top:0;\r\n    z-index:0;\r\n\r\n}\r\n/* header */\r\nheader{\r\n    padding:1rem 0;\r\n    background-color: #000000cc;\r\n    text-align: center;\r\n}\r\nheader h1{\r\n    font-size:70px;\r\n    font-family:RestaurantHeaderFont,Arial, Helvetica, sans-serif;\r\n    color:var(--text-color);\r\n    font-weight: 300;\r\n    margin:15px;\r\n}\r\nheader nav{\r\n    display:flex;\r\n    justify-content: center;\r\n    background-color:#766a6a22;\r\n    padding:15px 0;\r\n}\r\nheader nav a{\r\n    color:var(--text-color);\r\n    /* margin:0 25px; */\r\n    font-size:25px;\r\n    padding:10px 25px;\r\n    text-align: center;\r\n    cursor:pointer;\r\n}\r\n\r\nheader nav a.active{ \r\n    border-bottom:1px solid var(--text-color);\r\n}\r\n\r\n/* footer */\r\nfooter{\r\n    background-color: #000000cc;\r\n    text-align: center;\r\n    padding:20px;\r\n\r\n}\r\nfooter p{\r\n    color:var(--text-color);\r\n}\r\n/* main */\r\nmain {\r\n    margin:50px;\r\n    width:50%;\r\n    text-align: center;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n@media Screen and (max-width:991px){\r\n    main{\r\n        width:100%;\r\n    }\r\n}\r\n/*  homepage */\r\nmain .homeDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #00000066;\r\n    padding:50px;\r\n\r\n    \r\n}\r\nmain .homeDiv div{\r\n    color:var(--text-color);\r\n    text-align: center;\r\n    background-color: #00000055;\r\n    padding:50px;\r\n    margin-bottom:20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/baked-durum-topped-with-sour-cream-sesame.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/baked-durum-topped-with-sour-cream-sesame.jpg ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8f37eacc0839f3f51de965d82d7f1959.jpg");

/***/ }),

/***/ "./src/assets/delicious-burger-min.jpg":
/*!*********************************************!*\
  !*** ./src/assets/delicious-burger-min.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2d5ee34fb6a213aab02bbc51d0343735.jpg");

/***/ }),

/***/ "./src/assets/map.jpg":
/*!****************************!*\
  !*** ./src/assets/map.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ef16f3f3e5cea8edd736425f4247a9e2.jpg");

/***/ }),

/***/ "./src/assets/pexels-max-griss-6406460.jpg":
/*!*************************************************!*\
  !*** ./src/assets/pexels-max-griss-6406460.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1f50eda7646a72d29d956abcc54b609d.jpg");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateContactPage)
/* harmony export */ });
/* harmony import */ var _assets_map_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/map.jpg */ "./src/assets/map.jpg");

function generateContactPage(){

    const main=document.querySelector('main');
    main.innerHTML='';
    const contentDiv=document.createElement('div');
    contentDiv.classList.add('homeDiv');
    const discriptionDiv=document.createElement('div');
    discriptionDiv.classList.add('description')
    discriptionDiv.innerHTML=`
    <h3>Contact</h3>
    <p>(532) 435-5832</p>
    <p>spiceVistaBistro@gmail.com</p>
    `
    let mapImg=new Image();
    mapImg.src=_assets_map_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    mapImg.style.width='50%';
   
    discriptionDiv.appendChild(mapImg);

    contentDiv.appendChild(discriptionDiv);

    main.appendChild(contentDiv);
}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHomePage)
/* harmony export */ });
function generateHomePage(){
    
    const main=document.querySelector('main');
    main.innerHTML='';
    const contentDiv=document.createElement('div');
    contentDiv.classList.add('homeDiv');
    
    const discriptionDiv=document.createElement('div');
    discriptionDiv.classList.add('description')
    discriptionDiv.innerHTML='<h3>SpiceVista Bistro</h3><p>A culinary journey of flavors <br>where tradition meets innovation in every bite. <br>Indulge in exquisite creations and elevate your dining experience</p>'
    contentDiv.appendChild(discriptionDiv);

    const schedule=document.createElement('div');
    schedule.classList.add('schedule');
    schedule.innerHTML=`<h3>Hours</h3>
    <p>Monday to Friday: 6am - 8pm </p>
    <p>Saturday and Sunday: 8am - 6pm </p>`;
    contentDiv.appendChild(schedule);

    const location=document.createElement('div');
    location.classList.add('location');
    location.innerHTML=`<h3>Location</h3>
    <p>4548 rue Jean-Talon Quest, Montreal</p>`
    contentDiv.appendChild(location);
    main.appendChild(contentDiv);
}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenuPage)
/* harmony export */ });
/* harmony import */ var _assets_baked_durum_topped_with_sour_cream_sesame_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/baked-durum-topped-with-sour-cream-sesame.jpg */ "./src/assets/baked-durum-topped-with-sour-cream-sesame.jpg");
/* harmony import */ var _assets_pexels_max_griss_6406460_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pexels-max-griss-6406460.jpg */ "./src/assets/pexels-max-griss-6406460.jpg");


function generateMenuPage(){
    const main=document.querySelector('main');
    main.innerHTML='';
    const contentDiv=document.createElement('div');
    contentDiv.classList.add('homeDiv');
    let img=new Image();
    img.src=_assets_baked_durum_topped_with_sour_cream_sesame_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    img.style.width='500px';
    img.style.height='500px';

    let meal=document.createElement('div');
    meal.innerHTML=`</img><p class='large'>Grilled Salmon with Lemon Herb Butter</p>
    <p>Succulent salmon fillet perfectly grilled and drizzled with a zesty lemon herb butter. Served with a side of roasted vegetables, this dish offers a delightful balance of freshness and savory goodness. </p>
    `
    meal.prepend(img);
    contentDiv.appendChild(meal);


    let img2=new Image();
    img2.style.width='500px';
    img2.style.height='500px';
    img2.src=_assets_pexels_max_griss_6406460_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
    meal=document.createElement('div');
    meal.innerHTML=`<p class='large'>Mushroom Truffle Risotto</p>
    <p>Creamy arborio rice cooked to perfection, infused with earthy mushrooms and a hint of truffle oil. This comforting risotto is a gastronomic delight, capturing the essence of rich flavors and luxurious textures.</p>
    `
    meal.prepend(img2);
    contentDiv.appendChild(meal);

    main.appendChild(contentDiv);
}



/***/ }),

/***/ "./src/modules/template.js":
/*!*********************************!*\
  !*** ./src/modules/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTemplate)
/* harmony export */ });
/* harmony import */ var _assets_delicious_burger_min_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delicious-burger-min.jpg */ "./src/assets/delicious-burger-min.jpg");



const contentDiv = document.getElementById('content');

// Function to create and set background image
function setBackground() {
  contentDiv.style.backgroundImage = `url('${_assets_delicious_burger_min_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}')`;
}

// Function to create header
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const titleHeader = document.createElement('h1');
  titleHeader.textContent = 'SpiceVista Bistro';
  header.appendChild(titleHeader);
  nav.innerHTML = '<a id="home" class="active">Home</a><a id="menu">Menu</a><a id="contact">Contact</a>';
  header.appendChild(nav);
  document.body.appendChild(header);
}

// Function to create main content
function createMain() {
  const mainDiv = document.createElement('main');
  mainDiv.textContent='main';
  document.body.appendChild(mainDiv);
}

// Function to create footer
function createFooter() {
  const footer = document.createElement('footer');
  const paragraph = document.createElement('p');
  paragraph.textContent = `Copyright &copy; 2023 Abdel-Rahman`;
  footer.appendChild(paragraph);
  document.body.appendChild(footer);
}

function generateTemplate(){
  setBackground();
  createHeader();
  createMain();
  createFooter();
}

/***/ }),

/***/ "./src/assets/Alkatra-Regular.ttf":
/*!****************************************!*\
  !*** ./src/assets/Alkatra-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23ab70245e38b361521f.ttf";

/***/ }),

/***/ "./src/assets/Freehand-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/assets/Freehand-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f8f0eadd6e1dca7d4ab.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/template */ "./src/modules/template.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");







(0,_modules_template__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

function switchPages(){
  const homePage = document.getElementById('home');
  const menuPage = document.getElementById('menu');
  const contactPage = document.getElementById('contact');
  homePage.onclick = ()=>{
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
    homePage.classList.add('active');
    menuPage.classList.remove('active');
    contactPage.classList.remove('active');
  }
  menuPage.onclick = ()=>{
    ;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    menuPage.classList.add('active');
    homePage.classList.remove('active');
    contactPage.classList.remove('active');
  }
  contactPage.onclick = ()=>{
    ;(0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
    contactPage.classList.add('active');
    homePage.classList.remove('active');
    menuPage.classList.remove('active');
  }
}
switchPages();


})();

/******/ })()
;
//# sourceMappingURL=main.[contentHash].js.map