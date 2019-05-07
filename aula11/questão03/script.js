const inp1 = document.querySelector("#inp1")

inp1.addEventListener("keypress", (event) => {
	const p = document.querySelector("#result");
	p.innerHTML = inp1.value
});
