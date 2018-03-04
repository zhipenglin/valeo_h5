import './jquery.particleground';
$.fn.card=function(){
    const count=10,$card=$(this);
    const width=$card.width(),aWidth=Math.ceil(width/count),list=[];
    for(let i=0;i<=count+1;i++){
        list.push(`<div class="card-inset" style="background-position:-${aWidth*i}px 0;width: ${aWidth}px;left:${aWidth*i}px;animation-delay: ${i*100}ms;"></div>`);
    }
    const $dom=$(`<div class="card-outset">${list.join('')}</div>`),$bg=$('<span><div class="card-particleground"></div><div class="card-particleground"></div></span>');
    $card.prepend($dom);
    setTimeout(()=>{
        $dom.remove();
        $card.find('.card-bg').append($bg);
        $bg.find('.card-particleground').particleground({
            dotColor: 'rgb(194,226,217)',
            lineColor: 'rgb(194,226,217)'
        });
    },200+100*list.length);
}