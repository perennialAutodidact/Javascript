class InstrumentString{
    constructor(neck, stringNum, stringName='invisible'){
        this.neck = neck;
        this.id = stringNum;
        this.name = stringName;
        this.container = this.draw();
        this.frets = this.drawFrets();
    }
    
    draw(){
        let totalStrings = this.neck.totalStrings;
        let newString = document.createElement('div');

        newString.id = `string-${this.id}`;
        
        newString.setAttribute('name', this.name);

        newString.classList.add('string');
        if(this.id == 0 || this.id == this.neck.totalStrings) {
            newString.classList.add('invisible-string');
        }

        return newString
    }

    drawFrets() {
        let frets = [];
        for(let i=this.neck.startFret; i<this.neck.endFret; i++){
            let fretNum = i;
            let fret = new InstrumentFret(this, fretNum);

            this.container.append(fret.container);

            fret.draw();
            frets.push(fret.container);
        }
        return frets
    };
};