export default function noise(p) { 
    var filmSplotch; 
    var filmLines = []; 
    var maxLines = 3; 
    var overlay = document.getElementsByClassName("edges"); 
    var overlayNoise = 0.0; 
    p.Splotch = function(){ 
        this.x = p.random(p.width); 
        this.y = p.random(p.height); 
        this.diameter = p.random(1,10); 
        this.fill = p.random(0,60); 
        this.transparency = p.random(0,255); 
        this.move = function() { 
            this.x = p.random(p.width); 
            this.y = p.random(p.height); 
            this.fill = p.random(0,60); 
            this.diameter = p.random(1,10); 
            this.transparency = p.random(0,255); 
        }
        this.display = function() { 
            p.noStroke(); 
            p.fill(this.fill, this.fill, this.fill, this.transparency); 
            p.ellipse(this.x, this.y, this.diameter, this.diameter); 
        }
    }

    p.filmLine = function() { 
        this.xoff = p.random(0,p.width); 
        this.frameLimit = p.round(p.random(12,240)); //make the line last between .5 - 10 seconds; 
        this.thickness = p.round(p.random(0,2)); 
        this.display = function() { 
            p.noStroke(); 
            this.xoff = this.xoff + p.random(0,.01); 
            var n = p.noise(this.xoff)*p.width; 
            var fillColor = p.round(p.random(0,100));
            p.fill(fillColor);  
            p.rect(n, 0, this.thickness, p.height); 
        }
    }


    p.setup = function(){ 
        p.frameRate(24); 
        p.createCanvas(window.innerWidth, window.innerHeight -30); 
        filmSplotch = new p.Splotch(); 
        for(var i = 0; i < maxLines; i++){ 
            filmLines.push(new p.filmLine()); 
        }
        
        
    }

    p.windowResized = function(){ 
        p.resizeCanvas(window.innerWidth, window.innerHeight -30); 
    }

    p.draw = function() { 
        p.clear(); 
        overlay[0].style.top = `${p.map(p.noise(overlayNoise)*40, 0, 40, 0, 8, true)}px`; 
        overlayNoise = overlayNoise + .1; 
        filmSplotch.display(); 
        filmSplotch.move(); 

        for(var i = 0; i< filmLines.length; i++){ 
            filmLines[i].display(); 
            if(p.frameCount % filmLines[i].frameLimit === 0 && p.frameCount != 0){ 
                filmLines[i] = new p.filmLine(); 
            }
        }
    }
}