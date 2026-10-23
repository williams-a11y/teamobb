/* =====================================================================
   ✏️  AQUÍ EDITAS TODO: nombres, fecha, historia y frases.
   ===================================================================== */

const CONFIG = {
  nombreA: "Él",                 // 👈 pon el nombre de él
  nombreB: "Ella",               // 👈 pon el nombre de ella
  subtitulo: "Cada momento contigo es mi favorito",
  fechaInicio: "",               // 👈 formato "2023-02-14". Si lo dejas vacío, el contador se oculta
  tituloFinal: "Y la historia continúa...",
  textoFinal: "Gracias por cada día, por cada abrazo y por cada sonrisa. Te amo.",
  mensajeSorpresa: "Eres mi lugar favorito en el mundo ❤",

  /* 💌 Carta de introducción (aparece antes de la línea de tiempo) */
  carta: {
    saludo: "Mi amor ❤️💌",
    parrafos: [
      "Mi niña hermosa, quiero que sepas lo mucho que significas para mí. A veces siento que las palabras no son suficientes para expresar todo lo que llevo dentro de mi corazón, porque lo que siento por ti es algo muy especial. Desde que llegaste a mi vida, te has convertido en una persona demasiado importante para mí, alguien con quien quiero compartir mis alegrías, mis tristezas, mis sueños y cada momento que la vida nos regale.",
      "Después de tanto tiempo juntos, sigo sintiendo la misma ilusión de tenerte a mi lado. Hemos vivido momentos bonitos y también momentos difíciles, pero cada experiencia me ha enseñado lo importante que eres para mí. No somos perfectos, pero lo bonito de lo nuestro es que, a pesar de las dificultades, seguimos teniendo una historia que significa mucho para los dos.",
      "Quiero que nunca dudes de lo mucho que te amo. Me encanta saber que existes, que puedo hablar contigo, reírme contigo y tener a alguien tan especial en mi vida. Eres una persona que ocupa un lugar enorme en mi corazón, y no cambiaría por nada todos los recuerdos que hemos creado juntos.",
      "No sé qué nos tenga preparado el futuro, pero sí sé que quiero seguir compartiendo momentos contigo, apoyándote en tus sueños, celebrando tus logros y estando a tu lado cuando las cosas no salgan como esperabas. Quiero seguir conociéndote, aprendiendo de ti y construyendo una historia de la que ambos podamos sentirnos orgullosos.",
      "Te amo muchísimo, mi niña hermosa. ❤️ Gracias por formar parte de mi vida, por cada sonrisa, cada abrazo, cada conversación y cada recuerdo. Eres alguien demasiado especial para mí, y espero poder demostrarte con mis acciones todo lo que a veces no consigo expresar con palabras."
    ],
    cierre: "Con todo mi amor, para ti, mi niña bonita. 💗🫶🏻"
  }
};

/* Cada momento: título, tu historia (arriba), fotos (números de img/fotoXX.jpg)
   y la frase romántica que va debajo de la foto.
   OJO: los textos de "historia" son temporales, reemplázalos por la tuya. */
const MOMENTOS = [
  {
    titulo: "Nuestro mar",
    historia: "Hay lugares que se vuelven especiales solo porque estás tú.",
    fotos: [1, 2, 3],
    frase: "Cuando el mar nos abrazó, el mundo se quedó en silencio"
  },
  {
    titulo: "Tu abrazo",
    historia: "Entre el cielo y el agua, tú eras mi refugio.",
    fotos: [4, 5],
    frase: "Tu abrazo es el único lugar donde quiero quedarme"
  },
  {
    titulo: "Un beso salado",
    historia: "Algunos besos saben a sal, a sol y a promesa.",
    fotos: [6, 7, 9],
    frase: "Un beso entre el cielo y el mar, y yo sin ganas de despertar"
  },
  {
    titulo: "Pegaditos",
    historia: "Contigo el tiempo no corre, se queda a vivir.",
    fotos: [8, 10, 11],
    frase: "Contigo hasta el agua se siente como casa"
  },
  {
    titulo: "Solo tú y yo",
    historia: "Dos personas, un mismo rumbo.",
    fotos: [12, 13, 14],
    frase: "Si me pierdo en ti, que nadie me venga a buscar"
  },
  {
    titulo: "Tu sonrisa",
    historia: "Hay sonrisas que iluminan más que todo el sol de ese día.",
    fotos: [15],
    frase: "Tu sonrisa es mi lugar favorito del mundo"
  },
  {
    titulo: "Frente al horizonte",
    historia: "El horizonte era enorme, pero yo solo te miraba a ti.",
    fotos: [16, 17],
    frase: "Besarte frente al mar es mi forma favorita de perder el tiempo"
  },
  {
    titulo: "El camino contigo",
    historia: "Lo bonito nunca fue el destino, siempre fue con quién ir.",
    fotos: [18, 19, 20],
    frase: "Contigo hasta el camino más largo se hace corto"
  },
  {
    titulo: "Manos juntas",
    historia: "Los detalles pequeños son los que más se quedan.",
    fotos: [21],
    frase: "Mi mano en la tuya y mi corazón en tus manos"
  },
  {
    titulo: "Mi calma",
    historia: "Los días pesados se hacen livianos cuando estás cerca.",
    fotos: [22, 25, 26],
    frase: "Eres mi calma cuando el mundo hace demasiado ruido"
  },
  {
    titulo: "Días sencillos",
    historia: "No hace falta un plan perfecto cuando el plan eres tú.",
    fotos: [23, 24],
    frase: "Contigo hasta los días más simples son perfectos"
  },
  {
    titulo: "Nuestras sombras",
    historia: "Aunque no se vea, siempre caminamos de la mano.",
    fotos: [27, 28],
    frase: "Aunque pase el tiempo, nuestras sombras siempre caminarán juntas"
  },
  {
    titulo: "De blanco",
    historia: "Una tarde, un vestido blanco y yo sin poder dejar de mirarte.",
    fotos: [29, 30],
    frase: "Eres la imagen más bonita que guarda mi corazón"
  },
  {
    titulo: "Entre el verde",
    historia: "El mundo seguía girando, pero a nosotros nos tocó quedarnos quietos.",
    fotos: [31, 32, 33],
    frase: "En tus brazos el tiempo se detiene"
  },
  {
    titulo: "Me enamoro de nuevo",
    historia: "Cada vez que te miro, vuelvo a empezar.",
    fotos: [34, 40],
    frase: "Me enamoro de ti cada vez que te miro"
  },
  {
    titulo: "Camino de paz",
    historia: "Hay personas que son hogar, y tú eres la mía.",
    fotos: [35, 36],
    frase: "Contigo encontré mi paz"
  },
  {
    titulo: "Celebrando juntos",
    historia: "Las mejores fiestas son las que tienen tu abrazo.",
    fotos: [38, 39],
    frase: "Celebrar la vida a tu lado es mi mejor regalo"
  },
  {
    titulo: "Siempre a tu lado",
    historia: "Desde antes de entender el amor, ya me gustaba estar contigo.",
    fotos: [37, 41],
    frase: "Mi lugar favorito siempre ha sido a tu lado"
  }
];

/* =====================================================================
   🔧  A partir de aquí no necesitas tocar nada
   ===================================================================== */
(function () {
  const $ = (id) => document.getElementById(id);
  const pad = (n) => String(n).padStart(2, '0');
  const ruta = (n) => `img/foto${pad(n)}.jpg`;

  /* ---------- Portada ---------- */
  $('nameA').textContent = CONFIG.nombreA;
  $('nameB').textContent = CONFIG.nombreB;
  $('heroSub').textContent = CONFIG.subtitulo;
  $('finalTitle').textContent = CONFIG.tituloFinal;
  $('finalText').textContent = CONFIG.textoFinal;

  /* ---------- Contador de tiempo juntos ---------- */
  (function contador() {
    const caja = $('counter');
    const texto = document.querySelector('.hero-together');
    const ocultar = () => { caja.style.display = 'none'; texto.style.display = 'none'; };
    if (!CONFIG.fechaInicio) return ocultar();
    const inicio = new Date(CONFIG.fechaInicio + 'T00:00:00');
    if (isNaN(inicio.getTime())) return ocultar();
    $('startLabel').textContent = inicio.toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric' });
    function tick() {
      const s = Math.floor(Math.max(0, Date.now() - inicio.getTime()) / 1000);
      $('cDays').textContent = Math.floor(s / 86400);
      $('cHours').textContent = Math.floor((s % 86400) / 3600);
      $('cMin').textContent = Math.floor((s % 3600) / 60);
      $('cSec').textContent = s % 60;
    }
    tick();
    setInterval(tick, 1000);
  })();

  /* ---------- Carta de introducción ---------- */
  (function carta() {
    const c = CONFIG.carta;
    $('letterGreeting').textContent = c.saludo;
    const cuerpo = $('letterBody');
    c.parrafos.forEach((texto) => {
      const p = document.createElement('p');
      p.className = 'reveal';
      p.textContent = texto;
      cuerpo.appendChild(p);
    });
    $('letterSign').textContent = c.cierre;
  })();

  /* ---------- Línea de tiempo ---------- */
  const timeline = $('timeline');
  const todas = []; // lista plana de fotos para el visor

  MOMENTOS.forEach((m) => {
    const item = document.createElement('article');
    item.className = 'item reveal';
    const clase = m.fotos.length === 1 ? 'one' : 'many n' + m.fotos.length;
    const imgs = m.fotos.map((n) => {
      const idx = todas.length;
      todas.push({ src: ruta(n), cap: m.frase });
      return `<img src="${ruta(n)}" alt="${m.frase}" loading="lazy" data-i="${idx}">`;
    }).join('');
    item.innerHTML =
      `<div class="card">
         <h3>${m.titulo}</h3>
         <p>${m.historia}</p>
         <div class="photos ${clase}">${imgs}</div>
         <span class="phrase">${m.frase}</span>
       </div>`;
    timeline.appendChild(item);
  });

  /* Animación al hacer scroll */
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- Corazones flotando ---------- */
  const contHearts = $('hearts');
  function corazon(rapido) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = '♥';
    h.style.left = Math.random() * 100 + '%';
    h.style.fontSize = 10 + Math.random() * 22 + 'px';
    h.style.color = Math.random() < 0.6 ? '#e11d48' : '#3b82f6';
    const dur = rapido ? 3 + Math.random() * 3 : 7 + Math.random() * 7;
    h.style.animationDuration = dur + 's';
    contHearts.appendChild(h);
    setTimeout(() => h.remove(), dur * 1000 + 200);
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => corazon(false), 900);
  }

  /* ---------- Visor de fotos ---------- */
  const lb = $('lightbox');
  let actual = 0;
  function mostrar() {
    const f = todas[actual];
    $('lbImg').src = f.src;
    $('lbImg').alt = f.cap;
    $('lbCap').textContent = f.cap;
  }
  function abrir(i) { actual = i; mostrar(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function cerrar() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  function mover(d) { actual = (actual + d + todas.length) % todas.length; mostrar(); }

  timeline.addEventListener('click', (e) => {
    const img = e.target.closest('img[data-i]');
    if (img) abrir(Number(img.dataset.i));
  });
  $('lbClose').addEventListener('click', cerrar);
  $('lbPrev').addEventListener('click', () => mover(-1));
  $('lbNext').addEventListener('click', () => mover(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) cerrar(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') cerrar();
    if (e.key === 'ArrowLeft') mover(-1);
    if (e.key === 'ArrowRight') mover(1);
  });
  // deslizar con el dedo en el celular
  let x0 = null;
  lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
    x0 = null;
  });

  /* ---------- Música (opcional: audio/cancion.mp3) ---------- */
  const audio = $('audio');
  const btnMusica = $('musicBtn');
  audio.volume = 0.7;
  audio.addEventListener('error', () => { btnMusica.style.display = 'none'; });
  audio.addEventListener('play', () => btnMusica.classList.add('playing'));
  audio.addEventListener('pause', () => btnMusica.classList.remove('playing'));
  btnMusica.addEventListener('click', () => {
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });
  // La canción arranca sola la primera vez que tocan "Descubre nuestra historia"
  // (los navegadores solo permiten sonido después de un toque del usuario).
  let arranco = false;
  document.querySelector('.scroll-down').addEventListener('click', () => {
    if (arranco) return;
    arranco = true;
    audio.play().catch(() => {});
  });

  /* ---------- Sorpresa final ---------- */
  $('surpriseBtn').addEventListener('click', () => {
    const msg = $('finaleMsg');
    msg.textContent = CONFIG.mensajeSorpresa;
    msg.classList.add('show');
    for (let i = 0; i < 45; i++) setTimeout(() => corazon(true), i * 70);
  });
})();
