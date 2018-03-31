import React from 'react'; 
import corner from '../../images/corner.svg'; 
import edges from '../../images/edges.png'; 
import mrKeyboard from '../../images/MrKeyboard.svg'; 

const TitleScreen = ({ children }) => (
    <div>
      <div>
        <img
          src={corner}
          width={120}
          height={120}
          style={{ position: 'absolute', top: 26, left: 24 }}
        />
        <img
          src={corner}
          width={120}
          height={120}
          style={{
            position: 'absolute',
            top: 26,
            right: 24,
            transform: 'scaleX(-1)',
          }}
        />
        <img
          src={corner}
          width={120}
          height={120}
          style={{
            position: 'absolute',
            bottom: 26,
            right: 24,
            transform: 'scaleX(-1) scaleY(-1)',
          }}
        />
        <img
          src={corner}
          width={120}
          height={120}
          style={{
            position: 'absolute',
            bottom: 26,
            left: 24,
            transform: 'scaleY(-1)',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          border: '4px solid #eee',
          zIndex: -1,
  
          top: 26,
          left: 25,
          right: 25,
          bottom: 26,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        {children}
      </div>
      <img src={edges} className="border"/> 

      <div className="titleScreen-content"> 
        <img src={mrKeyboard} /> 
      </div> 
    </div>
  )
  
  export default TitleScreen