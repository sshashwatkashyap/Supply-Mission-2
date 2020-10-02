class baseLine {

    constructor(x, y, width, height){
      
      var line_options ={
    
       isStatic: false
    
      } 
    
      this.body = Bodies.rectangle(x, y, width, height, line_options)
      World.add(world, this.body) 
    
      this.width = width;
      this.height = height;
    
    }
    
    display (){
    
      var pos = this.body.position
      
      push()
    
      rectMode(CENTER)
    
      translate(pos.x, pos.y)
    
      rotate(this.body.angle)
    
      rect(0, 0, this.width, this.height);
    
      pop()
    
    }
    }