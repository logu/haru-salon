
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