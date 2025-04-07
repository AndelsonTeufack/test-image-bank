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
    const endDate = new Date(now);
    endDate.setHours(now.getHours() + 12); // 12 heures à partir de maintenant
    
    const diff = endDate - now;
    
    // Calcul des jours, heures, minutes
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Mise à jour de l'affichage
    document.getElementById('hours').textContent = Math.floor(hours).toString().padStart(2, '0');
    document.getElementById('minutes').textContent = Math.floor(minutes).toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

  // Mettre à jour immédiatement
  updateCountdown();
    
  // Mettre à jour toutes les secondes
  setInterval(updateCountdown, 1000);

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
