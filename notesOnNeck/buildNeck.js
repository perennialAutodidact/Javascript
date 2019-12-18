
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

// grabs current input for scale name and key,
// sends that info to the neck object
// then removes old markers and places new ones
const changeMarkers = () => {
    keyInput = document.querySelector('#key-input');
    scaleInput = document.querySelector('#scale-formula-input');

    scaleName = scaleInput.value;
    key = keyInput.value;

    neck.curKey = teoria.note(key);
    neck.markedNotes = neck.curKey.scale(scaleName).simple();

    neck.removeNoteMarkers();

    neck.placeNoteMarkers();
}

neck.placeNoteMarkers();

scaleFormulaInput = document.querySelector('#scale-formula-input');

scaleFormulaInput.addEventListener('change', changeMarkers);

keyInput = document.querySelector('#key-input');

keyInput.addEventListener('change', changeMarkers);