/**
 * Created by ifchangetoclzp on 2017/1/20.
 */
// 微信分享
export default function(shareObj){
    shareObj=Object.assign({},{
        title:'',
        logo:'',
        des:''
    },shareObj);
    wx.onMenuShareAll = function(){};
    var isWeixin = wx.isWeixin = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
    if (isWeixin) {
        var jsApiList = ['hideOptionMenu', 'showOptionMenu', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'];
        wx.onMenuShareAll = function(obj, custom){
            custom = custom || {};
            // 正常应该是 URL 切换后签名失效，重新做一次签名config即可，但是在微信中发现不可行！！！
            // 反而是每次页面切换后都使用第一次获取的签名再 config 一下就可以。
            // 此方法在微信开发者工具中失败，IOS 未测试。。。
            wx.config($.extend(true, {}, wx._config));

            wx.showOptionMenu();
            $.each(jsApiList, function(i, method){
                if (method.indexOf('onMenuShare') > -1) {
                    var param = $.extend(true, {}, obj, custom[method]);
                    $.each(['success', 'cancel'],function(idx, prop){
                        param[prop] = param[prop] && $.proxy(param[prop], param, method);
                    });
                    wx[method](param);
                }
            });
        };
        // 获取微信签名
        $.ajax({
            url: 'https://www.ifchange.com/wezhaopin/components/js_signature',
            dataType: 'jsonp',
            success:function(data) {
                var config = data.results;
                if (data.err_no == 0) {
                    config.jsApiList = jsApiList.concat([]);
                    $.each(['appId', 'timestamp', 'nonceStr', 'signature'],function(i, prop){
                        config[prop] = '' + (config[prop] || '');
                    });
                    // config.debug = true;
                    // 传入true参数避免深层引用导致wx._config.wxJsApi改变
                    wx._config = config;
                    wx.config($.extend(true, {}, config));
                    wx.ready(function(){
                        wx.onMenuShareAll({
                            title: shareObj.title,
                            imgUrl: shareObj.logo,
                            desc: shareObj.des
                        });
                    });
                } else {
                    // alert(JSON.stringify(data));
                }
            },
        });
    }
}