const FECHA_ANIVERSARIO = "";
const CARTAS = [
  {
    titulo: "Tu mirada",
    corto: "Tiene algo que me derrite el alma.",
    largo:
      "Cuando me mirás, siento que el mundo se calma. Tus ojos hablan sin decir una palabra, y cada vez que los veo, recuerdo por qué me enamoro de vos todos los días.",
  },
  {
    titulo: "Tu sonrisa",
    corto: "Es mi lugar favorito del universo.",
    largo:
      "Hay algo en tu sonrisa que me enciende por dentro. Me ilumina, me da paz, y me dan ganas de quedarme a tu lado para siempre. Sos mi alegría cotidiana.",
  },
  {
    titulo: "Tu risa",
    corto: "Es el sonido más lindo que conozco.",
    largo:
      "Tu risa tiene magia: me contagia, me levanta el ánimo y me llena de ternura. Cuando te reís, siento que todo vale la pena, incluso los días complicados.",
  },
  {
    titulo: "Tu forma de ser",
    corto: "Me enamora cada detalle de vos.",
    largo:
      "Sos dulce, auténtica, divertida, intensa, sensible, única. Me encanta cómo hablás, cómo pensás, cómo sentís. Me encanta absolutamente todo de vos. Y daría gracias todos los días por encontrarte.",
  },
  {
    titulo: "Cómo me hacés sentir",
    corto: "Me hacés sentir amado de verdad.",
    largo:
      "Con vos no tengo dudas, no tengo miedos, no tengo máscaras. Me hacés sentir cuidado, valorado, elegido… y eso es algo que jamás voy a olvidar. Gracias por abrazarme incluso sin tocarme.",
  },
  {
    titulo: "Motivación",
    corto: "Podés con todo lo que te propongas.",
    largo:
      "A veces no te das cuenta de lo fuerte que sos. Pero yo sí lo veo. Veo tu esfuerzo, tus ganas, tu luz. Sos increíble, y quiero que recuerdes siempre que estoy acá para apoyarte en cada paso.",
  },
  {
    titulo: "Momentos simples",
    corto: "Lo cotidiano se vuelve especial cuando estás vos.",
    largo:
      "Un mensaje tuyo, un abrazo, una charla, una tontería que compartimos… cualquier cosa se convierte en un recuerdo hermoso si vos estás conmigo. Gracias por hacer hermosa la vida diaria.",
  },
  {
    titulo: "Mi calma",
    corto: "Sos mi paz en días de tormenta.",
    largo:
      "Cuando estoy con vos, incluso mis pensamientos se ordenan. Tu voz, tus palabras, tu presencia… todo me da una sensación de calma que no había sentido nunca antes.",
  },
  {
    titulo: "Mi orgullo",
    corto: "Amo la persona que sos.",
    largo:
      "Tu esfuerzo, tus valores, tu corazón, tu forma de ver el mundo… me inspiran todos los días. Me hacés querer crecer, mejorar, y ser la mejor versión de mí. Sos un orgullo enorme para mí.",
  },
  {
    titulo: "Mi elección",
    corto: "Te elegiría una y mil veces.",
    largo:
      "No porque seas perfecta, sino porque sos vos: genuina, intensa, dulce, fuerte, humana. Te elijo en tus risas, en tus enojos, en tus sueños y en tus dudas. Te elijo hoy y siempre.",
  },
  {
    titulo: "Pequeños detalles",
    corto: "Tus gestos dicen más que mil palabras.",
    largo:
      "Cómo me agarrás la mano, cómo me mirás cuando estoy hablando, cómo me hacés reír. Esos pequeños gestos tuyos me hacen sentir especial y querido. Amo cada detalle tuyo.",
  },
  {
    titulo: "Mi lugar favorito",
    corto: "Tu abrazo es mi casa.",
    largo:
      "Hay una paz distinta cuando me abrazás. Es como si el tiempo se detuviera y todo lo demás dejara de importar. En tu abrazo encuentro seguridad, amor y un 'todo va a estar bien' sin palabras.",
  },
];

const HITOS = [
  {
    fecha: "10 Mar 2025",
    titulo: "Nuestro primer beso",
    desc: "Ese día nos encontramos de verdad. Un beso que cambió todo y que marcó el inicio de nuestra historia.",
  },
  {
    fecha: "10 Mar 2025",
    titulo: "Nos conocimos",
    desc: "Desde ese primer momento supe que algo especial estaba por empezar. Ese día apareciste en mi vida para quedarte.",
  },
  {
    fecha: "30 Jul 2025",
    titulo: "Nuestra propuesta",
    desc: "Te pedí que seas mi novia, y con tu 'sí' empezó una etapa hermosa llena de amor, ternura y emociones nuevas.",
  },
  {
    fecha: "30 Ago 2025",
    titulo: "1 mes juntos",
    desc: "Un mes lleno de risas, aprendizajes y cariño. Nuestro inicio fue corto en tiempo, pero enorme en sentimientos.",
  },
  {
    fecha: "30 Sep 2025",
    titulo: "2 meses juntos",
    desc: "Seguimos creciendo, compartiendo y eligiéndonos día a día. Cada día a tu lado vale oro.",
  },
  {
    fecha: "30 Oct 2025",
    titulo: "3 meses juntos",
    desc: "Tres meses llenos de amor, cuidado y momentos que ya guardo como tesoros. Y esto recién empieza.",
  },
];

const GALERIA = [
  { id: 1, caption: "Presentación de buzos — cuando mi mamá y tizi te conocieron", url:"https://i.imgur.com/9qbnShu.jpeg" },
  { id: 2, caption: "Cuando jugamos al bingo en el mazza" , url:"https://i.imgur.com/TCuRfFB.jpeg" },
  { id: 3, caption: "Nuestra primera matinée del colegio" , url:"https://i.imgur.com/WZWBn59.jpeg"},
  { id: 4, caption: "El primer corazón con sombra — nuestro detalle especial", url:"https://i.imgur.com/XheNjb8.jpeg" },
  { id: 5, caption: "Nuestro segundo corazón — horas antes de pedirte que seas mi novia" , url:"https://i.imgur.com/wC30Fe8.jpeg"},
  { id: 6, caption: "Nuestro beso en el Rosedal de Palermo", url:"https://i.imgur.com/onIkAr5.jpeg" },
  { id: 7, caption: "El regalo con el que te pedí que seas mi novia" , url:"https://i.imgur.com/yx8vP9M.jpeg"},
  { id: 8, caption: "Nuestra salida a la feria kawaii", url:"https://i.imgur.com/rYxbbH8.jpeg" },
  { id: 9, caption: "Tikita con las flores amarillas que le regalé" , url:"https://i.imgur.com/STqpTOS.jpeg"},
  { id: 10, caption: "Día de Pijamas" , url:"https://i.imgur.com/xvimBwl.jpeg"},
  { id: 11, caption: "Cuando fuimos a la UBA y paseamos" , url:"https://i.imgur.com/uSoefTQ.jpeg"},
  { id: 12, caption: "Nuestra matinée de Halloween", url:"https://i.imgur.com/OVkwdoC.jpeg" },
  { id: 13, caption: "4 de noviembre" , url:"https://i.imgur.com/7NEat6b.jpeg"},
];

const CARTA_LARGA = `Mi Tikita hermosha,
Vos no tenés idea de lo mucho que significás para mí. Estar con vos me cambia el día, me ordena la cabeza y me llena el corazón. Me encanta cómo sos, cómo sentís, cómo cuidás. Gracias por estar en cada cosa, por hacerme reír y por hacerme sentir amado de verdad. Con vos quiero todo.

Desde que apareciste, todo se siente distinto. Me das paz, me das fuerza y me das ganas. Tu ternura, tu paciencia y ese corazón tan lindo que tenés me hacen querer ser mejor cada día. Gracias por caminar conmigo, por quedarte, por elegirme. Sos mi hogar, mi calma y mi sueño más lindo.`;

const floatingContainer = document.querySelector(".floating-hearts");
const cardsGrid = document.getElementById("cards-grid");
const timelineEl = document.getElementById("timeline");
const galleryGrid = document.getElementById("gallery-grid");
const galleryModal = document.getElementById("gallery-modal");
const letterModal = document.getElementById("letter-modal");
const letterContent = document.getElementById("letter-content");
const copyLetterBtn = document.getElementById("copy-letter");
const openLetterBtn = document.getElementById("open-letter");
const loveAudio = document.getElementById("love-audio");
const confettiContainer = document.getElementById("confetti-container");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");

function updateLoveTimer() {
  const inicio = new Date("2025-07-30T17:37:00-03:00");
  const ahora = new Date();

  const diff = ahora - inicio;
  const timerEl = document.getElementById("love-timer");

  if (!timerEl) return;

  if (diff < 0) {
    timerEl.textContent = "Todavía no comenzó este momento especial 💕";
    return;
  }

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  timerEl.textContent = `${dias} días, ${horas} horas, ${minutos} min y ${segundos} seg junto a vos ❤`;
}

function init() {
  createFloatingHearts();

  setInterval(updateLoveTimer, 1000);
  updateLoveTimer();

  renderCards();
  renderTimeline();
  renderGallery();

  letterContent.innerHTML = CARTA_LARGA.replace(/\n/g, "<br />");
  loveAudio?.load();

  setupObservers();
  attachEvents();
}

/* ✔ CORRECTO: función fuera de init */
function toggleCard(card) {
  card.classList.toggle("is-flipped");
}

function createFloatingHearts() {
  if (!floatingContainer) return;
  const HEARTS = 14;
  for (let i = 0; i < HEARTS; i++) spawnHeart();
  setInterval(spawnHeart, 2000);
}

function spawnHeart() {
  if (!floatingContainer) return;
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = `-${Math.random() * 20}vh`;
  heart.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
  floatingContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

function renderCards() {
  if (!cardsGrid) return;
  const fragment = document.createDocumentFragment();

  CARTAS.forEach((carta, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.dataset.index = index;

    const inner = document.createElement("div");
    inner.className = "card__inner";

    const front = document.createElement("div");
    front.className = "card__face card__face--front";
    front.innerHTML = `<h3 class="card__title">${carta.titulo}</h3><p class="card__short">${carta.corto}</p>`;

    const back = document.createElement("div");
    back.className = "card__face card__face--back";
    back.innerHTML = `<h3 class="card__title">${carta.titulo}</h3><p class="card__long">${carta.largo}</p>`;

    inner.append(front, back);
    card.append(inner);
    fragment.append(card);
  });

  cardsGrid.append(fragment);
}

function renderTimeline() {
  if (!timelineEl) return;
  const fragment = document.createDocumentFragment();

  HITOS.forEach((hito) => {
    const item = document.createElement("li");
    item.className = "timeline__item";
    item.innerHTML = `
      <p class="timeline__date">${hito.fecha}</p>
      <h3>${hito.titulo}</h3>
      <p>${hito.desc}</p>
    `;
    fragment.append(item);
  });

  timelineEl.append(fragment);
}

function renderGallery() {
  if (!galleryGrid) return;
  const fragment = document.createDocumentFragment();

  GALERIA.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";
    button.dataset.caption = item.caption;
    button.dataset.url = item.url;
    button.setAttribute("aria-label", item.caption);

    const tilt = (Math.random() * 8 - 4).toFixed(1) + "deg";
    button.style.setProperty("--tilt", tilt);

    button.style.setProperty("--delay", `${index * 0.08}s`);

    button.innerHTML = `
      <img src="${item.url}" alt="${item.caption}" class="gallery-thumb">
    `;

    fragment.append(button);
  });

  galleryGrid.append(fragment);
}

function setupObservers() {
  if (!timelineEl) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineEl.querySelectorAll(".timeline__item").forEach((item) =>
    observer.observe(item)
  );
}

function attachEvents() {
  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);
  openLetterBtn?.addEventListener("click", () => openModal(letterModal));
}

function handleClick(event) {
  const target = event.target;

  if (target.closest?.(".card")) toggleCard(target.closest(".card"));

  if (target.matches?.("#copy-letter")) copyLetter();

  if (target.matches?.("#confetti-btn")) launchConfetti();

  if (target.closest?.(".gallery-item")) {
    const btn = target.closest(".gallery-item");
    openGalleryModal(btn.dataset.caption, btn.dataset.url);
  }

  if (target.dataset?.close === "gallery" || target.dataset?.close === "letter") {
    closeModal(target.dataset.close === "gallery" ? galleryModal : letterModal);
  }
}

function handleKeydown(event) {
  if (
    (event.key === "Enter" || event.key === " ") &&
    document.activeElement?.classList.contains("card")
  ) {
    event.preventDefault();
    toggleCard(document.activeElement);
  }

  if (event.key === "Escape") {
    closeModal(galleryModal);
    closeModal(letterModal);
  }
}

function openModal(modal) {
  modal?.classList.add("is-active");
  modal?.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal?.classList.remove("is-active");
  modal?.setAttribute("aria-hidden", "true");
}

function openGalleryModal(caption, url) {
  modalImage.src = url;
  modalCaption.textContent = caption;
  openModal(galleryModal);
}

function copyLetter() {
  if (!copyLetterBtn) return;
  navigator.clipboard
    ?.writeText(CARTA_LARGA)
    .then(() => {
      copyLetterBtn.textContent = "Copiada 💌";
      setTimeout(() => (copyLetterBtn.textContent = "Copiar carta"), 1800);
    })
    .catch(() => {
      copyLetterBtn.textContent = "Intenta de nuevo";
      setTimeout(() => (copyLetterBtn.textContent = "Copiar carta"), 1800);
    });
}

function launchConfetti() {
  if (!confettiContainer) return;
  const pieces = 60;
  for (let i = 0; i < pieces; i++) {
    const heart = document.createElement("span");
    heart.className = "confetti-heart";
    heart.textContent = Math.random() > 0.5 ? "💕" : "💗";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random()}s`;
    heart.style.fontSize = `${Math.random() * 1.5 + 0.8}rem`;
    confettiContainer.appendChild(heart);
  }
  setTimeout(() => {
    confettiContainer.innerHTML = "";
  }, 3200);
}

document.addEventListener("DOMContentLoaded", init);
