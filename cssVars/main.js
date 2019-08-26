const inputs = document.querySelectorAll(".container input");
const content = document.querySelector(".content");

inputs.forEach(input => {
    input.addEventListener("mousemove", changeValue);
    input.addEventListener("change", changeValue);
});

function changeValue() {
    let suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}