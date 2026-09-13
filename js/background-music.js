// Background music sourced from https://youtu.be/FkIw-wn2JeU
const BG_MUSIC_VIDEO_ID = "FkIw-wn2JeU";
let bgMusicPlayer;

// Assigned at top level (not inside DOMContentLoaded) so it is defined before
// the YouTube IFrame API script finishes loading and calls it.
window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  bgMusicPlayer = new YT.Player("bg-music-player", {
    height: "0",
    width: "0",
    videoId: BG_MUSIC_VIDEO_ID,
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: BG_MUSIC_VIDEO_ID,
      controls: 0,
      playsinline: 1,
    },
    events: {
      onReady: (event) => event.target.playVideo(),
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("music-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    if (!bgMusicPlayer || typeof bgMusicPlayer.isMuted !== "function") return;

    // Queried live because lucide.createIcons() replaces the <i> icons with <svg> nodes after load.
    const mutedIcon = toggle.querySelector(".music-icon-muted");
    const unmutedIcon = toggle.querySelector(".music-icon-unmuted");

    const isMuted = bgMusicPlayer.isMuted();
    if (isMuted) {
      bgMusicPlayer.unMute();
      bgMusicPlayer.setVolume(60);
      toggle.setAttribute("aria-pressed", "true");
      toggle.setAttribute("aria-label", "Mute background music");
      mutedIcon.classList.add("hidden");
      unmutedIcon.classList.remove("hidden");
    } else {
      bgMusicPlayer.mute();
      toggle.setAttribute("aria-pressed", "false");
      toggle.setAttribute("aria-label", "Unmute background music");
      mutedIcon.classList.remove("hidden");
      unmutedIcon.classList.add("hidden");
    }
  });
});
