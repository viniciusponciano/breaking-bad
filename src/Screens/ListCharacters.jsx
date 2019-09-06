import React, { useState, useEffect } from 'react';
import Character from '../Components/Character';
import { getCharacters } from '../Controllers/characters';

const ListCharacters = () => {
  const [state, setState] = useState({ characters: [], limit: 8, offset: 0 });

  useEffect(() => {
    const initialFilter = { limit: 8, offset: 0 };
    getCharacters(initialFilter)
      .then((characters) => setState((innerState) => ({ ...innerState, characters })));
  }, []);

  useEffect(() => {
    const filter = { limit: state.limit, offset: state.offset };
    getCharacters(filter)
      .then((characters) => setState((innerState) => ({ ...innerState, characters })));
  }, [state.limit, state.offset]);

  const previousPage = () => {
    const previousOffset = state.offset - state.limit;
    const offset = previousOffset > -1 ? previousOffset : state.offset;
    setState({ ...state, offset });
  };

  const nextPage = () => {
    const nextOffset = state.offset + state.limit;
    const offset = nextOffset > 57 ? state.offset : nextOffset;
    setState({ ...state, offset });
  };

  return (
    <>
      <div style={{ padding: '2% 10%', display: 'grid', gridTemplateColumns: 'repeat(4, 25%)', gridAutoRows: '350px' }}>
        {state.characters
          .map((character) => <Character key={character.char_id} info={character} />)}
      </div>
      <div style={{ clear: 'left' }}>
        <button type="button" onClick={previousPage}>Anterior</button>
        <button type="button" onClick={nextPage}>Posterior</button>
      </div>
    </>
  );
};

export default ListCharacters;
