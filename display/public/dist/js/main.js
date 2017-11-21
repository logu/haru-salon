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
	    var div_by = 10,
	        speed = Math.round(count / div_by),
	        $display = $('.air-quality .mesure-value .value'),
	        run_count = 1,
	        int_speed = 200,
	        init_value = parseInt($display.text());

	    var int = setInterval(function () {
	        if (run_count < div_by) {
	            var result = init_value + speed * run_count;
	            $display.text(result);
	            $('.c').toggleClass('h', !result >= 800);
	            $('.c').toggleClass('sad', result > 800);
	            run_count++;
	        } else if (parseInt($display.text()) < count) {
	            var curr_count = parseInt($display.text()) + 1;
	            $display.text(curr_count);
	        } else {
	            clearInterval(int);
	        }
	    }, int_speed);
	}

	function co2Down(count) {
	    var div_by = 10,
	        speed = Math.round(count / div_by),
	        $display = $('.air-quality .mesure-value .value'),
	        run_count = 1,
	        int_speed = 200,
	        init_value = parseInt($display.text());

	    var int = setInterval(function () {
	        if (run_count > div_by) {
	            var result = init_value - speed * run_count;
	            $display.text(result);
	            $('.c').toggleClass('h', !result >= 800);
	            $('.c').toggleClass('sad', result > 800);
	            run_count--;
	        } else if (parseInt($display.text()) > count) {
	            var curr_count = parseInt($display.text()) - 1;
	            $display.text(curr_count);
	        } else {
	            clearInterval(int);
	        }
	    }, int_speed);
	}

	var socket = io(window.location.origin);
	socket.on('cmd', function (msg) {
	    var $Airdisplay = $('.air-quality .mesure-value .value');
	    var $Hotdisplay = $('.temperature .mesure-value .value');
	    console.log(msg);
	    if (msg === 'HOT') {
	        $Hotdisplay.text('23');
	        $('.c').removeClass('h');
	        $('.c').addClass('sad');
	    }
	    if (msg === 'AIR') {
	        $Airdisplay.text('1000');
	        $('.c').removeClass('h');
	        $('.c').addClass('sad');
	    }
	    if (msg === 'OK') {
	        $Hotdisplay.text('20');
	        $Airdisplay.text('600');
	        $('.c').addClass('h');
	        $('.c').removeClass('sad');
	    }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);