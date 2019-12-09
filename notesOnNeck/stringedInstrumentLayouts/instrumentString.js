function InstrumentString(stringNum, startFret, endFret){
    this.id = stringNum;
    this.startFret = startFret;
    this.endFret = endFret;
    
    this.drawFrets = function(this) {
        console.log(this);
    };
};