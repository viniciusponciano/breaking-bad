import React from 'react';

const style = {
  container: {
    padding: '5%',
    position: 'relative',
  },
  character: (isAlive) => ({
    float: 'right',
    position: 'absolute',
    right: '5%',
    top: '6%',
    zIndex: '10',
    backgroundColor: isAlive ? 'green' : 'red',
    padding: '5px',
    color: 'white',
  }),
  image: {
    justifySelf: 'center',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  summary: {
    float: 'left',
    position: 'absolute',
    left: '10%',
    bottom: '0',
    zIndex: '10',
    backgroundColor: 'transparent',
    marginRight: '10%',
    color: 'white',
    textAlign: 'left',
    textShadow: '1px 1px black',
    height: '40%',
  },
};

const Character = ({
  status,
  img,
  nickname,
  name,
  birthday,
  occupation = [],
}) => (
  <div style={style.container}>
    <div style={style.character(status === 'Alive')}>
      {status === 'Alive' ? 'Vivo' : 'Morto'}
    </div>
    <img
      src={img}
      alt={`Imagem de ${nickname}`}
      style={style.image}
    />
    <div style={style.summary}>
      <h4>{name}</h4>
      <p>
        <span>&#8902;</span>
        {birthday}
      </p>
      <p>{occupation.join(', ')}</p>
    </div>
  </div>
);

export default Character;
