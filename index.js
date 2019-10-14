$(document).ready(function () {
    // $("#progressbar")
    //     .animate({
    //         "value": 50 + "%"
    //     }, {
    //         duration: 2000,
    //         easing: 'linear'
    //     })

    var progress = 0;
    var timeout = 10;
    var increment = .5;
    var maxprogress = 50;

    function animate() {
        setTimeout(function () {
            progress += increment;
            if (progress <= maxprogress) {
                $('#progressbar').attr('value', progress);
                animate();
                // } else {
                //     $('.progress').css('display', 'none');
            }
        }, timeout);
    };
    animate();


})