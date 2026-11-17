/* ============ CONFIGURAÇÃO CENTRAL (edite aqui) ============ */
const CONFIG = {
  sound: true,                      // som grave nos cliques dos cartões
  whatsapp: "5531987602779",        // PLACEHOLDER: DDI + DDD + número, só dígitos (ex.: 5511999999999)
  email: "tarcisosf08@gmail.com",                         // PLACEHOLDER: e-mail comercial (vazio = não aparece no rodapé)
  social: { Instagram: "", LinkedIn: "", Facebook: "" } // PLACEHOLDER: URLs completas (vazio = não aparece)
};
const WA = (t, m) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m || "Olá, Seu Site Ponto Com! Gostaria de solicitar um orçamento: " + t + ".")}`;

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

if (!RM && FINE) {
  addEventListener("pointermove", e => { document.documentElement.style.setProperty("--gx", e.clientX + "px"); document.documentElement.style.setProperty("--gy", e.clientY + "px"); }, { passive: true });
  $$(".tilt").forEach(c => {
    c.onpointermove = e => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%"); c.style.setProperty("--rx", (.5 - y) * 7 + "deg"); c.style.setProperty("--ry", (x - .5) * 7 + "deg"); };
    c.onpointerleave = () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); };
  });
  const hv = $(".hv svg");
  if (hv) $(".hero").addEventListener("pointermove", e => { hv.style.setProperty("--ry", (e.clientX / innerWidth - .5) * 14 + "deg"); hv.style.setProperty("--px", e.clientX / innerWidth - .5); hv.style.setProperty("--py", e.clientY / innerHeight - .5); hv.style.setProperty("--rx", (.5 - e.clientY / innerHeight) * 10 + "deg"); });
}

/* ============ PÁGINAS E TRANSIÇÕES ============ */
const ORDER = ["inicio", "sobre", "servicos", "projetos", "diferenciais", "processo", "precos", "faq", "contato"];
const TT = { inicio: "Início", sobre: "Sobre", servicos: "Serviços", projetos: "Projetos", diferenciais: "Diferenciais", processo: "Processo", precos: "Preços", faq: "Dúvidas frequentes", contato: "Contato" };
const pages = Object.fromEntries(ORDER.map(k => [k, $("#pg-" + k)]));
$("#fnav").innerHTML = ORDER.map(k => `<li><a href="#${k}">${TT[k]}</a></li>`).join("");
ORDER.forEach((k, i) => { if (i && i < ORDER.length - 1) { const w = document.createElement("div"); w.className = "nxw"; w.innerHTML = `<a class="btn" href="#${ORDER[i + 1]}">Próxima página: ${TT[ORDER[i + 1]]} →</a>`; $(".wrap", pages[k]).append(w); } });
const ov = $(".ov"), ol = $(".ol"), D = 560, EZ = "cubic-bezier(.65,0,.35,1)";
let cur = null, busy = false;
const want = () => pages[location.hash.slice(1)] ? location.hash.slice(1) : "inicio";
const show = k => {
  ORDER.forEach(x => pages[x].hidden = x !== k); cur = k; scrollTo({ top: 0, behavior: "instant" });
  $$("#nav a").forEach(a => a.getAttribute("href") === "#" + k ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  document.title = (k === "inicio" ? "Seu Site Ponto Com | Estúdio digital e desenvolvimento web" : TT[k] + " | Seu Site Ponto Com");
};
const enter = p => RM || p.animate([{ opacity: 0, transform: "translateY(30px) scale(.985)" }, { opacity: 1, transform: "none" }], { duration: 950, easing: "cubic-bezier(.2,.8,.2,1)" });
let dir = 1; const sweep = (clip) => [ov.animate(clip, { duration: D, easing: EZ, fill: "forwards" }), ol.animate((dir > 0 ? [{ transform: "translateX(0)" }, { transform: "translateX(calc(100vw - 2px))" }] : [{ transform: "translateX(calc(100vw - 2px))" }, { transform: "translateX(0)" }]), { duration: D, easing: EZ, fill: "forwards" })];
async function go() {
  const k = want(); if (k === cur || busy) return; busy = true;
  if (cur === null || RM) { show(k); enter(pages[k]); }
  else {
    dir = ORDER.indexOf(k) > ORDER.indexOf(cur) ? 1 : -1; thump(.7); ov.style.visibility = ol.style.visibility = "visible";
    const out = pages[cur].animate([{ opacity: 1, transform: "none" }, { opacity: .25, transform: "scale(.96) translateX(-4%)" }], { duration: D, easing: EZ, fill: "forwards" });
    const a = sweep(dir > 0 ? [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }] : [{ clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0)" }]);
    await a[0].finished; show(k); out.cancel();
    await new Promise(r => setTimeout(r, 90));
    const b = sweep(dir > 0 ? [{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 0 100%)" }] : [{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 100% 0 0)" }]); enter(pages[k]);
    await b[0].finished; [...a, ...b].forEach(x => x.cancel()); ov.style.visibility = ol.style.visibility = "hidden";
  }
  busy = false; if (want() !== cur) go();
}
addEventListener("hashchange", go);

/* ============ INTERAÇÕES, PARTÍCULAS E INTRO ============ */
addEventListener("pointerdown", e => { if (RM) return; const r = document.createElement("i"); r.className = "rp"; r.style.left = e.clientX + "px"; r.style.top = e.clientY + "px"; document.body.append(r); setTimeout(() => r.remove(), 800); });
if (!RM && FINE) {
  const cr = $(".cr"), cd = $(".cd"); let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  document.body.classList.add("hc");
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; cd.style.transform = `translate(${mx}px,${my}px)`; cr.classList.toggle("on", !!(e.target.closest && e.target.closest("a,button,.card,.pj"))); }, { passive: true });
  let run = 0; const cf = () => { rx += (mx - rx) * .18; ry += (my - ry) * .18; cr.style.transform = `translate(${rx}px,${ry}px)`; if (Math.abs(mx - rx) + Math.abs(my - ry) > .3) requestAnimationFrame(cf); else run = 0; }; addEventListener("pointermove", () => { if (!run) { run = 1; requestAnimationFrame(cf); } }, { passive: true });
  $$(".btn").forEach(b => { b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.setProperty("--tx", (e.clientX - r.left - r.width / 2) * .25 + "px"); b.style.setProperty("--ty", (e.clientY - r.top - r.height / 2) * .35 + "px"); }); b.addEventListener("pointerleave", () => { b.style.setProperty("--tx", "0px"); b.style.setProperty("--ty", "0px"); }); });
}
const cv = $(".cv");
if (!RM && cv && cv.getContext) {
  const x = cv.getContext("2d"), m = { x: -999, y: -999 }; let W, H, P = [];
  const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; P = Array.from({ length: Math.min(W < 700 ? 22 : 48, W / 20 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 })); };
  rs(); addEventListener("resize", rs); addEventListener("pointermove", e => { m.x = e.clientX; m.y = e.clientY; }, { passive: true });
  const ln = (a, b, d, R, al) => { x.strokeStyle = `rgba(${R},${(1 - d / (R === "225,6,0" ? 120 : 170)) * al})`; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); };
  (function f() {
    x.clearRect(0, 0, W, H);
    for (const p of P) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; const dx = m.x - p.x, dy = m.y - p.y; const q = Math.hypot(dx, dy); if (q < 150 && q > 1) { p.x -= dx / q * (150 - q) * .02; p.y -= dy / q * (150 - q) * .02; } x.fillStyle = "rgba(255,70,50,.6)"; x.beginPath(); x.arc(p.x, p.y, 1.5, 0, 7); x.fill(); }
    for (let i = 0; i < P.length; i++) { for (let k = i + 1; k < P.length; k++) { const d = Math.hypot(P[i].x - P[k].x, P[i].y - P[k].y); if (d < 120) ln(P[i], P[k], d, "225,6,0", .25); }  }
    requestAnimationFrame(f);
  })();
}
const intro = $(".intro"), boot = () => { go(); startIO(); };
if (RM) { intro.remove(); boot(); } else {
  $(".iw").innerHTML = "SEU SITE".replace(/./g, (ch, i) => `<span style="--i:${i}">${ch === " " ? "&nbsp;" : ch}</span>`);
  setTimeout(() => { boot(); intro.animate([{ clipPath: "inset(0 0 0 0)" }, { clipPath: "inset(0 0 100% 0)" }], { duration: 600, easing: EZ, fill: "forwards" }).finished.then(() => intro.remove()); }, 950);
}

/* ============ CLIQUE ESPECIAL: O CARTÃO SE SEPARA + GRAVE CURTO ============ */
let AC;
const thump = (k = 1) => { if (!CONFIG.sound) return; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain(), f = AC.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 260; o.frequency.setValueAtTime(140 * k, t); o.frequency.exponentialRampToValueAtTime(48 * k, t + .22); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.5, t + .012); g.gain.exponentialRampToValueAtTime(.001, t + .36); o.connect(f); f.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + .4); } catch (e) { } };
const kf = d => [{ transform: "none" }, { transform: `translate(${d * -3}px,2px) scale(.94,1.05)`, offset: .14 }, { transform: `translate(${d * 30}px,-10px) rotate(${d * 6}deg) scale(1.03)`, offset: .42 }, { transform: `translate(${d * 26}px,-4px) rotate(${d * 4}deg)`, offset: .58 }, { transform: `translate(${d * -4}px,0) rotate(${d * -1.5}deg) scale(1.02)`, offset: .84 }, { transform: "none" }].map(k => ({ ...k, easing: "cubic-bezier(.34,1.4,.64,1)" }));
async function split(el) {
  if (el._s) return; el._s = 1; thump(); if (RM) { el._s = 0; return; }
  const r = el.getBoundingClientRect(), mk = side => { const c = el.cloneNode(true); c.classList.remove("tilt"); c.removeAttribute("data-r"); Object.assign(c.style, { position: "fixed", left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px", margin: "0", zIndex: 105, pointerEvents: "none", clipPath: side ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)" }); document.body.append(c); return c; };
  const L = mk(0), Rt = mk(1); el.style.visibility = "hidden";
  for (let n = 0; n < 10; n++) { const s = document.createElement("i"), a = (Math.random() - .5) * 2.4, v = 40 + Math.random() * 70, sg = Math.random() < .5 ? -1 : 1; s.className = "sp"; s.style.left = r.left + r.width / 2 + "px"; s.style.top = r.top + r.height * (.2 + Math.random() * .6) + "px"; document.body.append(s); s.animate([{ transform: "translate(0,0) scale(1)", opacity: 1 }, { transform: `translate(${Math.cos(a) * v * sg}px,${Math.sin(a) * v - 20}px) scale(0)`, opacity: 0 }], { duration: 600 + Math.random() * 300, delay: 120, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }).finished.then(() => s.remove()); }
  const A = [L.animate(kf(-1), { duration: 1000 }), Rt.animate(kf(1), { duration: 1000 })];
  await A[0].finished; L.remove(); Rt.remove(); el.style.visibility = "";
  el.animate([{ scale: "1.05" }, { scale: "1" }], { duration: 350, easing: "cubic-bezier(.34,1.56,.64,1)" }); el._s = 0;
}
const flip = el => { if (el._s) return; el._s = 1; thump(.9); if (RM) { el._s = 0; return; } el.animate([{ transform: "perspective(900px) rotateY(0) scale(1)" }, { transform: "perspective(900px) rotateY(180deg) scale(.92) translateY(-10px)", offset: .5 }, { transform: "perspective(900px) rotateY(360deg) scale(1)" }], { duration: 900, easing: "cubic-bezier(.34,1.3,.64,1)" }).finished.then(() => el._s = 0); };
const hop = (el, k = 1.15) => { if (el._s) return; el._s = 1; thump(k); if (RM) { el._s = 0; return; } const rz = (Math.random() - .5) * 10; el.animate([{ transform: "none" }, { transform: "translateY(2px) scale(1.08,.88)", offset: .15 }, { transform: `translateY(-22px) rotate(${rz}deg) scale(.96,1.06)`, offset: .45 }, { transform: "translateY(0) scale(1.05,.95)", offset: .7 }, { transform: "none" }], { duration: 650, easing: "cubic-bezier(.34,1.4,.64,1)" }).finished.then(() => el._s = 0); };
document.addEventListener("click", e => {
  const t = e.target, q = s => t.closest && t.closest(s), inner = q("a,button");
  if (q(".plan,#pil .card,#dif .card") && !inner) return flip(q(".card"));
  if (q(".card,.pj") && !inner) return split(q(".card,.pj"));
  const el = q(".hv .fl,.st,.kt .w,.lg");
  if (el) return hop(el, 1.2);
  if (q(".btn,.fw,.fq button,nav a")) thump(1.1);
});
const vio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("vis", e.isIntersecting)));
$$(".card,.pj").forEach(c => vio.observe(c));
if (!RM && FINE) { let qd = 0, wx = 0, wy = 0; addEventListener("pointermove", e => { wx = e.clientX; wy = e.clientY; if (qd) return; qd = 1; requestAnimationFrame(() => { qd = 0; $$("#pg-" + cur + " .kt.d .w i").forEach(w => { const r = w.getBoundingClientRect(), k = Math.max(0, 1 - Math.hypot(wx - (r.left + r.width / 2), wy - (r.top + r.height / 2)) / 150); w.style.setProperty("--ty", -k * 12 + "px"); w.style.setProperty("--sc", 1 + k * .12); }); }); }, { passive: true }); }
