/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	__webpack_require__(1);

	var $eye = $('.eye');
	function eyeBlink() {
	    $eye.addClass('eyeBlink').bind('oanimationend animationend webkitAnimationEnd', function () {
	        $eye.removeClass('eyeBlink');
	    });
	}

	(function loop() {
	    var rand = Math.round(Math.random() * 10000) + 3000;
	    setTimeout(function () {
	        eyeBlink();
	        loop();
	    }, rand);
	})();

	function co2Up(count) {
	    var div_by = 100,
	        speed = Math.round(count / div_by),
	        $display = $('.air-quality .mesure-value'),
	        run_count = 1,
	        int_speed = 24;

	    var int = setInterval(function () {
	        if (run_count < div_by) {
	            $display.text(speed * run_count);
	            run_count++;
	        } else if (parseInt($display.text()) < count) {
	            var curr_count = parseInt($display.text()) + 1;
	            $display.text(curr_count);
	        } else {
	            clearInterval(int);
	        }
	    }, int_speed);
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);