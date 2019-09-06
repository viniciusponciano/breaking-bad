import React from 'react';

const style = {
  text: {
    position: 'fixed',
    left: '50%',
    bottom: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    color: 'white',
  },
};

const Loading = () => (
  <h1 style={style.text}>Carregando...</h1>
);

export default Loading;
