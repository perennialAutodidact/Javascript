class NoteMarker {
    constructor(neck, fret){
        this.neck = neck;
        this.fret = fret; // HTML fret div
        this.scaleFormula = neck.scale;
        this.scale = neck.markedNotes;
        // console.log(`fret: ${fret}`);
        this.container = this.draw();
        this.intervalFromTonic = this.getIntervalFromTonic();
    }

    draw(){
        let newMarker = document.createElement('div');
        newMarker.classList.add('note-marker');


        return newMarker
    }

    colorMarker() {
        const colors = {
            'P1': '#00000',
            'm2': '#00000',
            'M2':'#00000',
            'm3':'#00000',
             'M3':'#00000',
             'P4':'#00000',
             'A4':'#00000',
             'P5':'#00000',
             'm6':'#00000',
             'M6':'#00000',
             'm7':'#00000',
             'M7':'#00000',
        }
    }

    getIntervalFromTonic(){
    //     // convert fret note name to an enharmonic
    //     // in the current key if not already in key.
    //     // Then, find interval distance from key's tonic
    //     // to the converted note.
        
        // console.log(`note: ${this.fret.getAttribute('name')}`);
        // console.log(this.scaleFormula);
        
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
            // console.log(`tonic: ${tonic}`);
            // // console.log(`scale: ${this.scale}`);
            // console.log(`interval: ${tonic.interval(teoria.note(note.toString().slice(0,-1)))}`);
            
            // // console.log(`intervalFromTonic: ${intervalFromTonic}`);
            
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
            // console.log(`enharmonics: ${enharmonics}`);
        }
        
    //     const intervalsWithAug4 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7'];
    //     const intervalsWithDim5 = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'D5', 'P5', 'm6', 'M6', 'm7', 'M7'];
        
    }
}