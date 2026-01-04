console.log("Website media pembelajaran aktif");

const links = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".tab-content");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.dataset.target;
    const activeContent = document.getElementById(target);
    if (!activeContent) return;

    // Toggle (klik lagi = tutup)
    const isActive = activeContent.classList.contains("active");

    contents.forEach((c) => c.classList.remove("active"));

    if (!isActive) {
      activeContent.classList.add("active");

      // Scroll setelah sedikit delay (AMAN)
      setTimeout(() => {
        activeContent.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  });
});
