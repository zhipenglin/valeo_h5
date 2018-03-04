/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import tpl from './tpl.html'
import './style.scss'
import '../../core/titleAnimation'
import '../../core/cardAnimate'
import 'typed.js'
export default {
    tpl:()=>tpl(),
    create:($el)=>{
        $el.find('.card').card();
        $el.find('.card-title').title();
        $el.find('.info').each(function(i){
            const $this=$(this),text=$this.text(),height=$this.height();
            $this.text('').css('height',height);
            setTimeout(()=>{
                $this.typed({
                    strings:[text],
                    cursorChar:''
                });
            },500+i*1200);

        });
    }
};