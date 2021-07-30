// スライド画像データを配列化

let album = [
	{src: 'images/top_mainimg_1.png', msg: 'スライド1'},
	{src: 'images/top_mainimg_2.png', msg: 'スライド2'},
	{src: 'images/top_mainimg_3.png', msg: 'スライド3'},
	{src: 'images/top_mainimg_4.png', msg: 'スライド4'},
	{src: 'images/top_mainimg_5.png', msg: 'スライド5'},
];


// スライド１枚目の画像をTOPに表示の為、imgタグ挿入設定
let slideImage = document.createElement('img');
slideImage.setAttribute('src', album[0].src);
slideImage.setAttribute('alt', album[0].msg);


// imgタグ挿入場所(id class)指定
let slideFlame = document.querySelector('#gallery .slide');
slideFlame.insertBefore(slideImage, null);
//slideFlame.insertBefore(slideMsg, null);


// 取得した横線要素と配列内の画像を紐付け
// 順番　まず何を選択しているかをJS側に教える → 選択要素と表示したい画像を紐づける






//let slideBtn = document.querySelector('button.slider-nav-btn');

//var target1 = document.getElementById('.button0');
//var target2 = document.getElementById('.button1');
//var target2 = document.getElementById('.button2');
//var target2 = document.getElementById('.button3');
//var target2 = document.getElementById('.button4');




const map = new WeakMap();
//const buttons = document.querySelectorAll('button .slider-nav-btn');
const buttons = document.querySelectorAll('button.slider-nav-btn');
var index = 0;
var selectedIndex = 0;
buttons.forEach((el) => {
//  const dataset = { count: 0 };
	const dataset = { 
            count: 0,
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








// 横線クリックで画像を切り替える
slideBar.addEventListener('click', function(event) {
	if (event.target.src) {
		//ここの処理を記述していく

	
	
	}
});












// スライドショーのタイマー切替

$(function(){
	$('.slideshow').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots:true
	});
}); 