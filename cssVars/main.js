const inputs = document.querySelectorAll(".container input");

inputs.forEach(input => {
    input.addEventListener("mousemove", changeValue);
    input.addEventListener("change", changeValue);
});

function changeValue() {
    let suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}