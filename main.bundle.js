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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./heart-unshaded.svg */ \"./src/heart-unshaded.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./heart-shaded1.svg */ \"./src/heart-shaded1.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --dark-blue: #122c34;\\r\\n  --mild-blue: #224870;\\r\\n  --blue-blue: #2a4494;\\r\\n  --light-blue: #4ea5d9;\\r\\n  --water-blue: #44cfcb;\\r\\n  --text-white: #fff;\\r\\n  --gold: #dbae25;\\r\\n  --heart-red: rgb(223, 2, 2);\\r\\n  --count-hover: rgb(179, 4, 4);\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  padding: 2rem 0;\\r\\n  background-color: var(--dark-blue);\\r\\n  border-bottom: var(--mild-blue);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding-inline: 3rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 600;\\r\\n  text-decoration: none;\\r\\n  text-transform: capitalize;\\r\\n  color: var(--gold);\\r\\n}\\r\\n\\r\\n.logo:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: space-around;\\r\\n  column-gap: 1rem;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.nav ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  justify-content: space-between;\\r\\n  column-gap: 1rem;\\r\\n}\\r\\n\\r\\n.nav-item a {\\r\\n  font-size: 1.2rem;\\r\\n  color: var(--text-white);\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-item a:hover {\\r\\n  color: var(--gold);\\r\\n}\\r\\n\\r\\n.nav-item {\\r\\n  color: var(--heart-red);\\r\\n}\\r\\n\\r\\n.nav-item:hover {\\r\\n  color: var(--count-hover);\\r\\n}\\r\\n\\r\\n#search {\\r\\n  padding: 0.7rem;\\r\\n  border-radius: 0.5rem;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 20px 5px;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.section-titles {\\r\\n  width: 80%;\\r\\n  font-size: 1rem;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 50px;\\r\\n}\\r\\n\\r\\n.section-titles > * {\\r\\n  color: var(--dark-blue);\\r\\n  cursor: pointer;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.section-titles > *::after {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  width: 0;\\r\\n  height: 2px;\\r\\n  background-color: var(--gold);\\r\\n  transition: width 0.4s;\\r\\n}\\r\\n\\r\\n.section-titles > *:hover::after {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.main-content-wrap {\\r\\n  width: 80%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#request {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.listings {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-template-rows: auto;\\r\\n  grid-gap: 1rem;\\r\\n}\\r\\n\\r\\n.listing {\\r\\n  width: 100%;\\r\\n  padding: 5px;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.listing:hover {\\r\\n  border: 1px solid lightgray;\\r\\n}\\r\\n\\r\\n.listing img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.listing-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.listing-title h3 {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.listing-title small {\\r\\n  font-size: 0.7rem;\\r\\n}\\r\\n\\r\\n.likes-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-btn:hover {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  width: 60%;\\r\\n  padding: 5px 10px;\\r\\n  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.656);\\r\\n  margin: 10px auto;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-wrap {\\r\\n  padding-block: 40px;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  width: 80%;\\r\\n  height: 100%;\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  gap: 30px;\\r\\n  backdrop-filter: blur(30px);\\r\\n}\\r\\n\\r\\n.popup-close-btn {\\r\\n  position: absolute;\\r\\n  top: 40px;\\r\\n  right: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 50%;\\r\\n  max-width: 400px;\\r\\n}\\r\\n\\r\\n.popup-details {\\r\\n  width: 100%;\\r\\n  max-width: 500px;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  grid-template-rows: auto;\\r\\n  grid-gap: 1rem;\\r\\n}\\r\\n\\r\\n.bolden {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.comments-form {\\r\\n  width: 200px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.comments-form input {\\r\\n  width: 100%;\\r\\n  padding: 5px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.comments-form textarea {\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.comments-form button {\\r\\n  width: 60%;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  padding: 2rem 0;\\r\\n  background-color: var(--dark-blue);\\r\\n  color: var(--text-white);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/index.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_listingsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listingsData.js */ \"./src/modules/listingsData.js\");\n\n\n\nconst listingsContainerEl = document.getElementById('listings');\n_modules_listingsData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(listingsContainerEl);\n_modules_listingsData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateLikes();\nif (!window.localStorage.getItem('involvementAPIAppID')) {\n  _modules_listingsData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createInvolvementTrackerApp();\n}\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/listingsData.js":
/*!*************************************!*\
  !*** ./src/modules/listingsData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ListingsData {\r\n  constructor() {\r\n    this.listings = [];\r\n    this.realtorApiUrl = 'https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/';\r\n    this.baseURLInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\n    this.involvementAPIAppID = window.localStorage.getItem('involvementAPIAppID') || '';\r\n  }\r\n\r\n  createInvolvementTrackerApp = async () => {\r\n    const options = {\r\n      method: 'POST',\r\n      headers: {\r\n        'content-type': 'text/plain',\r\n      },\r\n    };\r\n    const response = await fetch(`${this.baseURLInvAPI}apps/`, options);\r\n    const data = await response.text();\r\n    window.localStorage.setItem('involvementAPIAppID', data);\r\n  };\r\n\r\n  getProperties = async () => {\r\n    const urls = Array.from({ length: 20 }, (_, i) => `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${i + 20}`);\r\n    const responses = await Promise.all(urls.map((url) => fetch(url)));\r\n    const pokemonData = await Promise.all(responses.map((response) => response.json()));\r\n    this.listings = pokemonData.map((pokemon) => ({\r\n      name: pokemon.name,\r\n      id: pokemon.id,\r\n      image: pokemon.sprites.front_default,\r\n      types: pokemon.types.map((type) => type.type.name).join(', '),\r\n      abilities: pokemon.abilities.map((ability) => ability.ability.name).join(', '),\r\n      species: pokemon.species.name,\r\n      height: pokemon.height,\r\n      weight: pokemon.weight,\r\n    }));\r\n    return this.listings;\r\n  };\r\n\r\n  postLike = (id) => {\r\n    const options = {\r\n      method: 'POST',\r\n      headers: { 'content-type': 'application/json' },\r\n      body: JSON.stringify({\r\n        item_id: `${id}`,\r\n      }),\r\n    };\r\n\r\n    fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`, options)\r\n      .then((response) => {\r\n        if (response.ok) {\r\n          this.updateLikes(id);\r\n          return response.status;\r\n        }\r\n        throw new Error('Error posting like');\r\n      });\r\n  };\r\n\r\n  getLikes = async () => {\r\n    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/likes/`);\r\n    const data = await response.json();\r\n    return data;\r\n  };\r\n\r\n  updateLikes = async (id) => {\r\n    const likesData = await this.getLikes();\r\n    const targetObject = likesData.find((ele) => ele.item_id === id);\r\n    const targetEle = document.querySelector(`#likes-${id}`);\r\n    targetEle.textContent = targetObject.likes;\r\n  };\r\n\r\n  render = async (container) => {\r\n    if (this.listings.length === 0) {\r\n      this.listings = await this.getProperties();\r\n    }\r\n    this.listings.forEach((listing) => {\r\n      const listingEl = document.createElement('div');\r\n      listingEl.classList.add('listing');\r\n      listingEl.setAttribute('data-id', listing.id);\r\n      const listingImg = document.createElement('img');\r\n      listingImg.src = listing.image;\r\n      const listingTitle = document.createElement('div');\r\n      listingTitle.classList.add('listing-title');\r\n      listingTitle.innerHTML = `\r\n        <div class=\"likes-info\">\r\n          <button class=\"like-btn\" id=\"${listing.id}\"></button>\r\n          <small class=\"likes-count\" id=\"likes-${listing.id}\">0 likes</small>\r\n        </div>\r\n      `;\r\n      const commentsEl = document.createElement('span');\r\n      commentsEl.classList.add('comments');\r\n      commentsEl.textContent = 'Comments';\r\n      commentsEl.dataset.id = listing.id;\r\n      listingEl.append(listingImg, listingTitle, commentsEl);\r\n      container.appendChild(listingEl);\r\n\r\n      const likeBtn = document.querySelector(`[data-id=\"${listing.id}\"] .like-btn`);\r\n      likeBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        this.postLike(e.target.id);\r\n      });\r\n\r\n      commentsEl.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        this.renderCommentsPopup(listing, document.getElementById('main-content-wrap'));\r\n      });\r\n    });\r\n    const listingsCount = document.querySelectorAll('.listing');\r\n    const sectionTitle = document.getElementById('main-section-title');\r\n    sectionTitle.innerHTML = `Top Rent Listings (${listingsCount.length})`;\r\n  };\r\n\r\n  renderCommentsPopup = async (listing, container) => {\r\n    const popupWrapEl = document.createElement('div');\r\n    popupWrapEl.classList.add('popup-wrap');\r\n    popupWrapEl.setAttribute('data-id', listing.id);\r\n    const listingImg = document.createElement('img');\r\n    listingImg.src = listing.image;\r\n    listingImg.classList.add('popup-img');\r\n    const closeBtn = document.createElement('img');\r\n    closeBtn.src = 'https://img.icons8.com/ios/50/000000/close-window.png';\r\n    closeBtn.classList.add('popup-close-btn');\r\n    const listingTitle = document.createElement('h2');\r\n    listingTitle.classList.add('listing-title');\r\n    listingTitle.textContent = listing.name + listing.id;\r\n    const popupDetails = document.createElement('div');\r\n    popupDetails.classList.add('popup-details');\r\n    popupDetails.innerHTML = `\r\n      <p><span class = \"bolden\">Type: </span> ${listing.types} </p>\r\n      <p><span class = \"bolden\">Ability: </span> ${listing.abilities} </p>\r\n      <p><span class = \"bolden\">Species: </span></br> ${listing.species}</p>\r\n      <p><span class = \"bolden\">Cordinates: </span></br>\r\n        [\r\n          height: ${listing.height},\r\n          weight: ${listing.weight}\r\n        ]\r\n      </p>\r\n    `;\r\n    const popupCommentsEl = document.createElement('div');\r\n    popupCommentsEl.classList.add('popup-comments');\r\n    const commentsHeadingEl = document.createElement('h3');\r\n    const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments?item_id=${listing.id}`);\r\n    const data = await response.json();\r\n    if (data.length > 0) {\r\n      data.forEach((comment) => {\r\n        const commentItem = document.createElement('p');\r\n        commentItem.classList.add('comment');\r\n        commentItem.innerHTML = `\r\n          <span class=\"bolden\">${comment.creation_date}</span>\r\n          <span class=\"username\">${comment.username}: </span>\r\n          <span class=\"comment-text\">${comment.comment}</span>\r\n        `;\r\n        popupCommentsEl.appendChild(commentItem);\r\n      });\r\n    }\r\n    commentsHeadingEl.textContent = `Comments (${data.length || 'no comments yet'})`;\r\n    popupCommentsEl.dataset.id = listing.id;\r\n    const commentsForm = document.createElement('form');\r\n    commentsForm.classList.add('comments-form');\r\n    commentsForm.innerHTML = `\r\n      <input type=\"text\" name=\"name\" placeholder=\"Your name\" required>\r\n      <textarea name=\"comment\" placeholder=\"Your comment\" required></textarea>\r\n      <button type=\"submit\">Submit</button>\r\n    `;\r\n    popupWrapEl.append(\r\n      listingImg,\r\n      closeBtn,\r\n      listingTitle,\r\n      popupDetails,\r\n      popupCommentsEl,\r\n      commentsForm,\r\n    );\r\n    popupWrapEl.insertBefore(commentsHeadingEl, popupWrapEl.children[4]);\r\n    container.appendChild(popupWrapEl);\r\n    closeBtn.addEventListener('click', () => {\r\n      popupWrapEl.remove();\r\n    });\r\n\r\n    commentsForm.addEventListener('submit', async (e) => {\r\n      e.preventDefault();\r\n      const username = e.target.name.value;\r\n      const comment = e.target.comment.value;\r\n      this.addComment(listing.id, username, comment);\r\n      const maincontentwrap = document.getElementById('main-content-wrap');\r\n      const response = await fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments?item_id=${listing.id}`);\r\n      const data = await response.json();\r\n      popupCommentsEl.innerHTML = '';\r\n      if (data.length > 0) {\r\n        data.forEach((comment) => {\r\n          const commentItem = document.createElement('p');\r\n          commentItem.classList.add('comment');\r\n          commentItem.innerHTML = `\r\n          <span class=\"bolden\">${comment.creation_date}</span>\r\n          <span class=\"username\">${comment.username}: </span>\r\n          <span class=\"comment-text\">${comment.comment}</span>\r\n        `;\r\n          popupCommentsEl.appendChild(commentItem);\r\n        });\r\n      }\r\n      this.renderCommentsPopup(listing, maincontentwrap);\r\n    });\r\n  }\r\n\r\n  addComment = (id, username, comment) => {\r\n    const options = {\r\n      method: 'POST',\r\n      headers: { 'content-type': 'application/json' },\r\n      body: JSON.stringify({\r\n        item_id: `${id}`,\r\n        username,\r\n        comment,\r\n      }),\r\n    };\r\n\r\n    fetch(`${this.baseURLInvAPI}apps/${this.involvementAPIAppID}/comments/`, options)\r\n      .then((response) => response.status)\r\n      .catch((error) => {\r\n        throw new Error(error);\r\n      });\r\n  }\r\n}\r\n\r\nconst listingsData = new ListingsData();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listingsData);\n\n//# sourceURL=webpack://webpack-template/./src/modules/listingsData.js?");

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