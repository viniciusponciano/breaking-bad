import React from 'react';
import SearchIcon from '../Assets/search.svg';

const style = {
  container: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderBottom: 'solid',
    borderColor: 'white',
    fontSize: 'medium',
    fontWeight: 'bold',
    paddingBottom: '10px',
  },
  icon: {
    float: 'right',
    position: 'absolute',
    right: '0',
  },
};

const Search = ({ onChangeValue, value }) => (
  <div style={style.container}>
    <input
      type="search"
      value={value}
      placeholder="Pesquise os personagens"
      onChange={(event) => onChangeValue(event.target.value)}
      style={style.input}
    />
    <img src={SearchIcon} alt="Ícone de busca" style={style.icon} />
  </div>
);

export default Search;
