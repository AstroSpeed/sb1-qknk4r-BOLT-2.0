import { z } from 'zod';

export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.array(z.object({
    id: z.string(),
    type: z.enum(['home', 'work', 'other']),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    isDefault: z.boolean(),
  })),
  loyaltyPoints: z.number(),
  memberSince: z.string(),
  lastOrder: z.string().optional(),
  totalOrders: z.number(),
  favoriteItems: z.array(z.string()),
  dietaryPreferences: z.array(z.string()),
  allergies: z.array(z.string()),
});

export const orderSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  items: z.array(z.object({
    menuItemId: z.string(),
    quantity: z.number(),
    price: z.number(),
    specialInstructions: z.string().optional(),
  })),
  status: z.enum(['pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled']),
  totalAmount: z.number(),
  paymentStatus: z.enum(['pending', 'paid', 'failed', 'refunded']),
  paymentMethod: z.string(),
  deliveryAddress: z.string(),
  deliveryTime: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Customer = z.infer<typeof customerSchema>;
export type Order = z.infer<typeof orderSchema>;