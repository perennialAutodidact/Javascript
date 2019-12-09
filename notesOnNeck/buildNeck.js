
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

const neck = new InstrumentNeck('mandolin', 'standard', 0, 13);

console.log(neck);