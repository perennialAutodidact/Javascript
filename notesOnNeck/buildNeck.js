
const neck = new InstrumentNeck('guitar', 'standard', 0, 13);

let tuningInput = document.querySelector('#tuning-input')
let tunings = neck.getInstrumentTunings(document.querySelector('#instrument-input').value);

for(let tuning in tunings){
    let option = document.createElement('option');
    option.value = tuning;
    option.innerText = `${tuning[0].toUpperCase()}${tuning.substring(1)}`;
    
    tuningInput.append(option);
}

neck.placeNoteMarkers()
// console.log(tunings);


// console.log(neck);
// neck.placeNoteMarkers(1,0);
// neck.placeNoteMarkers(3,6);
// neck.placeNoteMarkers(5,1);
// neck.placeNoteMarkers(0,0);

// console.log(neck.stringNames);


// neck.placeNoteMarkers('', '', neck.stringNames);

// neck.removeMarkers(3,6);
// neck.removeMarkers();

// let note1 = teoria.note('C#4');

// console.log(note1.octave());


// let ionian = note1.scale('ionian').simple()
// let lydian = note1.scale('lydian').simple()

// console.log(`${note1} ionian: ${ionian}`);
// console.log(`${note1} lydian: ${lydian}`);
