import { requester } from '../Services/Requester';

const endpoint = 'characters';

export const getCharacters = async (filter = {}) => {
  requester.setParams(filter);
  const [error, data] = await requester.get(endpoint);
  if (error) {
    return [];
  }
  return data;
};

export const getCharacterById = async (id = '') => {
  requester.setParams({});
  const endpointWithId = `${endpoint}/${id}`;
  const [error, data] = await requester.get(endpointWithId);
  if (error) {
    return {};
  }
  return data[0];
};
