var btn = document.querySelector("button");
var pop_up = document.querySelector(".pop_up_cont");
btn.addEventListener("click", () => {
    pop_up.classList.remove("hide");
    btn.classList.add("hide");
});

