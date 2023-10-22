var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "980",
        "ok": "524",
        "ko": "456"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "60004",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "31078",
        "ok": "7600",
        "ko": "58057"
    },
    "standardDeviation": {
        "total": "28072",
        "ok": "14444",
        "ko": "9624"
    },
    "percentiles1": {
        "total": "15045",
        "ok": "3026",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60005",
        "ok": "4971",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60013",
        "ok": "53606",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "59380",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 65,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 436,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 456,
    "percentage": 47
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.243",
        "ok": "7.081",
        "ko": "6.162"
    }
},
contents: {
"req_getorders-fff44": {
        type: "REQUEST",
        name: "getOrders",
path: "getOrders",
pathFormatted: "req_getorders-fff44",
stats: {
    "name": "getOrders",
    "numberOfRequests": {
        "total": "500",
        "ok": "480",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "32796",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "3865",
        "ok": "3378",
        "ko": "15548"
    },
    "standardDeviation": {
        "total": "5047",
        "ok": "3372",
        "ko": "14890"
    },
    "percentiles1": {
        "total": "2905",
        "ok": "2694",
        "ko": "10011"
    },
    "percentiles2": {
        "total": "4423",
        "ok": "4119",
        "ko": "10478"
    },
    "percentiles3": {
        "total": "10030",
        "ok": "9364",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "16562",
        "ok": "15424",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 65,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 392,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 20,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.757",
        "ok": "6.486",
        "ko": "0.27"
    }
}
    },"req_getorders-redir-bd43a": {
        type: "REQUEST",
        name: "getOrders Redirect 1",
path: "getOrders Redirect 1",
pathFormatted: "req_getorders-redir-bd43a",
stats: {
    "name": "getOrders Redirect 1",
    "numberOfRequests": {
        "total": "480",
        "ok": "44",
        "ko": "436"
    },
    "minResponseTime": {
        "total": "30937",
        "ok": "30937",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "60004",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "59424",
        "ok": "53655",
        "ko": "60007"
    },
    "standardDeviation": {
        "total": "2738",
        "ok": "6720",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60006",
        "ok": "55286",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "58903",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "59750",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "59986",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 44,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 436,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.486",
        "ok": "0.595",
        "ko": "5.892"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
