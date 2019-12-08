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
    const neck = document.querySelector('#neck');
    const stringNames = getInstrumentStrings(instrument, tuning);
    let stringName = '';

    // create strings
    for(let i=0; i<stringNames.length + 1; i++){
        stringName = stringNames[i];
        
        let string = drawString(stringName, stringNames.length, startFret, endFret);
        
        //create frets
        for(let j=startFret; j<endFret; j++){
            let fretNumber = j;
            let fret = drawFret(stringName, fretNumber, string);

            string.append(fret);
        }
        
        console.log("");
        
        neck.prepend(string);
    }
};

const drawString = (stringName, totalStrings, startFret, endFret) => {
    let strings = document.querySelectorAll('.string');
    let string = document.createElement('div');
    string.classList.add('string');

    string.id = `${stringName}-string`;

    // console.log(strings);
    
    if(strings.length == 0 || strings.length == totalStrings){
        string.classList.add('invisible-string');
    }

    return string
};

const drawFret = (stringName, fretNumber, string) => {
    let strings = document.querySelectorAll('.string');
    let fret = document.createElement('div');
    let fretNote = getFretNote(stringName, fretNumber);

    fret.id = fretNote;
    
    if(fretNumber == 0){
        fret.classList.add('open-fret');

        if(string.classList.contains('invisible-string')){
            fret.classList.add('invisible-open-fret');
        }
    } else {
        fret.classList.add('fret');
        if(string.classList.contains('invisible-string')){
            fret.classList.add('invisible-fret');
        }
    }


    return fret
};

const getFretNote = (stringName, fretNumber) => {
    const notes = ['C', 'Csharp-Dflat', 'D', 'Dsharp-Eflat', 'E', 'F', 'Fsharp-Gflat', 'G', 'Gsharp-Aflat', 'A', 'Asharp-Bflat', 'B'];

    let startNote = notes.indexOf(stringName);

    return notes[(startNote + fretNumber) % 12]
}

const placeMarker = (string,fret) => {

    let targetFrets = document.querySelectorAll(`#${string} #${fret}`);
    
    for(let i=0; i<targetFrets.length; i++){
        let marker = document.createElement('div');
        marker.classList.add('note-marker');
        console.log(targetFrets[i]);
        
        targetFrets[i].append(marker);
    }
};

const removeMarker = (string,fret) => {
    let markers = document.querySelectorAll(`#${string} #${fret} > .note-marker`);

    for(let i=0; i<markers.length; i++){

        markers[i].remove();
    }
};



drawNeck('guitar', 'standard', 0, 13);
placeMarker('E-string', 'Fsharp-Gflat');
removeMarker('E-string', 'Fsharp-Gflat');

placeMarker('E-string', 'E')