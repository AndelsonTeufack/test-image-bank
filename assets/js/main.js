document.addEventListener("DOMContentLoaded", function () {
  // Initialiser AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Gestion des miniatures
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.addEventListener("click", function () {
      document
        .querySelectorAll(".thumbnail")
        .forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const mainImage = document.querySelector(".main-image");
      mainImage.classList.remove("animate__fadeIn");
      void mainImage.offsetWidth;
      mainImage.src = this.dataset.full;
      mainImage.classList.add("animate__fadeIn");
    });
  });

  // Gestion du menu déroulant
  const btnMore = document.querySelector(".btn-more");
  const dropdownActions = document.querySelector(".dropdown-actions");

  btnMore.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownActions.classList.toggle("show");
  });

  // Fermer le menu quand on clique ailleurs
  document.addEventListener("click", function () {
    dropdownActions.classList.remove("show");
  });

  // Empêcher la fermeture quand on clique dans le menu
  dropdownActions.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Compte à rebours
  function updateCountdown() {
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(now.getDate() + 3);

    const diff = endDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);

  // Animation au chargement
  gsap.from(".search-bar", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".main-content > *", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    ease: "power3.out",
  });

  // Système de notation par étoiles
  document.querySelectorAll(".stars-input i").forEach((star) => {
    star.addEventListener("click", function () {
      const rating = parseInt(this.getAttribute("data-rating"));
      const stars = this.parentElement.querySelectorAll("i");

      stars.forEach((s, index) => {
        if (index < rating) {
          s.classList.remove("far");
          s.classList.add("fas", "active");
        } else {
          s.classList.remove("fas", "active");
          s.classList.add("far");
        }
      });
    });
  });

  document
    .querySelector(".submit-review")
    .addEventListener("click", function () {
      alert("Merci pour votre avis !");
    });


  document.querySelector(".btn-footer").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
