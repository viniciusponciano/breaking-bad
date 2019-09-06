export default class Requester {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.params = '';
  }

  setParams(filter) {
    this.params = Object.keys(filter).reduce((params, key, index) => {
      const symbol = index === 0 ? '?' : '&';
      return `${params}${symbol}${key}=${filter[key]}`;
    }, '');
  }

  get(endpoint) {
    const serviceUrl = `${this.baseUrl}${endpoint}${this.params}`;
    const configuration = { method: 'GET' };
    return fetch(serviceUrl, configuration)
      .then(async (response) => {
        if (response.ok) {
          return response.json()
            .then((data) => [null, data])
            .catch((error) => [error]);
        }
        return [await response.error()];
      });
  }
}
