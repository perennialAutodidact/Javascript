
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