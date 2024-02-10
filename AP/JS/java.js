function toggleMenu() {
  var x = document.getElementById("navbarOptions");
  if (x.classList.contains("show-menu")) {
    x.classList.remove("show-menu");
  } else {
    x.classList.add("show-menu");
  }
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var offset = section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  var x = document.getElementById("navbarOptions");
  x.classList.remove("show-menu");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var btn = document.getElementById("scroll-to-top-btn");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
