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

    // let piano = new Tone.PolySynth(4, Tone.Synth()).toMaster();

    let chords = [['C4','E4','G4','B4'], ['F4','A4','C5','E5'], ['G4','B4','D4','F5']]

    let count = 0;
    
    Tone.Transport.scheduleRepeat(time => {
        playChord(time, chords[count % chords.length]);//, chords[count % chords.length]);
        // playBeat(time);
        count++;
    },'1m');

    const playChord = (time, chord) => {
        piano.triggerAttackRelease(chord, '2n', time);
    }

    Tone.Transport.start();


}

main();