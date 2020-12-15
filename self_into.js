$(function(){
    // $('.animal_txt').click(function(){
    //         $('#bear_img').fadeIn(1000);
    //         });
    // $('#bear_img').click(function() {
    //         $('#bear_img').fadeOut(1200);
    //         });

// 表示ボタンが押された時
$('.q10-show-btn').on('click',function(){
	$('#bear_img').fadeIn(1000);
});
// 非表示ボタンが押された時、
$('.q10-hide-btn').on('click',function(){
	$('#bear_img').fadeOut(1000);
});


});
