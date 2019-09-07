import React from 'react';

const style = {
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    fontSize: 'medium',
    fontWeight: 'bold',
  },
};

const Button = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    style={style.button}
  >
    {label}
  </button>
);

export default Button;
