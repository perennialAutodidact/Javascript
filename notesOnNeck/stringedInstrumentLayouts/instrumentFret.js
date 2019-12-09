function InstrumentFret(stringId, fretNum, fretName){
    this.stringId = stringId;
    this.id = `${stringId}-${fretNum}`;
    this.name = fretName;

}