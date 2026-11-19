/*
 * Splash de bienvenida · Matriz OMS API
 * ---------------------------------------------------------------------------
 * Mintlify incluye automáticamente cualquier archivo .js de la raíz del
 * repositorio en todas las páginas: no hace falta referenciarlo desde
 * docs.json. Los estilos están en styles.css (sección 6b).
 *
 * Comportamiento
 *  - Solo se muestra al entrar a la home ("/" o "/introduction", o sus
 *    equivalentes "/es" y "/es/introduction").
 *  - Aparece SIEMPRE que se carga la página: al entrar, al refrescar (F5 o
 *    Ctrl+R) y en una pestaña nueva. No usa sessionStorage ni cookies.
 *  - Al pulsar "Conocé más" (o Escape) se marca window.__mxSplashDismissed.
 *    Esa variable vive solo en la memoria de la página cargada, así que
 *    desaparece al recargar.
 *  - Navegación interna (menú lateral de Mintlify, sin recargar): este script
 *    no se vuelve a ejecutar, por lo que volver a "Introducción" no reabre el
 *    splash. La variable protege además el caso en que el script se
 *    reevaluara dentro de la misma carga.
 *  - Parámetros de URL:
 *      ?splash=0  lo omite
 *      ?splash=1  lo fuerza aunque ya se haya cerrado en esta carga
 *
 * Mintlify es una SPA: este script se ejecuta una sola vez por carga completa
 * de la página, no en cada navegación interna.
 */
(function () {
  "use strict";

  var HOME_PATHS = ["/", "/introduction", "/es", "/es/introduction"];
  var LEAVE_MS = 800; // debe coincidir con la transición de .mx-splash en styles.css

  /* ----- utilidades ------------------------------------------------------- */

  // Persistencia solo en memoria: se pierde al recargar la página.
  function wasDismissed() {
    return window.__mxSplashDismissed === true;
  }

  function markDismissed() {
    window.__mxSplashDismissed = true;
  }

  function isHome() {
    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    return HOME_PATHS.indexOf(path) !== -1;
  }

  function shouldShow() {
    var param = new URLSearchParams(window.location.search).get("splash");
    if (param === "0") return false;
    if (!isHome()) return false;
    if (param === "1") return true;
    return !wasDismissed();
  }

  /* ----- marcado ---------------------------------------------------------- */

  var MARKUP =
    '<div class="mx-splash__bg" aria-hidden="true"></div>' +
    '<div class="mx-splash__inner">' +
    '  <header class="mx-splash__header mx-splash__reveal" style="--d:0ms">' +
    '    <img class="mx-splash__logo mx-splash__logo--light" src="/logo/primary-light.svg" alt="Primary" />' +
    '    <img class="mx-splash__logo mx-splash__logo--dark" src="/logo/primary-dark.svg" alt="Primary" />' +
    "  </header>" +
    '  <div class="mx-splash__content">' +
    '    <div class="mx-splash__copy">' +
    '      <p class="mx-splash__eyebrow mx-splash__reveal" style="--d:100ms"><span class="mx-splash__pulse"></span>DOCUMENTACIÓN OFICIAL · MATRIZ OMS</p>' +
    '      <h1 class="mx-splash__title mx-splash__reveal" id="mx-splash-title" style="--d:200ms">' +
    '        <strong class="mx-splash__strong">Matriz OMS API:</strong> guía interactiva para ' +
    '        <strong class="mx-splash__accent">integrar y operar en tiempo real.</strong>' +
    "      </h1>" +
    '      <p class="mx-splash__lead mx-splash__reveal" style="--d:320ms">Conectá tus sistemas a A3 Mercados y BYMA con REST y WebSocket: ruteo de órdenes, Market Data y control de riesgo en una sola API.</p>' +
    '      <div class="mx-splash__actions mx-splash__reveal" style="--d:440ms">' +
    '        <button type="button" class="mx-splash__cta" data-mx-splash-cta>' +
    "          <span>Conocé más</span>" +
    '          <svg class="mx-splash__arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
    "        </button>" +
    "      </div>" +
    "    </div>" +
    '    <div class="mx-splash__visual mx-splash__reveal mx-splash__reveal--card" style="--d:380ms" aria-hidden="true">' +
    '      <div class="mx-splash__card">' +
    '        <div class="mx-splash__card-bar">' +
    '          <span class="mx-splash__card-dots"><i></i><i></i><i></i></span>' +
    '          <span class="mx-splash__card-title">WebSocket · mensaje no</span>' +
    '          <span class="mx-splash__card-tag">Ejemplo</span>' +
    "        </div>" +
    '        <pre class="mx-splash__code"><code>' +
    '<span class="p">{</span>\n' +
    '  <span class="k">"type"</span><span class="p">:</span> <span class="s">"no"</span><span class="p">,</span>\n' +
    '  <span class="k">"product"</span><span class="p">: {</span>\n' +
    '    <span class="k">"marketId"</span><span class="p">:</span> <span class="s">"ROFX"</span><span class="p">,</span>\n' +
    '    <span class="k">"symbol"</span><span class="p">:</span> <span class="s">"DLR/DIC26"</span>\n' +
    '  <span class="p">},</span>\n' +
    '  <span class="k">"price"</span><span class="p">:</span> <span class="n">1596.0</span><span class="p">,</span>\n' +
    '  <span class="k">"quantity"</span><span class="p">:</span> <span class="n">10</span><span class="p">,</span>\n' +
    '  <span class="k">"side"</span><span class="p">:</span> <span class="s">"BUY"</span><span class="p">,</span>\n' +
    '  <span class="k">"account"</span><span class="p">:</span> <span class="s">"30"</span><span class="p">,</span>\n' +
    '  <span class="k">"wsClOrdId"</span><span class="p">:</span> <span class="s">"ALYC30202611170001"</span>\n' +
    '<span class="p">}</span></code></pre>' +
    '        <div class="mx-splash__card-foot">' +
    '          <span class="mx-splash__card-arrow">←</span>' +
    '          <span class="mx-splash__card-msg">or</span>' +
    '          <span class="mx-splash__card-status"><i></i>NEW</span>' +
    '          <span class="mx-splash__card-note">Aceptada</span>' +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</div>";

  /* ----- ciclo de vida ---------------------------------------------------- */

  function mount() {
    var root = document.documentElement;
    var overlay = document.createElement("div");
    overlay.className = "mx-splash";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "mx-splash-title");
    overlay.setAttribute("tabindex", "-1"); // recibe el foco sin mostrar aro en el botón
    overlay.innerHTML = MARKUP;

    var dismissed = false;
    var inertEls = [];
    var observer = null;

    // El resto de la página queda inerte mientras el splash está abierto.
    function setBackgroundInert(on) {
      if (on) {
        Array.prototype.forEach.call(document.body.children, function (el) {
          if (el === overlay || /^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(el.tagName)) return;
          if (el.hasAttribute("inert")) return;
          el.setAttribute("inert", "");
          inertEls.push(el);
        });
      } else {
        inertEls.forEach(function (el) {
          el.removeAttribute("inert");
        });
        inertEls = [];
      }
    }

    function cleanup() {
      if (observer) observer.disconnect();
      document.removeEventListener("keydown", onKey, true);
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      root.classList.remove("mx-splash-open");
      setBackgroundInert(false);
    }

    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      markDismissed();
      overlay.classList.add("is-leaving"); // el overlay se desliza hacia arriba
      // La página queda activa desde el primer instante. Se desbloquea el scroll
      // ahora (y no al final) para que el salto de la barra de desplazamiento
      // ocurra mientras el overlay todavía tapa el contenido.
      root.classList.remove("mx-splash-open");
      setBackgroundInert(false);
      var finished = false;
      function finish() {
        if (finished) return;
        finished = true;
        cleanup();
      }
      overlay.addEventListener("transitionend", function (e) {
        if (e.target === overlay && e.propertyName === "transform") finish();
      });
      window.setTimeout(finish, LEAVE_MS + 250); // respaldo si no llega transitionend
    }

    function onKey(e) {
      if (dismissed) return;
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
      } else if (e.key === "Tab") {
        // El único elemento enfocable es el botón: mantener el foco ahí.
        e.preventDefault();
        var cta = overlay.querySelector("[data-mx-splash-cta]");
        if (cta) cta.focus();
      }
    }

    document.body.appendChild(overlay);
    root.classList.add("mx-splash-open"); // bloquea el scroll de fondo
    setBackgroundInert(true);
    document.addEventListener("keydown", onKey, true);

    var cta = overlay.querySelector("[data-mx-splash-cta]");
    cta.addEventListener("click", dismiss);
    // El foco queda en el diálogo (los lectores de pantalla lo anuncian y
    // Escape funciona); con Tab pasa al botón y recién ahí se ve el aro.
    try {
      overlay.focus({ preventScroll: true });
    } catch (e) {
      overlay.focus();
    }

    // Si el framework vuelve a renderizar el <body> durante la hidratación y
    // elimina el overlay, lo volvemos a insertar mientras no haya sido cerrado.
    if (window.MutationObserver) {
      observer = new MutationObserver(function () {
        if (!dismissed && !document.body.contains(overlay)) {
          document.body.appendChild(overlay);
          setBackgroundInert(true);
        }
      });
      observer.observe(document.body, { childList: true });
    }
  }

  function start() {
    if (!shouldShow()) return;
    if (document.querySelector(".mx-splash")) return; // ya hay uno abierto
    try {
      mount();
    } catch (e) {
      // Si algo falla, la documentación debe seguir siendo accesible.
      document.documentElement.classList.remove("mx-splash-open");
      var leftover = document.querySelector(".mx-splash");
      if (leftover && leftover.parentNode) leftover.parentNode.removeChild(leftover);
      if (window.console) console.warn("[splash] no se pudo mostrar:", e);
    }
  }

  if (document.body) {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
})();
