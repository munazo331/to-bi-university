// スライド画像データを配列化

let album = [{
    src: 'images/top_mainimg_1.png',
    msg: 'スライド1'
  },
  {
    src: 'images/top_mainimg_2.png',
    msg: 'スライド2'
  },
  {
    src: 'images/top_mainimg_3.png',
    msg: 'スライド3'
  },
  {
    src: 'images/top_mainimg_4.png',
    msg: 'スライド4'
  },
  {
    src: 'images/top_mainimg_5.png',
    msg: 'スライド5'
  },
];


// スライド１枚目の画像をTOPに表示の為、imgタグ挿入設定
let slideImage = document.createElement('img');
slideImage.setAttribute('src', album[0].src);
slideImage.setAttribute('alt', album[0].msg);


// imgタグ挿入場所(id class)指定
let slideFlame = document.querySelector('#gallery .slide');　//追加する場所の要素を取得
slideFlame.insertBefore(slideImage, null); //追加してきた場所に要素を追加
//slideFlame.insertBefore(slideMsg, null);


// 取得した横線要素と配列内の画像を紐付け
// 順番　まず何を選択しているかをJS側に教える → 選択要素と表示したい画像を紐づける


//let slideBtn = document.querySelector('button.slider-nav-btn');

//var target1 = document.getElementById('.button0');
//var target2 = document.getElementById('.button1');
//var target2 = document.getElementById('.button2');
//var target2 = document.getElementById('.button3');
//var target2 = document.getElementById('.button4');


const map = new WeakMap(); 　//mapにWeakmap関数を紐付ける
const buttons = document.querySelectorAll('button.slider-nav-btn'); //ボタン要素全てを取得
var index = 0;　// 配列変数設定？
var selectedIndex = 0;  //選択済配列設定？
buttons.forEach((el) => {   //buttonオブジェクトの中の'el'という変数でforEach関数で配列の繰り返し一括処理を定義
  const dataset = {		// button側の属性
    count: 0,     //この'0'はbutton側の番号
    index: index,
  };
  map.set(el, dataset);
  console.log(`inside foreach`);


  el.addEventListener('click', () => {
    dataset.count += 1;
    console.log(`index : ${dataset.index}`);
    slideImage.setAttribute('src', album[dataset.index].src);
    buttons[selectedIndex].classList.remove("slider-nav-btn--selected");
    el.classList.add("slider-nav-btn--selected");
    selectedIndex = dataset.index;


    //    console.log(`${el.textContent}: ${dataset.count}`);
  });
  index++;
});


// スライドショーのタイマー切替

//$(function(){
//	$('.big-bg').slick({
//		autoplay: true,
//		autoplaySpeed: 300,
//		dots:false,
//	});
//}); 


// 横線クリックで画像を切り替える
//slideBar.addEventListener('click', function (event) {
//  if (event.target.src) {
    //ここの処理を記述してい
  }
});


// タイマー処理でslider-nav-btn--selectedが隣のクラスに移動していくようにする
// 現在選択中ボタンの隣のボタンIDを取得する
// 現在選択中ボタンをどう判定するか→slider-nav-btn--selected
// その隣のボタンを押す



// 隣のボタンをクリックする






// setIntervalで繰り返す、もしくはfor文？



















	
