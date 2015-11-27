/**
 * Created by schp-tany on 2015/11/27.
 */

(function(factory){
    if(typeof define === "function" && define.amd){
        define(['jquery','domReady'],factory);
    }else if(typeof exports === 'object'){
        factory(require(jquery))
    }else{
        factory(jquery)
    }
}(function($,domReady){
    //window.ENV = "production";
     window.ENV = "dev";
    if(window.ENV == "dev"){
        var dev_api_url = "http://182.92.1.42:8500";
        domReady(function(){
            var head = document.getElementsByTagName("head")[0] || document.documentElement;
            var node = document.createElement("script");
            node.charset = "utf-8";
            node.async = true;
            node.src = "../vendor/jquery.cookie/jquery.cookie.js";
            head.appendChild(node);
        })

        $.ajaxSetup({
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            complete:function(xhr){
                $.cookie("cid",xhr.getResponseHeader("X-Customer-Id"));
            },
            error:function(xhr,status,error){
                console.error("ooop! ³ö´íÁË¡£¡£¡£");
                console.log(error)
            }
        });

        $.ajaxPrefilter(function( options ) {
            if ( options.crossDomain ) {
                options.url = dev_api_url+options.url;
            }
        });
    }
}))


