(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/routes/common/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/funcs/common/commonFunc.js":
/*!****************************************!*\
  !*** ./src/funcs/common/commonFunc.js ***!
  \****************************************/
/*! exports provided: getCarBrands, fetchVehicleModelList, fetchVehicleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarBrands", function() { return getCarBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVehicleModelList", function() { return fetchVehicleModelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVehicleModel", function() { return fetchVehicleModel; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_apiList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/apiList */ "./src/helpers/apiList.js");



const getCarBrands = () => {
  const dynamoDB = new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env

  });
  return new Promise((resolve, reject) => {
    dynamoDB.scan({
      TableName: 'carBrands',
      ProjectionExpression: "id, brandCode, brandName, brandLogo"
    }, (err, data) => {
      if (err) {
        console.log('Scan failed to load data. Error JSON: ', JSON.stringify(err, null, 2));
        resolve(err);
      } else {
        console.log("Scan succeeded. ", data);
        resolve(data.Items);
      }
    });
  });
};
const fetchVehicleModelList = brandCode => {
  return Object(_helpers_apiList__WEBPACK_IMPORTED_MODULE_2__["getModelList"])(brandCode);
};
const fetchVehicleModel = carModel => {
  return Object(_helpers_apiList__WEBPACK_IMPORTED_MODULE_2__["getModelOne"])(carModel);
};

/***/ }),

/***/ "./src/helpers/CommonHelpers.js":
/*!**************************************!*\
  !*** ./src/helpers/CommonHelpers.js ***!
  \**************************************/
/*! exports provided: SuccessResponseHelper, FailedResponseHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessResponseHelper", function() { return SuccessResponseHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedResponseHelper", function() { return FailedResponseHelper; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const SuccessResponseHelper = data => {
  return {
    statusCode: 200,
    headers: {
      'x-custom-header': 'my custom header value',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: '성공',
      success: true,
      data
    })
  };
};
const FailedResponseHelper = err => {
  return {
    statusCode: 200,
    headers: {
      'x-custom-header': 'my custom header value',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: '실패',
      success: false,
      data: err
    })
  };
};

/***/ }),

/***/ "./src/helpers/apiCall.js":
/*!********************************!*\
  !*** ./src/helpers/apiCall.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((url, method = 'get', payload = {}, options) => {
  const {
    timeout,
    withCredentials,
    responseType
  } = options || {};
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    url,
    method,
    data: method === 'post' && payload,
    params: method === 'get' && payload,
    timeout: timeout || 60000,
    // 60초 timeout
    withCredentials: withCredentials || true,
    // CORS 관련 설정
    responseType: responseType || 'json',
    // response Type default : JSON,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
});

/***/ }),

/***/ "./src/helpers/apiList.js":
/*!********************************!*\
  !*** ./src/helpers/apiList.js ***!
  \********************************/
/*! exports provided: getModelList, getModelOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelList", function() { return getModelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelOne", function() { return getModelOne; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCall */ "./src/helpers/apiCall.js");


const getModelList = brandCode => {
  return Object(_apiCall__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://media.daum.net/proxy/api/mc2/v2/clusters.json?pageSize=100&page=1&sortField=etcInfo.latestReleaseDate&sortValue=desc&service=auto&type=models&filterKey=etcInfo.brand,etcInfo.salesStatus&filterVal=${brandCode},IN__S__N`);
};
const getModelOne = modelCode => {
  return Object(_apiCall__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://auto.daum.net/api/newcar/models/${modelCode}.json`);
};

/***/ }),

/***/ "./src/routes/common/index.js":
/*!************************************!*\
  !*** ./src/routes/common/index.js ***!
  \************************************/
/*! exports provided: getBrandList, getModelList, getModelOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandList", function() { return getBrandList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelList", function() { return getModelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelOne", function() { return getModelOne; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _funcs_common_commonFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funcs/common/commonFunc */ "./src/funcs/common/commonFunc.js");
/* harmony import */ var _helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/CommonHelpers */ "./src/helpers/CommonHelpers.js");





/**
 * @description 브랜드 리스트
 */

const getBrandList = async event => {
  const result = await Object(_funcs_common_commonFunc__WEBPACK_IMPORTED_MODULE_1__["getCarBrands"])();
  console.log(result);
  return Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["SuccessResponseHelper"])([...result]);
};
/**
 * @description 자동차 브랜드 별 모델리스트 저장하기
 */

const getModelList = event => {
  const {
    brandCode
  } = event.pathParameters;
  return Object(_funcs_common_commonFunc__WEBPACK_IMPORTED_MODULE_1__["fetchVehicleModelList"])(brandCode).then(({
    status,
    statusText,
    data: {
      data
    }
  }) => status === 200 ? Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["SuccessResponseHelper"])(data) : Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["SuccessResponseHelper"])({})).catch(err => Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["FailedResponseHelper"])(err));
};
/**
 * @description 자동자 모델 가져 오기
 */

const getModelOne = event => {
  const {
    carModel
  } = event.pathParameters;
  return Object(_funcs_common_commonFunc__WEBPACK_IMPORTED_MODULE_1__["fetchVehicleModel"])(carModel).then(({
    status,
    statusText,
    data
  }) => status === 200 ? Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["SuccessResponseHelper"])(data) : Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["SuccessResponseHelper"])({})).catch(err => Object(_helpers_CommonHelpers__WEBPACK_IMPORTED_MODULE_2__["FailedResponseHelper"])(err));
};

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map