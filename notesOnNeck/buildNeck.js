const getFretNote = (stringName, fretNumber) => {
    // const notes = ['c', 'csharp-dflat', 'd', 'dsharp-eflat', 'e', 'f', 'fsharp-gflat', 'g', 'gsharp-aflat', 'a', 'asharp-bflat', 'b'];
    const notes = ['C', 'Csharp-Dflat', 'D', 'Dsharp-Eflat', 'E', 'F', 'Fsharp-Gflat', 'G', 'Gsharp-Aflat', 'A', 'Asharp-Bflat', 'B'];

    let startNote = notes.indexOf(stringName);
    
    return notes[(startNote + fretNumber) % 12]
}

// const drawNeck = (instrument, tuning, startFret, endFret) => {
    //     const neck = document.querySelector('#neck');
//     const stringNames = getInstrumentStrings(instrument, tuning);

//     let stringName = '';

//     // create strings
//     for(let i=0; i<stringNames.length + 1; i++){
    //         stringName = stringNames[i];
    //         stringId = i;
    //         let string = drawString(stringId, stringName, stringNames.length, startFret, endFret);
        
    //         //create frets
//         for(let j=startFret; j<endFret; j++){
    //             let fretNumber = j;
//             let fret = drawFret(stringName, stringNames.length, fretNumber, string);

//             string.append(fret);
//         }

//         console.log("");

//         neck.prepend(string);
//     }
// };

// const drawString = (stringName, totalStrings, startFret, endFret) => {
    //     let strings = document.querySelectorAll('.string');
//     let string = document.createElement('div');
//     string.classList.add('string');

//     string.setAttribute('name', `${stringName}-string`);
//     string.id = strings[
    
//     if(strings.length == 0 || strings.length == totalStrings){
    //         string.classList.add('invisible-string');
    
//         if(strings.length == totalStrings){
//             string.setAttribute('name', 'invisible-string');
//         }
//     }

//     return string
// };

// const drawFret = (stringName, totalStrings, fretNumber, string) => {
    //     let strings = document.querySelectorAll('.string');
    //     let fret = document.createElement('div');
    //     let fretNote = getFretNote(stringName, fretNumber);
    
//     fret.setAttribute('name', fretNote);

//     if(fretNumber == 0){
    //         fret.classList.add('open-fret');

    //         if(string.classList.contains('invisible-string')){
//             fret.classList.add('invisible-open-fret');
//             // fret.setAttribute('name','invisible-open-fret')
//         }
//     } else {
    //         fret.classList.add('fret');


    
//         if(string == strings[strings.length]){
//             console.log('true');

//             fret.classList.add('invisible-fret');
//             fret.setAttribute('name', 'invisible-fret');
//         }
//     }
//     return fret
// };



const placeMarker = (string,fret) => {
    let targetFrets = document.querySelectorAll(`#${string} #${fret}`);
    
    for(let i=0; i<targetFrets.length; i++){
        let marker = document.createElement('div');
        marker.classList.add('note-marker');
        
        targetFrets[i].append(marker);
    }
};

const removeMarker = (string='all',fret='all') => {
    let markers = document.querySelectorAll(`#${string} #${fret} > .note-marker`);

    for(let i=0; i<markers.length; i++){
        markers[i].remove();
    }
};

// drawNeck('guitar', 'standard', 0, 13);
const neck = new InstrumentNeck('guitar', 'standard', 0, 13);

console.log(neck);

// placeMarker('E-string', 'Fsharp-Gflat');
// removeMarker('E-string', 'Fsharp-Gflat');

// placeMarker('E-string', 'E')