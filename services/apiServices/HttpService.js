import axios from 'axios';

import config from '../../config';

class HttpService {
  constructor(clientConfig = {}) {
    this.client = axios.create(clientConfig);

    this.client.defaults.headers.post = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  attachHeaders(headers = {}) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders = (headers = []) => {
    headers.forEach(key => delete this.client.defaults.headers[key]);
  };
}

const clientConfig = {
  baseURL: config.BASE_API_URL,
};
const httpService = new HttpService(clientConfig);

export default httpService;
