class InstrumentNeck {
    constructor(instrument, tuning, startFret, endFret){
        this.instrument = instrument;
        this.tuning = tuning;
        this.startFret = startFret;
        this.endFret = endFret;
        this.container = document.querySelector('#neck');
        this.stringNames = this.getInstrumentStringNames();
        this.totalStrings = this.stringNames.length;
        this.strings = this.drawStrings();
    }

    getInstrumentStringNames() {
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
        
        // Returns string names 
        return instruments[this.instrument][this.tuning]
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
}