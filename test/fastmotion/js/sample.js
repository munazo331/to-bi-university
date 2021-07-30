// JavaScript Document
var scrollAnimationElm = document.querySelectorAll('li');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 450;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.fm_trigger) {
      showPos = document.querySelector(elm.dataset.fm_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      elm.classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

