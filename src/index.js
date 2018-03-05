/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import './reset.scss'
import './core/flexible';
import director from './core/director'
import share from './core/share'
import './core/bgm'

share({
    title:'Valeo-法雷奥全国联动大型招聘会',
    logo:'http://uimg.cheng95.com/toc/toc_admin/public/201803/5a98ba1c20443.png',
    des:`100+职位等你攻占，和法雷奥一起做大事`,
},{
    success:()=>{
        window._czc.push(["_trackEvent", '法雷奥活动', 'share']);
    }
});
director().start();

window._czc.push(["_trackEvent", '法雷奥活动', 'open']);
