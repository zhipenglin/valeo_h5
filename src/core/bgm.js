const $bgm=$(`<audio src="https://uimg.ifchange.com/special/1/198/data/audio/1.mp3" id="weixinsound" type="audio/mp3" loop autoplay="autoplay"></audio>`),
    $button=$('<i class="bgm open"></i>');
$('body').append($bgm);
$('body').append($button);

let isOpen=true;

document.addEventListener("WeixinJSBridgeReady", function () {
    $bgm[0].play();
    if(!isOpen){
        $bgm[0].pause();
    }
}, false);

$('body').one('touchstart',()=>{
    $bgm[0].play();
    if(!isOpen){
        $bgm[0].pause();
    }
});

if(!isOpen){
    $button.removeClass('open');
    $bgm[0].pause();
}

$button.on('click',()=>{
    isOpen=!$button.is('.open');
    $button[isOpen?'addClass':'removeClass']('open');
    $bgm[0][isOpen?'play':'pause']();
});

export default $bgm;

