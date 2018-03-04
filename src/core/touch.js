/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
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
        if(($el.has('.next').length&&deltaY-startY<0)||($el.has('.prev').length&&deltaY-startY>0)){
            $el.css({'transform':`translateY(${deltaY-startY}px)`,'-webkit-transform':`translateY(${deltaY-startY}px)`});
        }
    }).on('touchend touchcancel',(e)=>{
        if(active){
            return;
        }
        var distanceX=deltaX?deltaX-startX:0,distanceY=deltaY?deltaY-startY:0;
        if(($el.has('.next').length&&deltaY-startY<0)||($el.has('.prev').length&&deltaY-startY>0)){
            if(Math.abs(distanceY)>50&&Math.abs(distanceY)>Math.abs(distanceX)){
                distanceY>0?action='pagedown':action='pageup'
                $el.css({'transition':'transform 500ms','-webkit-transition':'-webkit-transform 500ms'});
                active=true;
                setTimeout(()=>{
                    $el.css({'transform':`translateY(${(distanceY>0?1:-1)*100}%)`,'-webkit-transform':`translateY(${(distanceY>0?1:-1)*100}%)`});
                },0);
                setTimeout(()=>{
                    $
                    el.css({'transform':`translateY(0)`,'-webkit-transform':`translateY(0)`,'transition':'none','-webkit-transition':'none'});
                    action&&$el.trigger(action);
                    active=false;
                },500);
            }else{
                $el.css({'transform':`translateY(0)`,'-webkit-transform':`translateY(0)`});
            }
        }
    });
}