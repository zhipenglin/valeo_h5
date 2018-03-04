var $body = $('body');
export default function(title){
    document.title = title;
    if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
        // hack在微信等webview中无法修改document.title的情况
        var $iframe = $('<iframe src="/favicon.ico" style="display: none;"></iframe>').on('load', function() {
            setTimeout(function() {
                $iframe.off('load').remove()
            }, 0)
        }).appendTo($body);
    }
}