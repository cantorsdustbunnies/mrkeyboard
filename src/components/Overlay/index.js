import React from 'react'; 
import P5Wrapper from 'react-p5-wrapper'; 
import overlay from './overlay';


const Overlay = () => (
    <div style={{opacity: .4}}> 
    <P5Wrapper sketch={overlay} />
    </div>  
)

export default Overlay; 