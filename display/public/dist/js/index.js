
require('../css/style.styl');

var $eye = $('.eye');
function eyeBlink(){
    $eye
        .addClass('eyeBlink')
        .bind('oanimationend animationend webkitAnimationEnd', function() {
            $eye.removeClass('eyeBlink');
        });
}

(function loop() {
    var rand = Math.round(Math.random() * 10000) + 3000;
    setTimeout(function() {
        eyeBlink();
        loop();
    }, rand);
}());

function co2Up(count)
{
    var div_by = 10,
        speed = Math.round(count / div_by),
        $display = $('.air-quality .mesure-value .value'),
        run_count = 1,
        int_speed = 200,
        init_value = parseInt($display.text());

    var int = setInterval(function() {
        if(run_count < div_by){
            var result = init_value + (speed * run_count);
            $display.text(result);
            $('.c').toggleClass('h',!result >= 800)
            $('.c').toggleClass('sad', result > 800);
            run_count++;
        } else if(parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}

function co2Down(count)
{
    var div_by = 10,
        speed = Math.round(count / div_by),
        $display = $('.air-quality .mesure-value .value'),
        run_count = 1,
        int_speed = 200,
        init_value = parseInt($display.text());

    var int = setInterval(function() {
        if(run_count > div_by){
            var result = init_value - (speed * run_count);
            $display.text(result);
            $('.c').toggleClass('h',!result >= 800)
            $('.c').toggleClass('sad', result > 800);
            run_count--;
        } else if(parseInt($display.text()) > count) {
            var curr_count = parseInt($display.text()) - 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}

var socket = io(window.location.origin);
socket.on('cmd', function(msg) {
    var $Airdisplay = $('.air-quality .mesure-value .value');
    var $Hotdisplay = $('.temperature .mesure-value .value');
    console.log(msg);
    if(msg === 'HOT') {
        $Hotdisplay.text('23');
        $('.c').removeClass('h');
        $('.c').addClass('sad');
    }
    if(msg === 'AIR') {
        $Airdisplay.text('1000');
        $('.c').removeClass('h');
        $('.c').addClass('sad');
    }
    if(msg === 'OK') {
        $Hotdisplay.text('20');
        $Airdisplay.text('600');
        $('.c').addClass('h');
        $('.c').removeClass('sad');
    }
});