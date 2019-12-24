
let synth = new Tone.Synth();
let poly = new Tone.PolySynth(4, Tone.Synth).toMaster();

let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');

startButton.addEventListener('click', () => {
    poly.triggerAttackRelease(['A3','C3','E3'], '8n')
    // Tone.Transport.start();
});

stopButton.addEventListener('click', () => {
    Tone.Transport.stop();
});