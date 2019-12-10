class InstrumentNeck {
    constructor(instrument, tuning, startFret, endFret){
        this.instrument = instrument;
        this.tuning = tuning;
        this.startFret = startFret;
        this.endFret = endFret;
        this.inlays = [3,5,7,9,12];
        this.container = document.querySelector('#neck');
        this.stringNames = this.getInstrumentTunings();
        this.totalStrings = this.stringNames.length;
        this.strings = this.drawStrings();
    }

    getInstrumentTunings(instrument='') {
        const instruments = {
            'guitar': {
                'standard': ['E','A','D','G','B','E'],
                'drop-d': ['D','A','D','G','B','A'],
                'dadgad': ['D','A','D','G','A','D'],
                'open-d': ['D','A','D','F#/Gb','A','D'],
            },
            'mandolin': {
                'standard': ['G','D','A','E'],
            },
            'ukulele': {
                'standard': ['D','G','B','E'],
            }
        }
        
        if(instrument == ''){
            // Returns string names 
            return instruments[this.instrument][this.tuning]
        } else {
            // returns list of tuning names
            return instruments[instrument]
        }
    };
    
    drawStrings(){
        let strings = [];
        for(let i=0; i<this.stringNames.length + 1; i++){
            let stringNum = i;
            let string = new InstrumentString(this, stringNum, this.stringNames[i]);

            this.container.prepend(string.container);
            strings.push(string);
        }

        return strings
    }
    
    placeNoteMarkers(string='', fret='', notes=[]) {
        let allFrets;
        
        // if no notes, place single marker. else mark all the given notes
        if(notes.length == 0){
            let targetFret = document.querySelector(`#string-${string} #fret-${fret}`);
            let marker = document.createElement('div');
            
            marker.classList.add('note-marker');
            targetFret.append(marker);
        } else { // if an array of note names is passed
            allFrets = document.querySelectorAll("[id^=fret]");

            for(let i=0; i<allFrets.length; i++){
                console.log(allFrets[i]);
                // 
            }
        }
    };

    removeNoteMarkers(string='all',fret='all') {
        
        if(string=='all' && fret=='all') {
            let markers = document.querySelectorAll(`.note-marker`);
            
            for(let i=0; i<markers.length; i++){
                markers[i].remove();
            }
        } else {
            let marker = document.querySelector(`#string-${string} #fret-${fret} > .note-marker`);
            marker.remove();
        }
    }
};