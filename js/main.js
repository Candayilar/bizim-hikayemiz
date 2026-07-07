document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  initHearts();
  initHero();
  initCounter();
  initCarousel();
  initYouTubePlayer();
  initMilestones();
  initStory();
  initVoiceMessage();
  initNotes();
  initFinal();
  initConfetti();
  initScrollAnimations();
});

function youtubeThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/* ─── Splash Screen ─── */
let splashDismissed = false;
let pendingAutoplay = false;

function initSplash() {
  const splash = document.getElementById("splash");

  function dismiss() {
    if (splashDismissed) return;
    splashDismissed = true;

    splash.classList.add("exit");
    document.body.classList.remove("splash-active");
    document.body.classList.add("splash-done");

    setTimeout(() => splash.remove(), 900);

    if (CONFIG.muzik?.otomatikBaslat) {
      pendingAutoplay = true;
      tryAutoplay();
    }
  }

  splash.addEventListener("click", dismiss);
  document.addEventListener("keydown", dismiss, { once: true });
}

/* ─── Floating Hearts ─── */
function initHearts() {
  const container = document.querySelector(".hearts-bg");
  const hearts = ["♥", "♡", "❤", "💕", "✨"];
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("span");
    el.className = "heart-particle";
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.animationDuration = `${10 + Math.random() * 15}s`;
    el.style.animationDelay = `${Math.random() * 12}s`;
    el.style.fontSize = `${0.5 + Math.random() * 1.3}rem`;
    container.appendChild(el);
  }
}

/* ─── Hero ─── */
function initHero() {
  document.querySelector(".hero-names").textContent =
    `${CONFIG.seninAdin} & ${CONFIG.onunAdi}`;
  document.querySelector(".hero-title").textContent = CONFIG.hero.baslik;
  document.querySelector(".hero-subtitle").textContent = CONFIG.hero.altBaslik;
  document.querySelector(".hero-date").textContent = CONFIG.hero.tarih;
  document.title = `${CONFIG.hero.baslik} ♥`;
}

/* ─── Love Counter ─── */
function initCounter() {
  const start = new Date(CONFIG.hero.baslangicTarihi + "T00:00:00");

  function update() {
    const now = new Date();
    const diff = now - start;
    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("counter-days").textContent = days;
    document.getElementById("counter-hours").textContent = hours;
    document.getElementById("counter-mins").textContent = mins;
  }

  update();
  setInterval(update, 30000);
}

/* ─── Polaroid Carousel ─── */
function initCarousel() {
  const carousel = document.getElementById("carousel");
  const dotsContainer = document.getElementById("carousel-dots");
  let currentIndex = 0;

  CONFIG.fotograflar.forEach((foto, i) => {
    const slide = document.createElement("div");
    slide.className = `carousel-slide${i === 0 ? " active" : ""}`;
    slide.innerHTML = `
      <div class="polaroid">
        <img src="${foto.src}" alt="${foto.alt}" loading="lazy">
        <p class="polaroid-caption">${foto.caption}</p>
      </div>
    `;
    carousel.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
    dot.setAttribute("aria-label", `Fotoğraf ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    currentIndex = index;
    carousel.scrollTo({ left: carousel.offsetWidth * index, behavior: "smooth" });
    updateDots();
  }

  function updateDots() {
    dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
    carousel.querySelectorAll(".carousel-slide").forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });
  }

  document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
    goToSlide(currentIndex > 0 ? currentIndex - 1 : CONFIG.fotograflar.length - 1);
  });

  document.querySelector(".carousel-btn.next").addEventListener("click", () => {
    goToSlide(currentIndex < CONFIG.fotograflar.length - 1 ? currentIndex + 1 : 0);
  });

  carousel.addEventListener("scroll", () => {
    const newIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateDots();
    }
  });

  let touchStartX = 0;
  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex < CONFIG.fotograflar.length - 1 ? currentIndex + 1 : 0);
      } else {
        goToSlide(currentIndex > 0 ? currentIndex - 1 : CONFIG.fotograflar.length - 1);
      }
    }
  }, { passive: true });
}

/* ─── YouTube Music Player ─── */
let ytPlayer = null;
let currentTrack = 0;
let isPlaying = false;
let ytReady = false;

function tryAutoplay() {
  if (!pendingAutoplay || !ytReady || !ytPlayer) return;

  const idx = CONFIG.muzik?.otomatikSarkiIndex ?? 0;
  const vol = CONFIG.muzik?.otomatikSes ?? 15;
  const sarki = CONFIG.sarkilar[idx];

  currentTrack = idx;
  document.getElementById("album-art").src = youtubeThumb(sarki.youtubeId);
  document.getElementById("song-dedication").textContent = sarki.not;

  document.querySelectorAll(".song-card").forEach((card, i) => {
    card.classList.toggle("active", i === idx);
  });

  ytPlayer.setVolume(vol);
  ytPlayer.loadVideoById(sarki.youtubeId);
  ytPlayer.playVideo();
  pendingAutoplay = false;
}

function initYouTubePlayer() {
  const grid = document.getElementById("song-grid");
  const albumArt = document.getElementById("album-art");
  const dedication = document.getElementById("song-dedication");
  const bigPlayBtn = document.getElementById("big-play-btn");
  const albumWrap = document.querySelector(".album-art-wrap");

  albumArt.src = youtubeThumb(CONFIG.sarkilar[0].youtubeId);
  dedication.textContent = CONFIG.sarkilar[0].not;

  CONFIG.sarkilar.forEach((sarki, i) => {
    const card = document.createElement("div");
    card.className = `song-card${i === 0 ? " active" : ""}`;
    card.innerHTML = `
      <div class="song-card-cover">
        <img src="${youtubeThumb(sarki.youtubeId)}" alt="Şarkı ${i + 1}" loading="lazy">
        <div class="song-card-play">▶</div>
      </div>
      <div class="song-card-body">
        <div class="song-card-num">Şarkı ${i + 1}</div>
        <div class="song-card-note">${sarki.not}</div>
      </div>
    `;
    card.addEventListener("click", () => playTrack(i));
    grid.appendChild(card);
  });

  function playTrack(index) {
    currentTrack = index;
    const sarki = CONFIG.sarkilar[index];

    albumArt.src = youtubeThumb(sarki.youtubeId);
    dedication.textContent = sarki.not;

    grid.querySelectorAll(".song-card").forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    if (ytPlayer) {
      ytPlayer.setVolume(50);
      ytPlayer.loadVideoById(sarki.youtubeId);
      ytPlayer.playVideo();
      setPlaying(true);
    }
  }

  function setPlaying(playing) {
    isPlaying = playing;
    bigPlayBtn.textContent = playing ? "❚❚" : "▶";
    albumWrap.classList.toggle("playing", playing);
    albumWrap.classList.toggle("paused", !playing);
  }

  bigPlayBtn.addEventListener("click", () => {
    if (!ytPlayer) return;
    if (isPlaying) {
      ytPlayer.pauseVideo();
      setPlaying(false);
    } else {
      ytPlayer.playVideo();
      setPlaying(true);
    }
  });

  window.onYouTubeIframeAPIReady = () => {
    ytPlayer = new YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId: CONFIG.sarkilar[0].youtubeId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: () => {
          ytReady = true;
          tryAutoplay();
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
          if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
          if (e.data === YT.PlayerState.ENDED) {
            const next = currentTrack < CONFIG.sarkilar.length - 1 ? currentTrack + 1 : 0;
            playTrack(next);
          }
        },
      },
    });
  };

  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  } else if (window.YT.Player) {
    window.onYouTubeIframeAPIReady();
  }

  window.playTrack = playTrack;
}

/* ─── Milestones ─── */
function initMilestones() {
  const container = document.getElementById("milestones");
  const icons = ["✨", "☕", "💕"];

  CONFIG.onemliTarihler.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "milestone-item";
    el.innerHTML = `
      <div class="milestone-dot">${icons[i] || "♥"}</div>
      <div class="milestone-content">
        <div class="milestone-date">${item.tarih}</div>
        <h3 class="milestone-title">${item.baslik}</h3>
        <p class="milestone-desc">${item.aciklama}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

/* ─── Voice Message ─── */
function initVoiceMessage() {
  const cfg = CONFIG.sesliMesaj;
  document.querySelector(".voice-title").textContent = cfg.baslik;
  document.querySelector(".voice-subtitle").textContent = cfg.altBaslik;
  document.getElementById("voice-note").textContent = cfg.not;

  const audio = document.getElementById("voice-audio");
  const playBtn = document.getElementById("voice-play-btn");
  const waves = document.getElementById("voice-waves");
  const hint = document.getElementById("voice-hint");

  audio.src = cfg.dosya;

  audio.addEventListener("error", () => {
    hint.textContent = "Ses dosyası henüz eklenmedi — assets/audio/sesli-mesaj.m4a";
    hint.classList.remove("hidden");
    playBtn.style.opacity = "0.5";
  });

  audio.addEventListener("loadeddata", () => {
    hint.classList.add("hidden");
    playBtn.style.opacity = "1";
  });

  playBtn.addEventListener("click", () => {
    if (audio.error) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => {
    playBtn.textContent = "❚❚";
    playBtn.classList.add("playing");
    waves.classList.add("active");
  });

  audio.addEventListener("pause", () => {
    playBtn.textContent = "🎙";
    playBtn.classList.remove("playing");
    waves.classList.remove("active");
  });

  audio.addEventListener("ended", () => {
    playBtn.textContent = "🎙";
    playBtn.classList.remove("playing");
    waves.classList.remove("active");
  });
}

/* ─── Confetti ─── */
function initConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animating = false;
  let fired = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#ff6b9d", "#ff8fb3", "#ffd700", "#c44dff", "#ffffff"];
  const shapes = ["♥", "♡", "●", "✦"];

  function spawnConfetti() {
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 100,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 2 + 1,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 4,
        opacity: Math.random() * 0.5 + 0.3,
        life: 1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0 && p.y < canvas.height + 50);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.02;
      p.rotation += p.rotSpeed;
      p.life -= 0.004;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity * p.life;
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px serif`;
      ctx.textAlign = "center";
      ctx.fillText(p.shape, 0, 0);
      ctx.restore();
    });

    if (particles.length > 0) {
      requestAnimationFrame(draw);
    } else {
      animating = false;
    }
  }

  function fire() {
    if (fired) return;
    fired = true;
    spawnConfetti();
    document.querySelector(".final-box")?.classList.add("celebrate");
    if (!animating) {
      animating = true;
      draw();
    }
  }

  const finalSection = document.getElementById("final");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) fire();
    },
    { threshold: 0.4 }
  );
  observer.observe(finalSection);
}

/* ─── Story ─── */
function initStory() {
  document.querySelector(".story-title").textContent = CONFIG.hikaye.baslik;
  const paragraphs = CONFIG.hikaye.metin.split("\n\n");
  const storyText = document.querySelector(".story-text");
  paragraphs.forEach((p) => {
    const el = document.createElement("p");
    el.textContent = p;
    storyText.appendChild(el);
  });
}

/* ─── Love Notes ─── */
function initNotes() {
  const grid = document.getElementById("notes-grid");
  CONFIG.notlar.forEach((not) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <div class="note-card-inner">
        <div class="note-front">♥</div>
        <div class="note-back">${not}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

/* ─── Final Message ─── */
function initFinal() {
  document.querySelector(".final-box h2").textContent = CONFIG.finalMesaj.baslik;
  document.querySelector(".final-box p").textContent = CONFIG.finalMesaj.metin;
  document.querySelector(".final-signature").textContent = CONFIG.finalMesaj.imza;
}

/* ─── Scroll Animations ─── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(
    ".section-title, .section-subtitle, .story-letter, .note-card, .song-card, .final-box, .divider, .milestone-item, .voice-player"
  ).forEach((el) => observer.observe(el));

  document.querySelectorAll(".note-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });

  document.querySelectorAll(".song-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll(".milestone-item").forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.15}s`;
  });
}
