const icon = document.querySelector(".menu");
const mobileOverlay = document.querySelector(".menu-overlay");
const removeMenu = document.querySelector(".cancel-menu");





icon.addEventListener("click", () => {
    mobileOverlay.classList.add("show");
    body.classList.add("no-scroll");
})


removeMenu.addEventListener("click", () => {

    mobileOverlay.classList.remove("show");
    body.classList.remove("no-scroll");   
})


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileOverlay.classList.contains("show")) {
        mobileOverlay.classList.remove("show");
    }
});
