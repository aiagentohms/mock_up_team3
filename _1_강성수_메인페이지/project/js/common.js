window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const el = document.querySelector(".site-header");
        const classList = el.classList;
        const ypos = pageYOffset;
        if (ypos > 40) {
            classList.add("fixed");
        } else {
            classList.remove("fixed");
        }
    });
});
