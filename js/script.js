window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");

  let top = window.scrollY;

  sections.forEach((section) => {
    let offset = section.offsetTop - 120;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      let activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    navLinks.forEach((link) => link.classList.remove("active"));
    document
      .querySelector('.nav-link[href="#contact"]')
      .classList.add("active");
  }
});

function showAlert() {
  Swal.fire({
    title: "Welcome!",
    text: "Lets get started with your digital journey.",
    icon: "success",
  });
}

const carousel = document.querySelector("#heroCarousel");

let startX = 0;
let isSwiping = false;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
  let moveX = e.touches[0].clientX;
  let diffX = startX - moveX;

  if (Math.abs(diffX) > 30) {
    isSwiping = true;
  }
});

carousel.addEventListener("touchend", (e) => {
  if (!isSwiping) return;

  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    bootstrap.Carousel.getInstance(carousel).next();
  } else if (diff < -50) {
    bootstrap.Carousel.getInstance(carousel).prev();
  }

  isSwiping = false;
});
