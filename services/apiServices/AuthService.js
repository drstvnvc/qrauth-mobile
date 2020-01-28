import BaseApiService from './BaseApiService';
import { ENDPOINTS } from '../../constants';

class AuthService extends BaseApiService {
  login = async (email, password) => {
    return this.apiClient.post(ENDPOINTS.AUTH.LOGIN, { email, password });
  };
}

const authService = new AuthService();

export default authService;
