let nbImg = 1;
let timer;

function next() {
    nbImg++;
    if (nbImg > 7) nbImg = 1;
    $(".imgCentral").css("background-image", "url(france" + nbImg + ".jpg)");
}

function activate() {
    timer = setInterval(next, 3000);
}

function reset() {
    clearInterval(timer);
    activate();
}

$(document).ready(function () {

    $("i").click(function (event) {
        if (event.target.id == 'left') {
            nbImg--;
            if (nbImg < 1) nbImg = 7;
            $(".imgCentral").css("background-image", "url(france" + nbImg + ".jpg)");
            reset();
        }
        else {
            nbImg++;
            if (nbImg > 7) nbImg = 1;
            $(".imgCentral").css("background-image", "url(france" + nbImg + ".jpg)");
            reset();
        }
    });

});

activate();