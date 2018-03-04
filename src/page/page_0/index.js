/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import tpl from './tpl.html'
import './style.scss'
import '../../core/jquery.particleground.js'

export default {
    tpl:()=>tpl(),
    create:($el,director)=>{
        $el.find('.finger').on('touchstart',()=>{
            $el.addClass('leave');
            setTimeout(()=>{
                director.go(1);
            },1000);
        });
        $el.find('.circular-content-particle').particleground({
            dotColor: 'rgba(255,255,255,0.2)',
            lineColor: 'rgba(255,255,255,0.2)'
        });
    }
};