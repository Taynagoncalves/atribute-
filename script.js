const div = document.querySelector("div");

const botaoAdd = document.querySelector("#add");
const botaoRemove = document.querySelector("#remove");
const botaoToggle = document.querySelector("#toggle");
const botaoOcultar= document.querySelector("#ocultar");
const botaoMostar = document.querySelector("#mostrar");
const botaoAlternar = document.querySelector("#alternar");

botaoAdd.addEventListener("click", () => {
    div.classList.add('divBlack');
});

botaoRemove.addEventListener("click", () => {
    div.classList.remove('divBlack');
});

botaoToggle.addEventListener("click", () => {
    div.classList.toggle('divBlack');
});

botaoOcultar.addEventListener("click", () => {
    div.setAttribute("hidden", "hidden");
});

botaoMostar.addEventListener("click", () => {
    div.removeAttribute("hidden");
});


