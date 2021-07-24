let allSlides = document.getElementsByClassName('swiper-slide');// коллекция со всеми слайдами
let slider = document.getElementsByClassName('swiper-wrapper')[0];// слайдер в котором лежат слайды
let swipe = 0;// активный слайдер(номер в массиве со слайдами),для перелистывания
let width;//ширина слайдера
//console.log(allSlides);
//расчитать ширину и подстроить слайдер
function init() {
    //console.log('work');
    width = document.getElementsByClassName('swiper-container')[0].offsetWidth;//ширина = ширине контейнера(оболочки) слайдера
    //width = document.getElementsByClassName('swiper-container')[0].clientWidth;//способ ширины без рамок
    //console.log(width);
    slider.style.width = width*allSlides.length+"px";//ширина коллекции слайдов = ширине контейнера(оболочки)*кол-во слайдов
    //console.log(slider.style.width);
    for (let i = 0; i < allSlides.length; i++) {//перебираем массив со слайдами
        //console.log(allSlides[i]);
        allSlides[i].style.width = width + "px";//каждому слайду задаем ширину , равную вычисленной
        //allSlides[i].style.height = "auto";//высота авто или 100%
        //console.log(allSlides[i].style.width);//проверка
    }
    // console.log(width);
    // console.log(slider.style.width);
    roll();
}
window.addEventListener('resize', init);
init();


let btnNext = document.getElementsByClassName('swiper-button-next')[0];
btnNext.addEventListener('click', function () {
    swipe = swipe + 1;
    if(swipe >= allSlides.length){
        swipe = 0;
    }
    roll();
});

let btnPrev = document.getElementsByClassName('swiper-button-prev')[0];
btnPrev.addEventListener('click', function () {
    swipe = swipe - 1;
    if(swipe < 0){
        swipe = allSlides.length-1;
    }
    roll();
});

function roll(){
    //slider.style.marginLeft = `-${swipe*width}px`;
    slider.style.marginLeft = -(swipe*width)+'px';
    //console.log(slider.style.marginLeft);
};

//===================================================

let burger = document.querySelector('.li_logo__burger');
//console.log(burger);
burger.onclick = display;
function display(){
    document.getElementsByClassName('burger-menu')[0].classList.toggle('display');
    document.getElementsByClassName('burger-menu__nav')[0].classList.toggle('display');
    document.getElementsByTagName('body')[0].classList.toggle('fixed');
    document.getElementsByClassName('button-burger')[0].classList.toggle('display');
}

$(function(){
    //anim_1
    var block_show = null;

    function scrollTracking(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.anim_1').offset().top;
        var eh = $('.anim_1').outerHeight();
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
                //console.log('Блок active в области видимости');
            }
            block_show = true;
            $('.anim_1').addClass('move_1');
        } else {
            if (block_show == null || block_show == true) {
                //console.log('Блок active скрыт');
            }
            block_show = false;
            $('.anim_1').removeClass('move_1');
        }
    }
    $(window).scroll(function(){
        scrollTracking();
    });
    $(document).ready(function(){ 
        scrollTracking();
    });

    //anim_2
    function scrollTracking2(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.anim_2').offset().top;
        var eh = $('.anim_2').outerHeight();
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
                //console.log('Блок active в области видимости');
            }
            block_show = true;
            $('.anim_2').addClass('move_2');
        } else {
            if (block_show == null || block_show == true) {
                //console.log('Блок active скрыт');
            }
            block_show = false;
            $('.anim_2').removeClass('move_2');
        }
    }
    $(window).scroll(function(){
        scrollTracking2();
    });
    $(document).ready(function(){ 
        scrollTracking2();
    });

    //anim_3
    function scrollTracking3(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.anim_3').offset().top;
        var eh = $('.anim_3').outerHeight();
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
                //console.log('Блок active в области видимости');
                $('.retro-bike__center-block').css({"opacity": "1"});
            }
            block_show = true;
            $('.retro-bike__center-block').css({"opacity": "1"});
            $('.retro-bike__center-block').addClass('move_3');
        } else {
            if (block_show == null || block_show == true) {
                //console.log('Блок active скрыт');
            }
            block_show = false;
            $('.retro-bike__center-block').removeClass('move_3');
            $('.retro-bike__center-block').css({"opacity": "0"});
        }
    }
    $(window).scroll(function(){
        scrollTracking3();
    });
    $(document).ready(function(){ 
        scrollTracking3();
    });

    //anim_shop_left
    function scrollTracking4(){
        $('.anim_shop_left').each(function(){
                var wt = $(window).scrollTop();
                var wh = $(window).height();
                var et = $(this).offset().top;
                var eh = $(this).outerHeight();
                if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
                    if (block_show == null || block_show == false) {
                        //console.log($(this)+' Блок active в области видимости');
                    }
                    block_show = true;
                    $(this).css({"opacity": "1"});
                    $(this).addClass('move_4');
                } else {
                    if (block_show == null || block_show == true) {
                        //console.log('Блок active скрыт');
                    }
                    block_show = false;
                    $(this).removeClass('move_4');
                    $(this).css({"opacity": "0"});
                }
            });
    }
    $(window).scroll(function(){
        scrollTracking4();
    });
    $(document).ready(function(){ 
        scrollTracking4();
    });

    //anim_shop_right
    function scrollTracking5(){
        $('.anim_shop_right').each(function(){
                var wt = $(window).scrollTop();
                var wh = $(window).height();
                var et = $(this).offset().top;
                var eh = $(this).outerHeight();
                if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
                    if (block_show == null || block_show == false) {
                        //console.log($(this)+' Блок active в области видимости');
                    }
                    block_show = true;
                    //$(this).css({"opacity": "1"});
                    $(this).addClass('move_5');
                    $(this).css({"opacity": "1"});
                } else {
                    if (block_show == null || block_show == true) {
                        //console.log('Блок active скрыт');
                    }
                    block_show = false;
                    $(this).removeClass('move_5');
                    $(this).css({"opacity": "0"});
                }
            });
    }
    $(window).scroll(function(){
        scrollTracking5();
    });
    $(document).ready(function(){ 
        scrollTracking5();
    });
    
});

function heightHeader() {
    //window.setTimeout('heightHeader' , 500);
    let main = document.querySelector('html');
    let head = document.getElementById('head');
    head.style.height = main.clientHeight+'px';
    window.setTimeout('heightHeader()' , 700);
  };
  heightHeader();