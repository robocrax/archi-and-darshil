document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("intro-cover");
  const openButton = document.getElementById("open-invitation");
  if (!cover || !openButton) return;

  openButton.addEventListener("click", () => {
    if (cover.classList.contains("is-opening")) return;

    // Play the seal-breaking animation first, then dissolve the whole veil.
    cover.classList.add("is-opening");
    document.body.classList.remove("cover-active");

    window.setTimeout(() => cover.classList.add("is-open"), 450);

    cover.addEventListener(
      "transitionend",
      (event) => {
        if (event.target === cover && event.propertyName === "opacity") {
          cover.setAttribute("aria-hidden", "true");
        }
      },
      { once: true }
    );
  });
});
