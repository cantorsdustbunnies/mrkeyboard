import React from 'react'; 
import P5Wrapper from 'react-p5-wrapper'; 
import screen from './screen'; 

const Screen = () => ( 
    <div className="screen">
        <P5Wrapper sketch={screen}/>
    </div>  
)

export default Screen; 
