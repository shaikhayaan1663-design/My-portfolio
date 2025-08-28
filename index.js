 // portfolio.js

// 1. Navbar color change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#0077cc"; // Blue shade
    navbar.style.transition = "0.3s";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

// 2. Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for navbar
        behavior: "smooth"
      });
    }
  });
});

// 3. Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// 4. Contact form submit alert
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default submit
  alert("✅ Thank you for reaching out! I will get back to you soon.");
  form.reset();
});
