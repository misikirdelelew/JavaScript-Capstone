/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./heart-unshaded.svg */ \"./src/heart-unshaded.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./heart-shaded1.svg */ \"./src/heart-shaded1.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --dark-blue: #122c34;\\r\\n  --mild-blue: #224870;\\r\\n  --blue-blue: #2a4494;\\r\\n  --light-blue: #4ea5d9;\\r\\n  --water-blue: #44cfcb;\\r\\n  --text-white: #fff;\\r\\n  --gold: #dbae25;\\r\\n  --heart-red: rgb(223, 2, 2);\\r\\n  --count-hover: rgb(179, 4, 4);\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  padding: 2rem 0;\\r\\n  background-color: var(--dark-blue);\\r\\n  border-bottom: var(--mild-blue);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding-inline: 3rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 600;\\r\\n  text-decoration: none;\\r\\n  text-transform: capitalize;\\r\\n  color: var(--gold);\\r\\n}\\r\\n\\r\\n.logo:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: space-around;\\r\\n  column-gap: 1rem;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.nav ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  justify-content: space-between;\\r\\n  column-gap: 1rem;\\r\\n}\\r\\n\\r\\n.nav-item a {\\r\\n  font-size: 1.2rem;\\r\\n  color: var(--text-white);\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-item a:hover {\\r\\n  color: var(--gold);\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  color: var(--heart-red);\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n  color: var(--count-hover);\\r\\n}\\r\\n\\r\\n#search {\\r\\n  padding: 0.7rem;\\r\\n  border-radius: 0.5rem;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 20px 5px;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.section-titles {\\r\\n  width: 80%;\\r\\n  font-size: 1rem;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 50px;\\r\\n}\\r\\n\\r\\n.section-titles > * {\\r\\n  color: var(--dark-blue);\\r\\n  cursor: pointer;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.section-titles > *::after {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  width: 0;\\r\\n  height: 2px;\\r\\n  background-color: var(--gold);\\r\\n  transition: width 0.4s;\\r\\n}\\r\\n\\r\\n.section-titles > *:hover::after {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.main-content-wrap {\\r\\n  width: 80%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#request {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.listings {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n  grid-gap: 1rem;\\r\\n}\\r\\n\\r\\n.listing {\\r\\n  width: 100%;\\r\\n  padding: 5px;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.listing:hover {\\r\\n  border: 1px solid lightgray;\\r\\n}\\r\\n\\r\\n.listing img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.listing-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.listing-title h3 {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.listing-title small {\\r\\n  font-size: 0.7rem;\\r\\n}\\r\\n\\r\\n.likes-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-btn:hover {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 60%;\\r\\n  padding: 5px 10px;\\r\\n  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.656);\\r\\n  margin: 10px auto;\\r\\n}\\r\\n\\r\\n.popup-wrap {\\r\\n  padding-block: 40px;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  width: 80%;\\r\\n  height: 100%;\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  gap: 30px;\\r\\n  backdrop-filter: blur(30px);\\r\\n}\\r\\n\\r\\n.popup-close-btn {\\r\\n  position: absolute;\\r\\n  top: 40px;\\r\\n  right: 10px;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 50%;\\r\\n  max-width: 400px;\\r\\n}\\r\\n\\r\\n.popup-details {\\r\\n  width: 100%;\\r\\n  max-width: 500px;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  grid-template-rows: auto;\\r\\n  grid-gap: 1rem;\\r\\n}\\r\\n\\r\\n.bolden {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.comments-form {\\r\\n  width: 200px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.comments-form input {\\r\\n  width: 100%;\\r\\n  padding: 5px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.comments-form textarea {\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.comments-form button {\\r\\n  width: 60%;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  padding: 2rem 0;\\r\\n  background-color: var(--dark-blue);\\r\\n  color: var(--text-white);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_dom_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom-utils.js */ \"./src/modules/dom-utils.js\");\n/* harmony import */ var _modules_popUp_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp_element.js */ \"./src/modules/popUp_element.js\");\n/* harmony import */ var _modules_listingsData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/listingsData.js */ \"./src/modules/listingsData.js\");\n\n\n\n\n\nconst main = document.querySelector('.main');\nwindow.onload = () => (0,_modules_dom_utils_js__WEBPACK_IMPORTED_MODULE_1__.retriveAllData)().then(() => {\n  (0,_modules_dom_utils_js__WEBPACK_IMPORTED_MODULE_1__.countShows)();\n});\n(0,_modules_popUp_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(main);\n\nconst listingsContainerEl = document.getElementById('listings');\n_modules_listingsData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render(listingsContainerEl);\n_modules_listingsData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateLikes();\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-util.js":
/*!*********************************!*\
  !*** ./src/modules/api-util.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst getData = (url) => fetch(url).then((res) => res.json());\r\n\r\nconst postData = (url, data) => fetch(url, {\r\n  method: 'POST',\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  },\r\n  body: JSON.stringify(data),\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/api-util.js?");

/***/ }),

/***/ "./src/modules/constant.js":
/*!*********************************!*\
  !*** ./src/modules/constant.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"INV_COMMENT_URL\": () => (/* binding */ INV_COMMENT_URL),\n/* harmony export */   \"INV_LIKE_URL\": () => (/* binding */ INV_LIKE_URL),\n/* harmony export */   \"tvWrapper\": () => (/* binding */ tvWrapper)\n/* harmony export */ });\nconst API_URL = 'https://api.tvmaze.com/shows';\r\n\r\nconst APP_ID = 'zX9lc5HNiZeTfJrwouGw';\r\n\r\nconst INV_LIKE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;\r\nconst tvWrapper = document.getElementById('tv-container');\r\n\r\nconst INV_COMMENT_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`;\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/constant.js?");

/***/ }),

/***/ "./src/modules/data_interaction.js":
/*!*****************************************!*\
  !*** ./src/modules/data_interaction.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"setComment\": () => (/* binding */ setComment)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./src/modules/constant.js\");\n/* harmony import */ var _api_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-util.js */ \"./src/modules/api-util.js\");\n\r\n\r\n// Function to set comment\r\nconst setComment = async (itemId, userName, userComment) => {\r\n  const comment = { item_id: itemId, username: `${userName}`, comment: `${userComment}` };\r\n  await (0,_api_util_js__WEBPACK_IMPORTED_MODULE_1__.postData)(_constant_js__WEBPACK_IMPORTED_MODULE_0__.INV_COMMENT_URL, comment);\r\n};\r\n\r\n// Function to get comment\r\nconst getComments = async (itemId) => {\r\n  const response = await fetch(`${_constant_js__WEBPACK_IMPORTED_MODULE_0__.INV_COMMENT_URL}?item_id=${itemId}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/data_interaction.js?");

/***/ }),

/***/ "./src/modules/dom-utils.js":
/*!**********************************!*\
  !*** ./src/modules/dom-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countShows\": () => (/* binding */ countShows),\n/* harmony export */   \"displayAllData\": () => (/* binding */ displayAllData),\n/* harmony export */   \"retriveAllData\": () => (/* binding */ retriveAllData)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./src/modules/constant.js\");\n/* harmony import */ var _api_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-util.js */ \"./src/modules/api-util.js\");\n/* harmony import */ var _popUp_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp_element.js */ \"./src/modules/popUp_element.js\");\n\r\n\r\n\r\n\r\nconst countShows = () => {\r\n  const counterSpan = document.getElementById('show-counter');\r\n  (0,_api_util_js__WEBPACK_IMPORTED_MODULE_1__.getData)(_constant_js__WEBPACK_IMPORTED_MODULE_0__.API_URL).then((res) => {\r\n    counterSpan.textContent = `(${res.length})`;\r\n  });\r\n};\r\n\r\nconst displayAllData = (shows) => {\r\n  shows.forEach((show) => {\r\n    const cardDiv = document.createElement('div');\r\n    cardDiv.className = 'card';\r\n    cardDiv.id = show.id;\r\n    const showImg = document.createElement('img');\r\n    showImg.src = show.image.original;\r\n    showImg.alt = 'show image';\r\n    showImg.className = 'image';\r\n    cardDiv.appendChild(showImg);\r\n\r\n    const showInfDiv = document.createElement('div');\r\n    showInfDiv.className = 'show-info';\r\n    cardDiv.appendChild(showInfDiv);\r\n    const showName = document.createElement('p');\r\n\r\n    showName.className = 'show-name';\r\n    showName.textContent = show.name;\r\n\r\n    showInfDiv.appendChild(showName);\r\n    const likeDiv = document.createElement('div');\r\n    likeDiv.className = 'like';\r\n\r\n    const likeP = document.createElement('p');\r\n    likeP.className = 'heart';\r\n    const likeIcon = document.createElement('i');\r\n    likeIcon.classList.add('fa', 'fa-heart');\r\n    likeP.appendChild(likeIcon);\r\n    likeP.addEventListener('click', (e) => {\r\n      e.target.classList.toggle('active');\r\n\r\n      const value = e.target.parentElement.parentElement.nextSibling.textContent;\r\n      e.target.parentElement.parentElement.nextSibling.textContent = parseInt(value, 10) + 1;\r\n      (0,_api_util_js__WEBPACK_IMPORTED_MODULE_1__.postData)(_constant_js__WEBPACK_IMPORTED_MODULE_0__.INV_LIKE_URL, { item_id: show.id });\r\n    });\r\n    likeDiv.appendChild(likeP);\r\n\r\n    const liketext = document.createElement('p');\r\n    liketext.className = 'likes-num';\r\n\r\n    (0,_api_util_js__WEBPACK_IMPORTED_MODULE_1__.getData)(_constant_js__WEBPACK_IMPORTED_MODULE_0__.INV_LIKE_URL).then((res) => {\r\n      const likes = res.filter((item) => item.item_id === show.id);\r\n      liketext.textContent = likes.length > 0 ? likes[0].likes : 0;\r\n    });\r\n\r\n    likeDiv.appendChild(liketext);\r\n\r\n    showInfDiv.appendChild(likeDiv);\r\n    const commentBtn = document.createElement('button');\r\n    commentBtn.className = 'comment-btn';\r\n    commentBtn.textContent = 'Comments';\r\n    commentBtn.setAttribute('type', 'button');\r\n    commentBtn.addEventListener('click', () => {\r\n      (0,_popUp_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentBtn);\r\n    });\r\n    cardDiv.appendChild(commentBtn);\r\n    _constant_js__WEBPACK_IMPORTED_MODULE_0__.tvWrapper.appendChild(cardDiv);\r\n  });\r\n};\r\n\r\nconst retriveAllData = () => new Promise((resolve) => {\r\n  (0,_api_util_js__WEBPACK_IMPORTED_MODULE_1__.getData)(_constant_js__WEBPACK_IMPORTED_MODULE_0__.API_URL).then((res) => {\r\n    displayAllData(res);\r\n    resolve();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/dom-utils.js?");

/***/ }),

/***/ "./src/modules/listingsData.js":
/*!*************************************!*\
  !*** ./src/modules/listingsData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ListingsData {\n  constructor() {\n    this.listings = JSON.parse(window.localStorage.getItem('listings')) || [];\n    this.realtorApiUrl = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';\n    this.baseURLInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n    this.involvementAPIAppID = window.localStorage.getItem('involvementAPIAppID') || '';\n  }\n\n  getProperties = async () => {\n    const options = {\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json',\n        'X-RapidAPI-Key': '0ab2689c00mshf814237c331556cp10bc14jsnfee9b6b48580',\n        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',\n      },\n      body: '{\"limit\":200,\"offset\":0,\"baths\":{\"min\":3},\"list_price\":{\"max\":900,\"min\":200},\"beds\":{\"max\":3,\"min\":1},\"cats\":true,\"dogs\":true,\"state_code\":\"TX\",\"status\":[\"for_rent\"],\"type\":[\"condos\",\"condo_townhome_rowhome_coop\",\"condo_townhome\",\"townhomes\",\"duplex_triplex\",\"single_family\",\"multi_family\",\"apartment\",\"condop\",\"coop\"],\"sort\":{\"direction\":\"desc\",\"field\":\"list_date\"}}',\n    };\n\n    const response = await fetch(this.realtorApiUrl, options);\n    const data = await response.json();\n    this.listings = data.data.home_search.results;\n    window.localStorage.setItem('listings', JSON.stringify(this.listings));\n  };\n\n  createInvolvementTrackerApp = async () => {\n    const options = {\n      method: 'POST',\n      headers: {\n        'content-type': 'text/plain',\n      },\n    };\n    const response = await fetch(`${this.baseURLInvAPI}apps/`, options);\n    const data = await response.text();\n    window.localStorage.setItem('involvementAPIAppID', await data);\n  };\n\n  postLike = (id) => {\n    const options = {\n      method: 'POST',\n      headers: { 'content-type': 'application/json' },\n      body: JSON.stringify({\n        item_id: `${id}`,\n      }),\n    };\n\n    fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`, options)\n      .then((response) => {\n        if (response.ok) {\n          this.updateLikes();\n          return response.json();\n        }\n        throw new Error('Error posting like');\n      });\n  };\n\n  getLikes = async () => {\n    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`);\n    const data = await response.json();\n    return data;\n  };\n\n  updateLikes = async () => {\n    const likeCounters = document.querySelectorAll('.likes-count');\n    likeCounters.forEach(async (counter, index) => {\n      const likesData = await this.getLikes();\n      counter.innerHTML = `${likesData[index].likes} likes`;\n    });\n  };\n\n  render = (container) => {\n    this.listings.forEach((listing, i) => {\n      if (i > 8) return;\n      const listingEl = document.createElement('div');\n      listingEl.classList.add('listing');\n      listingEl.setAttribute('data-id', listing.property_id);\n      const listingImg = document.createElement('img');\n      listingImg.src = listing.primary_photo.href;\n      const listingTitle = document.createElement('div');\n      listingTitle.classList.add('listing-title');\n      listingTitle.innerHTML = `\n        <h3>Rate: $${listing.list_price || 'not available'} per month</h3>\n        <div class=\"likes-info\">\n          <button class=\"like-btn\" id=\"${listing.property_id}\"></button>\n          <small class=\"likes-count\">0 likes</small>\n        </div>\n      `;\n      const listingLocation = document.createElement('div');\n      listingLocation.classList.add('listing-location');\n      listingLocation.innerHTML = `\n        <p>Location: ${listing.location.address.line}, ${listing.location.address.city}, ${listing.location.address.state}</p\n      `;\n      const commentsEl = document.createElement('span');\n      commentsEl.classList.add('comments');\n      commentsEl.textContent = 'Comments';\n      commentsEl.dataset.id = listing.property_id;\n      listingEl.append(listingImg, listingTitle, listingLocation, commentsEl);\n      container.appendChild(listingEl);\n\n      const likeBtn = document.querySelector(`[data-id=\"${listing.property_id}\"] .like-btn`);\n      likeBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        this.postLike(e.target.id);\n      });\n\n      commentsEl.addEventListener('click', (e) => {\n        e.preventDefault();\n        this.renderComments(listing, document.getElementById('main-content-wrap'));\n      });\n    });\n    const listingsCount = document.querySelectorAll('.listing');\n    const sectionTitle = document.getElementById('main-section-title');\n    sectionTitle.innerHTML = `Top Rent Listings (${listingsCount.length})`;\n  };\n\n  renderComments = async (listing, container) => {\n    const popupWrapEl = document.createElement('div');\n    popupWrapEl.classList.add('popup-wrap');\n    popupWrapEl.setAttribute('data-id', listing.property_id);\n    const listingImg = document.createElement('img');\n    listingImg.src = listing.primary_photo.href;\n    listingImg.classList.add('popup-img');\n    const closeBtn = document.createElement('img');\n    closeBtn.src = 'https://img.icons8.com/ios/50/000000/close-window.png';\n    closeBtn.classList.add('popup-close-btn');\n    const listingTitle = document.createElement('h2');\n    listingTitle.classList.add('listing-title');\n    listingTitle.textContent = `Rate: $${listing.list_price || 'not available'} per month`;\n    const popupDetails = document.createElement('div');\n    popupDetails.classList.add('popup-details');\n    popupDetails.innerHTML = `\n      <p><span class = \"bolden\">City: </span> ${listing.location.address.city} </p>\n      <p><span class = \"bolden\">State: </span> ${listing.location.address.state} </p>\n      <p><span class = \"bolden\">Address: </span></br> ${listing.location.address.line}</p>\n      <p><span class = \"bolden\">Cordinates: </span></br>\n        [\n          lat: ${listing.location.address.coordinate.lat},\n          long: ${listing.location.address.coordinate.lon}\n        ]\n      </p>\n    `;\n    const commentsEl = document.createElement('div');\n    commentsEl.classList.add('popup-comments');\n    const commentsHeadingEl = document.createElement('h3');\n    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments?item_id=${listing.property_id}`);\n    const data = await response.json();\n    if (data.length > 0) {\n      data.forEach((comment) => {\n        const commentItem = document.createElement('p');\n        commentItem.classList.add('comment');\n        commentItem.innerHTML = `\n          <span class=\"bolden\">${comment.creation_date}</span>\n          <span class=\"username\">${comment.username}: </span>\n          <span class=\"comment-text\">${comment.comment}</span>\n        `;\n        commentsEl.appendChild(commentItem);\n      });\n    }\n    commentsHeadingEl.textContent = `Comments (${data.length || 'no comments yet'})`;\n    commentsEl.prepend(commentsHeadingEl);\n    commentsEl.dataset.id = listing.property_id;\n    const commentsForm = document.createElement('form');\n    commentsForm.classList.add('comments-form');\n    commentsForm.innerHTML = `\n      <input type=\"text\" name=\"name\" placeholder=\"Your name\" required>\n      <textarea name=\"comment\" placeholder=\"Your comment\" required></textarea>\n      <button type=\"submit\">Submit</button>\n    `;\n    popupWrapEl.append(listingImg, closeBtn, listingTitle, popupDetails, commentsEl, commentsForm);\n    container.appendChild(popupWrapEl);\n    closeBtn.addEventListener('click', () => {\n      popupWrapEl.remove();\n    });\n\n    commentsForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const username = e.target.name.value;\n      const comment = e.target.comment.value;\n      this.addComment(listing.property_id, username, comment);\n      e.target.reset();\n      popupWrapEl.innerHTML = `\n      <h2>Thank you for your comment!</h2>\n      `;\n      setTimeout(() => {\n        popupWrapEl.remove();\n      }, 3000);\n    });\n  }\n\n  addComment = (id, username, comment) => {\n    const options = {\n      method: 'POST',\n      headers: { 'content-type': 'application/json' },\n      body: JSON.stringify({\n        item_id: `${id}`,\n        username,\n        comment,\n      }),\n    };\n\n    fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments/`, options)\n      .then((response) => response.json())\n      .catch((error) => {\n        throw new Error(error);\n      });\n  }\n}\n\nconst listingsData = new ListingsData();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listingsData);\n\n//# sourceURL=webpack://webpack-template/./src/modules/listingsData.js?");

/***/ }),

/***/ "./src/modules/popUp_element.js":
/*!**************************************!*\
  !*** ./src/modules/popUp_element.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_interaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_interaction.js */ \"./src/modules/data_interaction.js\");\n/* harmony import */ var _api_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-util.js */ \"./src/modules/api-util.js\");\n\r\n\r\n\r\n// Function to create comment element\r\nconst createComment = (user, date, message) => {\r\n  // Article variables\r\n  const commentContainer = document.createElement('div');\r\n  const nameComment = document.createElement('h4');\r\n  const dateComment = document.createElement('h5');\r\n  const commentUser = document.createElement('p');\r\n  // Variables clsses\r\n  commentContainer.classList.add('commentContainer');\r\n  // Set content\r\n  nameComment.innerHTML = `${user}`;\r\n  dateComment.innerHTML = `${date}`;\r\n  commentUser.innerHTML = `${message}`;\r\n  // Create element\r\n  commentContainer.appendChild(nameComment);\r\n  commentContainer.appendChild(dateComment);\r\n  commentContainer.appendChild(commentUser);\r\n  return commentContainer;\r\n};\r\n\r\n// Function to count comments\r\nconst commentCounter = async (id) => {\r\n  const comments = await (0,_data_interaction_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\r\n  if (comments.length > 0) {\r\n    return comments.length;\r\n  } return undefined;\r\n};\r\n\r\nconst createPopUp = (id) => {\r\n  // Declare and create elements\r\n  const popSection = document.createElement('section');\r\n  const crossIcon = document.createElement('i');\r\n  const img = document.createElement('img');\r\n  const showTitle = document.createElement('h2');\r\n  const artDetails = document.createElement('article');\r\n  const divGenre = document.createElement('div');\r\n  const genreUl = document.createElement('ul');\r\n  const divLang = document.createElement('div');\r\n  const langUl = document.createElement('ul');\r\n  const langLi = document.createElement('li');\r\n  const artSummary = document.createElement('article');\r\n  const artComments = document.createElement('article');\r\n  const commentTitle = document.createElement('h3');\r\n  const artAddComment = document.createElement('article');\r\n  const addTitle = document.createElement('h3');\r\n  const form = document.createElement('form');\r\n  const addInput = document.createElement('input');\r\n  const addText = document.createElement('textarea');\r\n  const addButton = document.createElement('button');\r\n\r\n  // set classes, id's and attributes\r\n  popSection.classList.add('pop-up');\r\n  popSection.setAttribute('id', `${id}`);\r\n  crossIcon.classList.add('fa-solid', 'fa-xmark', 'icon');\r\n  img.setAttribute('alt', 'Tv-show image');\r\n  artDetails.classList.add('details');\r\n  divGenre.classList.add('genre');\r\n  divLang.classList.add('languages');\r\n  artSummary.classList.add('summary');\r\n  artComments.classList.add('comments');\r\n  commentTitle.classList.add('comment-title');\r\n  artAddComment.classList.add('addComment');\r\n  addInput.setAttribute('id', 'userInput');\r\n  addInput.setAttribute('type', 'text');\r\n  addInput.setAttribute('placeholder', 'name');\r\n  addText.setAttribute('id', 'commentInput');\r\n  addText.setAttribute('name', 'comment');\r\n  addText.setAttribute('placeholder', 'Leave a omment!');\r\n  addButton.setAttribute('id', 'addBtn');\r\n\r\n  // set data from API and common data\r\n  commentTitle.innerHTML = 'Comments';\r\n  addTitle.innerHTML = 'Add a comment!';\r\n  addButton.innerHTML = 'Submit';\r\n  // Get data from show API and create element\r\n  (0,_api_util_js__WEBPACK_IMPORTED_MODULE_1__.getData)('https://api.tvmaze.com/shows').then((data) => {\r\n    data.forEach((element) => {\r\n      if (element.id === id) {\r\n        img.setAttribute('src', `${element.image.medium}`);\r\n        showTitle.innerHTML = `${element.name}`;\r\n        artSummary.innerHTML = `${element.summary}`;\r\n        langLi.innerHTML = `${element.language}`;\r\n        element.genres.forEach((genre) => {\r\n          const li = document.createElement('li');\r\n          li.innerHTML = genre;\r\n          genreUl.appendChild(li);\r\n        });\r\n      }\r\n    });\r\n  });\r\n  // Get data from app API and create element\r\n  (0,_data_interaction_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {\r\n    if (data.error) {\r\n      artComments.appendChild(commentTitle);\r\n    } else {\r\n      const count = data.length;\r\n      commentCounter(id);\r\n      commentTitle.innerHTML = `Comments(${count})`;\r\n      artComments.appendChild(commentTitle);\r\n      data.forEach((comment) => {\r\n        const element = createComment(comment.username, comment.creation_date, comment.comment);\r\n        artComments.appendChild(element);\r\n      });\r\n    }\r\n  });\r\n\r\n  // Append elements\r\n  popSection.appendChild(crossIcon);\r\n  popSection.appendChild(img);\r\n  popSection.appendChild(showTitle);\r\n  divGenre.appendChild(genreUl);\r\n  langUl.appendChild(langLi);\r\n  divLang.appendChild(langUl);\r\n  artDetails.appendChild(divGenre);\r\n  artDetails.appendChild(divLang);\r\n  form.appendChild(addInput);\r\n  form.appendChild(addText);\r\n  form.appendChild(addButton);\r\n  artAddComment.appendChild(addTitle);\r\n  artAddComment.appendChild(form);\r\n  popSection.appendChild(artDetails);\r\n  popSection.appendChild(artSummary);\r\n  popSection.appendChild(artComments);\r\n  popSection.appendChild(artAddComment);\r\n\r\n  // Return pop-up node\r\n  return popSection;\r\n};\r\n\r\n// Function to delete pop-ups when close\r\nconst clearPopup = () => {\r\n  const popup = document.querySelector('.pop-up');\r\n  popup.remove();\r\n};\r\n\r\n// Function to update comments\r\nconst updateComments = (id, nodeContainer) => {\r\n  (0,_data_interaction_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {\r\n    const title = document.querySelector('.comment-title');\r\n    const count = data.length;\r\n    commentCounter(id);\r\n    title.innerHTML = `Comments(${count})`;\r\n    data.forEach((comment) => {\r\n      const element = createComment(comment.username, comment.creation_date, comment.comment);\r\n      nodeContainer.appendChild(element);\r\n    });\r\n  });\r\n};\r\n\r\n// Function to get coord from node\r\nconst getCord = (node) => {\r\n  const rect = node.getBoundingClientRect();\r\n  return {\r\n    top: rect.top + window.scrollY,\r\n  };\r\n};\r\n\r\n// Function to set coord to the element\r\nconst setCord = (parentNode, node) => {\r\n  const coord = getCord(parentNode);\r\n  node.style.top = `${coord.top - 90}px`;\r\n};\r\n\r\n// Function to create the pop-up when press button\r\nconst setPopup = async (node) => {\r\n  node.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    const parentId = parseInt(e.target.parentNode.id, 10);\r\n    // Create pop-up\r\n    if (e.target.nodeName === 'BUTTON' && e.target.classList.contains('comment-btn')) {\r\n      const popUp = createPopUp(parentId);\r\n      setCord(e.target.parentNode, popUp);\r\n      node.appendChild(popUp);\r\n    }\r\n    // Delete pop-up\r\n    if (e.target.classList.contains('icon') || e.target.nodeName === 'path') {\r\n      clearPopup();\r\n    }\r\n    // Set new comment\r\n    if (e.target.id === 'addBtn') {\r\n      const parentid = e.target.parentNode.parentNode.parentNode.id;\r\n      const userName = document.getElementById('userInput');\r\n      const userComment = document.getElementById('commentInput');\r\n      const commentContainer = document.querySelector('.comments');\r\n      const comments = document.querySelectorAll('.commentContainer');\r\n      if (userName.value && userComment.value) {\r\n        (0,_data_interaction_js__WEBPACK_IMPORTED_MODULE_0__.setComment)(parentid, userName.value, userComment.value).then(() => {\r\n          comments.forEach((element) => {\r\n            element.remove();\r\n          });\r\n          updateComments(parentid, commentContainer);\r\n        });\r\n      }\r\n      userName.value = '';\r\n      userComment.value = '';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setPopup);\n\n//# sourceURL=webpack://webpack-template/./src/modules/popUp_element.js?");

/***/ }),

/***/ "./src/heart-shaded1.svg":
/*!*******************************!*\
  !*** ./src/heart-shaded1.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf95465d73473f4cdea6.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/heart-shaded1.svg?");

/***/ }),

/***/ "./src/heart-unshaded.svg":
/*!********************************!*\
  !*** ./src/heart-unshaded.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d36b152b0437a39e57d7.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/heart-unshaded.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;