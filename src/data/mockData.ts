
import { Product, Category, Restaurant } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Comida', icon: '🍽️', color: 'bg-red-100' },
  { id: '2', name: 'Postres', icon: '🍰', color: 'bg-pink-100' },
  { id: '3', name: 'Bebidas', icon: '🥤', color: 'bg-blue-100' },
  { id: '4', name: 'Farmacia', icon: '💊', color: 'bg-green-100' },
  { id: '5', name: 'Mascotas', icon: '🐕', color: 'bg-yellow-100' },
  { id: '6', name: 'Mercado', icon: '🛒', color: 'bg-purple-100' },
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bembos',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    rating: 4.5,
    deliveryTime: '20-30 min',
    category: 'Hamburguesas',
    promoted: true
  },
  {
    id: '2',
    name: 'Norky\'s',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
    rating: 4.3,
    deliveryTime: '25-35 min',
    category: 'Pollo a la brasa'
  },
  {
    id: '3',
    name: 'La Lucha',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    rating: 4.7,
    deliveryTime: '15-25 min',
    category: 'Sandwiches'
  },
  {
    id: '4',
    name: 'Pinkberry',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop',
    rating: 4.4,
    deliveryTime: '20-30 min',
    category: 'Helados'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Hamburguesa Clásica',
    description: 'Hamburguesa de carne con lechuga, tomate y queso cheddar',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    category: 'Hamburguesas',
    restaurant: 'Bembos',
    rating: 4.5,
    deliveryTime: '20-30 min',
    available: true
  },
  {
    id: '2',
    name: 'Pollo a la Brasa 1/4',
    description: 'Pollo a la brasa con papas fritas y ensalada criolla',
    price: 22.50,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
    category: 'Pollo',
    restaurant: 'Norky\'s',
    rating: 4.3,
    deliveryTime: '25-35 min',
    available: true
  },
  {
    id: '3',
    name: 'Sandwich de Lomo',
    description: 'Lomo saltado en pan francés con papas al hilo',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Sandwiches',
    restaurant: 'La Lucha',
    rating: 4.7,
    deliveryTime: '15-25 min',
    available: true
  },
  {
    id: '4',
    name: 'Yogurt Helado',
    description: 'Yogurt helado natural con frutas y granola',
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop',
    category: 'Postres',
    restaurant: 'Pinkberry',
    rating: 4.4,
    deliveryTime: '20-30 min',
    available: true
  },
  {
    id: '5',
    name: 'Pizza Margherita',
    description: 'Pizza tradicional con salsa de tomate, mozzarella y albahaca',
    price: 28.90,
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    category: 'Pizza',
    restaurant: 'Pizza Hut',
    rating: 4.2,
    deliveryTime: '30-40 min',
    available: true
  },
  {
    id: '6',
    name: 'Ceviche Mixto',
    description: 'Ceviche tradicional peruano con pescado fresco y mariscos',
    price: 32.90,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
    category: 'Comida Peruana',
    restaurant: 'El Cevichano',
    rating: 4.8,
    deliveryTime: '20-30 min',
    available: true
  }
];
