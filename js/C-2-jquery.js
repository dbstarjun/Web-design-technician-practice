$(".menu ul li").hover({
    function() {
        console.log("fuck");
        $(this).children("ul").stop().slideDown("slow");
    }, function() {
        $(this).children("ul").stop().slideUp("slow");
    }
});