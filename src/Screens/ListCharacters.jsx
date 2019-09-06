import React, { useState, useEffect } from 'react';
import Character from '../Components/Character';
import { getCharacters } from '../Controllers/characters';

const ListCharacters = () => {
  const [state, setState] = useState({
    characters: [],
    limit: 8,
    offset: 0,
    search: '',
    loading: true,
  });

  const updateCharacters = (characters) => {
    setState((innerState) => ({ ...innerState, characters, loading: false }));
  };

  useEffect(() => {
    const initialFilter = { limit: 8, offset: 0 };
    getCharacters(initialFilter).then(updateCharacters);
  }, []);

  useEffect(() => {
    const filter = { limit: state.limit, offset: state.offset };
    getCharacters(filter).then(updateCharacters);
  }, [state.limit, state.offset]);

  const previousPage = () => {
    const previousOffset = state.offset - state.limit;
    const offset = previousOffset > -1 ? previousOffset : state.offset;
    const loading = previousOffset > -1;
    setState({ ...state, offset, loading });
  };

  const nextPage = () => {
    const nextOffset = state.offset + state.limit;
    const offset = nextOffset > 57 ? state.offset : nextOffset;
    const loading = !(nextOffset > 57);
    setState({ ...state, offset, loading });
  };

  const handleSearchName = (event) => setState({ ...state, search: event.target.value });

  const nameSearch = (character) => character.name.toLowerCase()
    .includes(state.search.toLowerCase());

  const renderCharacter = (character) => (
    <Character key={character.char_id} info={character} />
  );

  return (
    <>
      <input type="search" value={state.search} onChange={handleSearchName} />
      {state.loading && <h1 style={{ color: 'white' }}>Loading...</h1>}
      {!state.loading && (
      <div style={{
        padding: '2% 10%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 25%)',
        gridAutoRows: '350px',
      }}
      >
        {state.characters
          .filter(nameSearch)
          .map(renderCharacter)}
      </div>
      )}
      <div style={{ clear: 'left' }}>
        <button type="button" onClick={previousPage}>Anterior</button>
        <button type="button" onClick={nextPage}>Posterior</button>
      </div>
    </>
  );
};

export default ListCharacters;
