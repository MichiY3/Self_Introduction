$(function(){
    
// ページの最上部に戻る
$('.arrow_top').on('click',function(){
	// アニメーションをつけたい要素.animate({アニメーションの中で行いたい処理},アニメーション間隔：０.１秒)
	// bodyと htmlの両方に書くことで、ブラウザ依存を防ぐ
	// （使っているブラウザで働きが変わらないように）
	$('body , html').animate({scrollTop:0},1000);

});

       
    
//  モーダル　Modal
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

    let data;
    // /もしもデータが保存されていたら取り出す。そうでなければ空っぽの配列を代入しておく
    // 取り出した中身があったらtrueと認識してくれる、という条件式。elseのときは使い始めのみ
    if(localStorage.getItem('todoList')){
        data = JSON.parse(localStorage.getItem('todoList')); 
        // ↑データを取り出してdataに代入
    }else{
    // localStrageに何もない場合（使い始めの時など）、空の配列を代入する
    data = [];
    // []←データなし
    }
    
    console.log("data1");
    console.log(data);
    for (let displayText of data){
        add_li_tag(displayText);
    }
    let addBtn = document.querySelector('#btn');

// ②Addボタンが押された時のイベントを取得（addEVentListener）
// イベントを察知したい要素.addEventListener('察知したいイベント名を文字列',イベントが発生したら行いたい処理(){});
addBtn.addEventListener('click',function(){

// ③入力文字チェック
// 　3-1、入力文字の取得
let taskInput = document.querySelector('#input');
 // 3-2、入力欄が空じゃなかったら処理を行う
 	if(taskInput.value != ''){
 		// liタグを生成して追加
 		add_li_tag(taskInput.value);
//  		// 何か入力されていたら、新しいリスト(li)をulに追加

// 配列に、入力された値を追加
data.push(taskInput.value);
console.log("data2");
console.log(data);

// localStrageに配列を保存
// lcalStrage.setItem('キー','値');
localStorage.setItem('todoList',JSON.stringify(data));

// 入力欄を空っぽにする
taskInput.value='';


}
});

// 追加するliタグを生成する関数を作成
// task_textは、仕事をしたいときに必要な文字列　
// (to doのタスクを表す文字列　；　保存された文字とか、入力されてる文字とか、条件によって異なる)
function add_li_tag(task_text){
// liタグを追加する堀を記述
	// 何か入力されていたら、新しいリスト(li)をulに追加

 // 	親要素のulを変数に取得
 let todo_list = document.querySelector('.todo-list');
 // 	追加予定のliタグを生成
 let add_li = document.createElement('li');
 // 	add_liには　<li> </li>が入っている

 // 	生成したliタグの文字を、入力された文字にする（代入する）
 // add_li.textContent = taskInput.value;
// 生成したliタグの文字を、指定された文字にする　(text_task)
add_li.textContent = task_text;
console.log("add_li");
 console.log(add_li);


 add_li.classList.add('list');
let div_delete = document.createElement('div');
div_delete.textContent = 'Delete';
div_delete.classList.add('delete')


//＝＝＝＝＝ Deleteボタンが押されたら、押されたボタンの親要素(li)が削除されるようにする＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
div_delete.addEventListener('click',function(){
	let hantei = confirm('本当に行きたくなくなりましたか？');
	if(hantei == true){
	console.log(this.parentElement.textContent);
	let del_text = this.parentElement.textContent;
	del_text = del_text.replace('Delete','');
	data.splice(data.indexOf(del_text),1);
	this.parentElement.remove();

	localStorage.setItem('todoList',JSON.stringify(data));

}
});


// 親要素(li)に生成したdivタグを追加
add_li.appendChild(div_delete);
todo_list.appendChild(add_li);



}

});
