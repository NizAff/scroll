
var isElementInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var small = document.querySelector('#small');

window.addEventListener('scroll', function (event) {
	if (isElementInViewport(small)) {
    small.style.width = "400px";
    small.style.height = "400px";

	} else {
    small.style.width = "200px";
    small.style.height = "200px";

  }
}, false);



//this one comes from w3schools.com  !

//
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//     small.style.width = "400px";
//     small.style.height = "400px";
//   } else {
//     small.style.width = "200px";
//     small.style.height = "200px";
//   }
// }
