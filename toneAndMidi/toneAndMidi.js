
let synth = new Tone.Synth();
let poly = new Tone.PolySynth(4, Tone.Synth).toMaster();

let kick = new Tone.MembraneSynth().toMaster();

let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');

startButton.addEventListener('click', () => {
    // poly.triggerAttackRelease(['A3','C3','E3'], '8n')
    part1.loop = true;
    Tone.Transport.bpm.value = 190;
    Tone.Transport.start();
});

stopButton.addEventListener('click', () => {
    Tone.Transport.stop();
});

const drumLoop = (time,event) => {
}

const part1 = new Tone.Part(function(time, event){
    kick.triggerAttackRelease(event, '8n', time);
    console.log("hello world");
    
},[[0, "C2"], ["0:1", "C2"], ["0:2", "C2"],["0:3","C2"]]).start(0);

