
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
    var div_by = 100,
        speed = Math.round(count / div_by),
        $display = $('.air-quality .mesure-value'),
        run_count = 1,
        int_speed = 24;

    var int = setInterval(function() {
        if(run_count < div_by){
            $display.text(speed * run_count);
            run_count++;
        } else if(parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}
