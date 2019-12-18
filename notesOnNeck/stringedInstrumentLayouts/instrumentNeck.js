class InstrumentNeck {
    constructor(instrument, tuning, startFret, endFret){
        this.instrument = instrument;
        this.tuning = tuning;
        this.startFret = startFret;
        this.endFret = endFret;
        this.inlays = [3,5,7,9,12,15];
        this.curKey = teoria.note('C');

        this.markedNotes = this.curKey.scale('lydian').simple();
        
        this.container = document.querySelector('#neck');
        this.stringNames = this.getInstrumentTunings();
        this.totalStrings = this.stringNames.length;
        this.strings = this.drawStrings();
    }

    getInstrumentTunings(instrument='') {
        const instruments = {
            'guitar': {
                'standard': ['E2','A3','D3','G3','B4','E4'],
                'drop-d': ['D2','A3','D3','G3','B4','E4'],
                'dadgad': ['D2','A3','D3','G3','A4','D4'],
                'open-d': ['D2','A3','D3','F#3','A4','D4'],
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
    
    placeNoteMarkers(){
        let markedNote,
            enharmonics,
            matchingFrets,
            matchingFret,
            marker;


        // let frets = document.querySelectorAll(`[name="${this.markedNotes[0]}"]`)
        // console.log(this.markedNotes[0]);
        // console.log(frets);
        
        

        for(let i=0; i<this.markedNotes.length; i++){
            // console.log(`note: ${this.markedNotes[i]}`);
            markedNote = teoria.note(this.markedNotes[i])

            // console.log(`marked note: ${markedNote}`);
            
            // find notes that are sonically identical to markedNote
            // enharmonics = markedNote.enharmonics().toString().replace(/[0-9]/g, '').split(','); 

            // console.log(`enharmonics: ${enharmonics}`);

            matchingFrets = document.querySelectorAll(`[name="${markedNote.name()}"]`)

            for(let i=0; i<matchingFrets.length; i++){
                matchingFret = matchingFrets[i];

                marker = document.createElement('div');
                marker.classList.add('note-marker');
                matchingFret.append(marker);
            }
        }
            // if marked note is on the fretboard,
            // check enharmonics, starting with shortest name.

            // create a function to switch sharp notes to flat enharmonics
            // if key uses flats. Might have weird edge cases for double accidentals
        }
    

    // placeNoteMarkers(string='', fret='', notes=[]) {
    //     let allFrets;
        
    //     // if no notes, place single marker. else mark all the given notes
    //     if(notes.length == 0){
    //         let targetFret = document.querySelector(`#string-${string} #fret-${fret}`);
    //         let marker = document.createElement('div');
            
    //         marker.classList.add('note-marker');
    //         targetFret.append(marker);
    //     } else { // if an array of note names is passed
    //         allFrets = document.querySelectorAll("[id^=fret]");

    //         for(let i=0; i<allFrets.length; i++){
    //             // console.log(allFrets[i]);
    //             // 
    //         }
    //     }
    // };

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