class NoteMarker {
    constructor(fret){
        this.fret = fret; // HTML fret div
        console.log(`fret: ${fret}`);
        this.interval = '';
        this.container = this.draw();
        this.intervalFromTonic = this.getIntervalFromTonic();
    }

    draw(){
        let newMarker = document.createElement('div');
        newMarker.classList.add('note-marker');

        return newMarker
    }

    getIntervalFromTonic(){
    //     // convert fret note name to an enharmonic
    //     // in the current key if not already in key.
    //     // Then, find interval distance from key's tonic
    //     // to the converted note.

        // logs note name of fret.
        console.log(this.fret.getAttribute('name'));
    
    //     const intervalsWithAug4 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7'];
    //     const intervalsWithDim5 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'D5', 'P5', 'm6', 'M6', 'm7', 'M7'];
        
    }
}