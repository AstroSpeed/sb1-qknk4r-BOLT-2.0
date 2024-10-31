import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Customer, Order } from '../types/customer';

const API_URL = import.meta.env.VITE_API_URL;

export function useCustomers() {
  const queryClient = useQueryClient();

  const getCustomers = () =>
    useQuery({
      queryKey: ['customers'],
      queryFn: async () => {
        const { data } = await axios.get(`${API_URL}/customers`);
        return data as Customer[];
      },
    });

  const getCustomerOrders = (customerId: string) =>
    useQuery({
      queryKey: ['customerOrders', customerId],
      queryFn: async () => {
        const { data } = await axios.get(`${API_URL}/customers/${customerId}/orders`);
        return data as Order[];
      },
    });

  const updateCustomer = useMutation({
    mutationFn: async ({ id, ...customer }: Customer) => {
      const { data } = await axios.put(`${API_URL}/customers/${id}`, customer);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });

  const updateLoyaltyPoints = useMutation({
    mutationFn: async ({ customerId, points }: { customerId: string; points: number }) => {
      const { data } = await axios.post(`${API_URL}/customers/${customerId}/loyalty-points`, {
        points,
      });
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['customers', variables.customerId] });
    },
  });

  const addFavoriteItem = useMutation({
    mutationFn: async ({ customerId, menuItemId }: { customerId: string; menuItemId: string }) => {
      const { data } = await axios.post(`${API_URL}/customers/${customerId}/favorites`, {
        menuItemId,
      });
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['customers', variables.customerId] });
    },
  });

  return {
    getCustomers,
    getCustomerOrders,
    updateCustomer,
    updateLoyaltyPoints,
    addFavoriteItem,
  };
}