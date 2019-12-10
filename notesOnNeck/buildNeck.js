
const neck = new InstrumentNeck('guitar', 'standard', 0, 13);

let tuningInput = document.querySelector('#tuning-input')
let tunings = neck.getInstrumentTunings(document.querySelector('#instrument-input').value);

for(let tuning in tunings){
    let option = document.createElement('option');
    option.value = tuning;
    option.innerText = `${tuning[0].toUpperCase()}${tuning.substring(1)}`;
    
    tuningInput.append(option);
}
console.log(tunings);


console.log(neck);
neck.placeNoteMarkers(1,0);
neck.placeNoteMarkers(3,6);
neck.placeNoteMarkers(5,1);

console.log(neck.stringNames);


neck.placeNoteMarkers('', '', neck.stringNames);

// neck.removeMarkers(3,6);
// neck.removeMarkers();