import { useSetAtom } from 'jotai';
import { userAtom } from '../store/auth';
import { LoginCredentials, RegisterData, User } from '../types/auth';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export function useAuth() {
  const setUser = useSetAtom(userAtom);

  const login = async (credentials: LoginCredentials) => {
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      return data.user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      const { data } = await axios.post(`${API_URL}/auth/register`, userData);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      return data.user;
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const getCurrentUser = async (): Promise<User | null> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;

      const { data } = await axios.get(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(data.user);
      return data.user;
    } catch (error) {
      logout();
      return null;
    }
  };

  return {
    login,
    register,
    logout,
    getCurrentUser,
  };
}