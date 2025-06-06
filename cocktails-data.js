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
        "name": "RÃƒÆ’Ã‚Â©my Martin VSOP",
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
        "name": "Ron Santiago de Cuba AÃƒÆ’Ã‚Â±ejo 8yo",
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
        "name": "RÃƒÆ’Ã‚Â©my Martin VSOP",
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
        "name": "RÃƒÆ’Ã‚Â©my Martin VSOP",
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
        "name": "RÃƒÆ’Ã‚Â©my Martin VSOP",
        "qty": "25ml"
      },
      {
        "name": "Champagne",
        "qty": "