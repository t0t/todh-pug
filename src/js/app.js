
(function() {
  // 'use strict';


  // Active links .active on main nav
  var elActive = document.querySelectorAll('.siteNavigation a');

  var url = location.pathname.split("/")[1];
  var name = url.split(".")[0];

  for (var i = 0; i < elActive.length; i++) {
    window.console.log(elActive[i]);
    if (elActive[i].className == name) {
      elActive[i].classList.add('active');
      // window.console.log(elActive[i]);
      // classList.add(name);
      window.console.log(name);
    }
  }


  // @codekit-prepend "component.js", "templates.js";
  // @codekit-prepend "../bower_components/aos/dist/aos.js", "templates.js";


  // // Scroll
  // var s = document.querySelector(".masthead");
  //
  // var scrollEffect = function() {
  //   if(window.pageYOffset > 150) {
  //     s.classList.add("masthead--sticky");
  //   } else{
  //     s.classList.remove("masthead--sticky");
  //   }
  // }
  //
  // window.addEventListener("scroll", scrollEffect);

})();
