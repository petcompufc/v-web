const img = document.querySelector("#img");

let isOn = false;

img.addEventListener("click", () => {
    if (isOn === false) {
        img.src = "on.jpg";
        isOn = true;
    } else {
        img.src = "off.jpg";
        isOn = false;
    }
})