/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import tpl from './tpl.html'
import './style.scss'

export default {
    tpl:()=>tpl(),
    create:($el)=>{
        $el.find('.particleground').particleground({
            dotColor: 'rgb(177,206,205)',
            lineColor: 'rgb(177,206,205)'
        });
    }
};