//下から表示させる要素を指定
let $pagetop = $('.top_button');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 700 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});