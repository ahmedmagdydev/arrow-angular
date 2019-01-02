"use strict";
function displayChart(t) {
    // console.log($(document.getElementById(t)).data('priority'))
    var priority = $(document.getElementById(t)).data('priority').split(',')
    // console.log(priority)
    
}
function removeChart(t) {
    t.destroy()
}
jQuery(document).ready(function(t) {
    function e(e, a) {
        t("#reportrange .from-to").html(e.format("MMMM D, YYYY") + " - " + a.format("MMMM D, YYYY")),
        t("#reportrange .from").html(e.format("d MMMM YYYY")),
        t("#reportrange .to").html(a.format("d MMMM YYYY"))
    }
    t("body").on("click", ".toggle-menu", function(e) {
        e.preventDefault(),
        t("body").toggleClass("menu-closed")
    });
   
    t('.main-tabs li:first-child').addClass('large').find('a').addClass('active')
    
});
