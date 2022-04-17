var btt = $("#back_to_top");

$(document).ready(function () {



    btt.click(function () {

        // torno ad inizio pagina con movenza fluida

        $("html,body").animate({ scrollTop: 0 }, 500, function () { });

    });

    $(".js-hamb").on("click", function (event) {

        event.preventDefault();

        $("html").toggleClass("menu-open");

    });

});



$(window).scroll(function () {

    // se lo scroll supera i 300 pixel dal margine superiore mostro il bottone (se nascosto)

    if ($(window).scrollTop() > 300) {

        if (btt.is(":hidden")) btt.fadeIn();

        // in caso contrario lo nascondo (se visibile)

    } else {

        if (btt.is(":visible")) btt.fadeOut(200);

    }

    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    $("div.progress").css("width", progress + "%");
})


let mouse = new Mouse({
    mouse: 'point',
    color: '#ffda79',
    mouseHover: 'border',
})
