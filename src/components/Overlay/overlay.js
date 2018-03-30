export default function overlay (p) { 
   var splotch; 
   var filmLine; 
   p.Lines = function() { 
       this.thickness = p.random(0,4); 
       this.x = p.random(p.width); 
       this.display = function() { 
           p.stroke(50);
           p.fill(50); 
           p.rect(this.x, 0, this.thickness, p.height); 
       }
       this.move = function(){
           this.x = p.random(p.width); 
        }
   }
   p.Splotches = function() { 
    
    this.x = p.random(p.width); 
    this.y = p.random(p.height); 
    this.diameter = p.random(1,10); 
    this.fill = p.random(0,255); 
    this.move = function() { 
        this.x = p.random(p.width); 
        this.y = p.random(p.height); 
        this.diameter = p.random(1,10); 
        this.fill = p.random(0,200);  
    }
    this.display = function() { 
        p.fill(this.fill); 
        p.ellipse(this.x, this.y, this.diameter, this.diameter)
    }
}

    p.setup = function() { 
        p.createCanvas(window.innerWidth, window.innerHeight); 
        splotch = new p.Splotches(); 
        filmLine = new p.Lines(); 
    }



    p.draw = function(){ 
        p.background(24,24,24); 
        splotch.display(); 
        filmLine.display(); 
        filmLine.move(); 
        splotch.move(); 

    }



}

