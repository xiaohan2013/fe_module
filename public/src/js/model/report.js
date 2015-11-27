/**
 * Created by schp-tany on 2015/11/27.
 */
define("model/report",["require","exports","module","backbone","underscore"], function (require, exports, module) {


    var Backbone = require("backbone");
    var _ = require("underscore");

    var report = Backbone.Model.extend({
        parse:function(resp){
            var self = this;
            _.mapObject(resp, function(val,key){
                self.set(key,val);
            })
        }
    })

    return report;

})