require.config({
    baseUrl:"js/",
    paths:{
        backbone:"../../vendor/backbone/backbone-min",
        bootstrap:"../../vendor/bootstrap/dist/js/bootstrap.min",
        jquery:"../../vendor/jquery/dist/jquery.min",
        css:"../../vendor/require-css/css-min",
        tpl:"../../vendor/requirejs-underscore-tpl/underscore-tpl",
        underscore:"../../vendor/underscore/underscore-min",
        domReady:"../../vendor/domready/ready.min",
        model:"model",
        collection:"collection",
        dev:"dev.conf"
    },
    shim:{

    },
    waitSeconds:0
});

require(["require","exports","module","dev","backbone","jquery","underscore","model/navbar","model/report","collection/reports"],function(require,exports,module){

    var Backbone = require("backbone");
    var navbar = require("model/navbar");
    var nav = new navbar();

    // µ‰–Õµƒajax«Î«Û
    var s = Backbone.sync("GET",nav,{
        url:"/ajax/company/navbar",
        success:function(result){
            nav.parse(result.data);
        }
    });


    var reportList = require("collection/reports");
    var reports = new reportList();

    Backbone.sync("GET",reports,{
        url:"/ajax/report/list",
        success: function (result) {
            reports.parse(result.data);
        }
    })



    console.log(reports)
});