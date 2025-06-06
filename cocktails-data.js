const allCocktails = [
  {
    "id": "pomelle-spritz",
    "name": "Pomelle Spritz",
    "category": "signature",
    "method": "Build",
    "glass": "Wine Glass",
    "ice": "Ice Cubes",
    "garnish": "Grapefruit slice (1)",
    "ingredients": [
      {
        "name": "Pomelle Elderflower",
        "qty": "50ml"
      },
      {
        "name": "FT Soda",
        "qty": "80ml"
      },
      {
        "name": "Prosseco",
        "qty": "80ml"
      }
    ]
  },
  {
    "id": "twinkle-signature",
    "name": "Twinkle",
    "category": "signature",
    "method": "Shake, top",
    "glass": "Caprice Coupette",
    "ice": "No ice",
    "garnish": "Lemon Zest (1)",
    "ingredients": [
      {
        "name": "Belvedere",
        "qty": "30ml"
      },
      {
        "name": "Elderflower Cordial",
        "qty": "20ml"
      },
      {
        "name": "Henriot",
        "qty": "40ml"
      }
    ]
  },
  {
    "id": "sc-french-75",
    "name": "French 75",
    "category": "signature",
    "method": "Shake / top",
    "glass": "Flute",
    "ice": "No ice",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Tanqueray N10",
        "qty": "30ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "20ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Henriot Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "white-negroni-signature",
    "name": "White Negroni",
    "category": "signature",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Ice Block",
    "garnish": "Orange Zest (1)",
    "ingredients": [
      {
        "name": "Monkey 47",
        "qty": "25ml"
      },
      {
        "name": "Schoefields Dry Vermouth",
        "qty": "25ml"
      },
      {
        "name": "Luxardo Bitter",
        "qty": "25ml"
      }
    ]
  },
  {
    "id": "singapore-sling-signature",
    "name": "Singapore Sling",
    "category": "signature",
    "method": "Shake",
    "glass": "Highball",
    "ice": "Ice Cubes",
    "garnish": "Orange & Cherry (1)",
    "ingredients": [
      {
        "name": "Tanqueray 10",
        "qty": "30ml"
      },
      {
        "name": "Pineapple juice",
        "qty": "50ml"
      },
      {
        "name": "Lime",
        "qty": "15ml"
      },
      {
        "name": "Cherry Heering",
        "qty": "15ml"
      },
      {
        "name": "Cointreau",
        "qty": "7.5ml"
      },
      {
        "name": "Dom Benedictine",
        "qty": "7.5ml"
      },
      {
        "name": "Grenadine",
        "qty": "10ml"
      }
    ]
  },
  {
    "id": "mai-tai-signature",
    "name": "Mai Tai",
    "category": "signature",
    "method": "Shake",
    "glass": "Rona Thumbler",
    "ice": "Cube & Crushed",
    "garnish": "Dried orange, lime & Mint (1)",
    "ingredients": [
      {
        "name": "RSDC 11yo",
        "qty": "30ml"
      },
      {
        "name": "RSDC Carta Blanca",
        "qty": "20ml"
      },
      {
        "name": "Cointreau",
        "qty": "10ml"
      },
      {
        "name": "Lime",
        "qty": "20ml"
      },
      {
        "name": "Monin Orgeat",
        "qty": "10ml"
      }
    ]
  },
  {
    "id": "clover-club-signature",
    "name": "Clover Club",
    "category": "signature",
    "method": "Shake",
    "glass": "Caprice Coupette",
    "ice": "No ice",
    "garnish": "Raspberry Powder (1)",
    "ingredients": [
      {
        "name": "Silent Pool",
        "qty": "35ml"
      },
      {
        "name": "Schoefields Dry Vermouth",
        "qty": "15ml"
      },
      {
        "name": "Raspberry Puree",
        "qty": "20ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "10ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Foamer",
        "qty": "3 dashes"
      }
    ]
  },
  {
    "id": "sc-margarita",
    "name": "SC Margarita",
    "category": "signature",
    "method": "Shake",
    "glass": "Nick&Nora/Rocks",
    "ice": "As per glass choice",
    "garnish": "Salt Rim",
    "ingredients": [
      {
        "name": "Casamigos Blanco",
        "qty": "30ml"
      },
      {
        "name": "Cointreau",
        "qty": "20ml"
      },
      {
        "name": "Lost Exp Espadin",
        "qty": "5ml"
      },
      {
        "name": "DJ 1942",
        "qty": "5ml"
      },
      {
        "name": "Muyu Chinotto",
        "qty": "2.5ml"
      },
      {
        "name": "Lime Juice",
        "qty": "20ml"
      }
    ]
  },
  {
    "id": "sc-champagne-cocktail",
    "name": "SC-Champagne Cocktail",
    "category": "signature",
    "method": "Stir",
    "glass": "Champagne coupe",
    "ice": "No ice",
    "garnish": "Golden Sugar cube",
    "ingredients": [
      {
        "name": "Angostura",
        "qty": "4 dashes"
      },
      {
        "name": "RÃƒÂ©my Martin VSOP",
        "qty": "15ml"
      },
      {
        "name": "Peach Liqueur",
        "qty": "5ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "sc-paloma",
    "name": "SC Paloma",
    "category": "signature",
    "method": "Shake",
    "glass": "Highball",
    "ice": "Cubes",
    "garnish": "Dehydrated Grapefruit (1), Raspberry Powder Rim (1)",
    "ingredients": [
      {
        "name": "Don Julio Reposado",
        "qty": "30ml"
      },
      {
        "name": "Grapefruit Cordial",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "10ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Peychauds Bitters",
        "qty": "1 dash"
      },
      {
        "name": "FT Soda",
        "qty": "50ml"
      }
    ]
  },
  {
    "id": "picante",
    "name": "Picante",
    "category": "signature",
    "method": "Shake",
    "glass": "Rona Thumbler",
    "ice": "Cubes",
    "garnish": "Salt Rim (1)",
    "ingredients": [
      {
        "name": "Patron Silver",
        "qty": "40ml"
      },
      {
        "name": "Lime juice",
        "qty": "30ml"
      },
      {
        "name": "Agave Syrup",
        "qty": "15ml"
      },
      {
        "name": "Chili Shrub/Tabasco",
        "qty": "3 dashes"
      },
      {
        "name": "Coriander Bitters",
        "qty": "2 dashes"
      }
    ]
  },
  {
    "id": "old-fashioned-signature",
    "name": "Old Fashioned",
    "category": "signature",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Ice Block",
    "garnish": "Peppermint Bitters (3 dashes), Rhubarb Meringue (lemon zest discarded) (1)",
    "ingredients": [
      {
        "name": "JW Black",
        "qty": "35ml"
      },
      {
        "name": "JW Blue",
        "qty": "5ml"
      },
      {
        "name": "Rabarbaro Aperetivo",
        "qty": "5ml"
      },
      {
        "name": "PX Nectar",
        "qty": "5ml"
      },
      {
        "name": "Merlet Apricot",
        "qty": "5ml"
      },
      {
        "name": "Demerara Syrup",
        "qty": "5ml"
      }
    ]
  },
  {
    "id": "vesper",
    "name": "Vesper",
    "category": "signature",
    "method": "Royal Shake",
    "glass": "Caprice Coupette",
    "ice": "No ice",
    "garnish": "Lemon Zest (1)",
    "ingredients": [
      {
        "name": "Cygnet 22",
        "qty": "40ml"
      },
      {
        "name": "Ketel One",
        "qty": "20ml"
      },
      {
        "name": "Fugit Kina",
        "qty": "10ml"
      }
    ]
  },
  {
    "id": "lychee-tini",
    "name": "Lychee Tini",
    "category": "signature",
    "method": "Stir",
    "glass": "Savage Pony",
    "ice": "No Ice",
    "garnish": "Grape (1)",
    "ingredients": [
      {
        "name": "Grey Goose La Poire",
        "qty": "Check Source"
      },
      {
        "name": "Briottet Lychee",
        "qty": "Check Source"
      },
      {
        "name": "Manchino Sakura Vermouth",
        "qty": "75ml"
      },
      {
        "name": "Verjus",
        "qty": "Check Source"
      }
    ]
  },
  {
    "id": "lemon-drop",
    "name": "Lemon Drop",
    "category": "signature",
    "method": "Shake",
    "glass": "Caprice Coupette",
    "ice": "No ice",
    "garnish": "Sugar rim",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "30ml"
      },
      {
        "name": "Italicus",
        "qty": "20ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      }
    ]
  },
  {
    "id": "whisky-cobbler",
    "name": "Whisky Cobbler",
    "category": "signature",
    "method": "Shake, top",
    "glass": "Savage Highball",
    "ice": "Cube & Crushed",
    "garnish": "Peychauds bitters (2 dashes), Dry Apple slice, straw (1)",
    "ingredients": [
      {
        "name": "Macallan 12yo",
        "qty": "25ml"
      },
      {
        "name": "Pear Puree",
        "qty": "20ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "15ml"
      },
      {
        "name": "Elderflower Cordial",
        "qty": "20ml"
      },
      {
        "name": "FT Soda",
        "qty": "40ml"
      }
    ]
  },
  {
    "id": "grapefruit-collins",
    "name": "Grapefruit Collins",
    "category": "signature",
    "method": "Shake, float",
    "glass": "Savage Highball",
    "ice": "Cubes",
    "garnish": "Grapefruit wedge (1)",
    "ingredients": [
      {
        "name": "Ciroc",
        "qty": "20ml"
      },
      {
        "name": "Aperol",
        "qty": "20ml"
      },
      {
        "name": "Grapefruit Cordial",
        "qty": "30ml"
      },
      {
        "name": "Grapefruit juice",
        "qty": "20ml"
      },
      {
        "name": "LE Espadin (float)",
        "qty": "5ml"
      },
      {
        "name": "FT Soda",
        "qty": "70ml"
      }
    ]
  },
  {
    "id": "aviation",
    "name": "Aviation",
    "category": "classic",
    "method": "Shake",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "Maraschino cherry (no stick)",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "15ml"
      },
      {
        "name": "Maraschino",
        "qty": "7.5ml"
      },
      {
        "name": "Briottet Violette",
        "qty": "7.5ml"
      }
    ]
  },
  {
    "id": "amaretto-sour",
    "name": "Amaretto Sour",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lemon wedge and 3dash of angostura",
    "ingredients": [
      {
        "name": "Amaretto",
        "qty": "35ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Abricot de Roussillon",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3 pipette"
      }
    ]
  },
  {
    "id": "absinthe-frappe",
    "name": "Absinthe Frappe",
    "category": "classic",
    "method": "Build",
    "glass": "Rock",
    "ice": "Crashed",
    "garnish": "Mint spring",
    "ingredients": [
      {
        "name": "Absinthe",
        "qty": "30ml"
      },
      {
        "name": "Sugar syrup",
        "qty": "5ml"
      },
      {
        "name": "Soda Water",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "americano-cocktail",
    "name": "Americano Cocktail",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Orange wedge",
    "ingredients": [
      {
        "name": "Antica",
        "qty": "35ml"
      },
      {
        "name": "Campari",
        "qty": "35ml"
      },
      {
        "name": "Soda",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "aperol-campari-spritz",
    "name": "Aperol/Campari Spritz",
    "category": "classic",
    "method": "Build",
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Orange wedge",
    "ingredients": [
      {
        "name": "Aperol/Campari",
        "qty": "50ml"
      },
      {
        "name": "Soda",
        "qty": "25ml"
      },
      {
        "name": "Vouvray Brut",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "airmail",
    "name": "Airmail",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba AÃƒÂ±ejo 8yo",
        "qty": "30ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Honey Water (1:1)",
        "qty": "15ml"
      },
      {
        "name": "Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "brandy-alexander",
    "name": "Brandy Alexander",
    "category": "classic",
    "method": "Shake",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "Grated nutmeg",
    "ingredients": [
      {
        "name": "RÃƒÂ©my Martin VSOP",
        "qty": "30ml"
      },
      {
        "name": "Creme de Cacao Brown",
        "qty": "30ml"
      },
      {
        "name": "Cream",
        "qty": "30ml"
      }
    ],
    "allergens": "MILK"
  },
  {
    "id": "bramble",
    "name": "Bramble",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Crushed",
    "garnish": "Black berry and straw(s)",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "40ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Merlet Mure",
        "qty": "10ml"
      }
    ]
  },
  {
    "id": "bacardi-cocktail",
    "name": "Bacardi Cocktail",
    "category": "classic",
    "method": "Shake",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "Dehydrated live wheel",
    "ingredients": [
      {
        "name": "Bacardi",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Grenadine",
        "qty": "15ml"
      }
    ]
  },
  {
    "id": "bellini",
    "name": "Bellini",
    "category": "classic",
    "method": "Build",
    "glass": "Riedel flute",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Peach Puree",
        "qty": "50ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Peach Liqueur",
        "qty": "5ml"
      },
      {
        "name": "Prosecco",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "black-russian",
    "name": "Black Russian",
    "category": "classic",
    "method": "Build",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Coffee Liqueur",
        "qty": "35ml"
      },
      {
        "name": "Ketel One",
        "qty": "35ml"
      }
    ]
  },
  {
    "id": "blood-and-sand",
    "name": "Blood and Sand",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "Orange twist",
    "ingredients": [
      {
        "name": "JW Black Label",
        "qty": "25ml"
      },
      {
        "name": "Antica Formula",
        "qty": "20ml"
      },
      {
        "name": "Orange Juice",
        "qty": "20ml"
      },
      {
        "name": "Cherry Herring",
        "qty": "20ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "brandy-crusta",
    "name": "Brandy Crusta",
    "category": "classic",
    "method": "Shake",
    "glass": "Liqueurs glass",
    "ice": "No ice",
    "garnish": "Full sugar rim and lemon twist",
    "ingredients": [
      {
        "name": "RÃƒÂ©my Martin VSOP",
        "qty": "60ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "5ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Cointreau",
        "qty": "5ml"
      },
      {
        "name": "Orange Bitters",
        "qty": "2dash"
      }
    ]
  },
  {
    "id": "brooklyn",
    "name": "Brooklyn",
    "category": "classic",
    "method": "Stir",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "Maraschino sherry",
    "ingredients": [
      {
        "name": "Woodford Rye",
        "qty": "30ml"
      },
      {
        "name": "SCHOFIELD'S Prat",
        "qty": "30ml"
      },
      {
        "name": "Amer Picon",
        "qty": "5ml"
      },
      {
        "name": "Maraschino",
        "qty": "5ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "black-velvet",
    "name": "Black Velvet",
    "category": "classic",
    "method": "Build",
    "glass": "Small Hiball",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Frangelico",
        "qty": "5ml"
      },
      {
        "name": "Guinness",
        "qty": "100ml"
      },
      {
        "name": "Henriot Champagne",
        "qty": "100ml"
      }
    ],
    "allergens": "SULPHITES, TREE NUTS, PEANUTS"
  },
  {
    "id": "bloody-mary",
    "name": "Bloody Mary",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lemon wedge",
    "ingredients": [
      {
        "name": "Tomato Juice",
        "qty": "90ml"
      },
      {
        "name": "Mary Mix",
        "qty": "15ml(Low), 25ml(Medium), 35ml(Spicy)"
      },
      {
        "name": "Lemon Juice",
        "qty": "10ml"
      }
    ],
    "allergens": "MUSTARD, EGGS, FISH, CELERY, SULPHITES"
  },
  {
    "id": "bloody-mary-mix",
    "name": "Bloody Mary Mix",
    "category": "classic",
    "method": "Build",
    "ingredients": [
      {
        "name": "Horseradish",
        "qty": "2 bar spoon"
      },
      {
        "name": "Celery Seeds",
        "qty": "6 pinches"
      },
      {
        "name": "Green Tabasco",
        "qty": "45ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "50ml"
      },
      {
        "name": "Worcestershire sauce",
        "qty": "150ml"
      },
      {
        "name": "Passata Tomato",
        "qty": "250ml"
      },
      {
        "name": "V8 Tomato Juice",
        "qty": "1.5l"
      }
    ],
    "allergens": "MUSTARD, EGGS, FISH, CELERY, SULPHITES"
  },
  {
    "id": "boulevardier",
    "name": "Boulevardier",
    "category": "classic",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Orange twist",
    "ingredients": [
      {
        "name": "Maker's Mark",
        "qty": "40ml"
      },
      {
        "name": "Campari",
        "qty": "20ml"
      },
      {
        "name": "Antica Formula",
        "qty": "20ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "bucks-fizz-mimosa",
    "name": "Buck's Fizz/Mimosa",
    "category": "classic",
    "method": "Build",
    "glass": "Tall flute",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Orange Juice",
        "qty": "100ml"
      },
      {
        "name": "Ruggeri",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "champagne-cocktail",
    "name": "Champagne Cocktail",
    "category": "classic",
    "method": "Build",
    "glass": "Tall flute",
    "ice": "No ice",
    "garnish": "White Sugar Cube",
    "ingredients": [
      {
        "name": "Angostura",
        "qty": "4 dashes"
      },
      {
        "name": "RÃƒÂ©my Martin VSOP",
        "qty": "25ml"
      },
      {
        "name": "Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "charlie-chaplin",
    "name": "Charlie Chaplin",
    "category": "classic",
    "method": "Shaken",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Sloe Gin",
        "qty": "30ml"
      },
      {
        "name": "Apricot Liqueur",
        "qty": "30ml"
      },
      {
        "name": "Lime Juice",
        "qty": "30ml"
      }
    ]
  },
  {
    "id": "cosmopolitan1749234543046",
    "name": "Cosmopolitan",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "Orange twist",
    "ingredients": [
      {
        "name": "Ketel Citroen",
        "qty": "35ml"
      },
      {
        "name": "Cointreau",
        "qty": "20ml"
      },
      {
        "name": "Lime Juice",
        "qty": "20ml"
      },
      {
        "name": "Cranberry Juice",
        "qty": "30ml"
      }
    ],
    "allergens": null
  },
  {
    "id": "caipirinha",
    "name": "Caipirinha",
    "category": "classic",
    "method": "Build",
    "glass": "Rock",
    "ice": "Crashed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Yaguara Cachaca",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Lime Wedges",
        "qty": "2"
      }
    ]
  },
  {
    "id": "clover-club",
    "name": "Clover Club",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "2 Raspberries on stick",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "SCHOFIELD'S Prat",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3 pipette"
      },
      {
        "name": "Raspberries",
        "qty": "3"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "corpse-rev-no-2",
    "name": "Corpse Rev No.2",
    "category": "classic",
    "method": "Shake",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "20ml"
      },
      {
        "name": "SCHOFIELD'S Prat",
        "qty": "20ml"
      },
      {
        "name": "Cointreau",
        "qty": "20ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "20ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "dark-and-stormy",
    "name": "Dark and Stormy",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lime wedge and 3 dash angostura bitters",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba AÃƒÂ±ejo 8yo",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "10ml"
      },
      {
        "name": "Ginger Beer",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "death-in-the-afternoon",
    "name": "Death in the Afternoon",
    "category": "classic",
    "method": "Build",
    "glass": "Caprice flute",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Absinthe",
        "qty": "30ml"
      },
      {
        "name": "Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "elderflower-colins",
    "name": "Elderflower Colins",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Mint spring",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Elderflower Cordial",
        "qty": "20ml"
      },
      {
        "name": "Soda",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "espresso-martini",
    "name": "Espresso Martini",
    "category": "classic",
    "method": "Shake",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "No garnish (often 3 coffee beans)",
    "ingredients": [
      {
        "name": "Espresso",
        "qty": "50ml"
      },
      {
        "name": "Ketel One (Vodka)",
        "qty": "20ml"
      },
      {
        "name": "KahlÃƒÂºa Coffee Liqueur",
        "qty": "20ml"
      },
      {
        "name": "Giffard Vanille",
        "qty": "10ml"
      }
    ]
  },
  {
    "id": "el-diablo",
    "name": "El Diablo",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Casamigos Blanco",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Creme de Cassis",
        "qty": "15ml"
      },
      {
        "name": "Ginger Ale",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "french-75",
    "name": "French 75",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Flute",
    "ice": "No ice",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "30ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "20ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Henriot Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "french-martini",
    "name": "French Martini",
    "category": "classic",
    "method": "Shake / Dry shake",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": null,
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "35ml"
      },
      {
        "name": "Pineapple Juice",
        "qty": "30ml"
      },
      {
        "name": "Chambord (Raspberry liqueur)",
        "qty": "20ml"
      }
    ]
  },
  {
    "id": "gimlet",
    "name": "Gimlet",
    "category": "classic",
    "method": "Shake",
    "glass": "Caprice coupe",
    "ice": "No ice",
    "garnish": "Lime twist",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Lime Cordial",
        "qty": "25ml"
      }
    ]
  },
  {
    "id": "golden-dawn",
    "name": "Golden Dawn",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "2.5ml grenadine (bottom of the glass)",
    "ingredients": [
      {
        "name": "Avallen Calvados",
        "qty": "20ml"
      },
      {
        "name": "Tanqueray LD",
        "qty": "20ml"
      },
      {
        "name": "Apricot Liqueur",
        "qty": "20ml"
      },
      {
        "name": "Orange Juice",
        "qty": "20ml"
      }
    ]
  },
  {
    "id": "grasshopper",
    "name": "Grasshopper",
    "category": "classic",
    "method": "Shake",
    "glass": "Caprice coupe",
    "ice": "No ice",
    "garnish": "Mint leaf",
    "ingredients": [
      {
        "name": "Creme de Menthe Verte",
        "qty": "30ml"
      },
      {
        "name": "Creme de Cacao Ambre",
        "qty": "30ml"
      },
      {
        "name": "Double Cream",
        "qty": "30ml"
      }
    ],
    "allergens": "MILK"
  },
  {
    "id": "hugo-spritz",
    "name": "Hugo Spritz",
    "category": "classic",
    "method": "Build",
    "glass": "Wine glass",
    "ice": "Cubed",
    "garnish": "Mint spring",
    "ingredients": [
      {
        "name": "St Germain",
        "qty": "30ml"
      },
      {
        "name": "Soda Water",
        "qty": "25ml"
      },
      {
        "name": "Lime Juice",
        "qty": "10ml"
      },
      {
        "name": "Prosecco",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "hemingway-daiquiri",
    "name": "Hemingway Daiquiri",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "Dehydrated lime wheel",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba Blanco",
        "qty": "50ml"
      },
      {
        "name": "Grapefruit Juice",
        "qty": "30ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Maraschino",
        "qty": "5ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      }
    ]
  },
  {
    "id": "horses-neck",
    "name": "Horse's Neck",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Cubbed",
    "garnish": "Long lemon twist",
    "ingredients": [
      {
        "name": "Maker's Mark",
        "qty": "50ml"
      },
      {
        "name": "Ginger Ale",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "irish-coffee",
    "name": "Irish Coffee",
    "category": "classic",
    "method": "Build",
    "glass": "Liqueur coffee glass",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Roe & Co",
        "qty": "30ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Americano Coffee",
        "qty": "Top"
      },
      {
        "name": "Double Cream",
        "qty": "Float"
      }
    ],
    "allergens": "MILK"
  },
  {
    "id": "jungle-bird",
    "name": "Jungle Bird",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba AÃƒÂ±ejo 8yo",
        "qty": "45ml"
      },
      {
        "name": "Pineapple Juice",
        "qty": "45ml"
      },
      {
        "name": "Campari",
        "qty": "20ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "knickerbocker",
    "name": "Knickerbocker",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Crushed",
    "garnish": "Orange wedge and raspberries",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba Blanco",
        "qty": "40ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "20ml"
      },
      {
        "name": "Cointreau",
        "qty": "10ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Raspberries",
        "qty": "3"
      }
    ]
  },
  {
    "id": "kir-royal",
    "name": "Kir Royal",
    "category": "classic",
    "method": "Build",
    "glass": "Tall flute",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Creme de Cassis",
        "qty": "5ml"
      },
      {
        "name": "Henriot Brut Champagne",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "long-island-iced-tea",
    "name": "Long Island Iced Tea",
    "category": "classic",
    "method": "Shake",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lemon wedge",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "15ml"
      },
      {
        "name": "Tanqueray LD",
        "qty": "15ml"
      },
      {
        "name": "Casamigos Blanco",
        "qty": "15ml"
      },
      {
        "name": "Ron Santiago de Cuba Blanco",
        "qty": "15ml"
      },
      {
        "name": "Cointreau",
        "qty": "15ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Coke",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "last-word",
    "name": "Last Word",
    "category": "classic",
    "method": "Shake",
    "glass": "Caprice coupe",
    "ice": "No ice",
    "garnish": "Maraschino sherry",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "20ml"
      },
      {
        "name": "Lime Juice",
        "qty": "20ml"
      },
      {
        "name": "Maraschino",
        "qty": "20ml"
      },
      {
        "name": "Green Chartreuse",
        "qty": "20ml"
      }
    ],
    "allergens": "SESAME"
  },
  {
    "id": "martini",
    "name": "Martini",
    "category": "classic",
    "method": "Stir",
    "glass": "Martini",
    "ice": "No ice",
    "garnish": "Lemon twist / 2 olives on stick",
    "ingredients": [
      {
        "name": "Gin/Vodka",
        "qty": "60ml"
      },
      {
        "name": "SCHOFIELD'S (Dry)",
        "qty": "5ml"
      },
      {
        "name": "Gin/Vodka (Wet)",
        "qty": "60ml"
      },
      {
        "name": "SCHOFIELD'S (Wet)",
        "qty": "15ml"
      },
      {
        "name": "Olive Brine (Dirty)",
        "qty": "+10ml"
      },
      {
        "name": "muddled Olive (Filthy)",
        "qty": "+"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "manhattan",
    "name": "Manhattan",
    "category": "classic",
    "method": "Stir",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "Maraschino cherry (sweet) / Orange twist (perfect) / Lemon twist (dry)",
    "ingredients": [
      {
        "name": "Maker's Mark (Sweet)",
        "qty": "50ml"
      },
      {
        "name": "Antica (Sweet)",
        "qty": "25ml"
      },
      {
        "name": "Angostura (Sweet)",
        "qty": "2dash"
      },
      {
        "name": "Maker's Mark (Perfect)",
        "qty": "50ml"
      },
      {
        "name": "Anitca (Perfect)",
        "qty": "12.5ml"
      },
      {
        "name": "SCHOFIELD'S (Perfect)",
        "qty": "12.5ml"
      },
      {
        "name": "Angostura (Perfect)",
        "qty": "2dash"
      },
      {
        "name": "Maker's Mark (Dry)",
        "qty": "50ml"
      },
      {
        "name": "SCHOFIELD'S (Dry)",
        "qty": "25ml"
      },
      {
        "name": "Angostura (Dry)",
        "qty": "2dash"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "mojito",
    "name": "Mojito",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Crushed",
    "garnish": "Mint spring and straw",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba Blanco",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Mint Leaves",
        "qty": "8"
      }
    ]
  },
  {
    "id": "martinez",
    "name": "Martinez",
    "category": "classic",
    "method": "Stir",
    "glass": "Nick and nora",
    "ice": "No ice",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Antica",
        "qty": "50ml"
      },
      {
        "name": "Tanqueray LD",
        "qty": "25ml"
      },
      {
        "name": "Maraschino",
        "qty": "5ml"
      },
      {
        "name": "Boker's Bitters",
        "qty": "1dash"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "mai-tai",
    "name": "Mai Tai",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Crushed",
    "garnish": "Mint spring, orange wedge and raspberries",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba Blanco",
        "qty": "20ml"
      },
      {
        "name": "Ron Santiago de Cuba AÃƒÂ±ejo 8yo",
        "qty": "20ml"
      },
      {
        "name": "Lime Juice",
        "qty": "20ml"
      },
      {
        "name": "Cointreau",
        "qty": "10ml"
      },
      {
        "name": "Orgeat Syrup",
        "qty": "10ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      }
    ],
    "allergens": "TREE NUTS"
  },
  {
    "id": "milano-torino",
    "name": "Milano-Torino",
    "category": "classic",
    "method": "Build",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Orange wedge",
    "ingredients": [
      {
        "name": "Antica",
        "qty": "35ml"
      },
      {
        "name": "Campari",
        "qty": "35ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "mint-julep",
    "name": "Mint Julep",
    "category": "classic",
    "method": "Build",
    "glass": "Julep tin",
    "ice": "Crushed",
    "garnish": "Large mint spring",
    "ingredients": [
      {
        "name": "Maker's Mark",
        "qty": "50ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Mint Leaves",
        "qty": " unspecified"
      },
      {
        "name": "Angostura Bitters",
        "qty": "2dash"
      }
    ]
  },
  {
    "id": "moscow-mule",
    "name": "Moscow Mule",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lime wedge and 3 dash angostura on top",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "10ml"
      },
      {
        "name": "Ginger Beer",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "negroni-sbagliato",
    "name": "Negroni Sbagliato",
    "category": "classic",
    "method": "Stir/top",
    "glass": "Rock",
    "ice": "Cubed",
    "garnish": "Orange wedge",
    "ingredients": [
      {
        "name": "Antica Formula",
        "qty": "30ml"
      },
      {
        "name": "Campari",
        "qty": "30ml"
      },
      {
        "name": "Ruggeri",
        "qty": "Top up"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "negroni",
    "name": "Negroni",
    "category": "classic",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Orange twist",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "25ml"
      },
      {
        "name": "Antica",
        "qty": "25ml"
      },
      {
        "name": "Campari",
        "qty": "25ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "new-york-sour",
    "name": "New York Sour",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "15ml red wine (floating)",
    "ingredients": [
      {
        "name": "Woodford Rye",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3pipette"
      }
    ]
  },
  {
    "id": "old-fashioned",
    "name": "Old Fashioned",
    "category": "classic",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Orange twist",
    "ingredients": [
      {
        "name": "Maker's Mark",
        "qty": "50ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Angostura",
        "qty": "3dash"
      }
    ]
  },
  {
    "id": "old-pal",
    "name": "Old Pal",
    "category": "classic",
    "method": "Stir",
    "glass": "Caprice coupe",
    "ice": "No ice",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Woodford Rye",
        "qty": "30ml"
      },
      {
        "name": "Campari",
        "qty": "30ml"
      },
      {
        "name": "SCHOFIELD'S Prat",
        "qty": "30ml"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "old-cuban",
    "name": "Old Cuban",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "Mint leaf",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba AÃƒÂ±ejo 8yo",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Mint Leaves",
        "qty": " unspecified"
      },
      {
        "name": "Henriot Brut",
        "qty": "Top up"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "paper-plane",
    "name": "Paper Plane",
    "category": "classic",
    "method": "Shake",
    "glass": "Caprice coupe",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Maker's Mark",
        "qty": "20ml"
      },
      {
        "name": "Amaro Montenegro",
        "qty": "20ml"
      },
      {
        "name": "Aperol",
        "qty": "20ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "20ml"
      }
    ]
  },
  {
    "id": "passionfruit-martini",
    "name": "Passionfruit Martini",
    "category": "classic",
    "method": "Shake",
    "glass": "Coupe",
    "ice": "No ice",
    "garnish": "1/2 passion fruit",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "40ml"
      },
      {
        "name": "Pineapple Juice",
        "qty": "40ml"
      },
      {
        "name": "Passionfruit liqueur",
        "qty": "15ml"
      },
      {
        "name": "Vanilla Liqueur",
        "qty": "10ml"
      },
      {
        "name": "Lime Juice",
        "qty": "10ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Passionfruit",
        "qty": "1/2"
      }
    ]
  },
  {
    "id": "pisco-sour",
    "name": "Pisco Sour",
    "category": "classic",
    "method": "Hard dry shake / shake",
    "glass": "Nick and nora",
    "ice": "No Ice",
    "garnish": "Angostura Bitter  harts 3 drops",
    "ingredients": [
      {
        "name": "Barsol Primero",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "12.5ml"
      },
      {
        "name": "Lime Juice",
        "qty": "12.5ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3 pipette"
      }
    ]
  },
  {
    "id": "pina-colada",
    "name": "Pina Colada",
    "category": "classic",
    "method": "Shake",
    "glass": "Hiball",
    "ice": "Cubed/crushed",
    "garnish": "Maraschino sherry and mint spring",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba Blanco",
        "qty": "50ml"
      },
      {
        "name": "Pineapple Juice",
        "qty": "40ml"
      },
      {
        "name": "Coco Real",
        "qty": "35ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Angostura",
        "qty": "1dash"
      }
    ]
  },
  {
    "id": "paloma",
    "name": "Paloma",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Casamigos Blanco",
        "qty": "50ml"
      },
      {
        "name": "Grapefruit Juice",
        "qty": "60ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Salt",
        "qty": "1pinch"
      },
      {
        "name": "Soda",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "rusty-nail",
    "name": "Rusty Nail",
    "category": "classic",
    "method": "Build",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "JW Black Label",
        "qty": "50ml"
      },
      {
        "name": "Drambuie",
        "qty": "25ml"
      }
    ]
  },
  {
    "id": "ramos-gin-fizz",
    "name": "Ramos Gin Fizz",
    "category": "classic",
    "method": "Hard dry shake / shake",
    "glass": "Hiball",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Double Cream",
        "qty": "30ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1pipette"
      },
      {
        "name": "Orange Flower Water",
        "qty": "4drops"
      },
      {
        "name": "Soda",
        "qty": "Top"
      }
    ],
    "allergens": "MILK"
  },
  {
    "id": "rattlesnake",
    "name": "Rattlesnake",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Woodford Rye",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Absinthe",
        "qty": "3dash"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3 pipette"
      }
    ]
  },
  {
    "id": "rob-roy",
    "name": "Rob Roy",
    "category": "classic",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Orange twist",
    "ingredients": [
      {
        "name": "JW Black Label",
        "qty": "50ml"
      },
      {
        "name": "Antica",
        "qty": "25ml"
      },
      {
        "name": "Orange Bitters",
        "qty": "1dash"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "southside-fizz",
    "name": "Southside Fizz",
    "category": "classic",
    "method": "Shake / top",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Mint spring",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Mint Leaves",
        "qty": "6"
      },
      {
        "name": "Soda",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "sidecar",
    "name": "Sidecar",
    "category": "classic",
    "method": "Shake",
    "glass": "Coupe",
    "ice": "No ice",
    "garnish": "Half sugar rim",
    "ingredients": [
      {
        "name": "Martell VSOP",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Cointreau",
        "qty": "25ml"
      }
    ]
  },
  {
    "id": "sazerac",
    "name": "Sazerac",
    "category": "classic",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "No ice",
    "garnish": "Discarded lemon twist",
    "ingredients": [
      {
        "name": "Remy Martin VSOP",
        "qty": "40ml"
      },
      {
        "name": "Woodford Rye",
        "qty": "20ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Peychaud Bitters",
        "qty": "3 dash"
      },
      {
        "name": "Absinthe",
        "qty": "Spray"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "singapore-sling",
    "name": "Singapore Sling",
    "category": "classic",
    "method": "Shake",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Orange wedge and maraschino cherry",
    "ingredients": [
      {
        "name": "Pineapple Juice",
        "qty": "50ml"
      },
      {
        "name": "Tanqueray LD",
        "qty": "30ml"
      },
      {
        "name": "Lime Juice",
        "qty": "15ml"
      },
      {
        "name": "Cherry Herring",
        "qty": "15ml"
      },
      {
        "name": "Grenadine",
        "qty": "10ml"
      },
      {
        "name": "Cointreau",
        "qty": "7.5ml"
      },
      {
        "name": "Benedictine",
        "qty": "7.5ml"
      }
    ]
  },
  {
    "id": "screwdriver",
    "name": "Screwdriver",
    "category": "classic",
    "method": "Build",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "50ml"
      },
      {
        "name": "Orange juice",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "twinkle",
    "name": "Twinkle",
    "category": "classic",
    "method": "Stir/top",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "40ml"
      },
      {
        "name": "Elderflower Cordial",
        "qty": "20ml"
      },
      {
        "name": "Henriot Brut",
        "qty": "Top"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "tom-collins",
    "name": "Tom Collins",
    "category": "classic",
    "method": "Shake",
    "glass": "Hiball",
    "ice": "Cubed",
    "garnish": "Lemon wedge",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "50ml"
      },
      {
        "name": "Lemon juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Soda",
        "qty": "Top"
      }
    ]
  },
  {
    "id": "treacle",
    "name": "Treacle",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Ron Santiago de Cuba AÃƒÂ±ejo 8yo",
        "qty": "50ml"
      },
      {
        "name": "Apple Juice",
        "qty": "40ml"
      },
      {
        "name": "Lime Juice",
        "qty": "10ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Angostura",
        "qty": "1dash"
      }
    ]
  },
  {
    "id": "tuxedo",
    "name": "Tuxedo",
    "category": "classic",
    "method": "Stir",
    "glass": "Caprice coupe",
    "ice": "No ice",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "45ml"
      },
      {
        "name": "SCHOFIELD'S Prat",
        "qty": "15ml"
      },
      {
        "name": "Maraschino",
        "qty": "5ml"
      },
      {
        "name": "Orange",
        "qty": "2dash"
      },
      {
        "name": "Absinthe",
        "qty": "2dash"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "tommys-margarita",
    "name": "Tommy's Margarita",
    "category": "classic",
    "method": "Shake",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Casamigos Blanco",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Agave Syrup",
        "qty": "20ml"
      }
    ]
  },
  {
    "id": "vieux-carre",
    "name": "Vieux Carre",
    "category": "classic",
    "method": "Stir",
    "glass": "Rocks",
    "ice": "Block",
    "garnish": "Lemon twist",
    "ingredients": [
      {
        "name": "Woodford Rye",
        "qty": "30ml"
      },
      {
        "name": "RÃƒÂ©my Martin VSOP",
        "qty": "30ml"
      },
      {
        "name": "Antica Formula",
        "qty": "30ml"
      },
      {
        "name": "Benedictine",
        "qty": "5ml"
      },
      {
        "name": "Angostura",
        "qty": "2dash"
      },
      {
        "name": "Peychaud's bitters",
        "qty": "2dash"
      }
    ],
    "allergens": "SULPHITES"
  },
  {
    "id": "whiskey-sour",
    "name": "Whiskey Sour",
    "category": "classic",
    "method": "Hard dry shake / shake",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "Maraschino sherry and lemon wedge on the stick",
    "ingredients": [
      {
        "name": "Maker's Mark",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3 pipette"
      }
    ]
  },
  {
    "id": "white-lady",
    "name": "White Lady",
    "category": "classic",
    "method": "Shake",
    "glass": "Standard coupe",
    "ice": "No ice",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Tanqueray LD",
        "qty": "40ml"
      },
      {
        "name": "Cointreau",
        "qty": "20ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "20ml"
      },
      {
        "name": "Miraculous Foamer",
        "qty": "1/3pipette"
      }
    ]
  },
  {
    "id": "white-russian",
    "name": "White Russian",
    "category": "classic",
    "method": "Build",
    "glass": "Rocks",
    "ice": "Cubed",
    "garnish": "No garnish",
    "ingredients": [
      {
        "name": "Ketel One",
        "qty": "35ml"
      },
      {
        "name": "Coffee Liqueur",
        "qty": "35ml"
      },
      {
        "name": "Double Cream",
        "qty": "Float"
      }
    ],
    "allergens": "MILK"
  },
  {
    "id": "sgropino",
    "name": "Sgropino",
    "category": "bombay",
    "method": "Shake, top",
    "glass": "Champagne Coupette",
    "ice": "No ice",
    "garnish": "Lemon zest",
    "ingredients": [
      {
        "name": "Bombay",
        "qty": "30ml"
      },
      {
        "name": "Lemon Sorbet scoop",
        "qty": "1"
      },
      {
        "name": "Lemon juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "5ml"
      },
      {
        "name": "Prosseco",
        "qty": "90ml"
      }
    ]
  },
  {
    "id": "bombay-gt",
    "name": "Bombay G&T",
    "category": "bombay",
    "method": "Build",
    "glass": "Highball",
    "ice": "Ice Cubes",
    "garnish": "Lime wedge",
    "ingredients": [
      {
        "name": "Bombay",
        "qty": "50ml"
      },
      {
        "name": "Fever tree Tonic",
        "qty": "1 (7.5 implies 7.5cl or a small bottle/can, clarify if specific volume needed)"
      }
    ]
  },
  {
    "id": "chestnut-cup",
    "name": "Chestnut cup",
    "category": "bombay",
    "method": "Shake, top",
    "glass": "Savage Highball",
    "ice": "Ice Cubes/Crushed",
    "garnish": "Lime wedge/ straw",
    "ingredients": [
      {
        "name": "Bombay",
        "qty": "35ml"
      },
      {
        "name": "Aperol",
        "qty": "20ml"
      },
      {
        "name": "Lime",
        "qty": "20ml"
      },
      {
        "name": "Orgeat",
        "qty": "15ml"
      },
      {
        "name": "Soda",
        "qty": "60ml"
      }
    ]
  },
  {
    "id": "time-for-tea",
    "name": "Time for Tea",
    "category": "bombay",
    "method": "Wet/dry Shake",
    "glass": "Savage Pony",
    "ice": "no ice",
    "garnish": "Peychauds bitters hearts",
    "ingredients": [
      {
        "name": "Bombay",
        "qty": "50ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "15ml"
      },
      {
        "name": "Earl Grey Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Demerara",
        "qty": "5ml"
      },
      {
        "name": "Foamer",
        "qty": "1 (pipette/dash assumed)"
      },
      {
        "name": "Absinth Spray",
        "qty": "1"
      }
    ]
  },
  {
    "id": "collins-sapphire",
    "name": "Collin's Sapphire",
    "category": "bombay",
    "method": "Shake, top",
    "glass": "Riedell Highball",
    "ice": "Ice Cubes, crushed",
    "garnish": "Mint spring, straw",
    "ingredients": [
      {
        "name": "Bombay",
        "qty": "35ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Mint leaves",
        "qty": "8"
      },
      {
        "name": "Angostura",
        "qty": "2 dashes"
      },
      {
        "name": "Soda",
        "qty": "60ml"
      }
    ]
  },
  {
    "id": "grapefruit-americano1749227062485",
    "name": "Grapefruit Americano",
    "category": "non-alcoholic",
    "method": "Build",
    "glass": "Highball",
    "ice": "Cube",
    "garnish": "Grapefruit wage",
    "ingredients": [
      {
        "name": "Everleaf",
        "qty": "35ml"
      },
      {
        "name": "Cranberry Juice",
        "qty": "35ml"
      },
      {
        "name": "Two Keys Grapefruit soda",
        "qty": "80ml (Top)"
      }
    ],
    "allergens": null
  },
  {
    "id": "cucumber-cooler1749226912604",
    "name": "Cucumber Cooler",
    "category": "non-alcoholic",
    "method": "Build",
    "glass": "Highball",
    "ice": "Cubes",
    "garnish": "Peel of Cucumber, Rosemary Stick",
    "ingredients": [
      {
        "name": "Seedlip Garden 108",
        "qty": "35ml"
      },
      {
        "name": "Elderflower cordial",
        "qty": "15ml"
      },
      {
        "name": "Lemon Juice",
        "qty": "15ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "10ml"
      },
      {
        "name": "Basil",
        "qty": "2pcs"
      },
      {
        "name": "FT Tonic",
        "qty": "Top"
      }
    ],
    "allergens": null
  },
  {
    "id": "fruit-cup1749227293259",
    "name": "Fruit Cup",
    "category": "non-alcoholic",
    "method": "Build",
    "glass": "Wine",
    "ice": "Cubes",
    "garnish": "Dehydrated Apple slice",
    "ingredients": [
      {
        "name": "Dried Mix",
        "qty": "50ml"
      },
      {
        "name": "FT Apricot Soda",
        "qty": "100ml"
      }
    ],
    "allergens": null
  },
  {
    "id": "mojito-na1749227689406",
    "name": "Mojito (N/A)",
    "category": "non-alcoholic",
    "method": "Build",
    "glass": "Highball",
    "ice": "Cubes/Crushed",
    "garnish": "Mint Spring, Straw",
    "ingredients": [
      {
        "name": "Apple Juice",
        "qty": "50ml"
      },
      {
        "name": "Lime Juice",
        "qty": "25ml"
      },
      {
        "name": "Sugar Syrup",
        "qty": "15ml"
      },
      {
        "name": "Mint Leaves",
        "qty": "6pcs"
      }
    ],
    "allergens": null
  }
];