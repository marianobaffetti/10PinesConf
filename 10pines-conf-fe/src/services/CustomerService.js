export default class ApiService {
  static register(data) {
    return this.postHttp('/customer', data);
  }

  static postHttp(url, data) {
    return fetch('https://05n9rcq953.execute-api.us-east-1.amazonaws.com/test', {
      method: 'POST',
      body: data && JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
