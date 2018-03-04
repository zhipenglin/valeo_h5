$.fn.title=function(){
    $(this).html($(this).text().split('').map((item,i)=>`<span style="animation-delay: ${0.2*i}s">${item}</span>`).join(''));
};