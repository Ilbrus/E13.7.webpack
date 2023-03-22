/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let helloElement = document.createElement(\"div\");\r\nhelloElement.innerText = \"Hello, SkillFactory!\";\r\ndocument.body.appendChild(helloElement);\r\n\r\nlet requestButton = document.createElement(\"button\");\r\nlet dataField = document.createElement('textarea');\r\n\r\nasync function requestData() {\r\n    await fetch(`http://localhost:3000/posts`, {\r\n        method: 'GET'\r\n    }).then(async response => response.json())\r\n        .then(async json => {\r\n            dataField.value = \"\";\r\n            for (let obj of json) {\r\n                for (let item in obj) {\r\n                    dataField.value += item + \": \" + obj[item] + \"\\n\";\r\n                }\r\n\r\n            }\r\n        });\r\n\r\n}\r\n\r\nrequestButton.innerText = \"Get data\";\r\nrequestButton.addEventListener(\"click\", requestData);\r\ndocument.body.appendChild(requestButton);\r\ndataField.style.height = \"7rem\";\r\ndocument.body.appendChild(dataField);\r\n\n\n//# sourceURL=webpack://13_7_webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;