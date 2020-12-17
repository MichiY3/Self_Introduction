$(function(){
    
// ページの最上部に戻る
$('.arrow_top').on('click',function(){
	// アニメーションをつけたい要素.animate({アニメーションの中で行いたい処理},アニメーション間隔：０.１秒)
	// bodyと htmlの両方に書くことで、ブラウザ依存を防ぐ
	// （使っているブラウザで働きが変わらないように）
	$('body , html').animate({scrollTop:0},1000);

});

       
    
// Q8 モーダル　Modal
	// モーダル表示
	// js-modalが押されたら２個が表示される
    $('.modal_open').on('click',function(){
        $('.modal-content').fadeIn('slow'); 
                                    // 遅めのアニメーション
        $('#modal-bg').fadeIn('slow');
    })
    
        // モーダル非表示
        // modal-closeが押されたら、２個が消える
    $('.close-btn').on('click',function(){
        $('.modal-content').fadeOut('slow'); 
                                    // 遅めのアニメーション
        $('#modal-bg').fadeOut('slow');
    
    
    });

});
