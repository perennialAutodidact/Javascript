
let synth = new Tone.Synth();
let poly = new Tone.PolySynth(4, Tone.Synth).toMaster();

let kick = new Tone.MembraneSynth().toMaster();
let hiHat = new Tone.MetalSynth().toMaster();
let snare = new Tone.Synth(
    {
        oscillator : 
            {
                type : 'sawtooth'
            },
        envelope : 
            {
                attack : 0.005 ,
                decay : 0.005 ,
                sustain : 0.0003 ,
                release : 1
            }
    }
).toMaster();
let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');


// const kickLoop = [[0, "C2"], ["0:1", "C2"], ["0:2", "C2"],["0:3","C2"]];
// const kickLoop = [[0, "C2"], ["0:3:4", "C2"],["0:2", "C2"]];
const kickLoop = [
    {
        'time': '0',
        'note': "C2",
        'velocity': .6,
    },
    {
        'time': '0:1:2',
        'note': 'C2',
        'velocity': .6,
    },
]

const kickPart = new Tone.Part(function(time, event){
    kick.triggerAttackRelease(event.note, '8n', time, event.velocity);
    console.log(event);
}, kickLoop).start(0);

const snareLoop = [
    {
        'time': '0:2',
        'note': 'C4',
        'velocity': 3,
    },
]

const snarePart = new Tone.Part(function(time, event){
    snare.triggerAttackRelease(event.note, '8n', time, event.velocity)
}, snareLoop).start(0);

const hiHatLoop = [
    {
        'time': '0:0',
        'note': 'C4',
        'velocity': 1
    },
]

const hiHatPart = new Tone.Part(function(time, event){
    hiHat.triggerAttackRelease(event.note, '8n', time, event.velocity)
}, hiHatLoop).start(0);

const chordLoop = [
    {
        'time': '0',
        'chord': ['C4', 'E4', 'G4'],
        'velocity': .2,
    },
    {
        'time': '2',
        'chord': ['E4', 'B4', 'G4'],
        'velocity': .2,
    },
    {
        'time': '4',
        'chord': ['G4', 'B4', 'D4'],
        'velocity': .2,
    },
    {
        'time': '6',
        'chord': ['E4', 'G4', 'B4'],
        'velocity': .2,
    },
]

let count = 0;
const chordPart = new Tone.Part(function(time, event){
    poly.triggerAttackRelease(event.chord, '2n', time, event.velocity);
    
    console.log(event);
    console.log(`event: ${event.chord}`);
}, chordLoop).start(0);

// const part1 = new Tone.Part(function(time, event){
//     console.log("hello world");
//     // poly.triggerAttackRelease(['A3','C3','E3'], '8n', time)
//     // poly.triggerAttackRelease(event.chord, event.duration, time);
    
// }, chordLoop).start(0);

const startLoops = () => {
    kickPart.loop = true;
    kickPart.loopStart = '0:0';
    kickPart.loopEnd = `${kickLoop.length}m`

    chordPart.loop = true;
    chordPart.loopStart = '0:0';
    chordPart.loopEnd = `${chordLoop.length}m` // 2 chords => '2m', 6 chords => '6m'

    snarePart.loop = true;
    snarePart.loopStart = '0:0';
    snare.loopEnd = `${snareLoop.length}m` // 2 chords => '2m', 6 chords => '6m'

    hiHatPart.loop = true;
    hiHatPart.loopStart = '0:0';
    hiHatPart.loopEnd = `${hiHatLoop.length}m` // 2 chords => '2m', 6 chords => '6m'


    // snarePart.loopEnd
    // Tone.Transport.swing = 1;

    Tone.Transport.bpm.value = 130;
}

startButton.addEventListener('click', () => {
    startLoops();
    Tone.Transport.start();

});

stopButton.addEventListener('click', () => {
    Tone.Transport.stop();
});