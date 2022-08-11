class Creature {
    constructor(x, y){
        this.pos             = createVector(x, y);
        this.acc             = createVector(0);
        this.vel             = createVector(0);
        this.radius          = 10;
        this.infected        = false;
        this.infectionRadius = this.radius * 5;
    }

    applyForce(force){
        this.acc.add(force)
    }

    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    display(){
        fill('rgba(0, 0, 0, .2)')
        stroke('rgba(0, 0, 0, .5)')
        circle(this.pos.x, this.pos.y, this.infectionRadius)

        fill(1,255,0)
        stroke(0,0,0)
        circle(this.pos.x, this.pos.y, this.radius)


        push()
        translate(this.pos)
        fill(0)
        textSize(12)
        text(this.health, -10, 5)
        pop()
    }
}