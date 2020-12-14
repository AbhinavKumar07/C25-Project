class TrashCanSidesAndGround {
    constructor(x,y,width,height) {
        
        var modifications = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,this.width,this.height,modifications);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        strokeWeight(3);
        stroke("red");
        translate(posX , posY);
        rectMode(CENTER);
        pop();
    }
}