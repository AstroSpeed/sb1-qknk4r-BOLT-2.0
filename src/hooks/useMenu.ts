import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { MenuItem, Category } from '../types/menu';

const API_URL = import.meta.env.VITE_API_URL;

export function useMenu() {
  const queryClient = useQueryClient();

  const getMenuItems = () => 
    useQuery({
      queryKey: ['menuItems'],
      queryFn: async () => {
        const { data } = await axios.get(`${API_URL}/menu-items`);
        return data as MenuItem[];
      },
    });

  const getCategories = () =>
    useQuery({
      queryKey: ['categories'],
      queryFn: async () => {
        const { data } = await axios.get(`${API_URL}/categories`);
        return data as Category[];
      },
    });

  const createMenuItem = useMutation({
    mutationFn: async (newItem: Omit<MenuItem, 'id'>) => {
      const { data } = await axios.post(`${API_URL}/menu-items`, newItem);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menuItems'] });
    },
  });

  const updateMenuItem = useMutation({
    mutationFn: async ({ id, ...item }: MenuItem) => {
      const { data } = await axios.put(`${API_URL}/menu-items/${id}`, item);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menuItems'] });
    },
  });

  const deleteMenuItem = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${API_URL}/menu-items/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menuItems'] });
    },
  });

  const createCategory = useMutation({
    mutationFn: async (newCategory: Omit<Category, 'id'>) => {
      const { data } = await axios.post(`${API_URL}/categories`, newCategory);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  return {
    getMenuItems,
    getCategories,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    createCategory,
  };
}