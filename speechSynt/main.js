// Dom elements 

const domEl = {
    select: document.querySelector(`select`),
    pitch: document.querySelector(`#pitch`),
    speed: document.querySelector(`#speed`),
    textArea: document.querySelector(`#textArea`),
    play: document.querySelector('.play'),
    stop: document.querySelector('.stop'),

    populateOptions: function (voices) {
        this.select.innerHTML = ``;
        voices.forEach((voice, index) => {
            const option = document.createElement(`option`);
            option.value = index;
            option.textContent = voice.name;
            this.select.append(option);
        });
    },

    getValues: function () {
        return {
            voiceIndex: this.select.selectedOptions[0].value,
            pitchValue: this.pitch.value,
            speedValue: this.speed.value,
            textValue: this.textArea.value
        }
    }
}

// Synth

const synth = {
    lang: ``,
    synth: window.speechSynthesis,
    getVoices: function () {
        if (this.lang === ``) {
            return this.synth.getVoices();
        }
        return this.synth.getVoices().filter(voice => voice.lang === this.lang)
    },
    playSynth: function (voices, values) {
        const utterThis = new SpeechSynthesisUtterance(values.textValue);
        utterThis.voice = voices[values.voiceIndex];

        utterThis.pitch = values.pitchValue;
        utterThis.rate = values.speedValue;
        this.synth.speak(utterThis);
        console.log(utterThis);
    },
    changeValues: function (values) {

    },
    stopSynth: function () {
        this.synth.cancel();
    }
}

// Controller

const controller = ((domEl, synth) => {
    let voices = [];
    // Get voices and populate ui
    synth.synth.addEventListener('voiceschanged', () => {
        voices = synth.getVoices();

        if (voices.length < 1) {
            console.log("No language to use");
            return;
        };
        domEl.populateOptions(voices);
    });

    domEl.play.addEventListener(`click`, () => {
        synth.playSynth(voices, domEl.getValues());
    });

    domEl.stop.addEventListener(`click`, () => {
        console.log(synth.synth);
        synth.stopSynth();
        domEl.textArea.value = ``;
    });

    domEl.speed.addEventListener('mousemove', (e) => {

        // how to change values on the fly?
    })

})(domEl, synth);