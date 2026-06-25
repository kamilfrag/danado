/* ===== Danado – skrypty strony ===== */
(function () {
  "use strict";

  // Rok w stopce
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobilne
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Obsługa formularza kontaktowego
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var endpoint = form.getAttribute("action") || "";
      var usingFormspree = endpoint.indexOf("formspree.io") !== -1 && endpoint.indexOf("your-form-id") === -1;

      // Jeśli skonfigurowano Formspree (lub inny backend) – wyślij AJAX-em.
      if (usingFormspree) {
        var btn = form.querySelector('button[type="submit"]');
        if (btn) btn.disabled = true;
        setStatus("Wysyłanie…", "");

        fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        })
          .then(function (res) {
            if (res.ok) {
              form.reset();
              setStatus("Dziękujemy! Wiadomość została wysłana — oddzwonimy najszybciej, jak to możliwe.", "ok");
            } else {
              setStatus("Wystąpił błąd przy wysyłce. Zadzwoń: 798 884 001.", "err");
            }
          })
          .catch(function () {
            setStatus("Brak połączenia. Zadzwoń: 798 884 001 lub napisz na danado.instalacje@gmail.com.", "err");
          })
          .finally(function () {
            if (btn) btn.disabled = false;
          });
        return;
      }

      // Wariant zapasowy bez backendu – otwórz klienta poczty z gotową treścią.
      var data = new FormData(form);
      var subject = "Zapytanie o wycenę – " + (data.get("service") || "instalacje");
      var body =
        "Imię i nazwisko: " + (data.get("name") || "") + "\n" +
        "Telefon: " + (data.get("phone") || "") + "\n" +
        "E-mail: " + (data.get("email") || "") + "\n" +
        "Zakres: " + (data.get("service") || "") + "\n\n" +
        "Opis:\n" + (data.get("message") || "");

      window.location.href =
        "mailto:danado.instalacje@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      setStatus("Otwieramy Twój program pocztowy… Jeśli się nie otworzył, napisz na danado.instalacje@gmail.com.", "ok");
    });
  }

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form-status" + (type ? " " + type : "");
  }
})();
