const domElements = {
    player: document.querySelector(".player__video"),
    playButton: document.querySelector(".player__button"),
    skipButton: document.querySelectorAll("[data-skip]"),
    progress: document.querySelector(".progress__filled"),
    range: document.querySelectorAll(".player__slider[type=range]")
};


function togglePlay() {
    console.log("started");
    let method = domElements.player.paused ? 'play' : 'pause';
    domElements.player[method]();
}

domElements.player.addEventListener("click", togglePlay);