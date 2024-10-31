import { z } from 'zod';

export const menuItemSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().min(0, 'Price must be positive'),
  categoryId: z.string().min(1, 'Category is required'),
  image: z.string().optional(),
  ingredients: z.array(z.string()),
  nutritionInfo: z.object({
    calories: z.number(),
    protein: z.number(),
    carbs: z.number(),
    fat: z.number(),
  }),
  allergens: z.array(z.string()),
  isAvailable: z.boolean(),
  preparationTime: z.number(),
  spicyLevel: z.number().min(0).max(5),
  featured: z.boolean(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const categorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string(),
  image: z.string().optional(),
  isActive: z.boolean(),
});

export type MenuItem = z.infer<typeof menuItemSchema>;
export type Category = z.infer<typeof categorySchema>;