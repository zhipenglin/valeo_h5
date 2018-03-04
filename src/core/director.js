/**
 * Created by ifchangetoclzp on 2016/12/27.
 */
import flip from './flip'

import page_0 from '../page/page_0'
import page_1 from '../page/page_1'
import page_2 from '../page/page_2'
import page_3 from '../page/page_3'
import page_4 from '../page/page_4'
import page_5 from '../page/page_5'
import page_6 from '../page/page_6'
import page_7 from '../page/page_7'

class Director{
    constructor(){
        this.activeIndex=0;
        this.pages=[page_0,page_1,page_2,page_3,page_4,page_5,page_6,page_7].map((page,key)=>{
            if(page.tpl||page){
                var tpl=(page.tpl||page)();
                if(tpl){
                    return {
                        tpl:$(`<div class="page page-${key}">${tpl}</div>`),
                        create:page.create||function(){},
                        destroy:page.destroy||function(){}
                    }
                }
            }
            return false;
        }).filter(page=>page.tpl);
        this.stage=$('#app');
        this.stage.css({'width':$(window).width(),'height':$(window).height()});
        flip(this.stage);
        this._bindEvent();
    }
    _addNextPage(index){
        if(index+1>=this.pages.length||index===0){
            return;
        }
        var nextPage=this.pages[index+1].tpl.clone();
        nextPage.addClass('next');
        this.stage.append(nextPage);
    }
    _addPrevPage(index){
        if(index-1<0){
            return;
        }
        var prevPage=this.pages[index-1].tpl.clone();
        prevPage.addClass('prev');
        this.stage.prepend(prevPage);
    }
    start(){
        return this.go(0);
    }
    go(index){
        if(index<0){
            return this;
        }
        if(index>=this.pages.length){
            return this;
        }
        var page=this.pages[index],currentPage=page.tpl.clone();
        this.stage.html(currentPage);
        currentPage.addClass('active');
        page.create(currentPage,this);
        this._addPrevPage(index);
        this._addNextPage(index);
        this.activeIndex=index;
        this.activePage=currentPage;
        return this;
    }
    prev(){
        return this.go(this.activeIndex-1);
    }
    next(){
        return this.go(this.activeIndex+1);
    }
    _bindEvent(){
        this.stage.on('pageup',()=>{
            this.next();
        }).on('pagedown',()=>{
            this.prev();
        });
    }
}

export default function(){
    return new Director();
};