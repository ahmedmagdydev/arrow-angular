"use strict";
function displayChart(t) {
    // console.log($(document.getElementById(t)).data('priority'))
    var t = new Chart(document.getElementById(t).getContext("2d"),{
        type: "doughnut",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green"],
            datasets: [{
                label: "# of Votes",
                data: $(document.getElementById(t)).data('priority').split(','),
                backgroundColor: ["#00dc77", "#ffae00", "#fd4242", "#dadde1"],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 80,
            scales: {},
            legend: {
                position: "right",
                labels: {
                    usePointStyle: !0,
                    fontColor: "#000",
                    generateLabels: function(t) {
                        var e = t.data;
                        return e.labels.length && e.datasets.length ? e.labels.map(function(t, a) {
                            var n = (e.backgroundColor,
                            e.datasets[0]);
                            return {
                                text: n.data[a] + " " + t,
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
        t("#reportrange span").html(e.format("MMMM D, YYYY") + " - " + a.format("MMMM D, YYYY"))
    }
    t("body").on("click", ".toggle-menu", function(e) {
        e.preventDefault(),
        t(".main").toggleClass("menu-closed")
    });
    var a = moment()
      , n = moment();
    t("#reportrange").daterangepicker({
        startDate: a,
        endDate: n,
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    }, e),
    e(a, n),
    displayChart("newChart")
    t('.main-tabs li:first-child').addClass('large').find('a').addClass('active'),
    t('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
        t(e.target).parent().addClass("large"),
        t(e.relatedTarget).parent().removeClass("large"),
        t("#" + t(e.relatedTarget).attr("aria-controls") + "Chart"),
        setTimeout(function() {
        	// console.log(t(e.target).attr("aria-controls") + "Chart")
            displayChart(t(e.target).attr("aria-controls") + "Chart")
        }, 400)
    })
});
