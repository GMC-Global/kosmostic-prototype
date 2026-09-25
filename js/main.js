/* KosmosTIC — Atlas. Interacciones.
   Sin listeners de scroll; animaciones solo en transform/opacity;
   todo colapsa con prefers-reduced-motion. El contenido es visible
   por defecto (la clase html.anim activa los reveals). */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Reveals al entrar en viewport ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    document.documentElement.classList.add("anim");

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Conteo de cifras ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll(".counter"));

  function formatCounter(el, value) {
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    el.textContent = prefix + value + suffix;
  }

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    if (reduceMotion) { formatCounter(el, target); return; }

    var duration = 1100;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      formatCounter(el, Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  if (counters.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
    } else {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { counterObserver.observe(el); });
    }
  }

  /* ---------- Formulario de contacto ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  function setError(input, errId, show) {
    var err = document.getElementById(errId);
    if (err) err.hidden = !show;
    input.setAttribute("aria-invalid", show ? "true" : "false");
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var nombre = document.getElementById("f-nombre");
      var email = document.getElementById("f-email");
      var msg = document.getElementById("f-msg");

      var invalid = false;

      var nombreBad = nombre.value.trim() === "";
      setError(nombre, "err-nombre", nombreBad);
      invalid = invalid || nombreBad;

      var emailBad = !validEmail(email.value);
      setError(email, "err-email", emailBad);
      invalid = invalid || emailBad;

      var msgBad = msg.value.trim() === "";
      setError(msg, "err-msg", msgBad);
      invalid = invalid || msgBad;

      if (invalid) {
        if (status) status.textContent = "Revisa los campos marcados e inténtalo de nuevo.";
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      if (status) status.textContent = "Enviando tu mensaje…";

      window.setTimeout(function () {
        btn.disabled = false;
        form.reset();
        if (status) status.textContent = "Gracias. Un experto de KosmosTIC te contactará muy pronto.";
      }, 900);
    });

    form.addEventListener("input", function (e) {
      var t = e.target;
      if (t.getAttribute("aria-invalid") === "true") {
        if (t.id === "f-nombre") setError(t, "err-nombre", t.value.trim() === "");
        if (t.id === "f-email") setError(t, "err-email", !validEmail(t.value));
        if (t.id === "f-msg") setError(t, "err-msg", t.value.trim() === "");
      }
    });
  }
})();
