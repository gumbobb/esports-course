/* ============================================================
   COURSE LINKS
   ------------------------------------------------------------
   Paste your URLs between the quotes below. That is the only
   part of this file you need to touch.

   Leave a value as "" and the page shows a small "link coming"
   badge instead of a dead link, so students never hit a 404.
   Fill one in and it becomes a working link the next time the
   page loads. No HTML editing required.

   SHORTCUT: fill in allWeeksCheck / allWeeksDiscuss and every
   week uses that link. Fill in a specific week below and it
   overrides the shortcut for that week only.
   ============================================================ */

window.COURSE_LINKS = {

  /* --- Orientation (Module 0) --- */
  padletQuestions: "https://padlet.com/bbhughes1215/questions-board-introduction-to-esports-management-s025kc7pje2r9u2n0dok",
  padletIntro: "https://padlet.com/bbhughes1215/introductions-introduction-to-esports-management-s025kc73uk7u6osbs8f1",
  googleFormSyllabusCheck: "https://forms.gle/ogXcAvDrh2JskBe58",   // Google Form - syllabus and orientation check

  /* --- Fallbacks: one link covers all 15 weeks --- */
  allWeeksCheck: "",             // Google Form used for every weekly check
  allWeeksDiscuss: "",           // Padlet used for every weekly discussion

  /* --- Per-week overrides (optional) --- */
  week1Check: "",   week1Discuss: "",
  week2Check: "",   week2Discuss: "",
  week3Check: "",   week3Discuss: "",
  week4Check: "",   week4Discuss: "",
  week5Check: "",   week5Discuss: "",
  week6Check: "",   week6Discuss: "",
  week7Check: "",   week7Discuss: "",
  week8Check: "",   week8Discuss: "",
  week9Check: "",   week9Discuss: "",
  week10Check: "",  week10Discuss: "",
  week11Check: "",  week11Discuss: "",
  week12Check: "",  week12Discuss: "",
  week13Check: "",  week13Discuss: "",
  week14Check: "",  week14Discuss: "",
  week15Check: "",  week15Discuss: ""

};

/* ====== nothing below here needs editing ====== */
(function () {
  "use strict";
  var links = window.COURSE_LINKS || {};

  function resolve(key) {
    var url = (links[key] || "").trim();
    if (url) return url;
    var m = /^week\d+(Check|Discuss)$/.exec(key);   // fall back to the all-weeks link
    if (m) return (links["allWeeks" + m[1]] || "").trim();
    return "";
  }

  function swap() {
    var slots = document.querySelectorAll("[data-course-link]");
    for (var i = 0; i < slots.length; i++) {
      var el = slots[i];
      var url = resolve(el.getAttribute("data-course-link"));
      if (!url) continue;                       // leave the badge in place
      if (!/^https?:\/\//i.test(url)) continue; // ignore anything not a real URL

      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
      if (el.className) a.className = el.className;   // keep the button styling
      a.textContent = el.getAttribute("data-label") || el.textContent.trim();
      el.parentNode.replaceChild(a, el);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", swap);
  } else {
    swap();
  }
})();
