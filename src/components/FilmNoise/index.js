import React from 'react'; 
import P5Wrapper from 'react-p5-wrapper'; 
import noise from './noise'; 

const FilmNoise = () => (
    <div className="filmNoise"> 
        <P5Wrapper sketch={noise} /> 
    </div> 
)

export default FilmNoise; 