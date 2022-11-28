let list = document.querySelector("#list");

// Show And Hide The list 
[document.querySelector(".nav-icon"), document.querySelector(".close-icon")].forEach(e => {
    e.addEventListener("click", () => {
        list.classList.toggle("show-list");

        list.classList.contains("show-list")
          ? (document.body.style.overflowY = "hidden")
          : (document.body.style.overflowY = "scroll");
    })
});