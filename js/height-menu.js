/* 가 */
$(".menu ul li").hover(
    function() {
        $(this).children("ul").slideDown("slow");
    }, function() {
        $(this).children("ul").slideUp("fast");
    }
);
/* 나 */
// $(".menu ul li").hover(
//     function() {
//         $(this).children("ul").stop().slideDown("slow");
//     }, function() {
//         $(this).children("ul").stop().slideUp("fast");
//     }
// );

// $(".menu ul li").click(
//     function() {
//         $(".menu ul li ul").hide();
//         $(this).children("ul").stop().slideDown("slow");
//     }
// )