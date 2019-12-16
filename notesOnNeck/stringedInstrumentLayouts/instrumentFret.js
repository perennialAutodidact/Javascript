class InstrumentFret {
    constructor(string, fretNum) {
        this.string = string;
        this.id = fretNum;
        this.container = this.draw();
    }

    draw() {
        let newFret = document.createElement('div');
        
        let fretName = this.getFretName();
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

    getFretName(){
        const notes = ['C', 'Csharp-Dflat', 'D', 'Dsharp-Eflat', 'E', 'F', 'Fsharp-Gflat', 'G', 'Gsharp-Aflat', 'A', 'Asharp-Bflat', 'B'];
        const intervalsWithAug4 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7'];
        const intervalsWithDim5 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'D5', 'P5', 'm6', 'M6', 'm7', 'M7'];

        let curString, curInterval, fretName;

        if(this.string.name != 'invisible'){
            curString = teoria.note(this.string.name);
            // console.log(`curString: ${curString}`);

            if(this.string.neck.markedNotes.includes('d5')){
                curInterval =  intervalsWithDim5[this.id%12];
            } else {
                curInterval =  intervalsWithAug4[this.id%12];
            }

            fretName = curString.interval(curInterval);


            console.log(`fretName: ${fretName}`);
            
            if(this.id == 12){
            
            }
            return fretName
            // let curKeyName = `${this.string.neck.curKey.scientific()[0]}${curString.octave()}`

            // let key = teoria.note(curKeyName);

            // console.log(`keyName: ${curKeyName}`);
            // console.log(`key: ${key}`);
            
            let fretNum = this.id;

            // let offsetInterval = teoria.interval(key, curString).number();
    
            // console.log(`noteOffset: ${offsetInterval}`); 
            // console.log(`offsetIndx: ${offsetIndx}`);
            // let fretName = intervalsWithAug4[(offsetInterval + this.id + 1) % 12]
            // console.log(`fretName: ${fretName}`);
            
            // return notes[(this.id + offsetInterval + 1) % 12]
        } else {
            return 'no-note'
        }

        // -1 if no index found
        // let startNote = notes.indexOf(this.string.name); 

        // assign note names to all frets except the top 'invisible' frets
        // if(startNote > -1){
        //     return notes[(startNote + this.id) % 12]
        // } else {
        //     return 'no-note'
        // }
    }
}

