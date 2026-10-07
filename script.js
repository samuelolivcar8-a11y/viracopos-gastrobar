document.addEventListener("DOMContentLoaded", () => {

  /*
  =====================================================
  CARDÁPIO VIRACOPOS GASTROBAR
  =====================================================
  */

  const menu = [

    /* ================= PETISCOS ================= */

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Batata Frita",
      price: 27.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Batata Frita Completa",
      description: "Cheddar e bacon",
      price: 33.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Mandioca Frita",
      price: 17.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Calabresa Acebolada",
      price: 29.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Calabresa Acebolada c/ Fritas",
      price: 35.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Frango a Passarinho",
      price: 42.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Frango a Passarinho c/ Fritas",
      price: 48.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Carne de Sol Acebolada",
      price: 64.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Carne de Sol Acebolada c/ Mandioca",
      price: 69.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Linguiça Frango c/ Pão de Alho",
      price: 44.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Isca de Frango Empanada",
      price: 49.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Isca de Peixe Empanada",
      price: 79.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Posta de Peixe",
      price: 49.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Porção de Coração de Frango",
      price: 44.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Porção de Pastel Misto",
      description: "Frango, queijo e carne",
      price: 27.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Frios",
      description: "Queijo, presunto, azeitona, salame e ovo de codorna",
      price: 54.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Camarão Empanado",
      price: 74.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Camarão Alho e Óleo",
      price: 69.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Caldos",
      description: "Vaca atolada, frango e mocotó",
      price: 16.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Torresmo",
      price: 27.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "MIX VIRACOPOS",
      description: "Carne de sol, calabresa e batata frita",
      price: 74.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Disco de Carne C/ Fritas",
      price: 59.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Queijo Empanado c/ Melaço",
      price: 44.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Tilápia Inteira c/ Fritas",
      price: 79.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Tilápia Inteira s/ Espinha c/ Fritas",
      price: 89.99
    },

    {
      category: "petiscos",
      categoryName: "Para Petiscar",
      name: "Picanha Fatiada c/ Fritas",
      price: 99.99
    },


    /* ================= KIDS ================= */

    {
      category: "kids",
      categoryName: "Pratos Kids",
      name: "Hambúrguer c/ Fritas",
      price: 24.99
    },


    /* ================= PRATOS ================= */

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Tilápia Inteira s/ Espinha",
      price: 139.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Picanha Completa",
      price: 149.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Filé Mignon",
      price: 149.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Carne de Sol Completa",
      price: 109.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Parmegiana de Frango",
      price: 69.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Parmegiana de Filé Mignon",
      price: 79.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Bobó de Camarão",
      price: 109.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Moqueca de Peixe com Camarão",
      price: 119.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Moqueca de Peixe sem Camarão",
      price: 99.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Camarão Viracopos",
      price: 109.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Espaguete a Bolonhesa com Carne",
      price: 79.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Espaguete 4 Queijos com Camarão",
      price: 109.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Filé de Tilápia com Arroz de Camarão",
      price: 129.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Filé de Frango Grelhado",
      price: 69.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Filé de Frango Grelhado Molho 4 Queijos",
      price: 79.99
    },

    {
      category: "pratos",
      categoryName: "Pratos · Para 2 Pessoas",
      name: "Posta de Tilápia",
      price: 89.99
    },


    /* ================= EXECUTIVOS ================= */

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Peito de Frango Grelhado",
      price: 22.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Bife a Cavalo",
      price: 27.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Parmegiana de Frango",
      price: 27.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Parmegiana de Filé Mignon",
      price: 37.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Posta de Tilápia",
      price: 27.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Estrogonofe de Frango",
      price: 27.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Estrogonofe de Filé Mignon",
      price: 37.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Picanha",
      price: 37.99
    },

    {
      category: "executivos",
      categoryName: "Pratos Executivos",
      name: "Feijoada",
      price: 19.99
    },


    /* ================= ACOMPANHAMENTOS ================= */

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Arroz Branco",
      price: 8.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Arroz Biro Biro",
      price: 18.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Feijão de Caldo",
      price: 9.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Feijão Tropeiro",
      price: 12.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Farofa de Bacon",
      price: 14.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Mandioca Cozida",
      price: 5.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Mandioca Frita",
      price: 12.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Vinaigrette",
      price: 11.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Batata Recheada",
      price: 14.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Salada",
      price: 8.99
    },

    {
      category: "acompanhamentos",
      categoryName: "Acompanhamentos",
      name: "Puré",
      price: 9.99
    },


    /* ================= SOBREMESAS ================= */

    {
      category: "sobremesas",
      categoryName: "Sobremesas",
      name: "Brownie com Sorvete",
      price: 19.99
    },

    {
      category: "sobremesas",
      categoryName: "Sobremesas",
      name: "Pudim",
      price: 14.99
    },


    /* ================= BEBIDAS ================= */

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Água com Gás · 500 ml",
      price: 4.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Água de Coco · 200 ml",
      price: 6.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Água de Coco · Gelo Frost",
      price: 8.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Água de Coco · 1 Litro",
      price: 19.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Água sem Gás · 500 ml",
      price: 3.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Água Tônica · Lata",
      price: 7.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "H2O",
      price: 11.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Refrigerante · Lata",
      price: 6.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Refrigerante · 600 ml",
      price: 9.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Refrigerante · 2 L",
      price: 18.99
    },

    {
      category: "bebidas",
      categoryName: "Bebidas",
      name: "Red Bull",
      price: 15.99
    },


    /* ================= SUCOS ================= */

    {
      category: "sucos",
      categoryName: "Sucos e Polpas",
      name: "Laranja · Fruta",
      description: "Copo R$ 11,99 · Jarra R$ 19,99",
      price: 11.99
    },

    {
      category: "sucos",
      categoryName: "Sucos e Polpas",
      name: "Limão · Fruta",
      description: "Copo R$ 11,99 · Jarra R$ 19,99",
      price: 11.99
    },

    {
      category: "sucos",
      categoryName: "Sucos e Polpas",
      name: "Maracujá · Fruta",
      description: "Copo R$ 11,99 · Jarra R$ 19,99",
      price: 11.99
    },

    {
      category: "sucos",
      categoryName: "Sucos e Polpas",
      name: "Acerola · Polpa",
      description: "Copo R$ 11,99 · Jarra R$ 19,99",
      price: 11.99
    },

    {
      category: "sucos",
      categoryName: "Sucos e Polpas",
      name: "Morango · Polpa",
      description: "Copo R$ 11,99 · Jarra R$ 19,99",
      price: 11.99
    },

    {
      category: "sucos",
      categoryName: "Sucos e Polpas",
      name: "Abacaxi · Polpa",
      description: "Copo R$ 11,99 · Jarra R$ 19,99",
      price: 11.99
    },


    /* ================= CREMES ================= */

    {
      category: "cremes",
      categoryName: "Cremes",
      name: "Abacaxi",
      description: "Copo R$ 16,99 · Jarra R$ 27,99",
      price: 16.99
    },

    {
      category: "cremes",
      categoryName: "Cremes",
      name: "Açaí",
      description: "Copo R$ 16,99 · Jarra R$ 27,99",
      price: 16.99
    },

    {
      category: "cremes",
      categoryName: "Cremes",
      name: "Cupuaçu",
      description: "Copo R$ 16,99 · Jarra R$ 27,99",
      price: 16.99
    },

    {
      category: "cremes",
      categoryName: "Cremes",
      name: "Maracujá",
      description: "Copo R$ 16,99 · Jarra R$ 27,99",
      price: 16.99
    },

    {
      category: "cremes",
      categoryName: "Cremes",
      name: "Morango",
      description: "Copo R$ 16,99 · Jarra R$ 27,99",
      price: 16.99
    },


    /* ================= CERVEJAS 600 ================= */

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Amstel · 600 ml",
      price: 14.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Antarctica · 600 ml",
      price: 11.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Brahma · 600 ml",
      price: 11.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Budweiser · 600 ml",
      price: 14.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Corona · 600 ml",
      price: 18.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Eisenbahn · 600 ml",
      price: 15.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Heineken · 600 ml",
      price: 17.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Original · 600 ml",
      price: 14.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Petra · 600 ml",
      price: 11.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Skol · 600 ml",
      price: 11.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Spaten · 600 ml",
      price: 14.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Stella · 600 ml",
      price: 16.99
    },

    {
      category: "cervejas600",
      categoryName: "Cervejas 600ml",
      name: "Stella Gold · 600 ml",
      price: 18.99
    },


    /* ================= LONG / LATAS ================= */

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Lata · Antarctica 269 ml",
      price: 5.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Lata · Brahma 269 ml",
      price: 5.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Lata · Skol 269 ml",
      price: 5.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Budweiser",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Corona",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Heineken",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Heineken Zero",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Spaten",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Corona Zero",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Long neck · Stella Gold",
      price: 11.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Chopp Brahma",
      price: 9.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Ice Balada",
      price: 10.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Ice Kiwi",
      price: 10.99
    },

    {
      category: "cervejaslong",
      categoryName: "Cervejas Long & Latas",
      name: "Ice Limão",
      price: 10.99
    },


    /* ================= DRINKS ================= */

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Aperol Spritz",
      price: 22
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirinha",
      price: 17
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca",
      price: 18
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Abacaxi",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Limão",
      price: 18
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Maracujá",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Kiwi",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Morango",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Maracujá c/ Morango",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Abacaxi c/ Hortelã",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Maracujá c/ Limão",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Caipirosca Melancia c/ Gengibre",
      price: 19
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Coquetel de Vinho",
      price: 17
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Gin Apple",
      price: 21
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Gin Melancia",
      price: 21
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Gin Frutas Vermelhas",
      price: 22
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Gin Tônica",
      price: 21
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Gin Tropical",
      price: 22
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Gin Varacopos",
      price: 25
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "London Mule",
      price: 21
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Margarita",
      price: 27
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Metrópole",
      price: 22
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Mojito",
      price: 27
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Moscow Mule",
      price: 25
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Negroni",
      price: 28
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Piña Colada",
      price: 27
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Preparo de Coquetel",
      price: 7
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Sex on the Beach",
      price: 27
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Shot Chocolate",
      price: 24
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Shot Doce de Leite",
      price: 24
    },

    {
      category: "drinks",
      categoryName: "Drinks / Coquetéis",
      name: "Shot Tequila",
      price: 24
    },


    /* ================= DOSES ================= */

    {
      category: "doses",
      categoryName: "Doses",
      name: "Absolut",
      price: 21.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Bananinha",
      price: 9.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Campari",
      price: 10.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Domecq",
      price: 14.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Gin Beefeater London",
      price: 22
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Gin Bombay",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Gin Tanqueray",
      price: 22
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Jurupinga",
      price: 6.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Licor 43",
      price: 28.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Licor 43 · Chocolate",
      price: 32.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Montilla",
      price: 11.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Paratudo",
      price: 7.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "São Francisco",
      price: 6.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Seleta",
      price: 14.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Tequila",
      price: 24.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Vodko Orloff",
      price: 13.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Vodka Smirnoff",
      price: 10.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Black Label",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Buchanan's 12 anos",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Cavalo Branco",
      price: 19.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Chivas",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Jack Daniels",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Old Par 12 Anos",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Whisky Red Label",
      price: 22
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Ypióca Empalhada",
      price: 14.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Ballena",
      price: 32.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Marula",
      price: 27.99
    },

    {
      category: "doses",
      categoryName: "Doses",
      name: "Don Luiz",
      price: 16.99
    },


    /* ================= GARRAFAS ================= */

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Bananinha",
      price: 49
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Campari",
      price: 150
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Chandon Brut Espumante",
      price: 140
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Lambrusco",
      price: 100
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Paratudo",
      price: 40
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Don Luiz",
      price: 170
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Salton Brut Espumante",
      price: 74
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "São Francisco",
      price: 70
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Tequila",
      price: 220
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Vinho Casillero del Diablo Seco",
      price: 85
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Vinho Pérgola Suave",
      price: 55
    },

    {
      category: "garrafas",
      categoryName: "Garrafas, Destilados e Vinhos",
      name: "Ballena",
      price: 310
    },


    /* ================= COMBOS ================= */

    {
      category: "combos",
      categoryName: "Combos",
      name: "Gin Beefeater London",
      description: "Combo c/ 1 Red Bull: R$ 279,00 · Garrafa: R$ 229,00",
      price: 279
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Gin Bombay",
      description: "Combo c/ 1 Red Bull: R$ 339,00 · Garrafa: R$ 299,00",
      price: 339
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Gin Tanqueray",
      description: "Combo c/ 1 Red Bull: R$ 289,00 · Garrafa: R$ 239,00",
      price: 289
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Vodka Absolut",
      description: "Combo c/ 5 Red Bull: R$ 279,00 · Garrafa: R$ 219,00",
      price: 279
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Vodka Smirnoff",
      description: "Combo c/ 5 Red Bull: R$ 179,00 · Garrafa: R$ 119,00",
      price: 179
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Whisky Black Label",
      description: "Combo c/ 5 Red Bull ou Água de coco: R$ 379,00 · Garrafa: R$ 329,00",
      price: 379
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Whisky Cavalo Branco",
      description: "Combo c/ 5 Red Bull ou Água de coco: R$ 239,00 · Garrafa: R$ 189,00",
      price: 239
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Whisky Chivas",
      description: "Combo c/ 5 Red Bull ou Água de coco: R$ 339,00 · Garrafa: R$ 299,00",
      price: 339
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Whisky Jack Daniels",
      description: "Combo c/ 5 Red Bull ou Água de coco: R$ 339,00 · Garrafa: R$ 299,00",
      price: 339
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Whisky Old Parr",
      description: "Combo c/ 5 Red Bull ou Água de coco: R$ 339,00 · Garrafa: R$ 299,00",
      price: 339
    },

    {
      category: "combos",
      categoryName: "Combos",
      name: "Whisky Red Label",
      description: "Combo c/ 5 Red Bull ou Água de coco: R$ 279,00 · Garrafa: R$ 229,00",
      price: 279
    }

  ];


  /* =====================================================
     ELEMENTOS
     ===================================================== */

  const menuContent =
    document.getElementById("menuContent");

  const searchResults =
    document.getElementById("searchResults");

  const searchInput =
    document.getElementById("menuSearch");

  const clearSearch =
    document.getElementById("clearSearch");

  const categories =
    document.querySelectorAll(".category");

  const openMenuButton =
    document.getElementById("openMenuButton");

  const heroMenuButton =
    document.getElementById("heroMenuButton");

  const cartButton =
    document.getElementById("cartButton");

  const cartPanel =
    document.getElementById("cartPanel");

  const cartOverlay =
    document.getElementById("cartOverlay");

  const closeCart =
    document.getElementById("closeCart");

  const cartItems =
    document.getElementById("cartItems");

  const cartEmpty =
    document.getElementById("cartEmpty");

  const cartCount =
    document.getElementById("cartCount");

  const cartTotal =
    document.getElementById("cartTotal");

  const checkoutButton =
    document.getElementById("checkoutButton");

  const checkoutModal =
    document.getElementById("checkoutModal");

  const closeCheckout =
    document.getElementById("closeCheckout");

  const sendOrder =
    document.getElementById("sendOrder");

  const customerName =
    document.getElementById("customerName");

  const customerNote =
    document.getElementById("customerNote");


  let cart = [];


  /* =====================================================
     FORMATAÇÃO
     ===================================================== */

  function money(value) {

    return value.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );

  }


  function normalize(text) {

    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        ""
      );

  }


  /* =====================================================
     PRODUTOS
     ===================================================== */

  function createItem(item) {

    const article =
      document.createElement("article");

    article.className =
      "menu-item";

    article.innerHTML = `

      <div class="item-info">

        <div class="item-name">
          ${item.name}
        </div>

        ${
          item.description
            ? `
              <div class="item-description">
                ${item.description}
              </div>
            `
            : ""
        }

        <div class="item-price">
          ${money(item.price)}
        </div>

      </div>

      <button
        class="add-item"
        aria-label="Adicionar ${item.name}"
      >
        +
      </button>

    `;


    article
      .querySelector(".add-item")
      .addEventListener(
        "click",
        () => {

          addToCart(item);

        }
      );


    return article;

  }


  /* =====================================================
     RENDER CATEGORIA
     ===================================================== */

  function renderCategory(categoryName) {

    menuContent.innerHTML = "";

    searchResults.innerHTML = "";

    searchResults.classList.add(
      "hidden"
    );


    const items =
      menu.filter(
        item =>
          item.category === categoryName
      );


    if (!items.length) {
      return;
    }


    const categoryWrapper =
      document.createElement("div");

    categoryWrapper.className =
      "menu-category active-category";


    const title =
      document.createElement("div");

    title.className =
      "category-title";


    title.innerHTML = `

      <h3>
        ${items[0].categoryName}
      </h3>

      <span>
        ${items.length} itens
      </span>

    `;


    const grid =
      document.createElement("div");

    grid.className =
      "menu-grid";


    items.forEach(item => {

      grid.appendChild(
        createItem(item)
      );

    });


    categoryWrapper.appendChild(title);

    categoryWrapper.appendChild(grid);

    menuContent.appendChild(
      categoryWrapper
    );

  }


  /* =====================================================
     CATEGORIAS
     ===================================================== */

  function selectCategory(categoryName) {

    categories.forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category ===
        categoryName
      );

    });


    searchInput.value = "";

    clearSearch.style.display =
      "none";


    renderCategory(
      categoryName
    );

  }


  categories.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectCategory(
          button.dataset.category
        );

      }
    );

  });


  /* =====================================================
     BUSCA
     ===================================================== */

  function searchMenu(value) {

    const query =
      normalize(value.trim());


    if (!query) {

      clearSearch.style.display =
        "none";

      searchResults.innerHTML = "";

      searchResults.classList.add(
        "hidden"
      );

      renderCategory("petiscos");

      return;

    }


    clearSearch.style.display =
      "block";


    menuContent.innerHTML = "";


    categories.forEach(button => {

      button.classList.remove(
        "active"
      );

    });


    const results =
      menu.filter(item => {

        const searchable =
          normalize(
            `${item.name} ${item.description || ""} ${item.categoryName}`
          );

        return searchable.includes(
          query
        );

      });


    searchResults.innerHTML = "";


    if (!results.length) {

      searchResults.classList.add(
        "hidden"
      );

      const noResults =
        document.createElement("div");

      noResults.className =
        "no-results";

      noResults.innerHTML = `

        <strong>
          Nenhum item encontrado.
        </strong>

        <span>
          Tente pesquisar por outro prato ou bebida.
        </span>

      `;

      menuContent.appendChild(
        noResults
      );

      return;

    }


    searchResults.classList.remove(
      "hidden"
    );


    const title =
      document.createElement("div");

    title.className =
      "category-title";


    title.innerHTML = `

      <h3>
        Resultados
      </h3>

      <span>
        ${results.length} encontrados
      </span>

    `;


    const grid =
      document.createElement("div");

    grid.className =
      "menu-grid";


    results.forEach(item => {

      grid.appendChild(
        createItem(item)
      );

    });


    searchResults.appendChild(title);

    searchResults.appendChild(grid);

  }


  searchInput.addEventListener(
    "input",
    event => {

      searchMenu(
        event.target.value
      );

    }
  );


  clearSearch.addEventListener(
    "click",
    () => {

      searchInput.value = "";

      clearSearch.style.display =
        "none";

      renderCategory(
        "petiscos"
      );

    }
  );


  /* =====================================================
     ABRIR CARDÁPIO
     ===================================================== */

  function openMenu() {

    document
      .getElementById("cardapio")
      .scrollIntoView({
        behavior: "smooth"
      });

  }


  openMenuButton.addEventListener(
    "click",
    openMenu
  );


  heroMenuButton.addEventListener(
    "click",
    openMenu
  );


  /* =====================================================
     CARRINHO
     ===================================================== */

  function addToCart(item) {

    const existing =
      cart.find(
        product =>
          product.name === item.name
      );


    if (existing) {

      existing.quantity++;

    } else {

      cart.push({

        ...item,

        quantity: 1

      });

    }


    updateCart();

    openCart();

  }


  function removeFromCart(name) {

    cart =
      cart.filter(
        item =>
          item.name !== name
      );

    updateCart();

  }


  function changeQuantity(
    name,
    change
  ) {

    const item =
      cart.find(
        product =>
          product.name === name
      );


    if (!item) {
      return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

      removeFromCart(
        name
      );

      return;

    }


    updateCart();

  }


  function updateCart() {

    cartItems.innerHTML = "";


    if (!cart.length) {

      cartEmpty.style.display =
        "flex";

    } else {

      cartEmpty.style.display =
        "none";

    }


    let total = 0;

    let count = 0;


    cart.forEach(item => {

      total +=
        item.price *
        item.quantity;

      count +=
        item.quantity;


      const element =
        document.createElement(
          "div"
        );


      element.className =
        "cart-item";


      element.innerHTML = `

        <div class="cart-item-top">

          <div class="cart-item-name">
            ${item.name}
          </div>

          <div class="cart-item-price">
            ${money(
              item.price *
              item.quantity
            )}
          </div>

        </div>

        <div class="quantity-control">

          <button
            data-action="minus"
          >
            −
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            data-action="plus"
          >
            +
          </button>

        </div>

      `;


      element
        .querySelector(
          '[data-action="minus"]'
        )
        .addEventListener(
          "click",
          () => {

            changeQuantity(
              item.name,
              -1
            );

          }
        );


      element
        .querySelector(
          '[data-action="plus"]'
        )
        .addEventListener(
          "click",
          () => {

            changeQuantity(
              item.name,
              1
            );

          }
        );


      cartItems.appendChild(
        element
      );

    });


    cartCount.textContent =
      count;


    cartTotal.textContent =
      money(total);

  }


  /* =====================================================
     ABRIR / FECHAR CARRINHO
     ===================================================== */

  function openCart() {

    cartPanel.classList.add(
      "open"
    );

    cartOverlay.classList.add(
      "open"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeCartPanel() {

    cartPanel.classList.remove(
      "open"
    );

    cartOverlay.classList.remove(
      "open"
    );

    document.body.style.overflow =
      "";

  }


  cartButton.addEventListener(
    "click",
    openCart
  );


  closeCart.addEventListener(
    "click",
    closeCartPanel
  );


  cartOverlay.addEventListener(
    "click",
    closeCartPanel
  );


  /* =====================================================
     CHECKOUT
     ===================================================== */

  checkoutButton.addEventListener(
    "click",
    () => {

      if (!cart.length) {

        alert(
          "Adicione pelo menos um item ao pedido."
        );

        return;

      }


      checkoutModal.classList.add(
        "open"
      );

    }
  );


  closeCheckout.addEventListener(
    "click",
    () => {

      checkoutModal.classList.remove(
        "open"
      );

    }
  );


  /* =====================================================
     ENVIO DO PEDIDO
     ===================================================== */

  sendOrder.addEventListener(
    "click",
    () => {

      const name =
        customerName.value.trim();


      const note =
        customerNote.value.trim();


      if (!name) {

        alert(
          "Digite seu nome para continuar."
        );

        customerName.focus();

        return;

      }


      let message =
        `Olá, Viracopos Gastrobar!%0A%0A`;

      message +=
        `Gostaria de fazer este pedido:%0A%0A`;


      let total = 0;


      cart.forEach(item => {

        const subtotal =
          item.price *
          item.quantity;


        total += subtotal;


        message +=
          `${item.quantity}x ${item.name} — ${money(subtotal)}%0A`;

      });


      message +=
        `%0A*Total: ${money(total)}*%0A`;


      message +=
        `%0ANome: ${name}`;


      if (note) {

        message +=
          `%0AObservação: ${note}`;

      }


      message +=
        `%0A%0AEnviado pelo cardápio digital do Viracopos.`;


      /*
      Número informado anteriormente para o Viracopos.
      */

      const phone =
        "5561995634865";


      const whatsappURL =
        `https://wa.me/${phone}?text=${message}`;


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );


  /* =====================================================
     ANO
     ===================================================== */

  document.getElementById(
    "currentYear"
  ).textContent =
    new Date().getFullYear();


  /* =====================================================
     INICIALIZAÇÃO
     ===================================================== */

  selectCategory(
    "petiscos"
  );

  updateCart();

});
