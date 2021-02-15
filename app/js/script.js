const hamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body")


hamburger.addEventListener("click", function () {
  console.log("open hamburger");
  
  if (header.classList.contains("open")) { // Close hamburger menu
    header.classList.remove("open")
    body.classList.remove("no-scroll")

    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in")
      element.classList.add("fade-out")
    })
    
  } else {                                //Open hamburger menu
    header.classList.add("open")
    body.classList.add("no-scroll")

    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out")
      element.classList.add("fade-in")
    })
  }
   
});


/* JQuery Smooth Scrolling */

$(".navbar a").on("click", function (element) {
  if (this.hash != ""){
      element.preventDefault();

      const hash = this.hash
      
      $("html,body").animate({
          scrollTop: $(hash).offset().top
      },
      800
      );
  
  }

})
