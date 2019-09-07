import { getCharacters, getCharacterById } from './characters';

describe('Characters functions', () => {
  it('should retrieve all characters', async (done) => {
    const characters = await getCharacters();
    expect(characters).toBeDefined();
    expect(characters.length).toBeGreaterThan(0);
    expect(characters[0]).toHaveProperty('char_id');
    done();
  });

  it('should retrieve filtered characters', async (done) => {
    const filter = { limit: 2, offset: 3 };
    const characters = await getCharacters(filter);
    expect(characters).toBeDefined();
    expect(characters).toHaveLength(2);
    expect(characters[0]).toHaveProperty('char_id', 4);
    expect(characters[1]).toHaveProperty('char_id', 5);
    done();
  });

  it('should retrieve character by id', async (done) => {
    const id = 25;
    const character = await getCharacterById(id);
    expect(character).toBeDefined();
    expect(character).toHaveProperty('char_id', id);
    done();
  });
});
