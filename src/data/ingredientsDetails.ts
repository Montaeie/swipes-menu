// src/data/ingredientsDetails.ts
export interface IngredientDetail {
  id: string;
  name: string;
  description: string;
  origin?: {
    region: string;
    ville?: string;
    pays: string;
  };
  type: string;
  image?: string;
  allergene?: boolean;
}

export const ingredientsDetails: Record<string, IngredientDetail> = {
  // La clé doit correspondre exactement au texte dans votre dishes.ts
  "Sauce tomate maison": {
    id: "sauce-tomate-maison",
    name: "Sauce tomate maison",
    image: "/Sauce tomate.png",
    description: "Notre sauce tomate signature préparée avec des tomates italiennes sélectionnées avec soin et des herbes fraîches.",
    type: "sauce",
    origin: {
      pays: "Italie",
      region: "Émilie-Romagne"
    }
  },

 

"bresaola": {
  id: "bresaola",
  name: "Bresaola della Valtellina",
  description: "Une charcuterie de haute qualité obtenue exclusivement à partir des meilleurs morceaux de cuisses de bovins de races sélectionnées.",
  type: "charcuterie",
  origin: {
    region: "Lombardie",
    ville: "Sondrio",
    pays: "Italie"
  },
  image: "/ingredients/bresaola.jpg",
},

"mozzarella": {
  id: "mozzarella",
  name: "Mozzarella Fior di Latte",
  description: "Fromage italien traditionnel produit par le Caseificio Valcolatte, réputé pour sa qualité exceptionnelle.",
  type: "fromage",
  origin: {
    region: "Émilie-Romagne",
    ville: "Valconasso, Pontenure",
    pays: "Italie"
  },
  allergene: true,
  image: "/ingredients/mozzarella.jpg",
},

"farine-manitaly": {
    id: "farine-manitaly",
    name: "Farine Manitaly",
    description: "Issue de la tradition meunière italienne depuis 1918, cette farine d'excellence est produite à partir des meilleurs blés sélectionnés.",
    type: "base",
    origin: {
      region: "Marches",
      ville: "Monte San Pietrangeli",
      pays: "Italie"
    },
    allergene: true,
    image: "/ingredients/farine.jpg",
  },
  // Ajoutez d'autres ingrédients...
};

export function getIngredientDetails(ingredientName: string): IngredientDetail | undefined {
  // Ajoutons des logs pour déboguer
  console.log('Searching for:', ingredientName);
  console.log('Available ingredients:', Object.keys(ingredientsDetails));
  
  // Recherche directe
  const directMatch = ingredientsDetails[ingredientName];
  if (directMatch) return directMatch;

  // Recherche insensible à la casse
  const lowerCaseName = ingredientName.toLowerCase();
  return Object.values(ingredientsDetails).find(
    ingredient => ingredient.name.toLowerCase() === lowerCaseName
  );
}