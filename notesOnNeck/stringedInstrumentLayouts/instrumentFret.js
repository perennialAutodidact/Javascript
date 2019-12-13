class InstrumentFret {
    constructor(string, fretNum) {
        this.string = string;
        this.id = fretNum;
        this.container = this.draw();        
    }

    draw() {
        let newFret = document.createElement('div');
        
        let fretName = this.getFretNote();
        newFret.setAttribute('name', fretName);

        newFret.id = `fret-${this.id}`;

        if(this.id == 0){
            newFret.classList.add('open-fret')
            if(this.string.container.classList.contains('invisible-string')){
                newFret.classList.add('invisible-open-fret');
            } else {
                newFret.classList.add('inlay-fret');
            }
        } else {
            newFret.classList.add('fret');
            if(this.string.container.classList.contains('invisible-string')){
                newFret.classList.add('invisible-fret');
            } else {
                newFret.classList.add('regular-fret');

                // change BG color of fret if it has an inlay
                let newFretNum = parseInt(newFret.id.replace('fret-',''));
                if(this.string.neck.inlays.includes(newFretNum)){
                    
                    newFret.classList.add('inlay-fret');
                }
            }
        }

        return newFret
    }

    getFretNote(){
        const notes = ['C', 'Csharp-Dflat', 'D', 'Dsharp-Eflat', 'E', 'F', 'Fsharp-Gflat', 'G', 'Gsharp-Aflat', 'A', 'Asharp-Bflat', 'B'];
    
        // -1 if no index found
        let startNote = notes.indexOf(this.string.name); 

        // assign note names to all frets except the top 'invisible' frets
        if(startNote > -1){
            return notes[(startNote + this.id) % 12]
        } else {
            return 'no-note'
        }
    }
}

