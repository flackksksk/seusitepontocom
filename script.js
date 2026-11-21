/* ============ CONFIGURAÇÃO CENTRAL (edite aqui) ============ */
const CONFIG = {
  sound: true,
  maptilerKey: "9SeBYpW6Gdf581duzXA9", // chave MapTiler (restrinja por domínio no painel da MapTiler)
  home: { lat: -19.4658, lng: -44.2469, nome: "Sete Lagoas, MG" }, // usado se a pessoa negar a localização                      // som grave nos cliques dos cartões
  whatsapp: "5531987602779",        // PLACEHOLDER: DDI + DDD + número, só dígitos (ex.: 5511999999999)
  email: "",                         // PLACEHOLDER: e-mail comercial (vazio = não aparece no rodapé)
  social: { Instagram: "", LinkedIn: "", Facebook: "" } // PLACEHOLDER: URLs completas (vazio = não aparece)
};
const WA = (t, m) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m || "Olá, Seu Site Ponto Com! Gostaria de solicitar um orçamento: " + t + ".")}`;

const TH = { r: "225,6,0", r2: "255,70,50" };
/* ============ CONTEÚDO ============ */
const PIL = [["design", "Design", "Interfaces modernas e experiências visuais cuidadosamente desenvolvidas."], ["tech", "Tecnologia", "Soluções digitais funcionais, responsivas e preparadas para crescer."], ["strat", "Estratégia", "Projetos pensados para melhorar a apresentação e a comunicação das empresas."]];
const SV = [["vitrine", "Sites vitrine", "Apresentação profissional da empresa, seus serviços, diferenciais e canais de contato."], ["land", "Landing pages", "Páginas estratégicas desenvolvidas para campanhas, divulgação e conversão de visitantes."], ["inst", "Sites institucionais", "Websites completos para empresas que desejam apresentar sua história, estrutura e serviços."], ["cat", "Catálogos digitais", "Apresentação organizada de produtos, categorias e informações comerciais."], ["loja", "Lojas virtuais", "Estruturação de lojas online para empresas que desejam comercializar seus produtos na internet."], ["manu", "Manutenção e atualizações", "Suporte para pequenas melhorias, atualização de informações e manutenção de websites."]];
const DF = [["Atendimento direto", "Você conversa diretamente com quem desenvolve o seu projeto."], ["Design personalizado", "Cada interface parte da identidade da sua empresa."], ["Sites responsivos", "Layouts que se adaptam a celulares, tablets e computadores."], ["Navegação intuitiva", "Estrutura clara para o visitante encontrar o que procura."], ["Desenvolvimento organizado", "Etapas definidas e código limpo, do briefing à publicação."], ["Comunicação transparente", "Você acompanha as decisões e sabe o que esperar do projeto."]];
const PR = [["Briefing", "Entendemos as necessidades e os objetivos da empresa."], ["Planejamento", "Definimos a estrutura, o conteúdo e a identidade visual do projeto."], ["Desenvolvimento", "Construímos, testamos e ajustamos o website."], ["Publicação", "Entregamos o projeto preparado para publicação na internet."]];
const PL = [ // [nome, prefixo, preço, sufixo, itens]
  ["Site vitrine essencial", "", "R$ 300,00", "", ["Uma página", "Até cinco seções", "Design responsivo", "Botão de WhatsApp", "Links para redes sociais", "SEO básico", "Uma rodada de ajustes"]],
  ["Landing page profissional", "", "R$ 400,00", "", ["Página estratégica de conversão", "Até sete seções", "Design personalizado", "Botões de ação", "Formulário de contato, quando aplicável", "SEO básico", "Duas rodadas de ajustes"]],
  ["Site institucional", "", "R$ 650,00", "", ["Até cinco páginas", "Página inicial", "Sobre a empresa", "Serviços", "Portfólio", "Contato", "Design responsivo", "SEO básico", "Duas rodadas de ajustes"]],
  ["Catálogo digital", "", "R$ 850,00", "", ["Catálogo online", "Até 30 produtos cadastrados", "Organização por categorias", "Imagens e descrições", "Botões de consulta pelo WhatsApp", "Design responsivo"]],
  ["Loja virtual", "A partir de", "R$ 1.500,00", "", ["Configuração inicial de loja virtual", "Organização de produtos", "Estrutura de categorias", "Configuração da plataforma escolhida", "Orientação para recebimento de pedidos e pagamentos", "Design e personalização conforme a plataforma"]],
  ["Manutenção", "", "R$ 79,90", "/mês", ["Pequenas atualizações", "Ajustes de informações", "Substituição de imagens", "Suporte básico", "Até uma hora de serviços mensais"]]
];
const FQ = [["Quanto tempo demora para desenvolver um site?", "Depende do escopo, do conteúdo disponível e do briefing. Depois de entender o seu projeto, informamos uma estimativa de prazo antes de começar."], ["Preciso ter domínio e hospedagem?", "Não é preciso ter antes de conversar. Domínio e hospedagem não estão incluídos nos planos, salvo quando expressamente contratados, e podemos orientar você na escolha e na publicação."], ["O site funciona em celulares?", "Sim. Os sites são desenvolvidos para funcionar bem em celulares, tablets e computadores."], ["Posso solicitar alterações?", "Sim. Cada plano inclui rodadas de ajustes. Demandas adicionais podem ser combinadas à parte ou cobertas pelo plano de manutenção."], ["A Seu Site Ponto Com oferece manutenção?", "Sim. O plano de manutenção custa R$ 79,90/mês e inclui pequenas atualizações, ajustes de informações, troca de imagens, suporte básico e até uma hora de serviços por mês."], ["Como funciona o pagamento?", "Forma e condições de pagamento são combinadas diretamente no atendimento, conforme o escopo do projeto."], ["Como faço para contratar?", "Clique em “Solicitar orçamento” e conte sobre a sua empresa pelo WhatsApp. A conversa já abre com o serviço escolhido."]];

/* ============ RENDERIZAÇÃO ============ */
const $ = (s, r = document) => r.querySelector(s) || (s[0] === "#" ? {} : null), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ic = k => `<svg class="ic" aria-hidden="true"><use href="#i-${k}"/></svg>`;
$("#pil").innerHTML = PIL.map(([i, t, d]) => `<article class="card tilt" data-r>${ic(i)}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#svc").innerHTML = SV.map(([i, t, d]) => `<article class="card tilt" data-r>${ic(i)}<h3>${t}</h3><p>${d}</p></article>`).join("");
$("#dif").innerHTML = DF.map(([t, d], i) => `<article class="card tilt" data-r><span class="n">0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join("");
$("#stp").innerHTML = PR.map(([t, d], i) => `<div class="st" data-r><b>0${i + 1}</b><h3>${t}</h3><p>${d}</p></div>`).join("");
$("#plans").innerHTML = PL.map(([n, pre, p, suf, it], i) => `<article class="card plan tilt${i ? "" : " f"}" data-r>${i ? "" : '<span class="badge">Oferta de entrada</span>'}<h3>${n}</h3><p class="pr"><small>${pre}</small>${p}<small>${suf}</small></p><ul>${it.map(x => `<li>${x}</li>`).join("")}</ul><a class="btn${i ? "" : " p"}" data-wa="${n}" href="#contato">Solicitar este plano</a></article>`).join("");
$("#fq").innerHTML = FQ.map(([q, a]) => `<div class="fq"><button aria-expanded="false">${q}</button><div class="fa"><p>${a}</p></div></div>`).join("");
$("#fsv").innerHTML = SV.map(([, t]) => `<li><a href="#servicos">${t}</a></li>`).join("");
$("#fct").innerHTML = `<li><a data-wa="Contato geral" href="#contato" target="_blank" rel="noopener">WhatsApp</a></li>` + (CONFIG.email ? `<li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>` : "") + Object.entries(CONFIG.social).filter(([, u]) => u).map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join("");
$("#yr").textContent = "© " + new Date().getFullYear() + " Seu Site Ponto Com. Tecnologia, criatividade e presença digital.";
$$("[data-wa]").forEach(a => { a.href = WA(a.dataset.wa, a.dataset.msg); a.target = "_blank"; a.rel = "noopener"; });

/* ============ ANIMAÇÕES ============ */
const RM = matchMedia("(prefers-reduced-motion:reduce)").matches, FINE = matchMedia("(pointer:fine)").matches;
$$(".kt").forEach(el => { let n = 0; const wrap = node => [...node.childNodes].forEach(c => { if (c.nodeType === 3) { const f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(t => { if (!t.trim()) return f.append(t); const s = document.createElement("span"); s.className = "w"; s.innerHTML = `<i style="--d:${n++ * 60}ms">${t}</i>`; f.append(s); }); c.replaceWith(f); } else wrap(c); }); wrap(el); });
$$(".grid,.bento,.steps,.pf").forEach(g => [...g.children].forEach((c, i) => c.style.transitionDelay = i * 80 + "ms"));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const t = e.target; t.classList.add("in"); io.unobserve(t);
  setTimeout(() => { t.style.transitionDelay = ""; t.removeAttribute("data-r"); t.classList.add("done", "d"); }, 1800);
}), { threshold: .15 });
const startIO = () => $$("[data-r],.kt,.steps").forEach(e => io.observe(e));

$$(".fq").forEach(f => $("button", f).onclick = () => { const o = f.classList.toggle("open"); $("button", f).setAttribute("aria-expanded", o); });
const hd = $("#hd"), mb = $("#mb");
mb.onclick = () => { const o = hd.classList.toggle("m"); mb.setAttribute("aria-expanded", o); };
$$("#nav a").forEach(a => a.onclick = () => { hd.classList.remove("m"); mb.setAttribute("aria-expanded", false); });

let tick = false;
const onScroll = () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    hd.classList.toggle("s", y > 20);
    document.documentElement.style.setProperty("--p", max > 0 ? y / max : 0);
    if (!RM && $("#mq").style) $("#mq").style.setProperty("--x", -y * .3 + "px");
    tick = false;
  });
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* ============ PÁGINAS E TRANSIÇÕES ============ */
const ORDER = ["inicio", "sobre", "servicos", "projetos", "diferenciais", "processo", "precos", "faq", "contato"];
const TT = { inicio: "Início", sobre: "Sobre", servicos: "Serviços", projetos: "Projetos", diferenciais: "Diferenciais", processo: "Processo", precos: "Preços", faq: "Dúvidas frequentes", contato: "Contato" };
const pages = Object.fromEntries(ORDER.map(k => [k, $("#pg-" + k)]));
$("#fnav").innerHTML = ORDER.map(k => `<li><a href="#${k}">${TT[k]}</a></li>`).join("");
ORDER.forEach((k, i) => { if (i && i < ORDER.length - 1) { const w = document.createElement("div"); w.className = "nxw"; w.innerHTML = `<a class="btn" href="#${ORDER[i + 1]}">Próxima página: ${TT[ORDER[i + 1]]} →</a>`; $(".wrap", pages[k]).append(w); } });
const ov = $(".ov"), EZ = "cubic-bezier(.65,0,.35,1)", PN = $$(".ov i"), ovt = $(".ovt");
let cur = null, busy = false;
const want = () => pages[location.hash.slice(1)] ? location.hash.slice(1) : "inicio";
const show = k => {
  ORDER.forEach(x => pages[x].hidden = x !== k); cur = k; document.body.classList.toggle("mono", pages[k].classList.contains("mono")); scrollTo({ top: 0, behavior: "instant" });
  $$("#nav a").forEach(a => a.getAttribute("href") === "#" + k ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  document.title = (k === "inicio" ? "Seu Site Ponto Com | Estúdio digital e desenvolvimento web" : TT[k] + " | Seu Site Ponto Com");
};
const enter = p => RM || p.animate([{ opacity: 0, transform: "translateY(30px) scale(.985)" }, { opacity: 1, transform: "none" }], { duration: 950, easing: "cubic-bezier(.2,.8,.2,1)" });
async function go() {
  const k = want(); if (k === cur || busy) return; busy = true;
  if (cur === null || RM) { show(k); enter(pages[k]); }
  else {
    const dir = ORDER.indexOf(k) > ORDER.indexOf(cur) ? 1 : -1, ord = i => dir > 0 ? i : PN.length - 1 - i, o = { duration: 420, easing: EZ, fill: "forwards" }; thump(.7);
    ov.style.visibility = "visible"; ovt.textContent = TT[k];
    const out = pages[cur].animate([{ opacity: 1, transform: "none" }, { opacity: .3, transform: "scale(.97)" }], { duration: 560, easing: EZ, fill: "forwards" });
    const a = PN.map((p, i) => p.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { ...o, delay: ord(i) * 55 }));
    ovt.animate([{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "none" }], { duration: 400, delay: 300, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" });
    await Promise.all(a.map(x => x.finished)); show(k); out.cancel();
    await new Promise(r => setTimeout(r, 130)); enter(pages[k]);
    const b = PN.map((p, i) => p.animate([{ transform: "scaleY(1)", transformOrigin: "top" }, { transform: "scaleY(0)", transformOrigin: "top" }], { ...o, delay: ord(i) * 55 }));
    ovt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: "forwards" });
    await Promise.all(b.map(x => x.finished)); [...a, ...b].forEach(x => x.cancel()); ov.style.visibility = "hidden";
  }
  busy = false; if (want() !== cur) go();
}
addEventListener("hashchange", go);

/* ============ INTERAÇÕES, PARTÍCULAS E INTRO ============ */
const cv = $(".cv");
if (!RM && cv && cv.getContext) {
  const x = cv.getContext("2d"), m = { x: -999, y: -999 }; let W, H, P = [];
  const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; P = Array.from({ length: Math.min(W < 700 ? 22 : 48, W / 20 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 })); };
  rs(); addEventListener("resize", rs);
  const ln = (a, b, d, R, al) => { x.strokeStyle = `rgba(${R},${(1 - d / 120) * al})`; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); };
  (function f() {
    x.clearRect(0, 0, W, H);
    for (const p of P) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;  x.fillStyle = `rgba(${TH.r2},.6)`; x.beginPath(); x.arc(p.x, p.y, 1.5, 0, 7); x.fill(); }
    for (let i = 0; i < P.length; i++) { for (let k = i + 1; k < P.length; k++) { const d = Math.hypot(P[i].x - P[k].x, P[i].y - P[k].y); if (d < 120) ln(P[i], P[k], d, TH.r, .25); }  }
    requestAnimationFrame(f);
  })();
}
const intro = $(".intro"), boot = () => { go(); startIO(); };
if (RM) { intro.remove(); boot(); } else {
  $(".iw").innerHTML = "SEU SITE".replace(/./g, (ch, i) => `<span style="--i:${i}">${ch === " " ? "&nbsp;" : ch}</span>`);
  setTimeout(() => { boot(); intro.animate([{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 100% 0)" }], { duration: 600, easing: EZ, fill: "forwards" }).finished.then(() => intro.remove()); }, 1750);
}

/* ============ SOM (só botões, menu e troca de página) ============ */
let AC;
const thump = (k = 1) => { if (!CONFIG.sound) return; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain(), f = AC.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 260; o.frequency.setValueAtTime(140 * k, t); o.frequency.exponentialRampToValueAtTime(48 * k, t + .22); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.5, t + .012); g.gain.exponentialRampToValueAtTime(.001, t + .36); o.connect(f); f.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + .4); } catch (e) { } };
document.addEventListener("click", e => { if (e.target.closest && e.target.closest(".btn,.fw,nav a,.lg")) thump(1.1); });
const vio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("vis", e.isIntersecting)));
$$(".card,.pj").forEach(c => vio.observe(c));

/* ============ PAINEL DE DESIGN (intro + sobre) E CONSTELAÇÃO DO HERO ============ */
const sw = (n, c, t = "#fff") => `<div class="sw" style="background:${c};color:${t}"><b>${n}</b><small>${c}</small><span><i></i><i></i><i></i><i></i></span></div>`;
const IK = [`<b class="t1">Título</b>`, `<b class="t2">Subtítulo</b><p class="t4">Texto de apoio</p>`, sw("VERMELHO", "#E10600"), `<small>Campo · padrão</small><div class="tf">Seu texto</div>`, sw("BRASA", "#FF3B30"), `<small>Campo · ativo</small><div class="tf a">Seu texto</div>`, `<small>Botão</small><div class="bt">Solicitar orçamento</div>`, sw("ONIX", "#161618"), `<small>Campo · válido</small><div class="tf v">email@dominio.com<span>✓</span></div>`, `<small>Link</small><u>Saiba mais</u>`, sw("NEVE", "#F5F8FC", "#111"), `<small>Campo · erro</small><div class="tf e">email@<span>!</span></div>`, sw("GRAFITE", "#3a3a40"), `<small>Campo · inativo</small><div class="tf d">Desativado</div>`];
const kc = (n, o) => Array.from({ length: n }, (_, i) => { const s = IK[(o + i * 2) % IK.length]; return s.startsWith('<div class="sw"') ? s : `<div class="ik">${s}</div>`; }).join("");
const ib = $(".ib"); if (ib) ib.innerHTML = [0, 1, 2, 3, 4, 5, 6].map(k => `<div style="--a:${k % 2 ? -120 : -460}px;--b:${k % 2 ? -460 : -120}px">${kc(12, k * 3)}</div>`).join("");
const cst = $(".cst");
if (cst) {
  cst.insertAdjacentHTML("beforeend", Array.from({ length: 16 }, () => `<i class="dt" style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${-Math.random() * 4}s"></i>`).join(""));
}

/* ============ MAPA "NÓS BUSCAMOS POR VOCÊ" (estilizado, desenhado no navegador) ============ */
const rng = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
function drawMap(cv, seed) {
  const d = Math.min(devicePixelRatio || 1, 2), W = cv.width = cv.clientWidth * d, H = cv.height = cv.clientHeight * d, x = cv.getContext("2d"), r = rng(seed);
  x.clearRect(0, 0, W, H); x.lineCap = "round";
  const D = Array.from({ length: 7 }, () => ({ x: r() * W, y: r() * H, a: r() * 3.14 })), ang = (px, py) => { let b = D[0], m = 1e18; for (const q of D) { const v = (q.x - px) ** 2 + (q.y - py) ** 2; if (v < m) { m = v; b = q; } } return b.a; };
  const walk = (n, w, col, len, bl) => { x.lineWidth = w * d; x.strokeStyle = x.shadowColor = col; x.shadowBlur = bl; for (let i = 0; i < n; i++) { let px = r() * W, py = r() * H, a = ang(px, py) + (r() < .5 ? 0 : 1.5708); x.beginPath(); x.moveTo(px, py); for (let s = 0, L = len * (.4 + r()); s < L; s += 8 * d) { a += (r() - .5) * .07; px += Math.cos(a) * 8 * d; py += Math.sin(a) * 8 * d; x.lineTo(px, py); } x.stroke(); } };
  walk(380, .7, "rgba(110,130,255,.3)", 160 * d, 0); walk(55, 1.3, "rgba(150,175,255,.75)", 380 * d, 6);
  x.shadowBlur = 0; x.strokeStyle = "rgba(160,180,255,.55)"; x.lineWidth = 1.4 * d; x.beginPath(); x.ellipse(W / 2, H / 2, W * .3, H * .34, r() * .6, 0, 7); x.stroke();
}
/* ============ DIFERENCIAIS: GLOBO → ZOOM → LOCALIZAÇÃO EM TEMPO REAL ============ */
const swell = () => { if (!CONFIG.sound) return; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); AC.resume && AC.resume(); const t = AC.currentTime, f = AC.createBiquadFilter(), m = AC.createGain(); f.type = "lowpass"; f.frequency.setValueAtTime(110, t); f.frequency.exponentialRampToValueAtTime(360, t + 1.3); f.frequency.exponentialRampToValueAtTime(90, t + 3.6); m.gain.setValueAtTime(0, t); m.gain.linearRampToValueAtTime(.32, t + 1); m.gain.exponentialRampToValueAtTime(.001, t + 3.8); f.connect(m); m.connect(AC.destination); [[1, 0, .9, "sine"], [.5, 4, .5, "sine"], [2, -3, .12, "triangle"]].forEach(([k, dt, v, ty]) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = ty; o.frequency.setValueAtTime(82 * k, t); o.frequency.exponentialRampToValueAtTime(46 * k, t + 3.5); o.detune.value = dt; g.gain.value = v; o.connect(g); g.connect(f); o.start(t); o.stop(t + 3.9); }); } catch (e) { } };
const mp = $("#mp");
if (mp.querySelector) {
  const cv = $("#mc"), gl = $("#mg"), mm = $("#mm"), HM = CONFIG.home, pgD = pages.diferenciais, wait = ms => new Promise(r => setTimeout(r, ms));
  let map = null, mk = null, fbm = null, T = null, tres = null, tried = 0, busyP = 0, spin = 0, arrived = 0, seedv = 0, gRot = 0, gW = 0, gH = 0;
  const gx = gl.getContext("2d"), sd = t => Math.abs(Math.round(t.la * 100) * 7919 + Math.round(t.ln * 100)) || 7;
  const lab = t => { $("#ml").textContent = t.real ? "Sua localização atual" : HM.nome; $("#mco").textContent = t.la.toFixed(4) + ", " + t.ln.toFixed(4); };
  const targetP = () => T ? Promise.resolve(T) : new Promise(r => tres = r);
  const setT = t => { T = t; if (tres) { tres(t); tres = null; } if (arrived) { lab(t); if (mk) { mk.setLngLat([t.ln, t.la]); map.easeTo({ center: [t.ln, t.la], duration: 1500 }); } } };
  const home = () => ({ la: HM.lat, ln: HM.lng, real: 0 });
  const startGeo = () => {
    if (!navigator.geolocation) return setT(home());
    navigator.geolocation.watchPosition(p => setT({ la: p.coords.latitude, ln: p.coords.longitude, real: 1 }), () => { if (!T) setT(home()); }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 });
    setTimeout(() => { if (!T) setT(home()); }, 9000);
  };
  const loadML = () => new Promise((ok, no) => { if (window.maplibregl) return ok(); const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/maplibre-gl@5.0.0/dist/maplibre-gl.js"; s.onload = ok; s.onerror = no; document.head.append(s); });
  const initMap = () => new Promise(ok => {
    if (!CONFIG.maptilerKey) return ok(0);
    loadML().then(() => {
      let d = 0; const win = v => { if (!d) { d = 1; ok(v); } };
      try {
        map = new maplibregl.Map({ container: mm, style: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${CONFIG.maptilerKey}`, center: [-44, 15], zoom: 1, pitch: 0, interactive: false, attributionControl: false, fadeDuration: 250 });
        map.on("style.load", () => map.setProjection({ type: "globe" })); map.once("load", () => win(1)); map.on("error", () => win(0));
      } catch (e) { win(0); }
      setTimeout(() => win(0), 7000);
    }).catch(() => ok(0));
  });
  const GP = Array.from({ length: 650 }, () => { const u = Math.random() * 2 - 1, a = Math.random() * 6.283, s = Math.sqrt(1 - u * u); return [s * Math.cos(a), u, s * Math.sin(a)]; });
  const gsize = () => { const d = Math.min(devicePixelRatio || 1, 2); gW = gl.width = gl.clientWidth * d; gH = gl.height = gl.clientHeight * d; };
  const gdraw = () => {
    if (!spin) return;
    if (!pgD.hidden) {
      gRot += .006; const R = Math.min(gW, gH) * .36, cx = gW / 2, cy = gH / 2, c = Math.cos(gRot), s = Math.sin(gRot), x = gx, pr = (X, Y, Z) => [cx + R * (X * c + Z * s), cy - R * Y, -X * s + Z * c];
      x.clearRect(0, 0, gW, gH); const g = x.createRadialGradient(cx - R * .3, cy - R * .3, R * .1, cx, cy, R); g.addColorStop(0, "#1b2140"); g.addColorStop(1, "#07080f");
      x.fillStyle = g; x.beginPath(); x.arc(cx, cy, R, 0, 7); x.fill(); x.strokeStyle = `rgba(${TH.r2},.6)`; x.lineWidth = 2; x.shadowBlur = 26; x.shadowColor = `rgb(${TH.r2})`; x.stroke(); x.shadowBlur = 0;
      x.strokeStyle = "rgba(140,160,255,.22)"; x.lineWidth = 1;
      const line = f => { x.beginPath(); let on = 0; for (let n = 0; n <= 36; n++) { const p = f(n); if (p[2] > 0) { on ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]); on = 1; } else on = 0; } x.stroke(); };
      for (let m = 0; m < 12; m++) line(n => { const a = m * Math.PI / 6, la = (n * 5 - 90) * Math.PI / 180; return pr(Math.cos(la) * Math.cos(a), Math.sin(la), Math.cos(la) * Math.sin(a)); });
      for (let l = -60; l <= 60; l += 30) line(n => { const la = l * Math.PI / 180, t = n * Math.PI / 18; return pr(Math.cos(la) * Math.cos(t), Math.sin(la), Math.cos(la) * Math.sin(t)); });
      for (const q of GP) { const p = pr(q[0], q[1], q[2]); if (p[2] > 0) { x.fillStyle = `rgba(${TH.r2},${.25 + p[2] * .65})`; x.fillRect(p[0], p[1], 2, 2); } }
    }
    requestAnimationFrame(gdraw);
  };
  const spinMap = () => { if (!spin || !map) return; const c = map.getCenter(); map.setCenter([c.lng + .18, 15]); requestAnimationFrame(spinMap); };
  const play = async () => {
    if (busyP) return; busyP = 1; arrived = 0; mp.classList.remove("go");
    if (mk) { mk.remove(); mk = null; } if (fbm) { fbm.remove(); fbm = null; } gl.getAnimations().forEach(a => a.cancel());
    $("#ml").textContent = "Localizando…"; $("#mco").textContent = "—";
    if (!tried) {
      tried = 1; startGeo();
      if (await initMap()) { mp.classList.add("rm"); mm.classList.add("on"); } else { try { map && map.remove(); } catch (e) { } map = null; }
    }
    gl.style.display = map ? "none" : ""; cv.style.display = map ? "none" : ""; spin = 1;
    if (map) { map.jumpTo({ center: [-44, 15], zoom: 1, pitch: 0, bearing: 0 }); spinMap(); } else { gsize(); gdraw(); }
    const t = await targetP(); await wait(2600); spin = 0; lab(t);
    if (map) {
      map.flyTo({ center: [t.ln, t.la], zoom: 12.8, pitch: 55, bearing: -25, duration: 7000, curve: 1.5, essential: true });
      await new Promise(r => map.once("moveend", r));
      mk = new maplibregl.Marker({ element: Object.assign(document.createElement("div"), { className: "pm" }), anchor: "center" }).setLngLat([t.ln, t.la]).addTo(map);
    } else {
      seedv = sd(t); drawMap(cv, seedv); gl.animate([{ transform: "scale(1)", opacity: 1 }, { transform: "scale(10)", opacity: 0 }], { duration: 2600, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
      await wait(1500); mp.classList.add("go"); await wait(1100); fbm = document.createElement("div"); fbm.className = "pm fb"; $(".mpv").append(fbm);
    }
    mp.classList.add("go"); swell(); arrived = 1; busyP = 0; if (T !== t) setT(T);
  };
  new IntersectionObserver(es => { if (es[0].isIntersecting) play(); }, { threshold: .3 }).observe(mp);
  addEventListener("resize", () => { if (!spin && !seedv) return; gsize(); if (seedv) drawMap(cv, seedv); if (map) map.resize(); });
}
/* ============ LETRAS REAGEM AO CURSOR ============ */
if (!RM && FINE) { let qd = 0, wx = 0, wy = 0; addEventListener("pointermove", e => { wx = e.clientX; wy = e.clientY; if (qd) return; qd = 1; requestAnimationFrame(() => { qd = 0; $$("#pg-" + cur + " .kt.d .w i").forEach(w => { const r = w.getBoundingClientRect(), k = Math.max(0, 1 - Math.hypot(wx - (r.left + r.width / 2), wy - (r.top + r.height / 2)) / 150); w.style.setProperty("--ty", -k * 12 + "px"); w.style.setProperty("--sc", 1 + k * .12); }); }); }, { passive: true }); }
/* ============ PALETA: TROCA O TEMA DO SITE ============ */
const THEMES = { red: ["#E10600", "#FF3B30", "#a30000", "225,6,0", "255,70,50"], blue: ["#1F6BFF", "#4D9BFF", "#0a3fa8", "31,107,255", "77,155,255"], green: ["#0FB872", "#2EE59D", "#07673f", "15,184,114", "46,229,157"], violet: ["#7C4DFF", "#A78BFA", "#46239e", "124,77,255", "167,139,250"], orange: ["#FF7A00", "#FFA13D", "#a34b00", "255,122,0", "255,161,61"] };
const setTheme = (k, x, y) => {
  const t = THEMES[k]; if (!t) return; const s = document.documentElement.style;
  ["--c", "--c2", "--cd"].forEach((v, i) => s.setProperty(v, t[i])); s.setProperty("--rgb", t[3]); s.setProperty("--rgb2", t[4]); TH.r = t[3]; TH.r2 = t[4];
  $$(".pal button").forEach(b => b.setAttribute("aria-pressed", b.dataset.th === k)); try { localStorage.setItem("th", k); } catch (e) { }
  if (x != null && !RM) { const i = document.createElement("i"); i.className = "ink"; i.style.cssText = `left:${x}px;top:${y}px;background:${t[0]}`; document.body.append(i); i.animate([{ transform: "scale(0)", opacity: .55 }, { transform: "scale(70)", opacity: 0 }], { duration: 1000, easing: "cubic-bezier(.2,.7,.2,1)" }).finished.then(() => i.remove()); thump(1.3); }
};
$$(".pal button").forEach(b => b.onclick = e => setTheme(b.dataset.th, e.clientX, e.clientY));
try { const k = localStorage.getItem("th"); if (k) setTheme(k); } catch (e) { }
/* ============ EDITOR VS CODE (SOBRE) ============ */
const FILES = [`<header class="hero">\n  <h1>Sua empresa</h1>\n  <p>merece ir além.</p>\n  <a href="#contato">\n    Solicitar orçamento\n  </a>\n</header>`, `.hero {\n  display: grid;\n  place-items: center;\n  background: #050505;\n}\nh1 { color: var(--c); }\na { border-radius: 999px; }`, `const btn = $("a");\nbtn.onclick = () => {\n  abrirWhatsApp("orçamento");\n};\nconsole.log("pronto 🚀");`];
const hl = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/(&lt;\/?[\w-]+)|("[^"]*"?)|(\/\/.*)|\b(const|document|return|var|let)\b|([\w-]+)(?=\s*[:=(])|(\d+\w*|#[\da-fA-F]{3,6})/g, (m, a, b, c, d, e) => `<i class="${a ? "t" : b ? "s" : c ? "c" : d ? "k" : e ? "p" : "n"}">${m}</i>`);
const ed = $("#ed");
if (ed.classList) {
  const code = $("#ecode"), tabs = $$("#ed .et span"), files = $$("#ed .es u"), term = $("#eterm"), wait = ms => new Promise(r => setTimeout(r, ms));
  const paint2 = (t, c) => { code.innerHTML = t.split("\n").map((l, i, a) => `<div class="ln">${hl(l)}${c && i === a.length - 1 ? '<span class="cr2"></span>' : ""}</div>`).join(""); };
  const loop = async () => {
    for (;;) {
      ed.className = "ed"; term.innerHTML = "";
      for (let f = 0; f < 3; f++) {
        tabs.forEach((t, i) => t.classList.toggle("on", i === f)); files.forEach((t, i) => t.classList.toggle("on", i === f + 1));
        const txt = FILES[f];
        for (let n = 1; n <= txt.length; n++) { while (pages.sobre.hidden) await wait(400); paint2(txt.slice(0, n), 1); await wait(txt[n - 1] === "\n" ? 110 : 14 + Math.random() * 22); }
        ed.classList.add("s" + (f + 1)); await wait(800);
      }
      for (const l of ["$ npm run build", "✓ Build concluído", "✓ Publicado na Vercel"]) { term.insertAdjacentHTML("beforeend", `<div>${l}</div>`); await wait(650); }
      await wait(3500);
    }
  };
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { o.disconnect(); loop(); } }, { threshold: .2 }).observe(ed);
}
