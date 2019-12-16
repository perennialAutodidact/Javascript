
const neck = new InstrumentNeck('guitar', 'standard', 0, 13);

let tuningInput = document.querySelector('#tuning-input')
let tunings = neck.getInstrumentTunings(document.querySelector('#instrument-input').value);

for(let tuning in tunings){
    let option = document.createElement('option');
    option.value = tuning;
    option.innerText = `${tuning[0].toUpperCase()}${tuning.substring(1)}`;
    
    tuningInput.append(option);
}
// console.log(tunings);


// console.log(neck);
neck.placeNoteMarkers(1,0);
neck.placeNoteMarkers(3,6);
neck.placeNoteMarkers(5,1);

// console.log(neck.stringNames);


neck.placeNoteMarkers('', '', neck.stringNames);

// neck.removeMarkers(3,6);
// neck.removeMarkers();


let note1 = teoria.note('Cb3');
let note2 = note1.interval('m7');

let c1 = note1.chord('m7b9')
console.log(c1);

let ionian = note1.scale('ionian').simple()
let locrian = note1.scale('locrian').simple()

console.log(ionian);
console.log(locrian);


// console.log(intvl.number());

// console.log(note1.accidental());

// console.log(note1.scientific());
// console.log(note2.scientific());


// let note2 = teoria.note('D5')

// console.log(`${note1}, ${note2}`);
// let interval = note1.interval(note2);

// console.log(interval.number());
// console.log(note1.scale('mixolydian'))

// console.log(note1.chord('m7b5').simple());

console.log(reduceAccidentals('B#'));
