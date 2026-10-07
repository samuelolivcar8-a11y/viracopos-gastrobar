
const MENU = [
  {
    "id": "Bebidas-0",
    "category": "Bebidas",
    "name": "Água com Gás - 500 ml",
    "price": 4.99
  },
  {
    "id": "Bebidas-1",
    "category": "Bebidas",
    "name": "Água de Coco - 200 ml",
    "price": 6.99
  },
  {
    "id": "Bebidas-2",
    "category": "Bebidas",
    "name": "Água de Coco - Gelo Frost",
    "price": 8.99
  },
  {
    "id": "Bebidas-3",
    "category": "Bebidas",
    "name": "Água de Coco - 1 Litro",
    "price": 19.99
  },
  {
    "id": "Bebidas-4",
    "category": "Bebidas",
    "name": "Água sem Gás - 500 ml",
    "price": 3.99
  },
  {
    "id": "Bebidas-5",
    "category": "Bebidas",
    "name": "Água Tônica - Lata",
    "price": 7.99
  },
  {
    "id": "Bebidas-6",
    "category": "Bebidas",
    "name": "H2O",
    "price": 11.99
  },
  {
    "id": "Bebidas-7",
    "category": "Bebidas",
    "name": "Refrigerante - Lata",
    "price": 6.99
  },
  {
    "id": "Bebidas-8",
    "category": "Bebidas",
    "name": "Refrigerante - 600ml",
    "price": 9.99
  },
  {
    "id": "Bebidas-9",
    "category": "Bebidas",
    "name": "Refrigerante - 2 L",
    "price": 18.99
  },
  {
    "id": "Bebidas-10",
    "category": "Bebidas",
    "name": "Red Bull",
    "price": 15.99
  },
  {
    "id": "Sucos e Polpas-0",
    "category": "Sucos e Polpas",
    "name": "Laranja - Fruta",
    "prices": {
      "Copo/Combo": 11.99,
      "Jarra/Garrafa": 19.99
    }
  },
  {
    "id": "Sucos e Polpas-1",
    "category": "Sucos e Polpas",
    "name": "Limão - Fruta",
    "prices": {
      "Copo/Combo": 11.99,
      "Jarra/Garrafa": 19.99
    }
  },
  {
    "id": "Sucos e Polpas-2",
    "category": "Sucos e Polpas",
    "name": "Maracujá - Fruta",
    "prices": {
      "Copo/Combo": 11.99,
      "Jarra/Garrafa": 19.99
    }
  },
  {
    "id": "Sucos e Polpas-3",
    "category": "Sucos e Polpas",
    "name": "Acerola - Polpa",
    "prices": {
      "Copo/Combo": 11.99,
      "Jarra/Garrafa": 19.99
    }
  },
  {
    "id": "Sucos e Polpas-4",
    "category": "Sucos e Polpas",
    "name": "Morango - Polpa",
    "prices": {
      "Copo/Combo": 11.99,
      "Jarra/Garrafa": 19.99
    }
  },
  {
    "id": "Sucos e Polpas-5",
    "category": "Sucos e Polpas",
    "name": "Abacaxi - Polpa",
    "prices": {
      "Copo/Combo": 11.99,
      "Jarra/Garrafa": 19.99
    }
  },
  {
    "id": "Cremes-0",
    "category": "Cremes",
    "name": "Abacaxi",
    "prices": {
      "Copo/Combo": 16.99,
      "Jarra/Garrafa": 27.99
    }
  },
  {
    "id": "Cremes-1",
    "category": "Cremes",
    "name": "Açaí",
    "prices": {
      "Copo/Combo": 16.99,
      "Jarra/Garrafa": 27.99
    }
  },
  {
    "id": "Cremes-2",
    "category": "Cremes",
    "name": "Cupuaçu",
    "prices": {
      "Copo/Combo": 16.99,
      "Jarra/Garrafa": 27.99
    }
  },
  {
    "id": "Cremes-3",
    "category": "Cremes",
    "name": "Maracujá",
    "prices": {
      "Copo/Combo": 16.99,
      "Jarra/Garrafa": 27.99
    }
  },
  {
    "id": "Cremes-4",
    "category": "Cremes",
    "name": "Morango",
    "prices": {
      "Copo/Combo": 16.99,
      "Jarra/Garrafa": 27.99
    }
  },
  {
    "id": "Cervejas 600ml-0",
    "category": "Cervejas 600ml",
    "name": "Amstel - 600 ml",
    "price": 14.99
  },
  {
    "id": "Cervejas 600ml-1",
    "category": "Cervejas 600ml",
    "name": "Antarctica - 600 ml",
    "price": 11.99
  },
  {
    "id": "Cervejas 600ml-2",
    "category": "Cervejas 600ml",
    "name": "Brahma - 600 ml",
    "price": 11.99
  },
  {
    "id": "Cervejas 600ml-3",
    "category": "Cervejas 600ml",
    "name": "Budweiser - 600 ml",
    "price": 14.99
  },
  {
    "id": "Cervejas 600ml-4",
    "category": "Cervejas 600ml",
    "name": "Corona - 600ml",
    "price": 18.99
  },
  {
    "id": "Cervejas 600ml-5",
    "category": "Cervejas 600ml",
    "name": "Eisenbahn - 600 ml",
    "price": 15.99
  },
  {
    "id": "Cervejas 600ml-6",
    "category": "Cervejas 600ml",
    "name": "Heineken - 600 ml",
    "price": 17.99
  },
  {
    "id": "Cervejas 600ml-7",
    "category": "Cervejas 600ml",
    "name": "Original - 600 ml",
    "price": 14.99
  },
  {
    "id": "Cervejas 600ml-8",
    "category": "Cervejas 600ml",
    "name": "Petra - 600 ml",
    "price": 11.99
  },
  {
    "id": "Cervejas 600ml-9",
    "category": "Cervejas 600ml",
    "name": "Skol - 600ml",
    "price": 11.99
  },
  {
    "id": "Cervejas 600ml-10",
    "category": "Cervejas 600ml",
    "name": "Spaten - 600 ml",
    "price": 14.99
  },
  {
    "id": "Cervejas 600ml-11",
    "category": "Cervejas 600ml",
    "name": "Stella - 600 ml",
    "price": 16.99
  },
  {
    "id": "Cervejas 600ml-12",
    "category": "Cervejas 600ml",
    "name": "Stella Gold - 600 ml",
    "price": 18.99
  },
  {
    "id": "Cervejas Long & Latas-0",
    "category": "Cervejas Long & Latas",
    "name": "Lata - Antarctica 269 ml",
    "price": 5.99
  },
  {
    "id": "Cervejas Long & Latas-1",
    "category": "Cervejas Long & Latas",
    "name": "Lata - Brahma 269 ml",
    "price": 5.99
  },
  {
    "id": "Cervejas Long & Latas-2",
    "category": "Cervejas Long & Latas",
    "name": "Lata - Skol 269 ml",
    "price": 5.99
  },
  {
    "id": "Cervejas Long & Latas-3",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Budweiser",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-4",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Corona",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-5",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Heineken",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-6",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Heineken Zero",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-7",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Spaten",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-8",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Corona Zero",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-9",
    "category": "Cervejas Long & Latas",
    "name": "Long neck - Stella Gold",
    "price": 11.99
  },
  {
    "id": "Cervejas Long & Latas-10",
    "category": "Cervejas Long & Latas",
    "name": "Chopp Brahma",
    "price": 9.99
  },
  {
    "id": "Cervejas Long & Latas-11",
    "category": "Cervejas Long & Latas",
    "name": "Ice Balada",
    "price": 10.99
  },
  {
    "id": "Cervejas Long & Latas-12",
    "category": "Cervejas Long & Latas",
    "name": "Ice Kiwi",
    "price": 10.99
  },
  {
    "id": "Cervejas Long & Latas-13",
    "category": "Cervejas Long & Latas",
    "name": "Ice Limão",
    "price": 10.99
  },
  {
    "id": "Drinks / Coquetéis-0",
    "category": "Drinks / Coquetéis",
    "name": "Aperol Spritz",
    "price": 22
  },
  {
    "id": "Drinks / Coquetéis-1",
    "category": "Drinks / Coquetéis",
    "name": "Caipirinha",
    "price": 17,
    "image": "assets/caipirinha.jpg"
  },
  {
    "id": "Drinks / Coquetéis-2",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca",
    "price": 18
  },
  {
    "id": "Drinks / Coquetéis-3",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Abacaxi",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-4",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Limão",
    "price": 18
  },
  {
    "id": "Drinks / Coquetéis-5",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Maracujá",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-6",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Kiwi",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-7",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Morango",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-8",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Maracujá c/ Morango",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-9",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Abacaxi c/ Hortelã",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-10",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Maracujá c/ Limão",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-11",
    "category": "Drinks / Coquetéis",
    "name": "Caipirosca Melancia c/ Gengibre",
    "price": 19
  },
  {
    "id": "Drinks / Coquetéis-12",
    "category": "Drinks / Coquetéis",
    "name": "Coquetel de Vinho",
    "price": 17
  },
  {
    "id": "Drinks / Coquetéis-13",
    "category": "Drinks / Coquetéis",
    "name": "Gin Apple",
    "price": 21
  },
  {
    "id": "Drinks / Coquetéis-14",
    "category": "Drinks / Coquetéis",
    "name": "Gin Melancia",
    "price": 21
  },
  {
    "id": "Drinks / Coquetéis-15",
    "category": "Drinks / Coquetéis",
    "name": "Gin Frutas Vermelhas",
    "price": 22
  },
  {
    "id": "Drinks / Coquetéis-16",
    "category": "Drinks / Coquetéis",
    "name": "Gin Tônica",
    "price": 21
  },
  {
    "id": "Drinks / Coquetéis-17",
    "category": "Drinks / Coquetéis",
    "name": "Gin Tropical",
    "price": 22
  },
  {
    "id": "Drinks / Coquetéis-18",
    "category": "Drinks / Coquetéis",
    "name": "Gin Varacopos",
    "price": 25
  },
  {
    "id": "Drinks / Coquetéis-19",
    "category": "Drinks / Coquetéis",
    "name": "London Mule",
    "price": 21
  },
  {
    "id": "Drinks / Coquetéis-20",
    "category": "Drinks / Coquetéis",
    "name": "Margarita",
    "price": 27
  },
  {
    "id": "Drinks / Coquetéis-21",
    "category": "Drinks / Coquetéis",
    "name": "Metrópole",
    "price": 22
  },
  {
    "id": "Drinks / Coquetéis-22",
    "category": "Drinks / Coquetéis",
    "name": "Mojito",
    "price": 27
  },
  {
    "id": "Drinks / Coquetéis-23",
    "category": "Drinks / Coquetéis",
    "name": "Moscow Mule",
    "price": 25
  },
  {
    "id": "Drinks / Coquetéis-24",
    "category": "Drinks / Coquetéis",
    "name": "Negroni",
    "price": 28
  },
  {
    "id": "Drinks / Coquetéis-25",
    "category": "Drinks / Coquetéis",
    "name": "Piña Colada",
    "price": 27
  },
  {
    "id": "Drinks / Coquetéis-26",
    "category": "Drinks / Coquetéis",
    "name": "Preparo de Coquetel",
    "price": 7
  },
  {
    "id": "Drinks / Coquetéis-27",
    "category": "Drinks / Coquetéis",
    "name": "Sex on the Beach",
    "price": 27
  },
  {
    "id": "Drinks / Coquetéis-28",
    "category": "Drinks / Coquetéis",
    "name": "Shot Chocolate",
    "price": 24
  },
  {
    "id": "Drinks / Coquetéis-29",
    "category": "Drinks / Coquetéis",
    "name": "Shot Doce de Leite",
    "price": 24
  },
  {
    "id": "Drinks / Coquetéis-30",
    "category": "Drinks / Coquetéis",
    "name": "Shot Tequila",
    "price": 24
  },
  {
    "id": "Doses-0",
    "category": "Doses",
    "name": "Absolut",
    "price": 21.99
  },
  {
    "id": "Doses-1",
    "category": "Doses",
    "name": "Bananinha",
    "price": 9.99
  },
  {
    "id": "Doses-2",
    "category": "Doses",
    "name": "Campari",
    "price": 10.99
  },
  {
    "id": "Doses-3",
    "category": "Doses",
    "name": "Domecq",
    "price": 14.99
  },
  {
    "id": "Doses-4",
    "category": "Doses",
    "name": "Gin Beefeater London",
    "price": 22
  },
  {
    "id": "Doses-5",
    "category": "Doses",
    "name": "Gin Bombay",
    "price": 27.99
  },
  {
    "id": "Doses-6",
    "category": "Doses",
    "name": "Gin Tanqueray",
    "price": 22
  },
  {
    "id": "Doses-7",
    "category": "Doses",
    "name": "Jurupinga",
    "price": 6.99
  },
  {
    "id": "Doses-8",
    "category": "Doses",
    "name": "Licor 43",
    "price": 28.99
  },
  {
    "id": "Doses-9",
    "category": "Doses",
    "name": "Licor 43 - Chocolate",
    "price": 32.99
  },
  {
    "id": "Doses-10",
    "category": "Doses",
    "name": "Montilla",
    "price": 11.99
  },
  {
    "id": "Doses-11",
    "category": "Doses",
    "name": "Paratudo",
    "price": 7.99
  },
  {
    "id": "Doses-12",
    "category": "Doses",
    "name": "São Francisco",
    "price": 6.99
  },
  {
    "id": "Doses-13",
    "category": "Doses",
    "name": "Seleta",
    "price": 14.99
  },
  {
    "id": "Doses-14",
    "category": "Doses",
    "name": "Tequila",
    "price": 24.99
  },
  {
    "id": "Doses-15",
    "category": "Doses",
    "name": "Vodko Orloff",
    "price": 13.99
  },
  {
    "id": "Doses-16",
    "category": "Doses",
    "name": "Vodka Smirnoff",
    "price": 10.99
  },
  {
    "id": "Doses-17",
    "category": "Doses",
    "name": "Whisky Black Label",
    "price": 27.99
  },
  {
    "id": "Doses-18",
    "category": "Doses",
    "name": "Whisky Buchanan's 12 anos",
    "price": 27.99
  },
  {
    "id": "Doses-19",
    "category": "Doses",
    "name": "Whisky Cavalo Branco",
    "price": 19.99
  },
  {
    "id": "Doses-20",
    "category": "Doses",
    "name": "Whisky Chivas",
    "price": 27.99
  },
  {
    "id": "Doses-21",
    "category": "Doses",
    "name": "Whisky Jack Daniels",
    "price": 27.99
  },
  {
    "id": "Doses-22",
    "category": "Doses",
    "name": "Whisky Old Par 12 Anos",
    "price": 27.99
  },
  {
    "id": "Doses-23",
    "category": "Doses",
    "name": "Whisky Red Label",
    "price": 22
  },
  {
    "id": "Doses-24",
    "category": "Doses",
    "name": "Ypióca Empalhada",
    "price": 14.99
  },
  {
    "id": "Doses-25",
    "category": "Doses",
    "name": "Ballena",
    "price": 32.99
  },
  {
    "id": "Doses-26",
    "category": "Doses",
    "name": "Marula",
    "price": 27.99
  },
  {
    "id": "Doses-27",
    "category": "Doses",
    "name": "Don Luiz",
    "price": 16.99
  },
  {
    "id": "Garrafas Destilados e Vinhos-0",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Bananinha",
    "price": 49
  },
  {
    "id": "Garrafas Destilados e Vinhos-1",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Campari",
    "price": 150
  },
  {
    "id": "Garrafas Destilados e Vinhos-2",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Chandon Brut Espumante",
    "price": 140
  },
  {
    "id": "Garrafas Destilados e Vinhos-3",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Lambrusco",
    "price": 100
  },
  {
    "id": "Garrafas Destilados e Vinhos-4",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Paratudo",
    "price": 40
  },
  {
    "id": "Garrafas Destilados e Vinhos-5",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Don Luiz",
    "price": 170
  },
  {
    "id": "Garrafas Destilados e Vinhos-6",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Salton Brut Espumante",
    "price": 74
  },
  {
    "id": "Garrafas Destilados e Vinhos-7",
    "category": "Garrafas Destilados e Vinhos",
    "name": "São Francisco",
    "price": 70
  },
  {
    "id": "Garrafas Destilados e Vinhos-8",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Tequila",
    "price": 220
  },
  {
    "id": "Garrafas Destilados e Vinhos-9",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Vinho Casillero del Diablo Seco",
    "price": 85
  },
  {
    "id": "Garrafas Destilados e Vinhos-10",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Vinho Pérgola Suave",
    "price": 55
  },
  {
    "id": "Garrafas Destilados e Vinhos-11",
    "category": "Garrafas Destilados e Vinhos",
    "name": "Ballena",
    "price": 310
  },
  {
    "id": "Combos-0",
    "category": "Combos",
    "name": "Gin Beefeater London (1 Red Bull)",
    "prices": {
      "Copo/Combo": 279,
      "Jarra/Garrafa": 229
    }
  },
  {
    "id": "Combos-1",
    "category": "Combos",
    "name": "Gin Bombay (1 Red Bull)",
    "prices": {
      "Copo/Combo": 339,
      "Jarra/Garrafa": 299
    }
  },
  {
    "id": "Combos-2",
    "category": "Combos",
    "name": "Gin Tanqueray (1 Red Bull)",
    "prices": {
      "Copo/Combo": 289,
      "Jarra/Garrafa": 239
    }
  },
  {
    "id": "Combos-3",
    "category": "Combos",
    "name": "Vodka Absolut (5 Red Bull)",
    "prices": {
      "Copo/Combo": 279,
      "Jarra/Garrafa": 219
    }
  },
  {
    "id": "Combos-4",
    "category": "Combos",
    "name": "Vodka Smirnoff (5 Red Bull)",
    "prices": {
      "Copo/Combo": 179,
      "Jarra/Garrafa": 119
    }
  },
  {
    "id": "Combos-5",
    "category": "Combos",
    "name": "Whisky Black Label (5 Red Bull ou Água de coco)",
    "prices": {
      "Copo/Combo": 379,
      "Jarra/Garrafa": 329
    }
  },
  {
    "id": "Combos-6",
    "category": "Combos",
    "name": "Whisky Cavalo Branco (5 Red Bull ou Água de coco)",
    "prices": {
      "Copo/Combo": 239,
      "Jarra/Garrafa": 189
    }
  },
  {
    "id": "Combos-7",
    "category": "Combos",
    "name": "Whisky Chivas (5 Red Bull ou Água de coco)",
    "prices": {
      "Copo/Combo": 339,
      "Jarra/Garrafa": 299
    }
  },
  {
    "id": "Combos-8",
    "category": "Combos",
    "name": "Whisky Jack Daniels (5 Red Bull ou Água de coco)",
    "prices": {
      "Copo/Combo": 339,
      "Jarra/Garrafa": 299
    }
  },
  {
    "id": "Combos-9",
    "category": "Combos",
    "name": "Whisky Old Parr (5 Red Bull ou Água de coco)",
    "prices": {
      "Copo/Combo": 339,
      "Jarra/Garrafa": 299
    }
  },
  {
    "id": "Combos-10",
    "category": "Combos",
    "name": "Whisky Red Label (5 Red Bull ou Água de coco)",
    "prices": {
      "Copo/Combo": 279,
      "Jarra/Garrafa": 229
    }
  },
  {
    "id": "Para Petiscar-0",
    "category": "Para Petiscar",
    "name": "Batata Frita",
    "price": 27.99
  },
  {
    "id": "Para Petiscar-1",
    "category": "Para Petiscar",
    "name": "Batata Frita Completa (Cheddar e Bacon)",
    "price": 33.99,
    "image": "assets/batata-frita-completa.jpg"
  },
  {
    "id": "Para Petiscar-2",
    "category": "Para Petiscar",
    "name": "Mandioca Frita",
    "price": 17.99
  },
  {
    "id": "Para Petiscar-3",
    "category": "Para Petiscar",
    "name": "Calabresa Acebolada",
    "price": 29.99
  },
  {
    "id": "Para Petiscar-4",
    "category": "Para Petiscar",
    "name": "Calabresa Acebolada c/ Fritas",
    "price": 35.99
  },
  {
    "id": "Para Petiscar-5",
    "category": "Para Petiscar",
    "name": "Frango a Passarinho",
    "price": 42.99,
    "image": "assets/frango-a-passarinho.jpg"
  },
  {
    "id": "Para Petiscar-6",
    "category": "Para Petiscar",
    "name": "Frango a Passarinho c/ Fritas",
    "price": 48.99
  },
  {
    "id": "Para Petiscar-7",
    "category": "Para Petiscar",
    "name": "Carne de Sol Acebolada",
    "price": 64.99
  },
  {
    "id": "Para Petiscar-8",
    "category": "Para Petiscar",
    "name": "Carne de Sol Acebolada c/ Mandioca",
    "price": 69.99,
    "image": "assets/carne-com-fritas.jpg"
  },
  {
    "id": "Para Petiscar-9",
    "category": "Para Petiscar",
    "name": "Linguiça Frango c/ Pão de Alho",
    "price": 44.99
  },
  {
    "id": "Para Petiscar-10",
    "category": "Para Petiscar",
    "name": "Isca de Frango Empanada",
    "price": 49.99
  },
  {
    "id": "Para Petiscar-11",
    "category": "Para Petiscar",
    "name": "Isca de Peixe Empanada",
    "price": 79.99
  },
  {
    "id": "Para Petiscar-12",
    "category": "Para Petiscar",
    "name": "Posta de Peixe",
    "price": 49.99
  },
  {
    "id": "Para Petiscar-13",
    "category": "Para Petiscar",
    "name": "Porção de Coração de Frango",
    "price": 44.99
  },
  {
    "id": "Para Petiscar-14",
    "category": "Para Petiscar",
    "name": "Porção de Pastel Misto (Frango, Queijo e Carne)",
    "price": 27.99
  },
  {
    "id": "Para Petiscar-15",
    "category": "Para Petiscar",
    "name": "Frios (Queijo, Presunto, Azeitona, Salame e Ovo de Codorna)",
    "price": 54.99
  },
  {
    "id": "Para Petiscar-16",
    "category": "Para Petiscar",
    "name": "Camarão Empanado",
    "price": 74.99
  },
  {
    "id": "Para Petiscar-17",
    "category": "Para Petiscar",
    "name": "Camarão Alho e Óleo",
    "price": 69.99
  },
  {
    "id": "Para Petiscar-18",
    "category": "Para Petiscar",
    "name": "Caldos (Vaca Atolada, Frango e Mocotó)",
    "price": 16.99
  },
  {
    "id": "Para Petiscar-19",
    "category": "Para Petiscar",
    "name": "Torresmo",
    "price": 27.99
  },
  {
    "id": "Para Petiscar-20",
    "category": "Para Petiscar",
    "name": "MIX VIRACOPOS (Carne de Sol, Calabresa e Batata Frita)",
    "price": 74.99
  },
  {
    "id": "Para Petiscar-21",
    "category": "Para Petiscar",
    "name": "Disco de Carne C/ Fritas",
    "price": 59.99
  },
  {
    "id": "Para Petiscar-22",
    "category": "Para Petiscar",
    "name": "Queijo Empanado c/ Melaço",
    "price": 44.99
  },
  {
    "id": "Para Petiscar-23",
    "category": "Para Petiscar",
    "name": "Tilápia Inteira c/ Fritas",
    "price": 79.99
  },
  {
    "id": "Para Petiscar-24",
    "category": "Para Petiscar",
    "name": "Tilápia Inteira s/ Espinha c/ Fritas",
    "price": 89.99
  },
  {
    "id": "Para Petiscar-25",
    "category": "Para Petiscar",
    "name": "Picanha Fatiada c/ Fritas",
    "price": 99.99
  },
  {
    "id": "Pratos Kids-0",
    "category": "Pratos Kids",
    "name": "Hambúrguer c/ Fritas",
    "price": 24.99
  },
  {
    "id": "Pratos (para 2 pessoas)-0",
    "category": "Pratos (para 2 pessoas)",
    "name": "Tilápia Inteira s/ Espinha",
    "price": 139.99
  },
  {
    "id": "Pratos (para 2 pessoas)-1",
    "category": "Pratos (para 2 pessoas)",
    "name": "Picanha Completa",
    "price": 149.99
  },
  {
    "id": "Pratos (para 2 pessoas)-2",
    "category": "Pratos (para 2 pessoas)",
    "name": "Filé Mignon",
    "price": 149.99
  },
  {
    "id": "Pratos (para 2 pessoas)-3",
    "category": "Pratos (para 2 pessoas)",
    "name": "Carne de Sol Completa",
    "price": 109.99
  },
  {
    "id": "Pratos (para 2 pessoas)-4",
    "category": "Pratos (para 2 pessoas)",
    "name": "Parmegiana de Frango",
    "price": 69.99
  },
  {
    "id": "Pratos (para 2 pessoas)-5",
    "category": "Pratos (para 2 pessoas)",
    "name": "Parmegiana de Filé Mignon",
    "price": 79.99
  },
  {
    "id": "Pratos (para 2 pessoas)-6",
    "category": "Pratos (para 2 pessoas)",
    "name": "Bobó de Camarão",
    "price": 109.99
  },
  {
    "id": "Pratos (para 2 pessoas)-7",
    "category": "Pratos (para 2 pessoas)",
    "name": "Moqueca de Peixe com Camarão",
    "price": 119.99
  },
  {
    "id": "Pratos (para 2 pessoas)-8",
    "category": "Pratos (para 2 pessoas)",
    "name": "Moqueca de Peixe sem Camarão",
    "price": 99.99
  },
  {
    "id": "Pratos (para 2 pessoas)-9",
    "category": "Pratos (para 2 pessoas)",
    "name": "Camarão Viracopos",
    "price": 109.99
  },
  {
    "id": "Pratos (para 2 pessoas)-10",
    "category": "Pratos (para 2 pessoas)",
    "name": "Espaguete a Bolonhesa com Carne",
    "price": 79.99
  },
  {
    "id": "Pratos (para 2 pessoas)-11",
    "category": "Pratos (para 2 pessoas)",
    "name": "Espaguete 4 Queijos com Camarão",
    "price": 109.99
  },
  {
    "id": "Pratos (para 2 pessoas)-12",
    "category": "Pratos (para 2 pessoas)",
    "name": "Filé de Tilápia com Arroz de Camarão",
    "price": 129.99
  },
  {
    "id": "Pratos (para 2 pessoas)-13",
    "category": "Pratos (para 2 pessoas)",
    "name": "Filé de Frango Grelhado",
    "price": 69.99
  },
  {
    "id": "Pratos (para 2 pessoas)-14",
    "category": "Pratos (para 2 pessoas)",
    "name": "Filé de Frango Grelhado Molho 4 Queijos",
    "price": 79.99
  },
  {
    "id": "Pratos (para 2 pessoas)-15",
    "category": "Pratos (para 2 pessoas)",
    "name": "Posta de Tilápia",
    "price": 89.99
  },
  {
    "id": "Pratos Executivos-0",
    "category": "Pratos Executivos",
    "name": "Peito de Frango Grelhado",
    "price": 22.99
  },
  {
    "id": "Pratos Executivos-1",
    "category": "Pratos Executivos",
    "name": "Bife a Cavalo",
    "price": 27.99
  },
  {
    "id": "Pratos Executivos-2",
    "category": "Pratos Executivos",
    "name": "Parmegiana de Frango",
    "price": 27.99
  },
  {
    "id": "Pratos Executivos-3",
    "category": "Pratos Executivos",
    "name": "Parmegiana de Filé Mignon",
    "price": 37.99
  },
  {
    "id": "Pratos Executivos-4",
    "category": "Pratos Executivos",
    "name": "Posta de Tilápia",
    "price": 27.99
  },
  {
    "id": "Pratos Executivos-5",
    "category": "Pratos Executivos",
    "name": "Estrogonofe de Frango",
    "price": 27.99
  },
  {
    "id": "Pratos Executivos-6",
    "category": "Pratos Executivos",
    "name": "Estrogonofe de Filé Mignon",
    "price": 37.99
  },
  {
    "id": "Pratos Executivos-7",
    "category": "Pratos Executivos",
    "name": "Picanha",
    "price": 37.99
  },
  {
    "id": "Pratos Executivos-8",
    "category": "Pratos Executivos",
    "name": "Feijoada",
    "price": 19.99
  },
  {
    "id": "Acompanhamentos-0",
    "category": "Acompanhamentos",
    "name": "Arroz Branco",
    "price": 8.99
  },
  {
    "id": "Acompanhamentos-1",
    "category": "Acompanhamentos",
    "name": "Arroz Biro Biro",
    "price": 18.99
  },
  {
    "id": "Acompanhamentos-2",
    "category": "Acompanhamentos",
    "name": "Feijão de Caldo",
    "price": 9.99
  },
  {
    "id": "Acompanhamentos-3",
    "category": "Acompanhamentos",
    "name": "Feijão Tropeiro",
    "price": 12.99
  },
  {
    "id": "Acompanhamentos-4",
    "category": "Acompanhamentos",
    "name": "Farofa de Bacon",
    "price": 14.99
  },
  {
    "id": "Acompanhamentos-5",
    "category": "Acompanhamentos",
    "name": "Mandioca Cozida",
    "price": 5.99
  },
  {
    "id": "Acompanhamentos-6",
    "category": "Acompanhamentos",
    "name": "Mandioca Frita",
    "price": 12.99
  },
  {
    "id": "Acompanhamentos-7",
    "category": "Acompanhamentos",
    "name": "Vinaigrette",
    "price": 11.99
  },
  {
    "id": "Acompanhamentos-8",
    "category": "Acompanhamentos",
    "name": "Batata Recheada",
    "price": 14.99
  },
  {
    "id": "Acompanhamentos-9",
    "category": "Acompanhamentos",
    "name": "Salada",
    "price": 8.99
  },
  {
    "id": "Acompanhamentos-10",
    "category": "Acompanhamentos",
    "name": "Puré",
    "price": 9.99
  },
  {
    "id": "Sobremesas-0",
    "category": "Sobremesas",
    "name": "Brownie com Sorvete",
    "price": 19.99
  },
  {
    "id": "Sobremesas-1",
    "category": "Sobremesas",
    "name": "Pudim",
    "price": 14.99
  }
];
const PHOTO_MAP = {"Batata Frita Completa (Cheddar e Bacon)": "assets/batata-frita-completa.jpg", "Frango a Passarinho": "assets/frango-a-passarinho.jpg", "Carne de Sol Acebolada c/ Mandioca": "assets/carne-com-fritas.jpg", "Caipirinha": "assets/caipirinha.jpg"};
const CART_KEY = "viracopos-cart-v1";
const WHATSAPP_NUMBER = "5561995634865"; // confirmar com o estabelecimento antes de publicar como WhatsApp de pedidos
const fmt = v => new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v);
const norm = s => s.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
let activeCategory = "Todos";
let searchTerm = "";

function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart)); updateCartBadge();}
function updateCartBadge(){
  const n=cart.reduce((a,i)=>a+i.qty,0);
  document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=n);
}
function openCart(){document.querySelector("#cartDrawer")?.classList.add("open");}
function closeCart(){document.querySelector("#cartDrawer")?.classList.remove("open");}
function addItem(item, variant, price){
  const key=item.id+"::"+(variant||"");
  const found=cart.find(x=>x.key===key);
  if(found) found.qty++;
  else cart.push({key,id:item.id,name:item.name,variant:variant||"",price,qty:1});
  saveCart(); renderCart(); openCart();
}
function changeQty(key,delta){
  const i=cart.find(x=>x.key===key); if(!i)return;
  i.qty+=delta; if(i.qty<=0)cart=cart.filter(x=>x.key!==key);
  saveCart(); renderCart();
}
function cartTotal(){return cart.reduce((a,i)=>a+i.price*i.qty,0)}
function renderCart(){
 const box=document.querySelector("#cartItems"), total=document.querySelector("#cartTotal");
 if(!box)return;
 if(!cart.length){box.innerHTML='<div class="empty">Seu carrinho está vazio.</div>'; total.textContent=fmt(0); updateCartBadge(); return;}
 box.innerHTML=cart.map(i=>`<div class="cart-row"><div><strong>${i.name}</strong>${i.variant?`<br><small>${i.variant}</small>`:""}<div class="qty"><button onclick="changeQty('${i.key}',-1)">−</button><b>${i.qty}</b><button onclick="changeQty('${i.key}',1)">+</button></div></div><div><strong>${fmt(i.price*i.qty)}</strong><button class="variant" onclick="changeQty('${i.key}',-${i.qty})">remover</button></div></div>`).join("");
 total.textContent=fmt(cartTotal()); updateCartBadge();
}
function checkout(){
 if(!cart.length){alert("Adicione pelo menos um item ao carrinho.");return;}
 const type=document.querySelector('input[name="delivery"]:checked')?.value || "retirada";
 const label=type==="entrega"?"PEDIDO PARA ENTREGA EM CASA":"PEDIDO PARA RETIRADA NA LOJA";
 const lines=cart.map(i=>`• ${i.qty}x ${i.name}${i.variant?` (${i.variant})`:""} — ${fmt(i.price*i.qty)}`);
 const msg=`Olá, Viracopos Gastrobar!%0A%0A${label}%0A%0A${lines.join("%0A")}%0A%0A*Total: ${fmt(cartTotal())}*%0A%0AForma de pagamento: PIX (aguardo a chave/instruções para pagamento e envio do comprovante).`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
}
function productCard(item){
 const img=item.image?`<img src="${item.image}" alt="${item.name}" loading="lazy">`:`<span>Foto do produto</span>`;
 if(item.prices){
   return `<article class="product reveal"><div class="product-img">${img}</div><div class="product-body"><h3>${item.name}</h3><div class="subprices">
    ${Object.entries(item.prices).map(([v,p])=>`<button class="variant" onclick='addItem(MENU.find(x=>x.id==="${item.id}"),"${v}",${p})">${v} · ${fmt(p)}</button>`).join("")}</div></div></article>`;
 }
 return `<article class="product reveal"><div class="product-img">${img}</div><div class="product-body"><h3>${item.name}</h3><div class="price">${fmt(item.price)}</div><button class="add" onclick='addItem(MENU.find(x=>x.id==="${item.id}"),"",${item.price})'>Adicionar ao pedido</button></div></article>`;
}
function renderMenu(){
 const grid=document.querySelector("#menuGrid"); if(!grid)return;
 const filtered=MENU.filter(i=>(activeCategory==="Todos"||i.category===activeCategory)&&(!searchTerm||norm(i.name).includes(norm(searchTerm))));
 grid.innerHTML=filtered.map(productCard).join("");
 requestAnimationFrame(()=>document.querySelectorAll(".reveal").forEach((e,i)=>setTimeout(()=>e.classList.add("visible"),Math.min(i*25,350))));
}
function initMenu(){
 const cats=["Todos",...new Set(MENU.map(i=>i.category))];
 const bar=document.querySelector("#categories");
 if(bar)bar.innerHTML=cats.map(c=>`<button class="pill ${c==="Todos"?"active":""}" data-cat="${c}">${c}</button>`).join("");
 bar?.addEventListener("click",e=>{if(!e.target.matches(".pill"))return;activeCategory=e.target.dataset.cat;bar.querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));e.target.classList.add("active");renderMenu();});
 const q=new URLSearchParams(location.search).get("busca"); if(q){searchTerm=q;document.querySelector("#menuSearch").value=q;}
 renderMenu();
 if(new URLSearchParams(location.search).get("carrinho")==="1")openCart();
}
function setupCommon(){
 updateCartBadge(); renderCart();
 document.querySelectorAll("[data-open-cart]").forEach(b=>b.addEventListener("click",openCart));
 document.querySelectorAll("[data-close-cart]").forEach(b=>b.addEventListener("click",closeCart));
 const form=document.querySelector("#heroSearch"); form?.addEventListener("submit",e=>{e.preventDefault();const q=form.querySelector("input").value.trim();location.href="menu.html?busca="+encodeURIComponent(q)});
 const mf=document.querySelector("#menuSearchForm"); mf?.addEventListener("submit",e=>e.preventDefault());
 document.querySelector("#menuSearch")?.addEventListener("input",e=>{searchTerm=e.target.value;renderMenu()});
 document.querySelector("#checkout")?.addEventListener("click",checkout);
 const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
}
document.addEventListener("DOMContentLoaded",()=>{setupCommon();initMenu();});
