// src/data/dishes.ts
export interface Dish {
    id: string
    name: string
    image: string
    ingredients: string[]
  }
  
  export type CategoryDishes = Record<string, Dish[]>
  
  export const dishesData: CategoryDishes = {
    pizza: [
      {
        id: 'pizza1',
        name: 'Pizza Juliano',
        image: '/Alice-pizza-Juliano.jpg',
        ingredients: ['Sauce tomate', 'Mozzarella', 'Basilic']
      },
      {
        id: 'pizza2',
        name: 'Pizza Poulette',
        image: '/Alice-Pizza-Poulette.jpg',
        ingredients: ['Poulet', 'Champignons', 'Crème']
      }
    ],
    penne: [
      {
        id: 'penne1',
        name: 'Penne Arrabiata',
        image: '/Alice-20628-2048x1365.jpg',
        ingredients: ['Penne', 'Sauce tomate pimentée', 'Basilic']
      }
    ],
    antipasti: [],
    panuozzi: [],
    dolci: [],
    boisson: []
    // Ajouter le contenu des autres catégories...
  }