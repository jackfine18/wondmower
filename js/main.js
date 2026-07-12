// WOND Mower — interactive behaviors
document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.parentElement;
      var ans = item.querySelector(".faq-a");
      var isOpen = item.classList.toggle("open");
      ans.style.maxHeight = isOpen ? ans.scrollHeight + "px" : null;
    });
  });

  // Active nav link based on current path
  var path = window.location.pathname;
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href && path.indexOf(href.replace(/\/$/, "")) === 0 && href !== "/") {
      a.classList.add("active");
    }
  });
});
