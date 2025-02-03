
 
// main script
(function () {
  "use strict";

  // aos
  AOS.init({
    disable: "mobile",
  });

  document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.querySelector("#back-to-top");

    backToTopBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })
  });

})();
