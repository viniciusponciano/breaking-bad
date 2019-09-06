import Requester from './Requester';

describe('Request tests', () => {
  it('should be instantiated', () => {
    const requester = new Requester();
    expect(requester).toBeInstanceOf(Requester);
  });

  it('should have constructed right', () => {
    const requester = new Requester('testing.path');
    expect(requester).toHaveProperty('baseUrl', 'testing.path');
  });

  it('should be able to define some parameters', () => {
    const requester = new Requester();
    const filter = { test: 'ok', end: 'done' }
    requester.setParams(filter)
    expect(requester).toHaveProperty('params', '?test=ok&end=done');
  });

  it('should retrieve some data', async (done) => {
    const requester = new Requester('https://www.breakingbadapi.com/api/');
    const [error, data] = await requester.get('characters');
    expect(error).toBeNull();
    expect(data).toBeDefined();
    done();
  });

  it('should retrieve some data with some filters', async (done) => {
    const requester = new Requester('https://www.breakingbadapi.com/api/');
    const filter = { limit: 1, offset: 0 }
    requester.setParams(filter)
    const [error, data] = await requester.get('characters', filter);
    expect(error).toBeNull();
    expect(data).toBeDefined();
    expect(data).toHaveLength(1);
    expect(data[0]).toHaveProperty('char_id', 1);
    done();
  });
});
