import React from 'react';
import Character from './Character';

const style = {
  container: {
    padding: '2% 10%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    gridAutoRows: '350px',
  },
};

const renderCharacter = (character) => (
  <Character key={character.char_id} {...character} />
);

const CharacterGrid = ({ characters = [] }) => (
  <div style={style.container}>
    {characters.map(renderCharacter)}
  </div>
);

export default CharacterGrid;
