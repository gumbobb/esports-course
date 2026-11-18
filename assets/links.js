/* ============================================================
   COURSE LINKS
   ------------------------------------------------------------
   Paste your three URLs between the quotes below. That is the
   only part of this file you need to touch.

   Leave a value as "" and the page shows a small "link coming"
   badge instead of a dead link, so students never hit a 404.
   Fill one in and it becomes a working link the next time the
   page loads. No HTML editing required.
   ============================================================ */

window.COURSE_LINKS = {

  padletQuestions: "https://padlet.com/bbhughes1215/questions-board-introduction-to-esports-management-s025kc7pje2r9u2n0dok",          // Padlet - Questions board
  googleFormSyllabusCheck: "",  // Google Form - syllabus and orientation check
  padletIntro: "https://padlet.com/bbhughes1215/introductions-introduction-to-esports-management-s025kc73uk7u6osbs8f1"               // Padlet - Introductions board

};

/* ====== nothing below here needs editing ====== */
(function () {
  "use strict";
  var links = window.COURSE_LINKS || {};

  function swap() {
    var slots = document.querySelectorAll("[data-course-link]");
    for (var i = 0; i < slots.length; i++) {
      var el = slots[i];
      var key = el.getAttribute("data-course-link");
      var url = (links[key] || "").trim();
      if (!url) continue;                       // leave the badge in place
      if (!/^https?:\/\//i.test(url)) continue; // ignore anything not a real URL

      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
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
