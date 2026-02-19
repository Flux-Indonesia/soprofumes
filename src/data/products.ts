export interface ScentProfile {
  top: string[];
  heart: string[];
  base: string[];
  radar: {
    sweet: number;
    woody: number;
    floral: number;
    spicy: number;
    fresh: number;
  };
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  scentProfile: ScentProfile;
  moods: string[];
  longevity: number;
  sillage: number;
  isDrop?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Reef 33",
    price: 75,
    image: "/soproFumesPics/Reef 33 Perfume 100ml/pic1.webp",
    description:
      "An Oriental Woody fragrance that balances feminine and masculine notes with elegance. Features rich Indian Saffron and deep Agarwood.",
    category: "Oud",
    longevity: 90,
    sillage: 85,
    moods: ["Elegant", "Timeless", "Oriental"],
    scentProfile: {
      top: ["Indian Saffron"],
      heart: ["Rosemary"],
      base: ["Agarwood (Oud)"],
      radar: { sweet: 40, woody: 90, floral: 30, spicy: 70, fresh: 50 },
    },
  },
  {
    id: 2,
    name: "Reef 33 White",
    price: 70,
    image: "/soproFumesPics/Reef 33 White Perfume 100ml/pic1.webp",
    description:
      "A lighter, clearer interpretation of the classic Oud, featuring bright accents of red berries atop a saffron and oud core.",
    category: "Oud",
    longevity: 85,
    sillage: 80,
    moods: ["Bright", "Modern", "Sophisticated"],
    scentProfile: {
      top: ["Red Berries"],
      heart: ["Saffron"],
      base: ["Oud"],
      radar: { sweet: 60, woody: 80, floral: 40, spicy: 60, fresh: 50 },
    },
  },
  {
    id: 3,
    name: "Reef 19",
    price: 70,
    image: "/soproFumesPics/Reef 19 perfume 100ml/pic1.webp",
    description:
      "A delicate and refined floral musk fragrance. Lily of the Valley and Jasmine dance over a clean White Musk base.",
    category: "Floral",
    longevity: 75,
    sillage: 70,
    moods: ["Clean", "Graceful", "Soft"],
    scentProfile: {
      top: ["Lily of the Valley"],
      heart: ["Jasmine"],
      base: ["White Musk"],
      radar: { sweet: 50, woody: 20, floral: 95, spicy: 10, fresh: 80 },
    },
  },
  {
    id: 4,
    name: "Lady Reef",
    price: 85,
    image: "/soproFumesPics/Lady Reef 100ml/pic1.webp",
    description:
      "A vibrant blend of fruity and floral notes. Juice blackcurrant and mandarin meet a heart of jasmine and iris.",
    category: "Floral",
    longevity: 80,
    sillage: 75,
    moods: ["Vibrant", "Feminine", "Joyful"],
    scentProfile: {
      top: ["Blackcurrant", "Mandarin"],
      heart: ["Jasmine", "Iris"],
      base: ["White Musk"],
      radar: { sweet: 70, woody: 20, floral: 90, spicy: 20, fresh: 85 },
    },
  },
  {
    id: 5,
    name: "Summer Yellow",
    price: 60,
    image: "/soproFumesPics/Summer Yellow perfume 100ml/pic1.webp",
    description:
      "A Floral Fruity Gourmand fragrance that captures the essence of summer with Orange Blossom and Vanilla.",
    category: "Floral",
    longevity: 70,
    sillage: 65,
    moods: ["Summery", "Refreshing", "Sweet"],
    scentProfile: {
      top: ["Orange Blossom"],
      heart: ["Black Currant"],
      base: ["Vanilla"],
      radar: { sweet: 85, woody: 10, floral: 80, spicy: 20, fresh: 75 },
    },
  },
  {
    id: 6,
    name: "Arab Obaya",
    price: 60,
    image: "/soproFumesPics/Arab Obaya Perfume 100ml/pic1.webp",
    description:
      "A masterful blend of Arab heritage and French sophistication. Pineapple freshness meets regal Oud and Leather.",
    category: "Oriental",
    longevity: 88,
    sillage: 82,
    moods: ["Regal", "Mysterious", "Chivalrous"],
    scentProfile: {
      top: ["Pineapple"],
      heart: ["Leather"],
      base: ["Oud"],
      radar: { sweet: 50, woody: 85, floral: 20, spicy: 60, fresh: 60 },
    },
  },
  {
    id: 7,
    name: "Amethyst Khozam",
    price: 85,
    image: "/soproFumesPics/AMETHYST KHOZAM/pic1.jpg",
    description:
      "Evokes the sensation of cold dew on lavender flowers. A refreshing and lively unisex fragrance.",
    category: "Floral",
    longevity: 80,
    sillage: 75,
    moods: ["Peaceful", "Lively", "Aromatic"],
    scentProfile: {
      top: ["Lavender", "Floral Notes"],
      heart: ["Leather", "Mint"],
      base: ["Bergamot", "Lemon"],
      radar: { sweet: 40, woody: 30, floral: 90, spicy: 30, fresh: 90 },
    },
  },
  {
    id: 8,
    name: "Greek Tobacco",
    price: 32,
    image: "/soproFumesPics/Greek Tobacco 200 Ml/pic1.webp",
    description:
      "A masterpiece combining floral notes with luxurious Greek tobacco. Versatile and sophisticated.",
    category: "Oriental",
    longevity: 85,
    sillage: 80,
    moods: ["Luxurious", "Sophisticated", "Balanced"],
    scentProfile: {
      top: ["Narcissus", "Lychee"],
      heart: ["Apricot", "Tobacco"],
      base: ["Musk", "Peony"],
      radar: { sweet: 50, woody: 60, floral: 60, spicy: 50, fresh: 40 },
    },
  },
  {
    id: 9,
    name: "Osma Noir",
    price: 60,
    image: "/soproFumesPics/Osma Noir Perfume 100ml/pic1.webp",
    description:
      "Bold elegance and mystery. A unisex fragrance that captures the quiet power of the night with Saffron and Oud.",
    category: "Oud",
    longevity: 95,
    sillage: 88,
    moods: ["Bold", "Mysterious", "Elegant"],
    scentProfile: {
      top: ["Indian Saffron"],
      heart: ["Rosemary"],
      base: ["Oud Wood"],
      radar: { sweet: 20, woody: 95, floral: 20, spicy: 80, fresh: 30 },
    },
  },
  {
    id: 10,
    name: "Osma Rouge",
    price: 78,
    image: "/soproFumesPics/Osma Rouge Perfume 100ml/pic1.webp",
    description:
      "Captivating and warm. A passionate blend of Cinnamon and Saffron over a woody base.",
    category: "Oriental",
    longevity: 82,
    sillage: 78,
    moods: ["Passionate", "Warm", "Alluring"],
    scentProfile: {
      top: ["Cinnamon", "Saffron"],
      heart: ["Rose", "Dry Amber"],
      base: ["Cedarwood", "Sandalwood"],
      radar: { sweet: 50, woody: 80, floral: 40, spicy: 90, fresh: 20 },
    },
  },
  {
    id: 11,
    name: "Amber A",
    price: 40,
    image: "/soproFumesPics/Amber A Perfume 75ml/pic1.webp",
    description:
      "Deep and complex. A comforting sweet-amber aroma with refined leather nuances.",
    category: "Oriental",
    longevity: 85,
    sillage: 80,
    moods: ["Comforting", "Luxurious", "Deep"],
    scentProfile: {
      top: ["Amber"],
      heart: ["Earthy Notes"],
      base: ["Leather", "Vanilla"],
      radar: { sweet: 70, woody: 50, floral: 20, spicy: 40, fresh: 10 },
    },
  },
  {
    id: 12,
    name: "Cotton C",
    price: 40,
    image: "/soproFumesPics/Cotton C Perfume 75ml/pic1.webp",
    description:
      "Soft yet luxurious. A feel of expensive fabric, blending fruity freshness with a rich woody depth.",
    category: "Floral",
    longevity: 75,
    sillage: 70,
    moods: ["Soft", "Modern", "Sensual"],
    scentProfile: {
      top: ["Red Berries"],
      heart: ["Turkish Rose"],
      base: ["Oud", "Sandalwood"],
      radar: { sweet: 60, woody: 60, floral: 80, spicy: 20, fresh: 70 },
    },
  },
  {
    id: 13,
    name: "Black Diamond",
    price: 45,
    image: "/soproFumesPics/Black Diamond - Incense 200 ML/pic.webp",
    description:
      "Dark, smoky, and intensely luxurious. Blends fresh aquatic accents with deep incense and oud.",
    category: "Woody",
    longevity: 88,
    sillage: 82,
    moods: ["Dark", "Confident", "Opulent"],
    scentProfile: {
      top: ["Aquatic Notes", "Black Currant"],
      heart: ["Incense", "Vanilla"],
      base: ["Smoke", "Oud"],
      radar: { sweet: 30, woody: 90, floral: 10, spicy: 70, fresh: 40 },
    },
  },
  {
    id: 14,
    name: "Pink Diamond Sakura",
    price: 45,
    image: "/soproFumesPics/Pink Diamond - Sakura 150 ML/pic.webp",
    description:
      "A celebration of timeless femininity. Delicate peonies and orange blossom meet a seductive amber base.",
    category: "Floral",
    longevity: 75,
    sillage: 70,
    moods: ["Feminine", "Radiant", "Timeless"],
    scentProfile: {
      top: ["Peony", "Mandarin"],
      heart: ["Cherry Blossom", "Rose"],
      base: ["White Musk", "Amber"],
      radar: { sweet: 75, woody: 20, floral: 95, spicy: 10, fresh: 80 },
    },
  },
  {
    id: 15,
    name: "Capri",
    price: 90,
    image: "/soproFumesPics/Capri 200 Ml/Capri 200 Ml.jpg",
    description:
      "Unique and fresh. Inspired by the sea breeze with bursts of lemon, marine notes, and blue ginger.",
    category: "Fresh",
    longevity: 75,
    sillage: 72,
    moods: ["Aquatic", "Invigorating", "Exotic"],
    scentProfile: {
      top: ["Sorrento Lemon", "Marine Notes"],
      heart: ["Blue Ginger", "Apple"],
      base: ["Incense", "Vetiver"],
      radar: { sweet: 30, woody: 40, floral: 20, spicy: 50, fresh: 95 },
    },
  },
  {
    id: 16,
    name: "Tango",
    price: 115,
    image: "/soproFumesPics/Tango 200 Ml/Tango 200 Ml.webp",
    description:
      "A Fruity Woody Gourmand fragrance. Evokes emotion and freedom with Mango, Caramel, and Amber.",
    category: "Woody",
    longevity: 82,
    sillage: 78,
    moods: ["Gourmand", "Free", "Emotional"],
    scentProfile: {
      top: ["Mango", "Pomelo"],
      heart: ["Caramel", "Jasmine"],
      base: ["Amber", "Cedarwood"],
      radar: { sweet: 90, woody: 60, floral: 40, spicy: 30, fresh: 60 },
    },
  },
  {
    id: 17,
    name: "Salvia",
    price: 160,
    image: "/soproFumesPics/Salvia 90 Ml/Salvia 90 Ml.webp",
    description:
      "Dark and captivating. Evokes passion fruit amidst tree branches with Patchouli and Olibanum.",
    category: "Woody",
    longevity: 85,
    sillage: 80,
    moods: ["Contemplative", "Luxurious", "Alluring"],
    scentProfile: {
      top: ["Patchouli", "Rose"],
      heart: ["Praline", "Davana"],
      base: ["Wood Notes", "Olibanum"],
      radar: { sweet: 50, woody: 90, floral: 40, spicy: 40, fresh: 30 },
    },
  },
  {
    id: 18,
    name: "Siena Valley",
    price: 175,
    image: "/soproFumesPics/Siena Valley 200Ml/Siena Valley 200Ml.webp",
    description:
      "Rustic elegance and natural grandeur. Sun-drenched florals meet the richness of Leather.",
    category: "Oriental",
    longevity: 88,
    sillage: 85,
    moods: ["Rustic", "Grand", "Indulgent"],
    scentProfile: {
      top: ["Bergamot", "Raspberry"],
      heart: ["Caramel", "Osmanthus"],
      base: ["Leather", "Patchouli"],
      radar: { sweet: 60, woody: 50, floral: 50, spicy: 40, fresh: 40 },
    },
  },
  {
    id: 19,
    name: "Helen Legacy",
    price: 115,
    image: "/soproFumesPics/Helen Legacy 200 Ml/Helen Legacy 200 Ml.webp",
    description:
      "Sophisticated and luminous. Blends fresh Sage and Apple with a warm base of Amber and Patchouli.",
    category: "Woody",
    longevity: 80,
    sillage: 75,
    moods: ["Sophisticated", "Luminous", "Charismatic"],
    scentProfile: {
      top: ["Sage", "Apple"],
      heart: ["Jasmine", "Sandalwood"],
      base: ["Amber", "Patchouli"],
      radar: { sweet: 40, woody: 80, floral: 40, spicy: 30, fresh: 70 },
    },
  },
  {
    id: 20,
    name: "Malayan Lthr",
    price: 65,
    image: "/soproFumesPics/MALAYAN LTHR/pic.webp",
    description:
      "Luxurious and exotic. Inspired by the Malayan tiger, featuring Red Berries, Saffron, and bold Leather.",
    category: "Leather",
    longevity: 85,
    sillage: 82,
    moods: ["Fierce", "Mysterious", "Vibrant"],
    scentProfile: {
      top: ["Raspberry", "Lychee"],
      heart: ["Saffron", "Rose"],
      base: ["Leather", "Oud"],
      radar: { sweet: 50, woody: 60, floral: 40, spicy: 80, fresh: 40 },
    },
  },
  {
    id: 21,
    name: "Safari Breeze",
    price: 32,
    image: "/soproFumesPics/French Avenue/Safari-Breeze-Extrait-De-Parfum-100ml-French-Avenue-180954317.webp",
    description:
      "A refreshing and vibrant unisex fragrance. Evokes the feeling of open landscapes and cool tropical air with blackcurrant and coconut.",
    category: "Fresh",
    longevity: 80,
    sillage: 75,
    moods: ["Adventurous", "Bright", "Tropical"],
    scentProfile: {
      top: ["Blackcurrant", "Coconut"],
      heart: ["Spearmint", "Jasmine"],
      base: ["Oakmoss", "Vetiver"],
      radar: { sweet: 60, woody: 40, floral: 50, spicy: 30, fresh: 90 },
    },
  },
  {
    id: 22,
    name: "Chaos Extrait",
    price: 32,
    image: "/soproFumesPics/French Avenue unisex/Chaos-Extrait-Perfume-100ml-EDP-French-Avenue-175525175.webp",
    description:
      "Sophisticated and striking. A chaotic beauty of fruity cherry and red fruits blending with elegant iris and deep leather.",
    category: "Oriental",
    longevity: 85,
    sillage: 82,
    moods: ["Bold", "Chaotic", "Sensual"],
    scentProfile: {
      top: ["Cherry", "Red Fruits"],
      heart: ["Iris"],
      base: ["Vanilla", "Leather"],
      radar: { sweet: 70, woody: 30, floral: 40, spicy: 40, fresh: 20 },
    },
  },
  {
    id: 23,
    name: "Shaghaf Amber",
    price: 50,
    image: "/soproFumesPics/SHAGHAF AMBER INFUSION/SAP_SHAGAF-Amber-Infusion_720x 75ml.webp",
    description:
      "An amber masterpiece. A golden infusion of warmth and depth where luminous amber meets spicy nuances and a creamy heart.",
    category: "Oriental",
    longevity: 90,
    sillage: 88,
    moods: ["Warm", "Luminous", "Sophisticated"],
    scentProfile: {
      top: ["Amber", "Ginger"],
      heart: ["Vanilla", "Apple"],
      base: ["Patchouli", "Leather"],
      radar: { sweet: 60, woody: 50, floral: 20, spicy: 80, fresh: 30 },
    },
  },
  {
    id: 24,
    name: "Turathi Electric",
    price: 30,
    image: "/soproFumesPics/Turathi Electric Afnan for women and men/dark-375x500.108244.2x.avif",
    description:
      "Vibrant and energetic. Captures the essence of an endless summer with radiant freshness of citrus and pear.",
    category: "Fresh",
    longevity: 78,
    sillage: 75,
    moods: ["Vibrant", "Energetic", "Modern"],
    scentProfile: {
      top: ["Pear", "Mandarin"],
      heart: ["Orange Blossom", "Cedar"],
      base: ["Musk", "Amber"],
      radar: { sweet: 50, woody: 30, floral: 40, spicy: 20, fresh: 95 },
    },
  },
  {
    id: 25,
    name: "Vanilla 01",
    price: 50,
    image: "/soproFumesPics/VANILLA 01 50ml/vanilla-bottle_720x.webp",
    description:
      "A rich and sensual oriental vanilla fragrance. Creamy vanilla meets exotic flowers, cappuccino, and warm spices.",
    category: "Oriental",
    longevity: 85,
    sillage: 82,
    moods: ["Sensual", "Indulgent", "Creamy"],
    scentProfile: {
      top: ["Pink Pepper", "Coconut"],
      heart: ["Cappuccino", "Caramel"],
      base: ["Vanilla", "Tonka Bean"],
      radar: { sweet: 90, woody: 20, floral: 40, spicy: 30, fresh: 20 },
    },
  },
];

export const categories = [
  "All",
  "Oud",
  "Floral",
  "Woody",
  "Oriental",
  "Fresh",
  "Leather",
];
