// Returns string names
const getInstrumentStrings = (instrument, tuning) => {
    const instruments = {
        'guitar': {
            'standard': ['E','A','D','G','B','E'],
            'Drop-D': ['D','A','D','G','B','A'],
            'DAGGAD': ['D','A','D','G','A','D'],
            'Open-D': ['D','A','D','F#/Gb','A','D'],
        },
        'mandolin': {
            'standard': ['G','D','A','E'],
        },
        'ukulele': {
            'standard': ['D','G','B','E'],
        }
    }

    return instruments[instrument][tuning]
};


const drawNeck = (instrument, tuning, startFret, endFret) => {
    const neck = document.querySelector('#neck2');
    const stringNames = getInstrumentStrings(instrument, tuning);

    // create strings
    for(let i=0; i<stringNames.length; i++){
        let stringName = stringNames[i];
        let string = drawString(stringName, startFret, endFret);
        
        //create frets
        for(let j=startFret; j<endFret; j++){
            let fretNumber = j;
            let fret = drawFret(stringName, fretNumber);

            string.append(fret);
        }

        console.log("");
        
        neck.prepend(string);
    }
};

const drawString = (openNote, startFret, endFret) => {
    let string = document.createElement('div');

    string.id = `${openNote}-string`;
    string.classList.add('string');

    return string
};

const drawFret = (stringName, fretNumber) => {
    let fret = document.createElement('div');
    let fretNote = getFretNote(stringName, fretNumber);

    fret.id = fretNote;
    
    if(fretNumber === 0){
        fret.classList.add('open-fret');
    } else {
        fret.classList.add('fret');
    }
    
    return fret
};

const getFretNote = (stringName, fretNumber) => {
    const notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

    let startNote = notes.indexOf(stringName);

    return notes[(startNote + fretNumber) % 12]
}

drawNeck('guitar', 'standard', 0, 12);