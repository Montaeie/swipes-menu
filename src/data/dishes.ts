

export interface Dish {
    id: string;
    name: string;
    image?: string;
    ingredients: string[]; // On garde la structure actuelle pour compatibilité
    price: string;
}
  
  export type CategoryDishes = Record<string, Dish[]>
  
  export const dishesData: CategoryDishes = {
    pizza: [
      {
        id: 'margherita',
        name: 'Margherita',
        price: '13.50',
        image: '/Alice pizza - Margherita.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'basilic']
      },
      {
        id: 'esteban',
        name: 'Esteban',
        price: '17.50',
        image: '/Alice Pizza - Esteban.jpg',
        ingredients: ['Crème aux 4 champignons de saison', 'fines tranches de mozzarella di bufala', 'tomates confites datterino']
      },
      {
        id: 'quattro-formaggi',
        name: 'Quattro Formaggi',
        price: '17.50',
        image: '/Alice Pizza - Quatre fromage.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'chèvre', 'taleggio', 'gorgonzola']
      },

      {
        id: 'chevre-miel',
        name: 'Chèvre Miel',
        price: '17.50',
        image: '/Alice Pizza - Chevre noix.jpg',
        ingredients: ['Base crème', 'mozzarella', 'gorgonzola au mascarpone', 'roquette', 'parmesan']
      },
      {
        id: 'discorsi-di-mafiosi',
        name: 'Discorsi Di Mafiosi',
        price: '17.50',
        image: '/Discorsi Di Mafiosi.jpg',
        ingredients: ['Base crème', 'mozzarella', 'chèvre cendré', 'miel d\'acacia', 'noix']
      },
      {
        id: 'enzo',
        name: 'Enzo',
        price: '17.50',
        image: '/Alice Pizza - Enzo.jpg',
        ingredients: ['Sauce tomate maison', 'basilic frais', 'mozzarella di bufala', 'filet d\'huile d\'olive']
      },
      {
        id: 'vegetarienne',
        name: 'Végétarienne',
        price: '17.50',
        image: '/Alice Pizza - vegetarienne.jpg',
        ingredients: ['Sauce tomate maison', 'poivrons', 'olives', 'artichauts', 'oignons', 'champignons']
      },
      {
        id: 'napolitaine',
        name: 'Napolitaine',
        price: '17.50',
        image: '/Alice Pizza - napolitaine.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'câpres', 'anchois', 'olives de Kalamata']
      },
      {
        id: 'reine',
        name: 'Reine',
        price: '17.50',
        image: '/Alice Pizza - Reine.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'jambon', 'champignons']
      },
      {
        id: 'poulette',
        name: 'Poulette',
        price: '17.50',
        image: '/Alice Pizza - Poulette.jpg',
        ingredients: ['Base crème', 'mozzarella', 'poulet', 'bacon', 'œuf']
      },
      {
        id: 'di-parma',
        name: 'Di Parma',
        price: '17.50',
        image: '/Alice Pizza - Di Parma.jpg',
        ingredients: ['Base crème', 'mozzarella', 'jambon de Parme', 'ricotta', 'roquette']
      },
      {
        id: 'calabrese',
        name: 'Calabrese',
        price: '17.50',
        image: '/Alice Pizza - Calabrese.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'saucisson piquant de Calabre']
      },
      {
        id: 'truffe-toi-meme',
        name: 'Truffe Toi Même',
        price: '21.50',
        image: '/Alice Pizza - Truffe-toi-même.jpg',
        ingredients: ['Base crème', 'mozzarella', 'crème de truffe', 'tomates datterino', 'copeaux de truffe', 'stracciatella', 'spaghetti de courgettes', 'fleurs comestibles']
      },
      {
        id: 'di-bandiera',
        name: 'Di Bandiera',
        price: '21.50',
        image: '/Alice Pizza - Di banderia.jpg',
        ingredients: ['Tomates datterino', 'mozzarella di bufala', 'roquette et huile d\'olive']
      },
      {
        id: 'salmone',
        name: 'Salmone',
        price: '21.50',
        image: '/Alice Pizza - Salmone.jpg',
        ingredients: ['Base crème', 'saumon fumé tranché main', 'pousses d\'épinards frais', 'mozzarella', 'stracciatella', 'oignons rouges de Tropea', 'ciboulette']
      },
      
      {
        id: 'di-jessica',
        name: 'Di Jessica',
        price: '17.50',
        image: '/Alice pizza - Di Jessica.jpg',
        ingredients: ['Base crème', 'jambon', 'gorgonzola', 'chèvre', 'mozzarella']
      },
      {
        id: 'pinocchio',
        name: 'Pinocchio',
        price: '17.50',
        image: '/Alice Pizza - Pinocchio.jpg',
        ingredients: ['Pesto de pistache', 'crème de pistache', 'mozzarella', 'mortadelle', 'stracciatella', 'câpres frits', 'poudre de pistache']
      },
      
      {
        id: '4-saisons',
        name: '4 Saisons',
        price: '17.50',
        image: '/Alice Pizza - 4 saisons.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'jambon', 'champignons', 'artichauts', 'poivrons']
      },
      
      {
        id: 'delice-de-savoie',
        name: 'Délice de Savoie',
        price: '21.50',
        image: '/Alice Pizza - Delice de Savoie.jpg',
        ingredients: ['Mozzarella', 'scarmoza fumée', 'reblochon', 'pancetta fumée', 'romarin']
      },
      {
        id: 'sarde',
        name: 'Sarde',
        price: '21.50',
        image: '/Alice Pizza - Sarde.jpg',
        ingredients: ['Sauce tomate maison', 'tomates datterino', 'filet de thon jaune', 'fêta', 'olives de Kalamata', 'roquette']
      },
      {
        id: 'bresaola',
        name: 'Bresaola Della Valtellina',
        price: '21.50',
        image: '/Alice pizza - Bressaola della valtellina.jpg',
        ingredients: ['Sauce tomate maison', 'fromage', 'bresaola', 'roquette', 'parmesan bio de montagne', 'huile d\'olive']
      },
      {
        id: 'stanley',
        name: 'Stanley',
        price: '21.50',
        image: '/Alice Pizza - Stanley.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'scarmozza fumé', 'chorizo rôti au four', 'oignons rouge', 'piment']
      },
      {
        id: 'di-marco',
        name: 'Di Marco',
        price: '21.50',
        image: '/Alice Pizza - DI Marco.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'jambon', 'champignons', 'artichauts', 'poivrons']
      },

      {
        id: 'calzone',
        name: 'Calzone',
        price: '13.50',
        image: '/Alice Pizza - Calzone.jpg',
        ingredients: ['Sauce tomate maison', 'mozzarella', 'jambon', 'œuf']
      },
      
    
      {
        id: 'collina',
        name: 'Collina',
        price: '21.50',
        image: '/Alice Pizza - Collina.jpg',
        ingredients: ['Tomates datterino', 'mozzarella di bufala', 'roquette', 'huile d\'olive italienne']
      },
    
      
      
      
  ],
    penne: [
      {
        id: 'penne-arrabbiata',
        name: 'Penne all\' Arrabbiata',
        price: '14.00',
        image: '/penne-arrabbiata.jpg',
        ingredients: ['Sauce tomates pimentée', 'ail']
      },
     
      {
        id: 'penne-prosciutto',
        name: 'Penne panna, Prosciutto e Piselli',
        price: '16.00',
        image: '/Penne panna, Prosciutto e Piselli.jpg',
        ingredients: ['Crème', 'jambon blanc italien', 'petits pois']
      },
      {
        id: 'spaghetti-bolognese',
        name: 'Spaghetti alla Bolognese',
        price: '16.00',
        image: '/Spaghetti alla Bolognese.jpg',
        ingredients: ['Sauce tomate', 'viande de bœuf haché']
      },
      {
        id: 'rigatoni-sicilienne',
        name: 'Rigatoni à la Sicilienne',
        price: '16.00',
        image: '/Rigatoni à la Sicilienne.jpg',
        ingredients: ['Sauce tomate', 'feuilles de basilic', 'aubergines de Sicile', 'parmesan bio de montagne', 'ricotta']
      },
      {
        id: 'tagliatelle-carbonara',
        name: 'Tagliatelle alla carbonara',
        price: '16.00',
        image: '/Tagliatelle alla carbonara.jpg',
        ingredients: ['Crème', 'lardons', 'parmesan bio de montagne', 'œuf']
      },
      {
        id: 'spaghetti-pesto',
        name: 'Spaghetti al pesto genovese',
        price: '16.00',
        image: '/Spaghetti al pesto genovese.jpg',
        ingredients: ['Feuilles de basilic', 'ail', 'huile d\'olive italienne', 'pignons', 'parmesan bio de montagne']
      },
    
      {
        id: 'tagliatelle-saumon',
        name: 'Tagliatelle al Salmone',
        price: '20.00',
        image: '/Tagliatelle al Salmone.jpg',
        ingredients: ['Crème', 'saumon', 'ciboulette']
      },
      {
        id: 'tagliatelle-truffe',
        name: 'Tagliatelle al Tartufo',
        price: '20.00',
        image: '/Tagliatelle al Tartufo.jpg',
        ingredients: ['Crème de truffe', 'copeaux de truffe', 'fleurs comestibles']
      },
      {
        id: 'rigatoni-siciliana',
        name: 'Rigatoni alla Siciliana',
        price: '16.00',
        image: '/Rigatoni alla Siciliana.jpg',
        ingredients: ['Sauce tomate', 'feuilles de basilic', 'aubergines de Sicile', 'parmesan bio de montagne', 'ricotta']
      },
     
     
    ],
    antipasti: [
      // Iconici 10€
      
      {
        id: 'bruschetta',
        name: 'Bruschetta',
        price: '10.00', 
        image: '/Alice Pizza - Bruschetta.jpg',
        ingredients: ['Tomates datterino', 'oignons rouges de Tropea marinés', 'roquette', 'huile d\'olive italienne']
      },
      {
        id: 'pain-parmesan',
        name: 'Pain parmesan',
        price: '10.00',
        image: '/Alice Pizza - Bruschetta Salentina.jpg',
        ingredients: ['Origan', 'basilic', 'parmesan', 'cuit au feu de bois']
      },
      {
        id: 'mix-legumes',
        name: 'Mix de légumes grillés',
        price: '10.00',
        image: '/Alice Pizza - Antipasti Mix légumes grillés.jpg',
        ingredients: ['Poivrons', 'aubergines', 'courgettes', 'pleurotes grillées']
      },
      
      {
        id: 'carpaccio-cecina',
        name: 'Carpaccio Di Cecina De Leon',
        price: '10.00',
        image: '/Alice pizza - Carpaccio Cecina de leon.jpg',
        ingredients: ['Cecina de Leon', 'roquette', 'tomate datterino', 'parmesan bio de montagne', 'crème de balsamique']
      },
   
      // Incontri di Gusto 13€
      {
        id: 'crudo-bufala',
        name: 'Crudo e Bufala',
        price: '13.00',
        image: '/Alice Pizza - Crudo E Bufala.jpg',
        ingredients: ['Mozzarella di bufala', 'jambon de Parme']
      },
      {
        id: 'caprese',
        name: 'Caprese',
        price: '13.00',
        image: '/Alice Pizza - Caprese.jpg',
        ingredients: ['Tomates', 'mozzarella di bufala', 'basilic']
      },
      
      {
        id: 'beignet-mozzarella',
        name: 'Beignet de mozzarella',
        price: '13.00',
        image: '/Alice Pizza - Beignets de Mozzarella.jpg',
        ingredients: ['Beignets de mozzarella accompagnés de leur sauce napolitaine']
      },
      {
        id: 'burratina-truffe',
        name: 'Burratina al tartufo',
        price: '13.00',
        image: '/Alice pIZZA - Burratina Truffe.jpg',
        ingredients: ['Burratina fondante à la truffe', 'roquette', 'tomates datterino']
      },
   
      // Tradizionali 20€
      {
        id: 'antipasti-italiana',
        name: 'Antipasti All\' Italiana',
        price: '20.00',
        image: '/Alice Pizza - Antipasti All Italiana.jpg',
        ingredients: ['Capocollo', 'mortadelle di Bologna', 'spianata calabrese', 'prosciutto cotto al tartufo', 'prosciutto crudo di Parma', 'golfetta']
      },
      
    ],

    panuozzi: [
      {
        id: 'panuozzo-cotto',
        name: 'Panuozzo Cotto',
        price: '12.00',
        image: '/panuozzo-cotto.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'roquette']
      },
      {
        id: 'panuozzo-cecina',
        name: 'Panuozzo Cecina',
        price: '12.00',
        image: '/panuozzo-cecina.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala']
      },
      {
        id: 'panuozzo-di-parma',
        name: 'Panuozzo Di Parma',
        price: '12.00',
        image: '/panuozzo-di-parma.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'jambon']
      },
      {
        id: 'el-kamaat',
        name: 'El Kamaat - Halal',
        price: '16.00',
        image: '/el-kamaat.jpg',
        ingredients: ['Crème de truffes noir', 'jambon de veau', 'Mozzarella di Bufala']
      },
      {
        id: 'badanjen',
        name: 'Badanjen - Halal',
        price: '12.00',
        image: '/badanjen.jpg',
        ingredients: ['Spiniata picante', 'Mozzarella di Bufala', 'aubergine de Sicile']
      },
      {
        id: 'panuozzo-al-tarfuffo',
        name: 'Panuozzo Al Tartuffo',
        price: '12.00',
        image: '/panuozzo-al-tartuffo.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'jambon']
      },
      {
        id: 'panuozzo-di-bologna',
        name: 'Panuozzo Di Bologna',
        price: '12.00',
        image: '/panuozzo-di-bologna.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala']
      },
      {
        id: 'panuozzo-fonduta',
        name: 'Panuozzo Fonduta',
        price: '12.00',
        image: '/panuozzo-fonduta.jpg',
        ingredients: ['Roquette', 'gorgonzola mascarpone', 'bufala']
      },
      {
        id: 'panuozzo-salmone',
        name: 'Panuozzo Salmone',
        price: '12.00',
        image: '/panuozzo-salmone.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'saumon']
      },
      {
        id: 'panuozzo-apollo',
        name: 'Panuozzo Apollo',
        price: '12.00',
        image: '/panuozzo-apollo.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'émincé']
      },
      {
        id: 'panuozzo-classic',
        name: 'Panuozzo Classic',
        price: '12.00',
        image: '/panuozzo-classic.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di Bufala', 'tomate']
      },
      {
        id: 'panuozzo-vegano',
        name: 'Panuozzo Vegano',
        price: '12.00',
        image: '/panuozzo-vegano.jpg',
        ingredients: ['Pain maison au feu de bois', 'assortiment de légumes mixte']
      },
      {
        id: 'panuozzo-el-diablo',
        name: 'Panuozzo El Diablo',
        price: '12.00',
        image: '/badanjen.jpg',
        ingredients: ['Roquette', 'calabrese', 'bufala', 'aubergines grillées']
      },
      {
        id: 'panuozzo-tonno',
        name: 'Panuozzo Tonno',
        price: '12.00',
        image: '/panuozzo-tonno.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'filet de thon']
      },
      {
        id: 'panuozzo-golfetta',
        name: 'Panuozzo Golfetta',
        price: '12.00',
        image: '/panuozzo-golfetta.jpg',
        ingredients: ['Pain maison au feu de bois', 'mozzarella di bufala', 'golfetta']
      },
      {
        id: 'panuozzo-el-tefle',
        name: 'Panuozzo El Tefle - Halal',
        price: '14.00',
        image: '/panuozzo-el-tefle.jpg',
        ingredients: ['Jambon de veau', 'Mozzarella di Bufala', 'Roquette', 'huile']
      }
    ],
    dolci: [
      // Classici 8€
      {
        id: 'mousse-chocolat',
        name: 'Mousse au Chocolat',
        price: '8.00',
        image: '/Mousse au Chocolat.jpg',
        ingredients: ['Mousse au chocolat Valrhona maison légère', 'sans crème']
      },
  
   
      // Iconici 10€
      {
        id: 'fondant-chocolat',
        name: 'Fondant au Chocolat',
        price: '10.00',
        image: '/Alice Pizza - Fondant chocolat.jpg',
        ingredients: ['Mi-cuit maison au chocolat fondant et chaud à l\'intérieur', 'filet de caramel au beurre salé']
      },
      
      {
        id: 'cannoli-siciliani',
        name: 'Cannoli Siciliani',
        price: '10.00',
        image: '/Cannoli Siciliani.jpg',
        ingredients: ['Ricotta de brebis sucrée', 'mascarpone', 'éclats de pistache']
      },
   
      // Pizza Dolce 15€
      {
        id: 'amandine',
        name: 'L\'Amandine',
        price: '15.00',
        image: '/amandine.jpg',
        ingredients: ['Pizza aux poires en lamelles', 'sucre cassonade nocciolata bio sans huile de palme', 'amandes effilées grillées']
      },
      {
        id: 'camilia',
        name: 'La Camilia',
        price: '15.00',
        image: '/La Camilia.jpg',
        ingredients: ['Pizza à la pomme en lamelles', 'sucre cassonade', 'caramel beurre salé', 'macaron', 'Grand Marnier']
      },
      {
        id: 'noisette',
        name: 'Noisette',
        price: '15.00',
        image: '/Noisette.jpg',
        ingredients: ['Pizza à la nocciolata bio sans huile de palme', 'éclats de pistache']
      },
      
    ],
    
    boissons : [
      {
        id: 'coca',
        name: 'Coca Cola',
        price: '2.50',
        image: '/coca.jpg',
        ingredients: ['coca']
      },
      {
        id: 'coca-zero',
        name: 'Coca Cola Zero',
        price: '2.50',
        image: '/coca-zero.jpg',
        ingredients: ['coca-zero']
      },
      {
        id: 'ice-tea',
        name: 'Ice Tea',
        price: '2.50',
        image: '/Ice-tea.jpg',
        ingredients: ['Ice-tea']
      },
      {
        id: 'san-pellegrino',
        name: 'San Pellegrino',
        price: '2.50',
        image: '/San-pellegrino.jpg',
        ingredients: ['San Pellegrino']
      },
      {
        id: 'sprite',
        name: 'Sprite',
        price: '2.50',
       image: '/sprite.jpg',
       ingredients: ['sprite']
      },
      {
        id: 'orangina',
        name: 'Orangina',
        price: '2.50',
         image: '/Orangina.jpg',
         ingredients: ['Orangina']
      },
      {
        id: 'schweppes',
        name: 'Schweppes Agrum',
        price: '2.50',
      image: '/Schweppes-agrum.jpg',
      ingredients: ['Schweppes Agrum']
      },
      {
        id: 'evian',
        name: 'Evian',
        price: '1.50',
         image: '/Evian.jpg',
         ingredients: ['Evian']
      },
      {
        id: 'vinea-domini-luccicore',
        name: 'Vinea Domini Luccicore Syrah',
        price: '21.00',
        image: '/Vinea Domini Luccicore Syrah.jpg',
        ingredients: ['Vin rosé 75cl']
      },
      {
        id: 'peroni',
        name: 'Peroni',
        price: '5.00',
  image: '/Peroni.jpg',
  ingredients: ['Peroni']
      },
     
      {
        id: 'vinea-domini-sirah',
        name: 'Vinea Domini Sirah IGT 2017',
        price: '25.00',
        image: '/Vinea Domini Sirah IGT 2017.jpg',
        ingredients: ['Vin rouge de la région de Rome 75cl']
      },
      {
        id: 'leffe',
        name: 'Leffe',
        price: '5.00',
        image: '/Leffe.jpg',
        ingredients: ['Leffe']
      },
      {
        id: 'biere-1664',
        name: 'Bière 1664',
        price: '2.60',
        image: '/Bière-1664.jpg',
        ingredients: ['Bière']
      },
      {
        id: 'gotto-doro',
        name: 'Gotto Doro Marino Doc 2018',
        price: '25.00',
        image: '/Gotto Doro Marino Doc 2018.jpg',
        ingredients: ['Vin blanc bio 75cl']
      }
    ],
    risotto: [
      // Risotti Classici 17€
      {
        id: 'risotto-burro',
        name: 'Risotto al burro e parmigiano',
        price: '17.00',
        image: '/risotte-.jpg',
        ingredients: ['Beurre', 'parmesan bio de montagne']
      },
    ],
    gnocchi: [
      // Gnocchi Classici 14€
      {
        id: 'gnocchi-sorrentina',
        name: 'Gnocchi alla Sorrentina',
        price: '14.00',
        image: '/ALICE 20295.jpg',
        ingredients: ['Sauce romaine', 'basilic', 'mozzarella di bufala']
      },
    
      
      // Gnocchi Gourmet 17€
      {
        id: 'gnocchi-tartufo',
        name: 'Gnocchi al Tartufo',
        price: '17.00',
        image: '/Alice Pizza - Gnocchi al tartufo.jpg',
        ingredients: ['Crème de truffe', 'copeaux de truffes', 'parmesan bio de montagne']
      },
      
    ]
    // Ajouter le contenu des autres catégories...
  }
