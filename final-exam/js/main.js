// ハンバーガー
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function(){
  hamburger.toggleClass('hamburger-menu-active');
});

// カルーセル
$('.cover-slick').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  dots: true,
  arrows: false,
  fade: true,
});

// タブ
$('#smarttab').smartTab({
  enableUrlHash: false
});

// フェードイン（左方向から）
$('.js-fadein-left').waypoint({
  handler: function(direction) {

    if (direction === 'down') {

      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  offset: '50%',
});

// フェードイン（右方向から）
$('.js-fadein-right').waypoint({
  handler: function(direction) {

    if (direction === 'down') {

      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  offset: '50%',
});


// アコーディオン
$('.accordion-title').on('click', function(e) {

  var content = $(this).next();

  content.slideToggle();

  $(this).toggleClass('active');
});