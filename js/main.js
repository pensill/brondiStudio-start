$(document).ready(function(){
 


/*Выпадающее меню*/
  $('.main-header__right .btn-black').click(function(){
    $('.menu-container').toggleClass('visible')
  });
  $('.close-menu span').click(function(){
    $('.menu-container').toggleClass('visible')
  });

/*Выпадающее меню конец*/


/*Мастера - слайдер*/
  $('.master-slider').slick();
/*Мастера - слайдер конец*/


/*Главная страница - портфолио*/
$('.portfolio--1').click(function(){
    $('.portfolio__item--container').removeClass('portfolio__item--active');
    $('.portfolio--1').toggleClass('portfolio__item--active');
});
$('.portfolio--2').click(function(){
    $('.portfolio__item--container').removeClass('portfolio__item--active');
    $('.portfolio--2').toggleClass('portfolio__item--active');
});

$('.portfolio--3').click(function(){
    $('.portfolio__item--container').removeClass('portfolio__item--active');
    $('.portfolio--3').toggleClass('portfolio__item--active');
});

$('.portfolio--4').click(function(){
    $('.portfolio__item--container').removeClass('portfolio__item--active');
    $('.portfolio--4').toggleClass('portfolio__item--active');
});

$('.portfolio--5').click(function(){
    $('.portfolio__item--container').removeClass('portfolio__item--active');
    $('.portfolio--5').toggleClass('portfolio__item--active');
});

$('.portfolio--6').click(function(){
    $('.portfolio__item--container').removeClass('portfolio__item--active');
    $('.portfolio--6').toggleClass('portfolio__item--active');
});






/*Главная страница - портфолио конец*/





}); /*ready end*/
