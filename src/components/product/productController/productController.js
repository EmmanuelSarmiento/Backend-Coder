let database = [
  {
    id: 1,
    title: "Quilmes Clasica Sixpack4 73ml",
    description: "Equilibrada, de gran refrescancia y cuerpo balanceado.",
    code: "101267",
    price: 1700,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 2,
    title: "Quilmes Stout Sixpack 473ml",
    description:
      "Cerveza negra, de cuerpo y espuma cremosa, su intenso amargor se compensa con notas de chocolate y café provenientes del golpe de fuego que recibe la malta al momento de ser tostada. Es una opción ideal para maridar con postres dulces, platos fuertes, ahumados, tostados o picantes.",
    code: "101861",
    price: 1700,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 3,
    title: "Quilmes Bock Sixpack 473ml",
    description:
      "Cerveza negra-borravino, robusta y persistente. Sabor acaramelado y tostado amargo, debido a la selección de cebadas malteadas con las que se produce. Marida a la perfección con platos fuertes y reducciones oscuras, con sabores más bien intensos y de cierta complejidad.",
    code: "103364",
    price: 1700,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 4,
    title: "Quilmes 0.0% Sixpack 473ml",
    description:
      "Clara, brillante y con aroma maltoso. Presenta leves notas de lúpulo, un cuerpo liviano que sumando al porcentaje de alcohol, refresca y es placentera a la hora de beberla.",
    code: "106289",
    price: 1700,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 5,
    title: "Quilmes Doble Malta Sixpack 473ml",
    description:
      "Perfectamente equilibrada e intensa, esta cerveza refleja el encuentro entre dos maltas argentinas, Pilsen y Carapils, que nacieron en el mismo suelo y juntas hacen que esta cerveza tenga doble sabor, un cuerpo y color más intenso y una espuma más persistente.",
    code: "109666",
    price: 1700,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 6,
    title: "Quilmes 1890 Sixpack Lata 473ml",
    description:
      "Esta CERVEZAS rubia, de color dorado, cuerpo y sabor intenso, es una combinación especial de variedades de malta. El resultado: una típica Bavarian Pilsener Lager.",
    code: "101672",
    price: 1700,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 7,
    title: "Andes Roja Sixpack 473ml",
    description: "Aroma a suave caramelo y leve lúpulo. color ámbar cobrizo.",
    code: "103232",
    price: 2000,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 8,
    title: "Andes Negra Sixpack 473ml",
    description: "Aroma y sabor a tostado, cuerpo intenso y robusto.",
    code: "103231",
    price: 2000,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 9,
    title: "Andes Rubia Sixpack 473ml",
    description: "Aroma leve a lúpulo, cereal y toque de levadura.",
    code: "103208",
    price: 2000,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 10,
    title: "Andes Ipa Sixpack 473ml",
    description:
      "La Andes Origen IPA Andina es un gustito de amargo intenso con un leve dulzor para equilibrar, notas a cereal, levadura y un toque ácido al final.",
    code: "103831",
    price: 2000,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 11,
    title: "Andes Ipa Roja Sixpack 473ml",
    description:
      "Esta rica cerveza, de receta mendocina, reúne ingredientes de dos de las grandes favoritas de Andes Origen: Roja e Ipa Andina. Los lúpulos traen el amargor y las notas cítricas y frutales, que se quedan dando vueltas en boca, haciendo equilibrio hasta encontrarse en el dulzor de la malta Caramelo.",
    code: "109579",
    price: 2000,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 12,
    title: "Patagonia Kuné Sixpack 410ml",
    description:
      "Color dorado bronce brillante de leve amargor y cuerpo medio. Aroma intenso.",
    code: "105097",
    price: 3100,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 13,
    title: "Patagonia IPA Sixpack 410ml",
    description:
      "Muy tomable y refrescante, de amargor marcado otorgado por una combinación de lúpulos patagónicos. El agregado de sauco y miel en frío balancean el amargor.",
    code: "109866",
    price: 3100,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 14,
    title: "Patagonia Amber Lager Sixpack 410ml",
    description:
      "Suave sabor a caramelo, elaborada con una combinación de 4 maltas, que le dan su característico color ámbar y sabor maltoso, dejando un sutil dulzor en boca.",
    code: "109575",
    price: 3100,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 15,
    title: "Patagonia Bohemian Sixpack 410ml",
    description:
      "Color dorado brillante, gran cuerpo y un amargor equilibrado.",
    code: "109505",
    price: 3100,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 16,
    title: "Heineken 0.0% Sixpack 355ml",
    description:
      "Heineken 0.0% es una cerveza sin alcohol y todo el sabor. Elaborada con pura malta, ingredientes 100% naturales y la exclusiva Levadura A de Heineken",
    code: "100828",
    price: 2800,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 17,
    title: "Heineken Sixpack 330ml",
    description: "Cuerpo ligero. Sabor algo amargo pero fresco.",
    code: "100827",
    price: 2200,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
  {
    id: 18,
    title: "Heineken Sixpack 473ml",
    description:
      "Se elabora con la misma receta desde 1873, usando los ingredientes naturales más puros, un excepcional estándar de calidad y sin ningún aditivo ni conservante. Es pura malta, elaborada a partir de un mosto cuyo extracto primitivo proviene exclusivamente de cebada malteada. Su sabor distintivo y único está dado por el uso exclusivo de la Levadura A, especialmente desarrollada por un discípulo de Louis Pasteur, resguardada en Holanda, desde donde se distribuye para garantizar que el sabor característico de Heineken sea igual en todo el mundo.",
    code: "100829",
    price: 2200,
    status: true,
    stock: 1,
    category: "Cerveza Industrial",
  },
];

class Product {
  constructor() {
    this.database = [
      // productos existentes...
    ];
    this.nextId = this.database.length + 1; // Obtén el próximo ID disponible
  }

  get(req, res) {
    res.json(database);
  }

  findById(req, res) {
    const productId = parseInt(req.params.id);
    const product = database.find((item) => item.id === productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ Response: "Producto no encontrado" });
    }
  }

  create(req, res) {
    res.send("todo bien en product controller create");
  }
}
module.exports = new Product();
