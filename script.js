const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.3 });

// sleduje .box i .fade-in
document.querySelectorAll('.box, .fade-in').forEach(el => observer.observe(el));



  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      // Show with animation
      menu.classList.remove("hidden");
      setTimeout(() => {
        menu.classList.remove("opacity-0", "-translate-y-4");
        menu.classList.add("opacity-100", "translate-y-0");
      }, 10);
    } else {
      // Hide with animation
      menu.classList.add("opacity-0", "-translate-y-4");
      menu.classList.remove("opacity-100", "translate-y-0");
      setTimeout(() => {
        menu.classList.add("hidden");
      }, 300); // match duration-300
    }
  });