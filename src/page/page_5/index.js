/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import tpl from './tpl.html'
import './style.scss'
import '../../core/titleAnimation'
import '../../core/cardAnimate'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    tpl:()=>tpl(),
    create:($el)=>{
        $el.find('.card').card();
        $el.find('.card-title').title();

        new Swiper($el.find('.swiper-container')[0], {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            }
        });
    }
};