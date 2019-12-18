
const neck = new InstrumentNeck('guitar', 'standard', 0, 13);

let tuningInput = document.querySelector('#tuning-input'),
    tunings = neck.getInstrumentTunings(document.querySelector('#instrument-input').value),
    tuning,
    option,
    scaleFormulaInput,
    scaleName,
    keyInput,
    key;

for(tuning in tunings){
    option = document.createElement('option');
    option.value = tuning;
    option.innerText = `${tuning[0].toUpperCase()}${tuning.substring(1)}`;
    
    tuningInput.append(option);
}

neck.placeNoteMarkers();

scaleFormulaInput = document.querySelector('#scale-formula-input');

scaleFormulaInput.addEventListener('change', function(){
    
    keyInput = document.querySelector('#key-input');

    scaleName = this.value;
    key = keyInput.value;

    neck.curKey = teoria.note(key);
    neck.markedNotes = neck.curKey.scale(scaleName).simple();
    // console.log(neck.curKey);
    neck.removeNoteMarkers();

    neck.placeNoteMarkers();
    // add send key and scale to neck object.
    // call placeNoteMarkers()
    
})
