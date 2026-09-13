// Wedding font pairings, taken directly from
// https://www.figma.com/resource-library/wedding-font-pairings/
// "classic" matches the site's original default look (closest to Pairing 9:
// Playfair Display SC + Libre Baskerville) and is already loaded in index.html.
const FONT_PAIRINGS = {
  classic: {
    label: "Classic Elegance (default)",
    display: '"Playfair Display", serif',
    body: '"Libre Baskerville", serif',
    googleFontsHref: null,
  },
  chicModern: {
    label: "Chic Modern — Playfair Display + Montserrat",
    display: '"Playfair Display", serif',
    body: '"Montserrat", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap",
  },
  vintageRomance: {
    label: "Vintage Romance — Yesteryear + Raleway",
    display: '"Yesteryear", cursive',
    body: '"Raleway", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Yesteryear&family=Raleway:wght@300;400;500;600&display=swap",
  },
  timelessFormal: {
    label: "Timeless Formal — EB Garamond + Source Sans 3",
    display: '"EB Garamond", serif',
    body: '"Source Sans 3", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap",
  },
  blackTieRomance: {
    label: "Black-Tie Romance — Great Vibes + Lora",
    display: '"Great Vibes", cursive',
    body: '"Lora", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap",
  },
  romanticScript: {
    label: "Romantic Script — Tangerine + Noto Sans",
    display: '"Tangerine", cursive',
    body: '"Noto Sans", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&family=Noto+Sans:wght@300;400;500;600&display=swap",
  },
  casualChic: {
    label: "Casual Chic — Alex Brush + Open Sans",
    display: '"Alex Brush", cursive',
    body: '"Open Sans", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Alex+Brush&family=Open+Sans:wght@300;400;500;600&display=swap",
  },
  regalVintage: {
    label: "Regal Vintage — Imperial Script + Montserrat",
    display: '"Imperial Script", cursive',
    body: '"Montserrat", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Imperial+Script&family=Montserrat:wght@300;400;500;600&display=swap",
  },
  modernRomance: {
    label: "Modern Romance — MonteCarlo + Roboto Serif",
    display: '"MonteCarlo", cursive',
    body: '"Roboto Serif", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=MonteCarlo&family=Roboto+Serif:ital,wght@0,400;0,500;0,600;1,400&display=swap",
  },
  boldContrast: {
    label: "Bold Contrast — Style Script + Oswald",
    display: '"Style Script", cursive',
    body: '"Oswald", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Style+Script&family=Oswald:wght@300;400;500;600&display=swap",
  },
  oldWorldElegance: {
    label: "Old World Elegance — Pinyon Script + Forum",
    display: '"Pinyon Script", cursive',
    body: '"Forum", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Forum&display=swap",
  },
  upscaleClassic: {
    label: "Upscale Classic — Pinyon Script + Spectral",
    display: '"Pinyon Script", cursive',
    body: '"Spectral", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap",
  },
  warmStructure: {
    label: "Warm Structure — Bilbo + Arvo",
    display: '"Bilbo", cursive',
    body: '"Arvo", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Bilbo&family=Arvo:ital,wght@0,400;0,700;1,400&display=swap",
  },
  sophisticatedRegal: {
    label: "Sophisticated Regal — Luxurious Script + Baskervville",
    display: '"Luxurious Script", cursive',
    body: '"Baskervville", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Luxurious+Script&family=Baskervville:ital,wght@0,400;1,400&display=swap",
  },
  grandLuxury: {
    label: "Grand Luxury — Cinzel Decorative + Libre Bodoni",
    display: '"Cinzel Decorative", cursive',
    body: '"Libre Bodoni", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Libre+Bodoni:ital,wght@0,400;0,500;0,600;1,400&display=swap",
  },
  beachBreeze: {
    label: "Beach Breeze — Pacifico + Lato",
    display: '"Pacifico", cursive',
    body: '"Lato", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Pacifico&family=Lato:wght@300;400;700&display=swap",
  },
  modernIndustrial: {
    label: "Modern Industrial — Ojuju + IBM Plex Mono",
    display: '"Ojuju", sans-serif',
    body: '"IBM Plex Mono", monospace',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Ojuju:wght@400;600;700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap",
  },
  gardenCeremony: {
    label: "Garden Ceremony — Quattrocento + Spectral",
    display: '"Quattrocento", serif',
    body: '"Spectral", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap",
  },
  bohemianArtsy: {
    label: "Bohemian Artsy — Srisakdi + Reem Kufi",
    display: '"Srisakdi", cursive',
    body: '"Reem Kufi", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Srisakdi:wght@400;700&family=Reem+Kufi:wght@400;500;600&display=swap",
  },
  funAndFresh: {
    label: "Fun & Fresh — Dancing Script + Oswald",
    display: '"Dancing Script", cursive',
    body: '"Oswald", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Oswald:wght@300;400;500;600&display=swap",
  },
  frenchRomance: {
    label: "French Romance — Parisienne + Spectral",
    display: '"Parisienne", cursive',
    body: '"Spectral", serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Parisienne&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap",
  },
  glamourEdge: {
    label: "Glamour Edge — Vidaloka + Raleway",
    display: '"Vidaloka", serif',
    body: '"Raleway", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Vidaloka&family=Raleway:wght@300;400;500;600&display=swap",
  },
  rusticCharm: {
    label: "Rustic Charm — Homemade Apple + Rethink Sans",
    display: '"Homemade Apple", cursive',
    body: '"Rethink Sans", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Rethink+Sans:wght@300;400;500;600&display=swap",
  },
};

const STORAGE_KEY = "weddingFontPairing";

function loadGoogleFont(key, href) {
  if (!href) return;
  if (document.querySelector(`link[data-font-pairing="${key}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.fontPairing = key;
  document.head.appendChild(link);
}

function applyFontPairing(key) {
  const pairing = FONT_PAIRINGS[key];
  if (!pairing) return;
  loadGoogleFont(key, pairing.googleFontsHref);
  document.documentElement.style.setProperty("--font-display", pairing.display);
  document.documentElement.style.setProperty("--font-body", pairing.body);
  localStorage.setItem(STORAGE_KEY, key);
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("font-pairing-select");
  if (!select) return;

  Object.entries(FONT_PAIRINGS).forEach(([key, pairing]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = pairing.label;
    select.appendChild(option);
  });

  const saved = localStorage.getItem(STORAGE_KEY) || "classic";
  select.value = saved;
  applyFontPairing(saved);

  select.addEventListener("change", (event) => applyFontPairing(event.target.value));
});
