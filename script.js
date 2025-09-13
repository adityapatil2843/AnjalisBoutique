// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
    // Close mobile nav after click
    navLinks.classList.remove("active");
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close top banner
const closeBtn = document.getElementById("closeTopBanner");
const topBanner = document.getElementById("topBanner");

if (closeBtn && topBanner) {
  closeBtn.addEventListener("click", () => {
    topBanner.style.display = "none";
    // Move navbar to top once banner is gone
    document.querySelector(".navbar").style.top = "0";
  });
}
