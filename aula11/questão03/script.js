const inp1 = document.querySelector("#inp1");
const p = document.querySelector("#result");

inp1.addEventListener("keypress", (event) => {
    event.target
    p.innerHTML = inp1.value
})
