function InstrumentNeck(instrument, tuning, ){
    this.getInstrumentStringNames = function(instrument, tuning) {
        const instruments = {
            'guitar': {
                'standard': ['E','A','D','G','B','E'],
                'Drop-D': ['D','A','D','G','B','A'],
                'DAGGAD': ['D','A','D','G','A','D'],
                'Open-D': ['D','A','D','F#/Gb','A','D'],
            },
            'mandolin': {
                'standard': ['G','D','A','E'],
            },
            'ukulele': {
                'standard': ['D','G','B','E'],
            }
        }
        
        // Returns string names
        
        return instruments[instrument][tuning]
    };
    
    this.instrument = instrument;
    this.tuning = tuning;
    this.container = document.querySelector('#neck');
    this.stringNames = this.getInstrumentStringNames(this.instrument, this.tuning);

    this.drawStrings = function(){
        for(let i=0; i<this.stringNames.length + 1; i++){
            
        }
        let string = new InstrumentString(stringNum, startFret, endFret);
        console.log(string);
        
    }
}