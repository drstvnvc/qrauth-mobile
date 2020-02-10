import { AsyncStorage } from 'react-native';

class StorageService {
  async getUser() {
    const user = await this.getItem('user');
    return user;
  }

  async setUser(user) {
    await this.setItem('user', user);
  }

  async deleteUser() {
    await this.deleteItem('user');
  }

  async getToken() {
    const token = await this.getItem('token');
    return token;
  }

  async setToken(token) {
    await this.setItem('token', token);
  }

  async deleteToken() {
    await this.deleteItem('token');
  }

  async getItem(key) {
    const item = await AsyncStorage.getItem(key);
    return JSON.parse(item);
  }

  async setItem(key, item) {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  }

  async deleteItem(key) {
    await AsyncStorage.removeItem(key);
  }
}

const storageService = new StorageService();

export default storageService;
