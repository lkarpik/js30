const domElements = {
    player: document.querySelector(".player__video"),
    playButton: document.querySelector(".player__button"),
    skipButton: document.querySelectorAll("[data-skip]"),
    progressBar: document.querySelector(".progress"),
    progress: document.querySelector(".progress__filled"),
    range: document.querySelectorAll(".player__slider[type=range]")
};

function togglePlay() {
    let method = domElements.player.paused ? 'play' : 'pause';
    domElements.player[method]();
}

function toggleButton() {
    domElements.playButton.textContent = domElements.player.paused ? '►' : '❚ ❚';
}

function handleProgress() {
    let flexBasis = domElements.player.currentTime / domElements.player.duration * 100 + "%";
    domElements.progress.style.flexBasis = flexBasis;
}

function goToMoment(e) {
    domElements.player.currentTime = domElements.player.duration * (e.offsetX / domElements.progressBar.offsetWidth);
}

function setRange() {
    domElements.player[this.name] = this.value;
}

function skip() {
    console.log(this.dataset.skip);
    domElements.player.currentTime += parseInt(this.dataset.skip);
}

domElements.playButton.addEventListener("click", togglePlay);
domElements.player.addEventListener("click", togglePlay);
domElements.player.addEventListener("play", toggleButton);
domElements.player.addEventListener("pause", toggleButton);
domElements.player.addEventListener("timeupdate", handleProgress);

domElements.progressBar.addEventListener("click", goToMoment);

let mousedown = false;

domElements.progressBar.addEventListener("mousemove", (e) => mousedown && goToMoment(e));
domElements.progressBar.addEventListener("mousedown", () => mousedown = true);
domElements.progressBar.addEventListener("mouseup", () => mousedown = false);


domElements.range.forEach(range => {
    range.addEventListener("change", setRange);
    range.addEventListener("mousemove", setRange);
});
domElements.skipButton.forEach(skipButton => {
    skipButton.addEventListener("click", skip);
});