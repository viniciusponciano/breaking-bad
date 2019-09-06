import React, { useState, useEffect } from 'react';

import { getCharacters } from '../Controllers/characters';

import Header from '../Components/Header';
import Loading from '../Components/Loading';
import CharacterGrid from '../Components/CharacterGrid';
import ButtonGroup from '../Components/ButtonGroup';
import Button from '../Components/Button';

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

  const handleSearchName = (search) => setState({ ...state, search });

  const nameSearch = (character) => character.name.toLowerCase()
    .includes(state.search.toLowerCase());

  return (
    <>
      <Header
        title={state.search ? `Você pesquisou por "${state.search}"` : 'Personagens'}
        onSearch={handleSearchName}
        searchValue={state.search}
      />
      {state.loading && <Loading />}
      {!state.loading && <CharacterGrid characters={state.characters.filter(nameSearch)} />}
      <ButtonGroup>
        <Button label="Anterior" onClick={previousPage} />
        <Button label="Próxima" onClick={nextPage} />
      </ButtonGroup>
    </>
  );
};

export default ListCharacters;
