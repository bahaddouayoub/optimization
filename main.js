const open_menu_button = document.querySelector(".menu"),
    menu_wrapper = document.querySelector(".menu_wrapper"),
    close_menu_button = document.querySelector(".close_menu");

open_menu_button.addEventListener("click", () => {
    menu_wrapper.style.display = "flex"
})

close_menu_button.addEventListener("click", () => {
    menu_wrapper.style.display = "none"
})

