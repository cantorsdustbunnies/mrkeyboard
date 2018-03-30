import React from 'react'; 
import corner from '../../images/corner.svg'; 

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
          zIndex: -10,
  
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
    </div>
  )
  
  export default TitleScreen