export default function($el){
    var deltaX=0,deltaY=0,startX=0,startY=0,action='',active=false;
    $el.on('touchstart','.link',function(){
        location.href=$(this).attr('href');
    }).on('touchstart',(e)=>{
        e.preventDefault();
        if(active){
            return;
        }
        startX=e.touches[0].pageX,startY=e.touches[0].pageY,deltaX=0,deltaY=0,action='';
    }).on('touchmove',(e)=>{
        e.preventDefault();
        if(active){
            return;
        }
        deltaX=e.touches[0].pageX;
        deltaY=e.touches[0].pageY;
    }).on('touchend touchcancel',(e)=>{
        if(active){
            return;
        }
        var distanceX=deltaX?deltaX-startX:0,distanceY=deltaY?deltaY-startY:0;
        if(($el.has('.next').length&&deltaY-startY<0)||($el.has('.prev').length&&deltaY-startY>0)){
            if(Math.abs(distanceY)>50&&Math.abs(distanceY)>Math.abs(distanceX)){
                distanceY>0?action='pagedown':action='pageup'
                $el.find('.active').addClass('flipOut');
                setTimeout(()=>{
                    $el.trigger(action);
                    $el.find('.active').removeClass('flipOut flipIn').addClass('flipIn');
                },300);
                setTimeout(()=>{
                    $el.find('.active').removeClass('flipOut flipIn');
                },600);
            }
        }
    });
};