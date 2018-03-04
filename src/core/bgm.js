import bgm from '../img/bgm.mp3'

const $bgm=$(`<audio src="${bgm}" id="weixinsound" type="audio/mp3" loop autoplay="autoplay"></audio>`);
$('body').append($bgm);

document.addEventListener("WeixinJSBridgeReady", function () {
    $bgm[0].play();
}, false);
