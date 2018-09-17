(function (window) {

    //文档对象
    var document = window.document,
    //location对象
        location = window.location;

    function isFunction(fn) {
        return typeof  fn === 'function';
    }


    //微信api对象
    var wxapi = (function () {
        var wxapi;

        wxapi = {
            //分享到朋友圈
            shareToPYQ: {
                //配置项
                opts    : {},
                //处理函数
                handler : null,
                //回调函数
                callback: null
            },
            //发送给朋友
            sendToPY  : {
                //配置项
                opts    : {},
                //处理函数
                handler : null,
                //回调函数
                callback: null
            }
        };

        return wxapi;
    })();


    //WeixinJSBridgeReady响应事件
    document.addEventListener('WeixinJSBridgeReady', function () {
        var WeixinJSBridge = window.WeixinJSBridge;

        //分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function () {
            var config = wxapi.shareToPYQ,
                opts = config.opts,
                handler = config.handler,
                callback = config.callback;

            isFunction(handler) ? handler() : WeixinJSBridge.invoke('shareTimeline', {
                img_url: opts.img_url || '',
                link   : opts.link || location.href,
                title  : opts.title || document.title || '朋友圈分享',
                desc   : opts.desc || document.title || '朋友圈分享描述'
            }, callback);
        });

        //发送给朋友
        WeixinJSBridge.on('menu:share:appmessage', function () {
            var config = wxapi.sendToPY,
                opts = config.opts,
                handler = config.handler,
                callback = config.callback;

            isFunction(handler) ? handler() : WeixinJSBridge.invoke('sendAppMessage', {
                img_url: opts.img_url || '',
                link   : opts.link || location.href,
                title  : opts.title || document.title || '发送给朋友',
                desc   : opts.desc || document.title || '发送给朋友描述'
            }, callback);
        });

    }, false);


    //CommonJS
    if (typeof exports === 'object') {
        module.exports = wxapi;
        return;
    }

    //添加到全局
    window.wxapi = wxapi;

})(window);