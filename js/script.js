/* =========================================================
   SHITI CHOWDHURY - ACADEMIC PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. OPEN EXTERNAL LINKS SAFELY
    ========================================= */

    const externalLinks = document.querySelectorAll(
        'a[target="_blank"]'
    );

    externalLinks.forEach(function (link) {
        link.setAttribute("rel", "noopener noreferrer");
    });


    /* =========================================
       2. PREVENT PLACEHOLDER LINKS FROM
          JUMPING TO TOP
    ========================================= */

    const placeholderLinks = document.querySelectorAll(
        'a[href="#"]'
    );

    placeholderLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

    });


    /* =========================================
       3. CURRENT YEAR
       Works automatically if footer is added
       later.
    ========================================= */

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});


document.querySelectorAll(".abstract-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const panelId = button.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        if (!panel) return;

        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        panel.hidden = isExpanded;

        button.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );
    });
});
