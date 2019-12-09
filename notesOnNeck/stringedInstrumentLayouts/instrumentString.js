class InstrumentString{
    constructor(stringNum, startFret, endFret){
        this.id = stringNum;
        this.startFret = startFret;
        this.endFret = endFret;
        this.container = this.draw();

        console.log(this.container);
        
    }
    
    draw(){
        let container = document.createElement('div');
        container.classList.add('string');

        

        return container
    }

    drawFrets() {

    };
};