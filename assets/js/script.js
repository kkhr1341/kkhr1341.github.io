//ハンバーガーメニュー クリックしたら閉じる
$(function() {
	$('.drawer-item>a').click(function() {
	  $('#menu-btn-check').removeAttr('checked').prop('checked', false).change();
	});
  });