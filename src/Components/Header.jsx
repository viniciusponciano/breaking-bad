import React from 'react';
import Search from './Search';

const style = {
  container: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10%',
  },
  title: { color: 'white' },
};

const Header = ({ title, onSearch, searchValue }) => (
  <div style={style.container}>
    <h1 style={style.title}>{title}</h1>
    <Search onChangeValue={onSearch} value={searchValue} />
  </div>
);

export default Header;
