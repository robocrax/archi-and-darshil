// Self-hosted background music (audio/bg-music.mp3, with audio/bg-music.mov as a fallback source).
const BG_MUSIC_TARGET_VOLUME = 0.6;
const BG_MUSIC_FADE_MS = 2500;
const BG_MUSIC_FADE_STEP_MS = 100;

function fadeInBgMusic(audio) {
  const steps = Math.round(BG_MUSIC_FADE_MS / BG_MUSIC_FADE_STEP_MS);
  let step = 0;
  audio.volume = 0;
  const fadeInterval = window.setInterval(() => {
    step += 1;
    audio.volume = Math.min(BG_MUSIC_TARGET_VOLUME, (BG_MUSIC_TARGET_VOLUME * step) / steps);
    if (step >= steps) window.clearInterval(fadeInterval);
  }, BG_MUSIC_FADE_STEP_MS);
}

function startBgMusic(audio) {
  if (!audio.paused) return;
  fadeInBgMusic(audio);
  audio.play().catch(() => {
    // Autoplay with sound was blocked — resume on the very first interaction anywhere on the page,
    // not just the "Open Invitation" button, so it isn't tied to one specific click.
    const resume = () => audio.play().catch(() => {});
    ["click", "touchstart", "keydown", "scroll"].forEach((type) =>
      document.addEventListener(type, resume, { once: true, passive: true })
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  if (!audio) return;
  startBgMusic(audio);
});
