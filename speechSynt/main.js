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
};

// Synth

const synth = {
    lang: `pl`,
    synth: window.speechSynthesis,
    msg: new SpeechSynthesisUtterance(),
    getVoices: function () {
        if (this.lang === ``) {
            return this.synth.getVoices();
        }
        return this.synth.getVoices().filter(voice => voice.lang.includes(this.lang));
    },
    playSynth: function (voices, values) {
        console.log(values);
        this.synth.cancel();
        this.msg.text = values.textValue;
        this.msg.voice = voices[values.voiceIndex];
        this.msg.pitch = values.pitchValue;
        this.msg.rate = values.speedValue;
        this.synth.speak(this.msg);
        console.log(this.msg);
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

    domEl.speed.addEventListener('change', () => {
        synth.playSynth(voices, domEl.getValues());
    });
    domEl.pitch.addEventListener('change', () => {
        synth.playSynth(voices, domEl.getValues());
    });

    domEl.stop.addEventListener(`click`, () => {

        synth.stopSynth();
        // domEl.textArea.value = ``;
    });

})(domEl, synth);