import httpService from './HttpService';

class BaseApiService {
  constructor() {
    this.api = httpService;
    this.apiClient = this.api.client;
  }
}

export default BaseApiService;
