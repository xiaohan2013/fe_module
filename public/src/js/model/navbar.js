/**
 * Created by schp-tany on 2015/11/27.
 */
define("model/navbar",["require","exports","module","backbone","underscore"],function(require,exports,module){
    var _ = require("underscore");

    var navbar = Backbone.Model.extend({
        parse:function(resp){
            var self = this;
            _.mapObject(resp,function(val,key){
                self.set(key,val);
            });
        }
    });

    return navbar;
})