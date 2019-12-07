// Returns string names
const getInstrumentStrings = (instrument, tuning) => {
    const instruments = {
        'guitar': {
            'standard': ['E','A','D','G','B','A'],
            'Drop-D': ['D','A','D','G','B','A'],
            'DAGGAD': ['D','A','D','G','A','D'],
            'Open-D': ['D','A','D','F#','A','D'],
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
        }

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
    
};

const getFretNote = (stringName, fretNumber) => {

}

drawNeck('guitar', 'standard', 0, 12);