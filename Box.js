class Box {
    constructor(x, y, width, height) {
     
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
     // console.log(this.body.speed);
      if (this.body.speed <5){
        var pos =this.body.position;
      
      rectMode(CENTER);

      fill("lightblue");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255, this.Visibility);
        pop();
      }

       }

       score(){
        if (this.Visibility < 0 && this.Visibility >- 105){
          score++;
        }
      }
  };  