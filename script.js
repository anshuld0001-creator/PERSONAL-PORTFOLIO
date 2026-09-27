const navLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll("[data-page]");
const pageTitle = document.querySelector("[data-page-title]");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const pageName = link.dataset.pageLink;

    pages.forEach((page) => {
      page.classList.toggle("active-page", page.dataset.page === pageName);
    });

    navLinks.forEach((navLink) => {
      navLink.classList.toggle("active-link", navLink.dataset.pageLink === pageName);
    });

    if (pageTitle) {
      pageTitle.textContent = link.textContent.trim();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const contactForm = document.querySelector(".contact-form");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active-filter"));
    button.classList.add("active-filter");

    projectCards.forEach((card) => {
      const showCard = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("d-none", !showCard);
    });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
