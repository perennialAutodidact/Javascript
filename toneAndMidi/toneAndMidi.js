const createNote = (pitch, duration, velocity=1) => {
    return {'pitch': pitch, 'duration':duration, 'velocity': velocity}
}

function main(){
    let piano = new Tone.PolySynth(4, Tone.Synth, {
        "volume" : -8,
        "oscillator" : {
            "attack": .1,
            "partials" : [1, 2, 5],
            "release": 2,
        },
        "portamento" : 0.005
    }).toMaster()

    let chords = [['C4','E4','G4','B4'], ['F4','A4','C5','E5'], ['G4','B4','D4','F5']]

    let count = 0;
    
    // Tone.Transport.scheduleRepeat(time => {
    //     playChord(time, chords[count % chords.length]); // count up until the end of chords array, then repeat
    //     count++;
    // },'1m');

    let part = new Tone.Part((time, value) => {
        playChord(time, value);
    },
    [{"time" : 0, "note" : ['C4','E4','G4','B4'], "velocity": 0.9, 'duration':'1m'}, 
     {"time" : "1:0", "note" : ['F4','A4','C5','E5'], "velocity": 0.5, 'duraiton':'1m'}])
    .start(0);
    
    const playChord = (time, value) => {
        piano.triggerAttackRelease(value.note, value.duration, time);
    }

    Tone.Transport.start();

    setTimeout(() => {
        Tone.Transport.stop();
    }, 6000);
}

main();