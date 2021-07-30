// JavaScript Document

jQuery('.hamburger').on('click', function() {
	
  if(jQuery('.gnav_sp').css('display') === 'block') {
    jQuery('.gnav_sp').slideUp('1500');
  }else {
    jQuery('.gnav_sp').slideDown('1500');
  }
	
});


function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
}
toggleNav();





