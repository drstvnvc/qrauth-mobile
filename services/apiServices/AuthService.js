import BaseApiService from './BaseApiService';
import { ENDPOINTS } from '../../constants';
import storageService from '../StorageService';

class AuthService extends BaseApiService {
  login = async (email, password) => {
    const { data } = await this.apiClient.post(ENDPOINTS.AUTH.LOGIN, { email, password });

    this.createSession(data);
    return data;
  };

  logout = async () => {
    await this.destroySession();
  }

  createSession = data => {
    storageService.setToken(data.token);
    storageService.setUser(data.user);
    this.attachAuthHeader(data.token);
  };

  destroySession = () => {
    storageService.deleteToken();
    storageService.deleteUser();
    this.removeAuthHeader();
  };

  attachAuthHeader = token => {
    this.api.attachHeaders({
      Authorization: `Bearer ${token}`,
    });
  };

  removeAuthHeader = () => {
    this.api.removeHeaders(['Authorization']);
  };

  getCurrentUser = async () => {
    const token = await storageService.getToken();
    if (!token) {
      return null;
    }
    this.attachAuthHeader(token);
    const user = await storageService.getUser();
    return user;
  };
}

const authService = new AuthService();

export default authService;
