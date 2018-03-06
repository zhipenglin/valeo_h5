/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import tpl from './tpl.html'
import '../../core/titleAnimation'
import '../../core/cardAnimate'

export default {
    tpl:()=>tpl(),
    create:($el)=>{
        $el.find('.card').card();
        $($el).find('.card-title').title();
    }
};