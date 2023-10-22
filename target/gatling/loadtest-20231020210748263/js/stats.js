var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "994",
        "ok": "600",
        "ko": "394"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "60007",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "29636",
        "ok": "10184",
        "ko": "59259"
    },
    "standardDeviation": {
        "total": "28123",
        "ok": "18218",
        "ko": "6014"
    },
    "percentiles1": {
        "total": "12164",
        "ok": "2085",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60004",
        "ok": "4991",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60013",
        "ok": "57328",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "59669",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 109,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 118,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 373,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 394,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14",
        "ok": "8.451",
        "ko": "5.549"
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
        "ok": "494",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "19662",
        "ok": "19662",
        "ko": "12434"
    },
    "meanResponseTime": {
        "total": "2412",
        "ok": "2309",
        "ko": "10907"
    },
    "standardDeviation": {
        "total": "2620",
        "ok": "2459",
        "ko": "1061"
    },
    "percentiles1": {
        "total": "1443",
        "ok": "1373",
        "ko": "10323"
    },
    "percentiles2": {
        "total": "2969",
        "ok": "2956",
        "ko": "11860"
    },
    "percentiles3": {
        "total": "7605",
        "ok": "7183",
        "ko": "12415"
    },
    "percentiles4": {
        "total": "12454",
        "ok": "12385",
        "ko": "12430"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 109,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 118,
    "percentage": 24
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 267,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.042",
        "ok": "6.958",
        "ko": "0.085"
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
        "total": "494",
        "ok": "106",
        "ko": "388"
    },
    "minResponseTime": {
        "total": "2994",
        "ok": "2994",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "60007",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "57191",
        "ok": "46884",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "8665",
        "ok": "14650",
        "ko": "5"
    },
    "percentiles1": {
        "total": "60004",
        "ok": "53267",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60008",
        "ok": "57795",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "59735",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "59950",
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
    "count": 106,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 388,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.958",
        "ok": "1.493",
        "ko": "5.465"
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
