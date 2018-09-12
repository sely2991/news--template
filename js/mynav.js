// Auto hide nav-wrapper on scrolling

// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById('navbar').style.top = '0';
//   } else {
//     document.getElementById('navbar').style.top = '-60px';
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.width = '30%';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
