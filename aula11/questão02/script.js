// ITEM 1
// const box = document.querySelector("#box");

// box.onclick = function () {
//     box.innerHTML = "wat!"
// }

// box.addEventListener("click", () => {
//     box.innerHTML = "wat!"
// });

// ITEM 2
// const box = document.querySelector("#box");

// box.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "rgb(170,119,153)"
// });

// ITEM 3

const box = document.querySelector("#box");
let isChange = false;

box.addEventListener("click", (event) => {
    if (isChange === false) {
        event.target.style.backgroundColor = "rgb(170,119,153)"
        isChange = true
    } else {
        event.target.style.backgroundColor = "rgb(229,100,150)"
        isChange = false
    }
});