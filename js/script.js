document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  // EDIT WEDDING DATE HERE: use a local ISO date/time value for the ceremony countdown.
  const WEDDING_DATE = "2026-12-11T17:30:00+05:30";
  const targetDate = new Date(WEDDING_DATE).getTime();

  const valueElements = {
    days: document.getElementById("days-value"),
    hours: document.getElementById("hours-value"),
    minutes: document.getElementById("minutes-value"),
    seconds: document.getElementById("seconds-value")
  };
  const timeGrid = document.getElementById("time-grid");
  const celebrationMessage = document.getElementById("celebration-message");

  function updateCountdown() {
    const distance = targetDate - Date.now();

    if (distance <= 0) {
      timeGrid.classList.add("hidden");
      celebrationMessage.classList.remove("hidden");
      return;
    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((distance / (1000 * 60)) % 60);
    const second = Math.floor((distance / 1000) % 60);

    valueElements.days.textContent = String(day).padStart(3, "0");
    valueElements.hours.textContent = String(hour).padStart(2, "0");
    valueElements.minutes.textContent = String(minute).padStart(2, "0");
    valueElements.seconds.textContent = String(second).padStart(2, "0");
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
});
