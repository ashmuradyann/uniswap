const navbar = document.querySelector(".navbar");
var lastScrollTop = 0;
document.addEventListener("scroll", () => {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.borderBottom = "1px solid #d2d9ee";
  } else if (st === 0) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.borderBottom = "none";
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false)