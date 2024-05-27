


const foods =[
  {id: 1 , 
    name:'Pasta Sallader',
    helNamn:'Räksallad, Ost och Skinksallad, Kycklingsallad  (450g)',
    ingred:'Pastasallad, Räkor, Ost och Skinka, Kyckling',
    spec:'Specifikation står på förpackningen',
    img:'/images/Pastaostskinka.jpg',
    gluten:false,
    laktos:false,
    vegan:false,
    kall:true,
    mikro:false,
    price:79

   },
   {id: 2 , 
    name:'Sallader',
    helNamn:'Räksallad, Ost och Skinksallad, Kycklingsallad , Grekisksallad (450g)',
    ingred:'Sallad, Räkor, Ost och Skinka, Kyckling, Grekisk',
    spec:'Specifikation står på förpackningen',
    img:'/images/Raksallad.jpg',
    gluten:false,
    laktos:false,
    vegan:false,
    kall:true,
    mikro:false,
    price:79

   },

  {id: 3 , 
    name:'Oxfilépasta',
    helNamn:'Oxfilépasta med bitar av oxfilé och krämig vitvinssås smaksatt med tryffelolja och chili (400g)',
    ingred:'Oxfile, Pasta, Grädde, Mjölk, Lök',
    spec:'828 kJ/197 kcal, fett 11 g, kolhydrater 16 g, protein 8.9 g',
    img:'/images/oxfile.png',
    gluten:false,
    laktos:false,
    vegan:false,
    kall:false,
    mikro:true,
    price:69

   },

  {id: 4 , 
   name:'Biff Stroganoff',
   helNamn:'Biff Stroganoff med champinjoner och lök. Serverat med potatismos och cornichons (400g)',
   ingred:'Nötkött, Potatismos , Champinjoner, Lök , Grädde, Dijonsenap',
   spec:'584 kJ/140 kcal, fett 9.5 g,kolhydrater 7.1 g, protein 6 g',
   img:'/images/biffstroganoff.jpg',
   gluten:false,
   laktos:false,
   vegan:false,
   kall:false,
   mikro:true,
   price:69
   
  
  },

  {id: 5 ,
   name:'Grillad Flankstek',
   helNamn:'Grillad Flankstek med rostad klyftpotatis, ratatouille och bearnaise (400g)',
   mat:'Flankstek', 
   img:'/images/flankstek.png',
   ingred:'Nötkött, Klyftpotatois, Äggula, Lök, Tomater',
   spec:'627 kJ/148 kcal, fett 8.9 g, kolhydrater 12 g, protein 5.2 g',
   gluten:false,
   laktos:false,
   vegan:false,
   kall:false,
   mikro:true,
   price:69
  
  },
  {id: 6 ,
  name:'Köttfärspaj',
  helNamn:'Paj Med Nötfärs (300g)',
  img:'/images/köttpaj.jpg',
  ingred:'Nötkött, Köttfärssås, Lök, Morötter, Tomatpure',
  spec:'1094 kJ/260 kcal, fett 15 g, kolhydrater 21 g, protein 9.2 g',
  gluten:false,
  laktos:false,
  vegan:false,
  kall:false,
  mikro:true,
  price:69
    },

  {id: 6 ,
   name:'Västerbottensostpaj',
   helNamn:'Paj med västerbottensost (300g)', 
   img:'/images/Vasterbotten.jpg',
   ingred:'Mjölk, Vetemjöl, Ost, Ägg , Margarin',
   spec:'1400 kJ/330 kcal, fett 23 g, kolhydrater 18 g , protein 13.5 g',
   gluten:false,
   laktos:false,
   vegan:false,
   kall:false,
   mikro:true,
   price:69
  },

  {id: 8 ,
   name:'Ost och Skinkpaj', 
   helNamn:'Ost och Skinkpaj med Finsk kvalitets skinka och Goudaost (300g)',
   img:'/images/Ostskinkpaj.jpg',
   ingred:'Skinka, Goudaost, Mjölk, Vetemjöl, Ägg, Margarin',
   spec:'1184 kJ/282 kcal, fett 17, kolhydrater 18, protein 13 g',
   gluten:false,
   laktos:false,
   vegan:false,
   kall:false,
   mikro:true,
   price:69
  },

  {id: 9 ,
  name:'BBQ Kyckling Bacon Panini',
  helNamn:'BBQ Kyckling Bacon Panini har en fyllning med kycklinglårfilé, bacon och BBQ-chillidressing (235g)', 
  img:'/images/bbqkyckling.jpg',
  ingred:'Paninibröd, Vetemjöl, Mjölk, Äggula, Edamerost',
  spec:'1350 KJ/ 320 Kcal, fett 20 g , kolhydrater 25 g , protein 10 g',
  gluten:true,
  laktos:true,
  vegan:false,
  kall:false,
  tillagas:true,
  price:49
  },

  {id: 10 ,
  name:'Kebab Vitlök Panini',
  helNamn:'Kebab Vitlök Panini fylld med kebabflarn och vitlöksdressing (235g) ', 
  img:'/images/kebab.jpg',
  ingred:'Paninibröd, Vetemjöl, Mjölk, Äggula, Nötkött, Lök',
  spec:'1350 KJ/ 320 kcal, fett 10 g , kolhydrater 24 g , protein 10 g',
  gluten:false,
  laktos:true,
  vegan:false,
  kall:false,
  tillagas:true,
  price:49
  },

  {id: 11 ,
  name:'Ost & skinka Panini',
  helNamn:'Ost & skinka Panini innehåller rökt skinka, edamerost och Mr. Panini originaldressing (235g)',
  img:'/images/ostskinka.jpg',
  ingred:'Paninibröd, Vetemjöl, Äggula, Ost, Skinka',
  spec:'1350 KJ/342 kcal, fett 22 g, Kolhydrater 26 g , protein 10 g',
  gluten:false,
  laktos:true,
  vegan:false,
  kall:false,
  tillagas:true,
  price:49
  },

  {id: 12 ,
  name:'Pesto Mozzarella Panini', 
  helNamn:'Pesto Mozzarella Panini är fylld med mozzarellaost, pesto, soltorkade tomater, toppas med en vegetarisk dressing och edamerost(235g)', 
  img:'/images/pesto.jpg',
  ingred:'Paninibröd, Vetemjöl, Äggula, Mosarellaost, Edamerost, Pesto, Vitlök',
  spec:'1350 KJ/ 320 Kcal, fett 20 g, kolhydrater 25 g , protein 10 g',
  gluten:false,
  laktos:false,
  vegan:false,
  kall:false,
  tillagas:true,
  price:49
},
 
{id: 13 ,
  name:'Dricka', 
  helNamn:'Kall dricka/läsk till maten!', 
  img:'/images/cola.png',
  ingred:'Kolsyrad läsk',
  spec:'Dryck',
  gluten:false,
  laktos:false,
  vegan:false,
  kall:true,
  price:19
  
},

{id: 14 ,
  name:'Snacks', 
  helNamn:'Snacks, fyll på med energi!', 
  img:'/images/snacks.png',
  ingred:'Snacks, Bars, Choklad',
  spec:'Innehållsförtecking finns på förpackningen',
  gluten:false,
  laktos:false,
  vegan:false,
  kall:false,
  energi: true,
  price:19
  
}
]


export default foods;