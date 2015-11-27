/**
 * Created by schp-tany on 2015/11/27.
 */
define("collection/reports",["require","exports","module","backbone","underscore","model/report"], function (require, exports, module) {

    var Backbone = require("backbone");
    var _ = require("underscore");
    var report = require("model/report");

    var reports = Backbone.Collection.extend({
        model:report,
        parse:function(resp){
            var self = this;
            _.each(resp.rows,function(el,i){
                //console.log(el);
                var r = new self.model();
                r.parse(el);
                self.push(r);
            });
        }
    })

    return reports;
})