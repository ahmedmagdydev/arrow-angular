"use strict";
function displayChart(t) {
    // console.log($(document.getElementById(t)).data('priority'))
    var priority = $(document.getElementById(t)).data('priority').split(',')
    // console.log(priority)
    var t = new Chart(document.getElementById(t).getContext("2d"),{
        type: "doughnut",
        data: {
            labels: ["ضروري", "مهم", "عادي", "غير مهم"],
            datasets: [{
                label: "# of Votes",
                data: priority,
                backgroundColor: ["#00dc77", "#ffae00", "#fd4242", "#dadde1"],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 80,
            scales: {},
            legend: {
                position: "left",
                labels: {
                    usePointStyle: !0,
                    fontColor: "#000",
                    generateLabels: function(t) {
                        var e = t.data;
                        return e.labels.length && e.datasets.length ? e.labels.map(function(t, a) {
                            var n = (e.backgroundColor,
                            e.datasets[0]);
                            return {
                                text: t,
                                index: a,
                                strokeStyle: n.backgroundColor[a],
                                lineWidth: 3,
                                fillStyle: "#fff"
                            }
                        }) : []
                    }
                }
            }
        }
    })
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
