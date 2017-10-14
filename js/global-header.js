(function () {
    var globalHeader = $(".global-header"),
        menuTrigger = globalHeader.find(".menu-trigger"),
        menuDetail = globalHeader.find('.menu-detail');
    menuTrigger.on("click", function () {
        menuTrigger.toggleClass('active');
        menuDetail.toggle();
    });
}());