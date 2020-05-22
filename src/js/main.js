// $(Document).ready(function () {
//   $(".icon-menu").click(function (event) {
//     $(this).toggleClass("active"),
//     $(".menu__body").toggleClass("active");
//       $("body").toggleClass("lock");
//     });
// });
// -------------------
function ibg(){
  $.each($('.ibg'),function(index,val){
if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
  });
}

ibg();
// ============================================
$(Document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active"),
    $(".menu__body").toggleClass("active");
      $("body").toggleClass("lock");
    });
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.icon-menu')) {
    let user_menu = document.querySelector('.menu__body');
    user_menu.classList.remove('active'),
      $('.icon-menu').removeClass("active")
    $("body").removeClass("lock");
  }
});
// ==скроллинг==================
$(function () {
  $('a[href^="#header"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});
$(function () {
  $('a[href^="#slider"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#generation"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#shop"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

$(function () {
  $('a[href^="#link"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);//800 - длительность скроллинга в мс
    return false;
  });
});

// ===============кнопка навер==================
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#topNubex').fadeIn();
    } else {
      $('#topNubex').fadeOut();
    }
  });
  $('#topNubex').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 700);
  });
});
