
function toggleMenu() {
    var x = document.getElementById("navbarOptions");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
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

  function toggleMenu() {
    var x = document.getElementById("navbarOptions");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var offset =
      section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

  window.onscroll = function () {
    scrollFunction();
  };

  var x = document.getElementById("navbarOptions");
    x.style.display = "none";
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
