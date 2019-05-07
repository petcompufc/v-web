const s = document.querySelector("#box");
let isChange = false

s.addEventListener("click", (event) => {
	if (isChange) {
		event.target.style.backgroundColor = "rgb(229,100,150)";
		isChange = false
	} else {
		event.target.style.backgroundColor = "rgb(178,9,7)";
		isChange = true;
	}
});