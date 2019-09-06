import React from 'react';

const Character = ({ info }) => (
  <div style={{ padding: '5%', position: 'relative' }}>
    <div style={{
      float: 'right',
      position: 'absolute',
      right: '5%',
      top: '6%',
      zIndex: '10',
      backgroundColor: info.status === 'Alive' ? 'green' : 'red',
      padding: '5px',
      color: 'white',
    }}
    >
      {info.status}
    </div>
    <img
      src={info.img}
      alt={`img of ${info.nickname}`}
      style={{
        justifySelf: 'center',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      }}
    />
    <div style={{
      float: 'left',
      position: 'absolute',
      left: '10%',
      bottom: '5%',
      zIndex: '10',
      backgroundColor: 'transparent',
      color: 'white',
      textAlign: 'left',
    }}
    >
      <h4>{info.name}</h4>
      <p>
        <span>&#8902;</span>
        {info.birthday}
      </p>
      <p>{info.occupation.join(', ')}</p>
    </div>
  </div>
);

export default Character;
