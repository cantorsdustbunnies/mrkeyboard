export default function screen(p) { 
    var backgroundOffset = 0.0; 
    var backgroundNoise; 
    p.setup = function() { 
        p.frameRate(24); 
        p.createCanvas(window.innerWidth, window.innerHeight -30); 
    }

    p.windowResized = function() { 
        p.resizeCanvas(window.innerWidth, window.innerHeight -30)
    }

    p.draw = function() { 
        p.clear(); 
        var noiseVal = p.map(p.noise(backgroundOffset), 0, 1, 200, 255); 
        p.background(noiseVal); 
        backgroundOffset = backgroundOffset + .5; 
        
    }


}