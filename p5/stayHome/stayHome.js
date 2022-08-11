let canvas,
    creature,
    creatures = [];

function setup(){
    canvas = createCanvas(windowWidth * .98, windowHeight * .98);
    canvas.parent('container')

    for(let i = 0; i < 10; i++){
        creature = new Creature(random(windowWidth), random(windowHeight));
        creatures.push(creature)
    }

    ellipseMode(RADIUS)
}

function draw(){
    background(200, 200, 225)

    for(let i = 0; i < 10; i++){
        creature = creatures[i]
        creature.display();
    }
}