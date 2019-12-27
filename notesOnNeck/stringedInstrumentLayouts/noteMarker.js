class NoteMarker {
    constructor(neck, fret){
        this.neck = neck;
        this.fret = fret; // HTML fret div
        this.scaleFormula = neck.scale;
        this.scale = neck.markedNotes;
        // console.log(`fret: ${fret}`);
        this.container = this.draw();
        this.intervalFromTonic = this.getIntervalFromTonic();
        // this.selectColor();
    }

    draw(){
        let newMarker = document.createElement('div');
        newMarker.classList.add('note-marker');

        return newMarker
    }

    selectColor() {
        const colors = {
            'P1':'#eeec28',
            'm2':'#ec9828',
            'M2':'#cc2638',
            'm3':'#ca1574',
            'M3':'#752b78',
            'P4':'#4b448a',
            'A4':'#1c72a5',
            'P5':'#0fa96d',
            'm6':'#67bb41',
            'M6':'#bbdb2e',
            'm7':'#00000',
            'M7':'#00000',
        }
    }

    getIntervalFromTonic(){
        // convert fret note name to an enharmonic
        // in the current key if not already in key.
        // Then, find interval distance from key's tonic
        // to the converted note.

        let note = teoria.note(this.fret.getAttribute('name')),
            enharmonics = note.enharmonics().toString().replace(/[0-9]/g, '').split(','),
            enharmonic,
            tonic = teoria.note(this.scale[0]),
            intervalFromTonic;
        
        // if note is in scaleFormula, 
        // get interval from the tonic to that note
        // otherwise, find enharminc notes and check them

        if(this.scale.includes(note.toString().slice(0,-1))){
            intervalFromTonic = tonic.interval(teoria.note(note.toString().slice(0,-1)));

        } else {
            for(let i in enharmonics){
                enharmonic = enharmonics[i];
                
                if(this.scale.includes(enharmonic)){
                    intervalFromTonic = 
                        tonic.interval(
                            teoria.note(
                                note.toString().slice(0,-1)
                    ));
                }
            }
        }
    }
}