class NoteMarker {
    constructor(string, fret){

        
        
        this.string = string;
        this.fret = fret;
        console.log(`fret: ${this.fret}`);
        this.interval = '';
        this.container = this.draw();
        // this.intervalFromTonic = this.getIntervalFromTonic();
    }

    draw(){
        let newMarker = document.createElement('div');
        newMarker.classList.add('note-marker');

        return newMarker
    }

    getInterFromTonic(){
    //     // convert fret note name to an enharmonic
    //     // in the current key if not already in key.
    //     // Then, find interval distance from key's tonic
    //     // to the converted note.

    //     console.log(this.fretId);
    
    //     const intervalsWithAug4 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7'];
    //     const intervalsWithDim5 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'D5', 'P5', 'm6', 'M6', 'm7', 'M7'];
        
    }
}