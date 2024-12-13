const icon = document.querySelector(".menu");
const mobileOverlay = document.querySelector(".menu-overlay");
const removeMenu = document.querySelector(".cancel-menu");





icon.addEventListener("click", () => {
    mobileOverlay.classList.add("show")
})


removeMenu.addEventListener("click", () => {

    mobileOverlay.classList.remove("show")

    
})


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileOverlay.classList.contains("show")) {
        mobileOverlay.classList.remove("show");
    }
});