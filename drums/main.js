let keys = document.querySelectorAll(".key");
console.log(keys);

window.addEventListener("keypress", (e) => {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (key) {
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
        window.addEventListener("keyup", (e) => {
            let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (key) {
                key.classList.remove("playing");
            }
        });
    }
});